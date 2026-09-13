/* =============================================================================
   ART FRESH CHICKEN CORP. — HRMS  ·  qr.js
   QR code generator — hindi na kailangang galawin.
   ============================================================================= */
"use strict";

/* ---------------------------------------------------------------------------
   2. QR CODE ENGINE
   Byte mode, error-correction level M, versions 1-6 (enough for invite URLs).
   Produces a real, scannable QR matrix — no external library needed.
   --------------------------------------------------------------------------- */
const QR = (function(){
  // --- Galois field GF(256), primitive polynomial 0x11D ---
  const EXP = new Uint8Array(512), LOG = new Uint8Array(256);
  (function initGF(){
    let x = 1;
    for (let i = 0; i < 255; i++){ EXP[i] = x; LOG[x] = i; x <<= 1; if (x & 0x100) x ^= 0x11D; }
    for (let i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
  })();
  const mul = (a,b) => (a === 0 || b === 0) ? 0 : EXP[LOG[a] + LOG[b]];

  // version -> [totalCodewords, ecPerBlock, numBlocks] for EC level M
  const SPEC = {
    1:[26,10,1], 2:[44,16,1], 3:[70,26,1], 4:[100,18,2], 5:[134,24,2], 6:[172,16,4]
  };

  function generatorPoly(degree){
    let poly = [1];
    for (let i = 0; i < degree; i++){
      const next = new Array(poly.length + 1).fill(0);
      for (let j = 0; j < poly.length; j++){
        next[j] ^= poly[j];
        next[j+1] ^= mul(poly[j], EXP[i]);
      }
      poly = next;
    }
    return poly;
  }
  function ecCodewords(data, degree){
    const gen = generatorPoly(degree);
    const res = new Array(degree).fill(0);
    for (const b of data){
      const factor = b ^ res.shift();
      res.push(0);
      for (let i = 0; i < degree; i++) res[i] ^= mul(gen[i+1], factor);
    }
    return res;
  }

  function pickVersion(len){
    for (let v = 1; v <= 6; v++){
      const [total, ecb, blocks] = SPEC[v];
      const dataCW = total - ecb * blocks;
      if (len + 2 <= dataCW) return v;   // 12-bit header rounds to 2 codewords
    }
    return null;
  }

  function buildCodewords(text, version){
    const [total, ecb, blocks] = SPEC[version];
    const dataCW = total - ecb * blocks;
    const bytes = [];
    for (const ch of unescape(encodeURIComponent(text))) bytes.push(ch.charCodeAt(0));

    // bit stream: mode(0100) + length(8 bits) + payload
    const bits = [];
    const push = (val, n) => { for (let i = n - 1; i >= 0; i--) bits.push((val >>> i) & 1); };
    push(4, 4); push(bytes.length, 8);
    bytes.forEach(b => push(b, 8));
    for (let i = 0; i < 4 && bits.length < dataCW * 8; i++) bits.push(0);   // terminator
    while (bits.length % 8) bits.push(0);
    const data = [];
    for (let i = 0; i < bits.length; i += 8){
      let b = 0; for (let j = 0; j < 8; j++) b = (b << 1) | bits[i+j];
      data.push(b);
    }
    const PAD = [0xEC, 0x11];
    for (let i = 0; data.length < dataCW; i++) data.push(PAD[i % 2]);

    // split into equal blocks, compute EC, interleave
    const per = dataCW / blocks;
    const dBlocks = [], eBlocks = [];
    for (let i = 0; i < blocks; i++){
      const chunk = data.slice(i * per, (i + 1) * per);
      dBlocks.push(chunk);
      eBlocks.push(ecCodewords(chunk, ecb));
    }
    const out = [];
    for (let i = 0; i < per; i++)  for (const b of dBlocks) out.push(b[i]);
    for (let i = 0; i < ecb; i++)  for (const b of eBlocks) out.push(b[i]);
    return out;
  }

  const MASKS = [
    (x,y)=>(x+y)%2===0,
    (x,y)=>y%2===0,
    (x,y)=>x%3===0,
    (x,y)=>(x+y)%3===0,
    (x,y)=>(Math.floor(x/3)+Math.floor(y/2))%2===0,
    (x,y)=>(x*y)%2+(x*y)%3===0,
    (x,y)=>((x*y)%2+(x*y)%3)%2===0,
    (x,y)=>((x+y)%2+(x*y)%3)%2===0
  ];

  function penalty(m, size){
    let p = 0, dark = 0;
    // rule 1 — runs of five or more
    for (let i = 0; i < size; i++){
      let runR = 1, runC = 1;
      for (let j = 1; j < size; j++){
        if (m[i][j] === m[i][j-1]) runR++; else { if (runR >= 5) p += 3 + runR - 5; runR = 1; }
        if (m[j][i] === m[j-1][i]) runC++; else { if (runC >= 5) p += 3 + runC - 5; runC = 1; }
      }
      if (runR >= 5) p += 3 + runR - 5;
      if (runC >= 5) p += 3 + runC - 5;
    }
    // rule 2 — 2x2 blocks
    for (let y = 0; y < size - 1; y++)
      for (let x = 0; x < size - 1; x++)
        if (m[y][x] === m[y][x+1] && m[y][x] === m[y+1][x] && m[y][x] === m[y+1][x+1]) p += 3;
    // rule 3 — finder-like patterns
    const A = [1,0,1,1,1,0,1,0,0,0,0], B = [0,0,0,0,1,0,1,1,1,0,1];
    const match = (arr, i, pat) => pat.every((v,k)=>arr[i+k] === v);
    for (let i = 0; i < size; i++){
      const row = m[i], col = m.map(r => r[i]);
      for (let j = 0; j + 11 <= size; j++){
        if (match(row,j,A) || match(row,j,B)) p += 40;
        if (match(col,j,A) || match(col,j,B)) p += 40;
      }
    }
    // rule 4 — dark module balance
    for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) if (m[y][x]) dark++;
    p += Math.floor(Math.abs(dark * 100 / (size * size) - 50) / 5) * 10;
    return p;
  }

  /** Returns { size, modules:boolean[][], version } */
  function encode(text){
    const version = pickVersion(unescape(encodeURIComponent(text)).length);
    if (!version) throw new Error('QR: content too long for this prototype encoder');
    const size = version * 4 + 17;
    const m = Array.from({length:size}, () => new Array(size).fill(false));
    const fn = Array.from({length:size}, () => new Array(size).fill(false));
    const set = (x,y,v) => { m[y][x] = v; fn[y][x] = true; };

    // finder patterns + separators
    const finder = (cx,cy) => {
      for (let dy = -1; dy <= 7; dy++) for (let dx = -1; dx <= 7; dx++){
        const x = cx + dx, y = cy + dy;
        if (x < 0 || y < 0 || x >= size || y >= size) continue;
        const d = Math.max(Math.abs(dx - 3), Math.abs(dy - 3));
        set(x, y, d !== 2 && d <= 3);
      }
    };
    finder(0,0); finder(size-7,0); finder(0,size-7);

    // timing patterns
    for (let i = 8; i < size - 8; i++){ set(i, 6, i % 2 === 0); set(6, i, i % 2 === 0); }

    // alignment pattern (single, versions 2-6)
    if (version >= 2){
      const c = version * 4 + 10;
      for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++)
        set(c + dx, c + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
    }

    // reserve format-info area + dark module
    for (let i = 0; i < 9; i++){ if (!fn[i][8]) set(8,i,false); if (!fn[8][i]) set(i,8,false); }
    for (let i = 0; i < 8; i++){ set(size-1-i, 8, false); set(8, size-1-i, false); }
    set(8, size-8, true);

    // place data with zig-zag walk
    const cw = buildCodewords(text, version);
    let bit = 0;
    const totalBits = cw.length * 8;
    for (let right = size - 1; right >= 1; right -= 2){
      if (right === 6) right = 5;
      for (let vert = 0; vert < size; vert++){
        for (let j = 0; j < 2; j++){
          const x = right - j;
          const upward = ((right + 1) & 2) === 0;
          const y = upward ? size - 1 - vert : vert;
          if (!fn[y][x]){
            let v = false;
            if (bit < totalBits) v = ((cw[bit >>> 3] >>> (7 - (bit & 7))) & 1) === 1;
            m[y][x] = v; bit++;
          }
        }
      }
    }

    // choose the best mask
    let best = 0, bestScore = Infinity, bestGrid = null;
    for (let msk = 0; msk < 8; msk++){
      const t = m.map(r => r.slice());
      for (let y = 0; y < size; y++) for (let x = 0; x < size; x++)
        if (!fn[y][x] && MASKS[msk](x,y)) t[y][x] = !t[y][x];
      applyFormat(t, size, msk);
      const s = penalty(t, size);
      if (s < bestScore){ bestScore = s; best = msk; bestGrid = t; }
    }
    return { size, modules: bestGrid, version, mask: best };
  }

  function applyFormat(grid, size, mask){
    const data = (0 << 3) | mask;           // 0 = EC level M
    let rem = data;
    for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
    const bits = ((data << 10) | rem) ^ 0x5412;
    const b = i => ((bits >>> i) & 1) === 1;
    for (let i = 0; i <= 5; i++) grid[i][8] = b(i);
    grid[7][8] = b(6); grid[8][8] = b(7); grid[8][7] = b(8);
    for (let i = 9; i < 15; i++) grid[8][14-i] = b(i);
    for (let i = 0; i < 8; i++) grid[8][size-1-i] = b(i);
    for (let i = 8; i < 15; i++) grid[size-15+i][8] = b(i);
    grid[size-8][8] = true;
  }

  /** SVG string for a QR code. quiet = quiet-zone modules. */
  function svg(text, px, quiet){
    const { size, modules } = encode(text);
    const q = quiet === undefined ? 3 : quiet;
    const dim = size + q * 2;
    let path = '';
    for (let y = 0; y < size; y++){
      let x = 0;
      while (x < size){
        if (modules[y][x]){
          let run = 1;
          while (x + run < size && modules[y][x+run]) run++;
          path += `M${x+q} ${y+q}h${run}v1h-${run}z`;
          x += run;
        } else x++;
      }
    }
    return `<svg viewBox="0 0 ${dim} ${dim}" width="${px||172}" height="${px||172}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Application QR code">`
      + `<rect width="${dim}" height="${dim}" fill="#ffffff"/><path d="${path}" fill="#16181a"/></svg>`;
  }
  return { encode, svg };
})();
