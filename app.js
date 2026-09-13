/* =============================================================================
   ART FRESH CHICKEN CORP. — HRMS  ·  app.js
   Icons, shared components, lahat ng screens, router, at start-up.
   ============================================================================= */
"use strict";

/* ---------------------------------------------------------------------------
   1. ICONS  (1.5px stroke, 16px grid)
   --------------------------------------------------------------------------- */
const ICONS = {
  grid:'<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
  menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',
  userplus:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M19 8v6M22 11h-6"/>',
  users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>',
  chart:'<path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/>',
  award:'<circle cx="12" cy="9" r="6"/><path d="M9 14.5 8 22l4-2.5L16 22l-1-7.5"/>',
  book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5V21h16"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.4 8.4-8 9.5C7.4 20.4 4 17 4 12V6z"/>',
  wallet:'<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M16 14h2"/>',
  folder:'<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  layers:'<path d="M12 3 3 8l9 5 9-5z"/><path d="m3 13 9 5 9-5M3 18l9 5 9-5"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  chevron:'<path d="m9 18 6-6-6-6"/>',
  chevdown:'<path d="m6 9 6 6 6-6"/>',
  close:'<path d="M18 6 6 18M6 6l12 12"/>',
  check:'<path d="m20 6-11 11-5-5"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  minus:'<path d="M5 12h14"/>',
  qr:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM19 19h2v2h-2M14 19h2M19 14h2"/>',
  link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
  copy:'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
  filter:'<path d="M22 3H2l8 9.5V19l4 2v-8.5z"/>',
  dots:'<circle cx="12" cy="5" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="12" cy="19" r="1.4"/>',
  file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
  mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/>',
  phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  pin:'<path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11"/><circle cx="12" cy="10" r="2.5"/>',
  briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  school:'<path d="M22 9 12 4 2 9l10 5z"/><path d="M6 11.5V17c0 1.5 3 3 6 3s6-1.5 6-3v-5.5"/>',
  logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>',
  history:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/>',
  alert:'<path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',
  checkcircle:'<circle cx="12" cy="12" r="9"/><path d="m8.5 12.5 2.5 2.5 4.5-5"/>',
  xcircle:'<circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/>',
  pause:'<circle cx="12" cy="12" r="9"/><path d="M10 9v6M14 9v6"/>',
  send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',
  eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7"/><circle cx="12" cy="12" r="3"/>',
  edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  trash:'<path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>',
  refresh:'<path d="M21 12a9 9 0 1 1-2.6-6.4L21 8"/><path d="M21 3v5h-5"/>',
  arrowright:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowup:'<path d="M12 19V5M6 11l6-6 6 6"/>',
  arrowdown:'<path d="M12 5v14M6 13l6 6 6-6"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8"/>',
  building:'<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h.01M15 16h.01"/>',
  truck:'<path d="M14 17V5H2v12h2"/><path d="M14 9h4l3 3v5h-2"/><circle cx="7" cy="17.5" r="2"/><circle cx="17" cy="17.5" r="2"/>',
  star:'<path d="m12 3 2.7 5.6 6.3.9-4.5 4.3 1 6.2L12 17l-5.5 3 1-6.2L3 9.5l6.3-.9z"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>',
  lock:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  unlock:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 7.5-2"/>',
  inbox:'<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.4 5.1 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.4-6.9A2 2 0 0 0 16.8 4H7.2a2 2 0 0 0-1.8 1.1"/>',
  flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
  idcard:'<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="9" cy="11" r="2.2"/><path d="M5.5 16c.6-1.4 2-2 3.5-2s2.9.6 3.5 2M15 10h4M15 13.5h4"/>',
};
function icon(name,size,cls){
  const d=ICONS[name]||ICONS.info;
  return `<svg class="ico ${cls||''}" width="${size||16}" height="${size||16}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
}


/* ---------------------------------------------------------------------------
   10. UI PRIMITIVES
   --------------------------------------------------------------------------- */
const $  = (s, r) => (r||document).querySelector(s);
const $$ = (s, r) => Array.from((r||document).querySelectorAll(s));
const esc = s => String(s === null || s === undefined ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function toast(title, msg, kind){
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span class="tico ${kind==='warn'?'warn':''}">${icon(kind === 'warn' ? 'alert' : 'checkcircle', 16)}</span>
                  <div><b>${esc(title)}</b>${msg ? `<span>${esc(msg)}</span>` : ''}</div>`;
  $('#toasts').appendChild(el);
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 200); }, 3600);
}

/* ---------- tooltips (data-tip="...") ---------- */
(function initTooltips(){
  const tip = document.getElementById('tip');
  if (!tip) return;
  const moveTip = e => {
    const r = tip.getBoundingClientRect();
    let x = e.clientX + 14, y = e.clientY + 16;
    if (x + r.width > innerWidth - 8) x = e.clientX - r.width - 12;
    if (y + r.height > innerHeight - 8) y = e.clientY - r.height - 12;
    tip.style.left = x + 'px'; tip.style.top = y + 'px';
  };
  document.addEventListener('mouseover', e => {
    const t = e.target.closest('[data-tip]'); if (!t) return;
    tip.innerHTML = t.dataset.tipHtml ? t.dataset.tip : esc(t.dataset.tip);
    tip.classList.add('show'); moveTip(e);
  });
  document.addEventListener('mousemove', e => { if (tip.classList.contains('show')) moveTip(e); });
  document.addEventListener('mouseout', e => { if (e.target.closest('[data-tip]')) tip.classList.remove('show'); });
})();

let drawerStack = [];
function openDrawer(html, opts){
  opts = opts || {};
  const d = $('#drawer');
  d.className = 'drawer' + (opts.wide ? ' wide' : '');
  d.innerHTML = html;
  requestAnimationFrame(() => { d.classList.add('show'); $('#scrim').classList.add('show'); });
  document.body.style.overflow = 'hidden';
  drawerStack.push(opts.id || 'drawer');
}
function closeDrawer(){
  $('#drawer').classList.remove('show');
  if (!$('#modal').classList.contains('show')) $('#scrim').classList.remove('show');
  document.body.style.overflow = '';
  drawerStack = [];
}
function openModal(html, opts){
  opts = opts || {};
  const m = $('#modal');
  m.className = 'modal' + (opts.lg ? ' lg' : '');
  m.innerHTML = html;
  requestAnimationFrame(() => { m.classList.add('show'); $('#scrim').classList.add('show'); });
}
function closeModal(){
  $('#modal').classList.remove('show');
  if (!$('#drawer').classList.contains('show')) $('#scrim').classList.remove('show');
}
function openPop(anchor, html, width){
  const p = $('#pop');
  p.style.width = (width || 300) + 'px';
  p.innerHTML = html;
  p.style.top = ''; p.style.bottom = '';
  p.classList.add('show');
  const r = anchor.getBoundingClientRect();
  const w = width || 300;
  const spaceBelow = window.innerHeight - r.bottom - 10;
  if (p.offsetHeight > spaceBelow && r.top > p.offsetHeight){
    p.style.bottom = (window.innerHeight - r.top + 6) + 'px';
  } else {
    p.style.top = (r.bottom + 6) + 'px';
  }
  p.style.left = Math.max(8, Math.min(window.innerWidth - w - 8, r.right - w)) + 'px';
  setTimeout(() => document.addEventListener('click', closePopOnce, { once:true }), 0);
}
function closePopOnce(e){ if (!$('#pop').contains(e.target)) closePop(); else setTimeout(()=>document.addEventListener('click', closePopOnce, {once:true}),0); }
function closePop(){ $('#pop').classList.remove('show'); }

/* ---------- confirm dialog ---------- */
function confirmDialog(title, body, confirmLabel, onConfirm, danger){
  openModal(`
    <div class="modal-head">
      <div style="flex:1 1 auto">
        <div class="card-title">${esc(title)}</div>
        <div class="card-sub" style="margin-top:4px;line-height:1.5">${body}</div>
      </div>
    </div>
    <div class="modal-foot">
      <button class="btn" data-close-modal>Cancel</button>
      <button class="btn ${danger ? 'danger' : 'primary'}" id="confirmYes">${esc(confirmLabel)}</button>
    </div>`);
  $('#confirmYes').onclick = () => { closeModal(); onConfirm(); };
}

/* ---------- generic data table ----------
   cols: [{ key, label, w, align, sort:true, render(row) }]                     */
function DataTable(opts){
  const state = { page:1, per:opts.per || 12, sort:opts.sort || null, dir:opts.dir || 'asc', q:'', filters:{} };
  const id = 'tbl_' + Math.random().toString(36).slice(2,8);

  function filtered(){
    let rows = opts.rows.slice();
    if (state.q){
      const q = state.q.toLowerCase();
      rows = rows.filter(r => (opts.search ? opts.search(r) : Object.values(r).join(' ')).toLowerCase().includes(q));
    }
    Object.entries(state.filters).forEach(([k,v]) => {
      if (v) rows = rows.filter(r => String(opts.filterValue ? opts.filterValue(r,k) : r[k]) === v);
    });
    if (state.sort){
      const col = opts.cols.find(c => c.key === state.sort);
      rows.sort((a,b) => {
        const va = col.sortValue ? col.sortValue(a) : a[col.key];
        const vb = col.sortValue ? col.sortValue(b) : b[col.key];
        if (va === vb) return 0;
        return ((va > vb) ? 1 : -1) * (state.dir === 'asc' ? 1 : -1);
      });
    }
    return rows;
  }
  function render(){
    const rows = filtered();
    const pages = Math.max(1, Math.ceil(rows.length / state.per));
    state.page = Math.min(state.page, pages);
    const slice = rows.slice((state.page-1)*state.per, state.page*state.per);
    const el = document.getElementById(id);
    if (!el) return;
    const body = el.querySelector('tbody');
    body.innerHTML = slice.length ? slice.map(r => `
      <tr class="${opts.onRow ? 'clickable' : ''} ${r.isNew ? 'flash' : ''}" data-row="${esc(opts.rowId ? opts.rowId(r) : '')}">
        ${opts.cols.map(c => `<td class="${c.align === 'right' ? 'right' : ''} ${c.cls||''}" ${c.w?`style="width:${c.w}"`:''}>${c.render ? c.render(r) : esc(r[c.key])}</td>`).join('')}
      </tr>`).join('') : `<tr><td colspan="${opts.cols.length}">
        <div class="empty">${icon(opts.emptyIcon || 'inbox', 22)}<b>${esc(opts.emptyTitle || 'Nothing here yet')}</b>
        <p>${esc(opts.emptyText || 'Records will appear here once they are created.')}</p>
        ${opts.emptyAction || ''}</div></td></tr>`;
    const foot = el.querySelector('.table-foot');
    if (foot){
      foot.querySelector('.count').textContent = rows.length === opts.rows.length
        ? `${rows.length} record${rows.length===1?'':'s'}`
        : `${rows.length} of ${opts.rows.length} records`;
      foot.querySelector('.pager').innerHTML = pagerHTML(state.page, pages);
    }
    if (opts.onRow) body.querySelectorAll('tr[data-row]').forEach(tr => {
      tr.onclick = e => { if (e.target.closest('.rowactions button')) return; opts.onRow(tr.dataset.row); };
    });
    if (opts.afterRender) opts.afterRender(el);
  }
  function pagerHTML(page, pages){
    if (pages <= 1) return '';
    let out = `<button data-pg="${page-1}" ${page===1?'disabled':''}>‹</button>`;
    const nums = [];
    for (let i = 1; i <= pages; i++) if (i === 1 || i === pages || Math.abs(i - page) <= 1) nums.push(i);
    let prev = 0;
    nums.forEach(n => { if (n - prev > 1) out += `<span class="dim" style="padding:0 3px">…</span>`; out += `<button data-pg="${n}" class="${n===page?'on':''}">${n}</button>`; prev = n; });
    out += `<button data-pg="${page+1}" ${page===pages?'disabled':''}>›</button>`;
    return out;
  }
  function html(){
    const filterCtl = (opts.filters||[]).map(f => `
      <select class="select" data-filter="${f.key}">
        <option value="">${esc(f.label)}</option>
        ${f.options.map(o => `<option value="${esc(o.value !== undefined ? o.value : o)}">${esc(o.label !== undefined ? o.label : o)}</option>`).join('')}
      </select>`).join('');
    return `
    <div class="table-wrap" id="${id}">
      ${opts.hideToolbar ? '' : `<div class="table-toolbar">
        <div class="search-box">${icon('search',14)}<input type="text" placeholder="${esc(opts.searchPlaceholder||'Search')}" data-q></div>
        ${filterCtl}
        ${(opts.filters||[]).length ? `<button class="btn ghost sm" data-clear>Clear</button>` : ''}
        <div style="flex:1 1 auto"></div>
        ${opts.toolbarRight || ''}
      </div>`}
      <div class="table-scroll ${opts.short ? 'short':''}">
        <table class="data">
          <thead><tr>${opts.cols.map(c => `<th class="${c.sort!==false?'sortable':''} ${c.align==='right'?'right':''}" data-sort="${c.key}" ${c.w?`style="width:${c.w}"`:''}>${esc(c.label)}${c.sort!==false?`<span class="sortglyph">↕</span>`:''}</th>`).join('')}</tr></thead>
          <tbody></tbody>
        </table>
      </div>
      ${opts.hideFoot ? '' : `<div class="table-foot"><span class="count"></span><div class="pager"></div></div>`}
    </div>`;
  }
  function mount(){
    const el = document.getElementById(id);
    if (!el) return;
    const q = el.querySelector('[data-q]');
    if (q) q.oninput = e => { state.q = e.target.value; state.page = 1; render(); };
    el.querySelectorAll('[data-filter]').forEach(sel => {
      sel.onchange = e => {
        state.filters[sel.dataset.filter] = e.target.value;
        sel.classList.toggle('on', !!e.target.value);
        state.page = 1; render();
      };
    });
    const clear = el.querySelector('[data-clear]');
    if (clear) clear.onclick = () => {
      state.filters = {}; state.q = '';
      el.querySelectorAll('[data-filter]').forEach(s => { s.value = ''; s.classList.remove('on'); });
      if (q) q.value = '';
      state.page = 1; render();
    };
    el.querySelectorAll('th[data-sort]').forEach(th => {
      if (!th.classList.contains('sortable')) return;
      th.onclick = () => {
        const k = th.dataset.sort;
        if (state.sort === k) state.dir = state.dir === 'asc' ? 'desc' : 'asc';
        else { state.sort = k; state.dir = 'asc'; }
        el.querySelectorAll('th').forEach(x => x.classList.remove('sorted'));
        th.classList.add('sorted');
        render();
      };
    });
    el.addEventListener('click', e => {
      const b = e.target.closest('[data-pg]');
      if (b && !b.disabled){ state.page = Number(b.dataset.pg); render(); el.querySelector('.table-scroll').scrollTop = 0; }
    });
    render();
  }
  return { html, mount, id, setRows(r){ opts.rows = r; render(); } };
}

/* ---------- charts ---------- */
function barChart(data, opts){
  opts = opts || {};
  const w = opts.w || 640, h = opts.h || 190, pad = { l:34, r:8, t:10, b:26 };
  const max = opts.max || Math.max(...data.map(d => d.value), 1);
  const bw = (w - pad.l - pad.r) / data.length;
  const ticks = Math.min(4, Math.max(1, max));
  let g = '';
  for (let i = 0; i <= ticks; i++){
    const y = pad.t + (h - pad.t - pad.b) * (i / ticks);
    const v = Math.round(max - max * (i / ticks));
    g += `<line class="grid-line" x1="${pad.l}" y1="${y}" x2="${w-pad.r}" y2="${y}"/>
          <text class="axis-text" x="${pad.l-6}" y="${y+3}" text-anchor="end">${v}</text>`;
  }
  const bars = data.map((d,i) => {
    const bh = (h - pad.t - pad.b) * (d.value / max);
    const x = pad.l + i * bw + bw * .18, y = h - pad.b - bh;
    return `<rect class="bar grow-bar ${d.alt?'alt':''}" x="${x}" y="${y}" width="${bw*.64}" height="${Math.max(bh,1)}" rx="2" style="animation-delay:${i*28}ms">
              <title>${esc(d.label)}: ${d.value}</title></rect>
            <text class="axis-text" x="${pad.l + i*bw + bw/2}" y="${h-8}" text-anchor="middle">${esc(d.short || d.label)}</text>`;
  }).join('');
  return `<svg class="chart" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" style="height:${h}px">${g}${bars}</svg>`;
}
function lineChart(series, labels, opts){
  opts = opts || {};
  const w = opts.w || 640, h = opts.h || 190, pad = { l:34, r:10, t:12, b:26 };
  const all = series.flatMap(s => s.values);
  const max = Math.max(...all, 1), min = opts.zero === false ? Math.min(...all) : 0;
  const X = i => pad.l + (w - pad.l - pad.r) * (i / Math.max(1, labels.length - 1));
  const Y = v => pad.t + (h - pad.t - pad.b) * (1 - (v - min) / Math.max(1, max - min));
  let g = '';
  for (let i = 0; i <= 4; i++){
    const y = pad.t + (h - pad.t - pad.b) * (i/4);
    g += `<line class="grid-line" x1="${pad.l}" y1="${y}" x2="${w-pad.r}" y2="${y}"/>
          <text class="axis-text" x="${pad.l-6}" y="${y+3}" text-anchor="end">${Math.round(max - (max-min)*(i/4))}</text>`;
  }
  const lines = series.map((s,si) => {
    const dpath = s.values.map((v,i) => `${i?'L':'M'}${X(i).toFixed(1)} ${Y(v).toFixed(1)}`).join(' ');
    const pts = s.values.map((v,i) => `<circle class="pt" cx="${X(i).toFixed(1)}" cy="${Y(v).toFixed(1)}" r="2.6"><title>${esc(labels[i])}: ${v}</title></circle>`).join('');
    return `<path class="line draw-line ${si?'alt':''}" d="${dpath}" style="animation-delay:${si*140}ms"/>${si?'':pts}`;
  }).join('');
  const xl = labels.map((l,i) => (labels.length > 8 && i % 2) ? '' : `<text class="axis-text" x="${X(i)}" y="${h-8}" text-anchor="middle">${esc(l)}</text>`).join('');
  return `<svg class="chart" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" style="height:${h}px">${g}${lines}${xl}</svg>`;
}
function hbars(rows, opts){
  opts = opts || {};
  const max = Math.max(...rows.map(r => r.value), 1);
  return `<div>${rows.map(r => `
    <div class="hbar">
      <span class="lab" data-tip="${esc(r.label)}">${esc(r.label)}</span>
      <span class="track"><span class="fill ${r.mut?'mut':''}" style="width:${Math.max(2, r.value/max*100)}%"></span></span>
      <span class="val">${opts.fmt ? opts.fmt(r) : r.value}</span>
    </div>`).join('')}</div>`;
}
function ringChart(valuePct, size, label){
  const r = (size/2) - 5, c = 2 * Math.PI * r;
  return `<div style="position:relative;width:${size}px;height:${size}px">
    <svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle class="bg" cx="${size/2}" cy="${size/2}" r="${r}" stroke-width="6"/>
      <circle class="fg" cx="${size/2}" cy="${size/2}" r="${r}" stroke-width="6" stroke-dasharray="${c}" stroke-dashoffset="${c - c*valuePct/100}"/>
    </svg>
    <div style="position:absolute;inset:0;display:grid;place-items:center;text-align:center">
      <div><div class="num" style="font-size:15px;font-weight:620;letter-spacing:-.02em">${valuePct}%</div>
      ${label?`<div style="font-size:10.5px;color:var(--ink-4);margin-top:-2px">${esc(label)}</div>`:''}</div>
    </div></div>`;
}
function funnel(rows){
  const max = Math.max(...rows.map(r => r.value), 1);
  return `<div class="funnel">${rows.map((r,i) => {
    const prev = i ? rows[i-1].value : null;
    const conv = prev ? Math.round(r.value / prev * 100) : 100;
    return `<div class="funnel-row">
      <span class="funnel-label">${esc(r.label)}</span>
      <span class="funnel-bar"><span class="funnel-fill s${Math.min(4, Math.floor(i/2)+1)}" style="width:${Math.max(6, r.value/max*100)}%">${r.value.toLocaleString()}</span></span>
      <span class="funnel-meta">${i ? `<b>${conv}%</b> from ${esc(rows[i-1].label.toLowerCase())}` : `${Math.round(r.value/max*100)}% of invited`}</span>
    </div>`;
  }).join('')}</div>`;
}
function sparkline(values){
  const w = 78, h = 26, max = Math.max(...values,1), min = Math.min(...values);
  const X = i => (w) * (i/(values.length-1));
  const Y = v => 2 + (h-4) * (1 - (v-min)/Math.max(1,max-min));
  const p = values.map((v,i)=>`${i?'L':'M'}${X(i).toFixed(1)} ${Y(v).toFixed(1)}`).join(' ');
  return `<svg class="spark" viewBox="0 0 ${w} ${h}"><path class="fillp" d="${p} L${w} ${h} L0 ${h} Z"/><path d="${p}"/></svg>`;
}
function progressBar(done, total, cls){
  const p = pct(done,total);
  return `<div class="meterline"><div class="meter ${cls||''}"><i style="width:${p}%"></i></div><span class="pct">${done}/${total}</span></div>`;
}

/* ---------------------------------------------------------------------------
   11. NAVIGATION + ROUTER
   --------------------------------------------------------------------------- */
const NAV = [
  { section:'Overview' },
  { label:'Dashboard', icon:'grid', route:'#/dashboard' },
  { section:'Talent acquisition' },
  { label:'Recruitment', icon:'userplus', children:[
    { label:'Pipeline overview', route:'#/recruitment' },
    { label:'Invitations & QR', route:'#/recruitment/invitations', badge:() => AppState.invitations.filter(i => i.status === 'Unused').length },
    { label:'Applicant tracking', route:'#/recruitment/ats' },
    { label:'Screening', route:'#/recruitment/screening', badge:() => AppState.applicants.filter(a => a.stage === 'Submitted' || a.stage === 'Screening').length },
    { label:'Interviews', route:'#/recruitment/interviews' },
    { label:'Assessments', route:'#/recruitment/assessments' },
    { label:'Final evaluation', route:'#/recruitment/evaluation' },
    { label:'Job offers', route:'#/recruitment/offers' },
    { label:'Pre-employment', route:'#/recruitment/preemployment' },
  ]},
  { section:'Workforce' },
  { label:'Employees', icon:'users', children:[
    { label:'Employee master', route:'#/employees' },
    { label:'Onboarding', route:'#/onboarding', badge:() => AppState.onboarding.filter(o => o.stepIdx < o.steps.length).length },
    { label:'Career & movement', route:'#/movement' },
    { label:'Offboarding', route:'#/offboarding' },
  ]},
  { label:'Attendance', icon:'clock', children:[
    { label:'Daily attendance', route:'#/attendance' },
    { label:'Shift schedule', route:'#/shifts' },
    { label:'Corrections', route:'#/attendance/corrections' },
  ]},
  { label:'Leave', icon:'calendar', route:'#/leave', badge:() => AppState.leave.filter(l => l.status === 'For Approval' || l.status === 'Pending').length },
  { label:'Performance', icon:'target', route:'#/performance' },
  { label:'Training', icon:'book', route:'#/training' },
  { label:'Employee relations', icon:'shield', route:'#/relations', badge:() => AppState.cases.filter(c => c.status === 'Open' || c.status === 'Under Investigation').length },
  { label:'Compensation', icon:'wallet', route:'#/compensation' },
  { label:'Documents', icon:'folder', route:'#/documents' },
  { section:'Planning' },
  { label:'Workforce planning', icon:'building', route:'#/workforce' },
  { label:'Reports & analytics', icon:'chart', route:'#/reports' },
  { section:'System' },
  { label:'Administration', icon:'settings', children:[
    { label:'Master data', route:'#/admin/master' },
    { label:'Users & roles', route:'#/admin/roles' },
    { label:'Audit trail', route:'#/admin/audit' },
  ]},
];

const openGroups = new Set(['Recruitment']);
function renderNav(){
  const cur = location.hash || '#/dashboard';
  const nav = $('#nav');
  nav.innerHTML = NAV.map(item => {
    if (item.section) return `<div class="nav-section">${esc(item.section)}</div>`;
    if (item.children){
      const isOpen = openGroups.has(item.label) || item.children.some(c => cur.startsWith(c.route));
      if (isOpen) openGroups.add(item.label);
      const activeChild = item.children.some(c => cur === c.route || cur.startsWith(c.route + '/'));
      return `<button class="nav-item ${activeChild && !isOpen ? 'active':''}" data-group="${esc(item.label)}" aria-expanded="${isOpen}">
          ${icon(item.icon,16)}<span>${esc(item.label)}</span>${icon('chevron',13,'chev')}
        </button>
        <div class="nav-sub ${isOpen?'open':''}"><div>
          ${item.children.map(c => `<button class="nav-item ${cur === c.route || cur.startsWith(c.route+'/') ? 'active':''}" data-route="${c.route}">
            <span>${esc(c.label)}</span>${c.badge && c.badge() ? `<span class="nav-badge">${c.badge()}</span>` : ''}</button>`).join('')}
        </div></div>`;
    }
    return `<button class="nav-item ${cur === item.route || cur.startsWith(item.route+'/') ? 'active':''}" data-route="${item.route}">
      ${icon(item.icon,16)}<span>${esc(item.label)}</span>${item.badge && item.badge() ? `<span class="nav-badge">${item.badge()}</span>` : ''}</button>`;
  }).join('');
  nav.querySelectorAll('[data-route]').forEach(b => b.onclick = () => { go(b.dataset.route); $('#sidebar').classList.remove('open'); });
  nav.querySelectorAll('[data-group]').forEach(b => b.onclick = () => {
    const g = b.dataset.group;
    openGroups.has(g) ? openGroups.delete(g) : openGroups.add(g);
    renderNav();
  });
}
function renderNotifBadge(){
  const n = AppState.notifications.filter(x => !x.read).length;
  const btn = $('#notifBtn');
  btn.innerHTML = icon('bell',17) + (n ? `<span class="notif-dot">${n}</span>` : '');
}
function go(route){ if (location.hash === route) { router(); } else location.hash = route; }

const CRUMB_MAP = {
  '#/dashboard':['Dashboard'],
  '#/recruitment':['Recruitment','Pipeline overview'],
  '#/recruitment/invitations':['Recruitment','Invitations & QR'],
  '#/recruitment/ats':['Recruitment','Applicant tracking'],
  '#/recruitment/screening':['Recruitment','Screening'],
  '#/recruitment/interviews':['Recruitment','Interviews'],
  '#/recruitment/assessments':['Recruitment','Assessments'],
  '#/recruitment/evaluation':['Recruitment','Final evaluation'],
  '#/recruitment/offers':['Recruitment','Job offers'],
  '#/recruitment/preemployment':['Recruitment','Pre-employment'],
  '#/employees':['Employees','Employee master'],
  '#/onboarding':['Employees','Onboarding'],
  '#/movement':['Employees','Career & movement'],
  '#/offboarding':['Employees','Offboarding'],
  '#/attendance':['Attendance','Daily attendance'],
  '#/shifts':['Attendance','Shift schedule'],
  '#/attendance/corrections':['Attendance','Corrections'],
  '#/leave':['Leave management'],
  '#/performance':['Performance'],
  '#/training':['Training & development'],
  '#/relations':['Employee relations'],
  '#/compensation':['Compensation & benefits'],
  '#/documents':['Document centre'],
  '#/workforce':['Workforce planning'],
  '#/reports':['Reports & analytics'],
  '#/admin/master':['Administration','Master data'],
  '#/admin/roles':['Administration','Users & roles'],
  '#/admin/audit':['Administration','Audit trail'],
};
function renderCrumbs(extra, baseOverride){
  const base = baseOverride || CRUMB_MAP[location.hash] || ['Dashboard'];
  const parts = extra ? base.concat(extra) : base;
  $('#crumbs').innerHTML = [`<button data-home>${COMPANY.short}</button>`]
    .concat(parts.map((p,i) => `<span class="sep">/</span><span class="${i===parts.length-1?'cur':''}">${esc(p)}</span>`)).join('');
  const home = $('#crumbs [data-home]'); if (home) home.onclick = () => go('#/dashboard');
}

/* page scaffold */
function page(title, sub, actions, body){
  return `<div class="page-head">
      <div style="min-width:0">
        <h1 class="page-title">${esc(title)}</h1>
        ${sub ? `<div class="page-sub">${sub}</div>` : ''}
      </div>
      ${actions ? `<div class="page-actions">${actions}</div>` : ''}
    </div>${body}`;
}
function metricStrip(items){
  return `<div class="metrics">${items.map(m => `
    <div class="metric ${m.route?'clickable':''}" ${m.route?`data-goto="${m.route}"`:''}>
      <div class="metric-label">${esc(m.label)}</div>
      <div class="metric-value">${m.value}${m.unit?`<small> ${esc(m.unit)}</small>`:''}</div>
      ${m.note ? `<div class="metric-delta ${m.dir||''}">${m.dir==='up'?icon('arrowup',12):m.dir==='down'?icon('arrowdown',12):''}${esc(m.note)}</div>` : ''}
    </div>`).join('')}</div>`;
}
function card(title, sub, right, body, foot){
  return `<section class="card">
    ${title ? `<div class="card-head">
      <div><div class="card-title">${esc(title)}</div>${sub?`<div class="card-sub">${esc(sub)}</div>`:''}</div>
      <div class="spacer"></div>${right||''}</div>` : ''}
    <div class="card-body">${body}</div>
    ${foot ? `<div class="card-foot">${foot}</div>` : ''}
  </section>`;
}
function personCell(name, sub, color){
  return `<div class="person"><span class="avatar" style="background:${color||avatarColor(name)}">${initials(name)}</span>
    <span class="cellstack"><b>${esc(name)}</b>${sub?`<span>${esc(sub)}</span>`:''}</span></div>`;
}
function kv(pairs){
  return `<dl class="kv">${pairs.filter(Boolean).map(([k,v]) => `<dt>${esc(k)}</dt><dd>${v === undefined || v === null || v === '' ? '<span class="dim">—</span>' : v}</dd>`).join('')}</dl>`;
}

/* ---------------------------------------------------------------------------
   12. VIEW — HR DASHBOARD
   --------------------------------------------------------------------------- */
const YTD_FUNNEL = [
  { label:'Invited', value:1250 }, { label:'Started', value:1080 }, { label:'Submitted', value:920 },
  { label:'Shortlisted', value:320 }, { label:'Interviewed', value:180 }, { label:'Selected', value:72 },
  { label:'Hired', value:61 },
];
/** Active headcount as it stood on a given date. */
function headcountAsOf(dateStr){
  return AppState.employees.filter(e =>
    s2d(e.hired) <= s2d(dateStr) && (!e.separatedOn || s2d(e.separatedOn) > s2d(dateStr))).length;
}
/** Last n calendar months, ending with the current one. */
function recentMonths(n){
  const out = [];
  for (let i = n - 1; i >= 0; i--){
    const d = new Date(TODAY.getFullYear(), TODAY.getMonth() - i, 1);
    out.push({ label:MONTHS[d.getMonth()], key:`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`,
      end:d2s(new Date(d.getFullYear(), d.getMonth() + 1, 0)) });
  }
  return out;
}
const hiresIn = key => AppState.employees.filter(e => e.hired.slice(0,7) === key).length;
const exitsIn = key => AppState.employees.filter(e => e.separatedOn && e.separatedOn.slice(0,7) === key).length;

function deptCounts(){
  return DEPARTMENTS.map(d => ({
    code:d.code, label:d.name,
    value: activeEmployees().filter(e => e.dept === d.code).length,
    authorized:d.authorized,
  })).sort((a,b) => b.value - a.value);
}
function hrTasks(){
  const t = [];
  const forScreening = AppState.applicants.filter(a => a.stage === 'Submitted').length;
  const interviewsToday = AppState.applicants.flatMap(a => a.interviews.filter(i => i.date === d2s(TODAY) && i.status === 'Scheduled')).length;
  const leaveApproval = AppState.leave.filter(l => l.status === 'For Approval' || l.status === 'Pending').length;
  const docsExpiring = allDocuments().filter(d => d.status === 'Expiring Soon').length;
  const probEvals = AppState.performance.filter(p => p.type === 'Probationary Evaluation' && p.status !== 'Completed').length;
  const reqsPending = AppState.applicants.filter(a => a.stage === 'Pre-Employment').length;
  const onboarding = AppState.onboarding.filter(o => o.stepIdx < o.steps.length).length;
  if (forScreening) t.push({ n:forScreening, text:`application${forScreening>1?'s':''} awaiting screening`, route:'#/recruitment/screening', icon:'inbox' });
  if (interviewsToday) t.push({ n:interviewsToday, text:`interview${interviewsToday>1?'s':''} scheduled today`, route:'#/recruitment/interviews', icon:'calendar' });
  if (leaveApproval) t.push({ n:leaveApproval, text:`leave request${leaveApproval>1?'s':''} for approval`, route:'#/leave', icon:'calendar' });
  if (docsExpiring) t.push({ n:docsExpiring, text:'documents expiring within 45 days', route:'#/documents', icon:'folder' });
  if (probEvals) t.push({ n:probEvals, text:`probationary employee${probEvals>1?'s':''} due for evaluation`, route:'#/performance', icon:'target' });
  if (reqsPending) t.push({ n:reqsPending, text:`applicant${reqsPending>1?'s':''} completing pre-employment requirements`, route:'#/recruitment/preemployment', icon:'file' });
  if (onboarding) t.push({ n:onboarding, text:`new hire${onboarding>1?'s':''} still in onboarding`, route:'#/onboarding', icon:'userplus' });
  return t;
}
function viewDashboard(){
  const emps = activeEmployees();
  const newHires = emps.filter(e => daysBetween(e.hired, d2s(TODAY)) <= 30).length;
  const openPositions = DEPARTMENTS.reduce((s,d) => s + Math.max(0, d.authorized - emps.filter(e => e.dept === d.code).length), 0);
  const activeApps = AppState.applicants.filter(a => !['Hired','Rejected','Withdrawn'].includes(a.stage)).length;
  const upcomingIv = AppState.applicants.flatMap(a => a.interviews.filter(i => i.status === 'Scheduled')).length;
  const pendingLeave = AppState.leave.filter(l => ['For Approval','Pending'].includes(l.status)).length;
  const att = attendanceSummary(d2s(TODAY));
  const expiring = allDocuments().filter(d => d.status === 'Expiring Soon').length;
  const dc = deptCounts();
  const pipeline = ['Submitted','Screening','Shortlisted','Interview','Assessment','Final Evaluation','Selected','Job Offer','Pre-Employment']
    .map(s => ({ label:s, value:AppState.applicants.filter(a => a.stage === s).length }));

  const attendanceRate = pct(att.Present + att.Late, att.total - att['Rest Day'] - att['On Leave']);
  const months = recentMonths(7);
  const monthLabels = months.map(m => m.label);
  const hiresTrend = months.map(m => hiresIn(m.key));
  const exitsTrend = months.map(m => exitsIn(m.key));

  const body = `
  ${metricStrip([
    { label:'Total employees', value:emps.length, note:`${AppState.employees.length - emps.length} separated on file`, route:'#/employees' },
    { label:'New hires (30 days)', value:newHires, note:`${AppState.employees.filter(e => e.separatedOn && daysBetween(e.separatedOn, d2s(TODAY)) <= 30).length} separations in the same period`, route:'#/onboarding' },
    { label:'Open positions', value:openPositions, note:'against authorised headcount', route:'#/workforce' },
    { label:'Active applicants', value:activeApps, note:`${AppState.applicants.filter(a=>a.stage==='Submitted').length} awaiting screening`, route:'#/recruitment/ats' },
    { label:'Upcoming interviews', value:upcomingIv, note:'next 7 days', route:'#/recruitment/interviews' },
    { label:'Leave for approval', value:pendingLeave, note:'oldest filed 3 days ago', route:'#/leave' },
    { label:'Attendance today', value:attendanceRate + '%', note:`${att.Present + att.Late} of ${att.total - att['Rest Day']} on duty`, route:'#/attendance' },
    { label:'Expiring documents', value:expiring, note:'within 45 days', route:'#/documents' },
  ])}

  <div class="grid g-2-1" style="margin-top:14px">
    ${card('Workforce overview','Active headcount by department', `<button class="btn sm" data-goto="#/workforce">Workforce planning</button>`,
      hbars(dc.map(d => ({ label:d.label, value:d.value })), { fmt:r => `${r.value}` })
    )}
    ${card('Attendance today', fmtDate(d2s(TODAY),'dow'), '', `
      <div class="row" style="gap:16px;align-items:flex-start">
        ${ringChart(attendanceRate, 92, 'on duty')}
        <div style="flex:1 1 auto">
          ${hbars([
            { label:'Present', value:att.Present },
            { label:'Late', value:att.Late },
            { label:'Undertime', value:att.Undertime },
            { label:'Absent', value:att.Absent },
            { label:'On leave', value:att['On Leave'], mut:true },
            { label:'Rest day', value:att['Rest Day'], mut:true },
          ])}
        </div>
      </div>`, `<span class="muted">${Math.round(att.ot/60)} overtime hours logged</span><div style="flex:1 1 auto"></div><button class="btn sm" data-goto="#/attendance">Open attendance</button>`)}
  </div>

  <div class="grid g-2-1" style="margin-top:14px">
    ${card('Recruitment pipeline','Applicants currently at each stage', `<button class="btn sm" data-goto="#/recruitment">Open recruitment</button>`,
      `<div style="margin-bottom:6px">${barChart(pipeline.map(p => ({ label:p.label, short:p.label.split(' ')[0], value:p.value })), { h:180 })}</div>
       <div class="divider"></div>
       <div class="subhead">Year to date</div>
       ${funnel(YTD_FUNNEL)}`)}
    ${card('HR tasks','What needs attention today','', `
      <div>${hrTasks().map(t => `
        <button class="checklist-item" style="width:100%;text-align:left" data-goto="${t.route}">
          <span class="doc-ico">${icon(t.icon,14)}</span>
          <span class="ci-body"><span class="ci-title"><b class="num">${t.n}</b> ${esc(t.text)}</span></span>
          ${icon('chevron',14,'dim')}
        </button>`).join('')}</div>`)}
  </div>

  <div class="grid g2" style="margin-top:14px">
    ${card('Hiring and exits','Rolling 7 months','', `
      <div class="row" style="gap:14px;margin-bottom:6px">
        <span class="chip"><span class="dot" style="background:var(--accent)"></span>New hires</span>
        <span class="chip"><span class="dot" style="background:#b0b6b2"></span>Separations</span>
      </div>
      ${lineChart([{ values:hiresTrend },{ values:exitsTrend }], monthLabels, { h:180 })}`)}
    ${card('Recent activity','Latest actions across HR', `<button class="btn sm" data-goto="#/admin/audit">Audit trail</button>`,
      `<div>${AppState.audit.slice(0,7).map(a => `
        <div class="note-item">
          <div class="note-head">
            <span class="avatar" style="width:20px;height:20px;font-size:9px;background:${avatarColor(a.user)}">${initials(a.user)}</span>
            <b style="color:var(--ink);font-weight:550">${esc(a.user)}</b>
            <span class="dim">${esc(a.module)}</span>
            <span style="margin-left:auto" class="dim num">${esc(a.at.split(' ')[1])}</span>
          </div>
          <div class="note-body">${esc(a.action)} · <span class="num muted">${esc(a.record)}</span>${a.detail?` — <span class="muted">${esc(a.detail)}</span>`:''}</div>
        </div>`).join('')}</div>`)}
  </div>`;

  return `<div class="page-head">
      <div style="min-width:0">
        <h1 class="page-title">${esc(dashboardGreeting())} <span class="greet-moon-wrap">
          <span class="greet-moon" id="greetMoon" role="button" tabindex="0" data-tip="Click me">${greetingEmoji()}</span>
          <span class="moon-cloud" id="moonCloud"><span id="moonCloudText"></span><span class="moon-cloud-tail"></span></span>
        </span></h1>
      </div>
      <div class="page-actions">
        <button class="btn" data-action="new-invitation">${icon('qr',15)} New invitation</button>
        <button class="btn primary" data-goto="#/recruitment/ats">${icon('users',15)} Applicant tracking</button>
      </div>
    </div>${body}`;
}
function dashboardGreeting(){
  const h = new Date().getHours();
  const part = h < 12 ? 'morning' : h < 18 ? 'afternoon' : 'evening';
  const first = ((AppState.currentUser && AppState.currentUser.name) || '').trim().split(' ')[0] || 'there';
  return `HAPI ${part}, ${first}`;
}
function greetingEmoji(){
  const h = new Date().getHours();
  return h < 18 ? '🌞' : '🌛';
}

/* ---------------------------------------------------------------------------
   13. VIEW — RECRUITMENT OVERVIEW
   --------------------------------------------------------------------------- */
const stageCount = s => AppState.applicants.filter(a => a.stage === s).length;
function viewRecruitment(){
  const A = AppState.applicants;
  const live = ['Submitted','Screening','Shortlisted','Interview','Assessment','Final Evaluation','Selected','Job Offer','Pre-Employment'];
  const byPosition = {};
  A.forEach(a => { byPosition[a.position] = byPosition[a.position] || { total:0, active:0, hired:0 };
    byPosition[a.position].total++;
    if (live.includes(a.stage)) byPosition[a.position].active++;
    if (a.stage === 'Hired') byPosition[a.position].hired++; });
  const byRecruiter = {};
  A.forEach(a => { byRecruiter[a.recruiter] = (byRecruiter[a.recruiter] || 0) + (live.includes(a.stage) ? 1 : 0); });

  const currentFunnel = [
    { label:'Invited', value:AppState.invitations.length },
    { label:'Started', value:AppState.invitations.filter(i => ['Opened','Submitted'].includes(i.status)).length },
    { label:'Submitted', value:AppState.invitations.filter(i => i.status === 'Submitted').length },
    { label:'Shortlisted', value:A.filter(a => STAGE_ORDER(a.stage) >= STAGE_ORDER('Shortlisted') && !TERMINAL.includes(a.stage)).length },
    { label:'Interviewed', value:A.filter(a => a.interviews.some(i => i.status === 'Completed')).length },
    { label:'Selected', value:A.filter(a => STAGE_ORDER(a.stage) >= STAGE_ORDER('Selected') && !TERMINAL.includes(a.stage)).length },
    { label:'Hired', value:stageCount('Hired') },
  ];
  const cells = [
    ['Total applicants', A.length, '#/recruitment/ats'],
    ['New applications', stageCount('Submitted'), '#/recruitment/screening'],
    ['For screening', stageCount('Submitted') + stageCount('Screening'), '#/recruitment/screening'],
    ['Shortlisted', stageCount('Shortlisted'), '#/recruitment/ats'],
    ['For interview', stageCount('Interview'), '#/recruitment/interviews'],
    ['For assessment', stageCount('Assessment'), '#/recruitment/assessments'],
    ['For final evaluation', stageCount('Final Evaluation'), '#/recruitment/evaluation'],
    ['Selected', stageCount('Selected'), '#/recruitment/evaluation'],
    ['For job offer', stageCount('Job Offer'), '#/recruitment/offers'],
    ['For pre-employment', stageCount('Pre-Employment'), '#/recruitment/preemployment'],
    ['Hired', stageCount('Hired'), '#/employees'],
    ['Rejected', stageCount('Rejected'), '#/recruitment/ats'],
    ['Withdrawn', stageCount('Withdrawn'), '#/recruitment/ats'],
  ];

  const body = `
    <div class="metrics" style="grid-template-columns:repeat(auto-fit,minmax(132px,1fr))">
      ${cells.map(([l,v,r]) => `<div class="metric clickable" data-goto="${r}">
        <div class="metric-label">${l}</div><div class="metric-value">${v}</div></div>`).join('')}
    </div>

    <div class="grid g-2-1" style="margin-top:14px">
      ${card('Application funnel','Invitation to hire — current campaigns','', funnel(currentFunnel),
        `<span class="muted">Conversion from invited to hired: <b class="strong">${pct(currentFunnel[6].value, currentFunnel[0].value)}%</b></span>`)}
      ${card('Recruiter load','Active applicants per recruiter','', hbars(Object.entries(byRecruiter).map(([k,v]) => ({ label:k, value:v }))))}
    </div>

    <div class="grid g-2-1" style="margin-top:14px">
      ${card('Openings by position','Applicant volume against each vacancy','', `
        <div class="table-scroll short"><table class="data">
          <thead><tr><th>Position</th><th>Department</th><th class="right">Applicants</th><th class="right">Active</th><th class="right">Hired</th></tr></thead>
          <tbody>${Object.entries(byPosition).sort((a,b)=>b[1].total-a[1].total).map(([pos, v]) => {
            const p = posByTitle(pos);
            return `<tr><td class="primary">${esc(pos)}</td><td>${esc(deptName(p.dept))}</td>
              <td class="right">${v.total}</td><td class="right">${v.active}</td><td class="right">${v.hired}</td></tr>`;
          }).join('')}</tbody></table></div>`)}
      ${card('Time to hire','Average days per stage, last 90 days','', `
        ${hbars([
          { label:'Invite → submit', value:2 },{ label:'Submit → screen', value:1 },
          { label:'Screen → interview', value:4 },{ label:'Interview → offer', value:6 },
          { label:'Offer → hire', value:12 },
        ], { fmt:r => `${r.value} d` })}
        <div class="divider"></div>
        <div class="row"><div class="scorebox" style="flex:1 1 auto"><span class="sl">Average time to hire</span><span class="sv">25<small> days</small></span></div>
        <div class="scorebox" style="flex:1 1 auto"><span class="sl">Offer acceptance</span><span class="sv">86<small>%</small></span></div></div>`)}
    </div>`;

  return page('Recruitment', 'From invitation to hire — one applicant, one link, one application.', `
    <button class="btn" data-goto="#/recruitment/invitations">${icon('qr',15)} Invitations</button>
    <button class="btn primary" data-action="new-invitation">${icon('plus',15)} New invitation</button>`, body);
}

/* ---------------------------------------------------------------------------
   14. VIEW — INVITATIONS & QR
   --------------------------------------------------------------------------- */
function applyPath(invId){ return `/apply/${invId.toLowerCase()}`; }
function applyURL(invId){ return `https://${COMPANY.domain}${applyPath(invId)}`; }

function invitationQRPanel(inv){
  const url = applyURL(inv.id);
  const used = inv.status === 'Submitted';
  const dead = ['Revoked','Expired'].includes(inv.status);
  return `
  <div class="qr-card">
    <div class="qr-visual">
      <div class="qr-frame" ${dead||used?'style="opacity:.45;filter:grayscale(1)"':''}>${QR.svg(url, 172)}</div>
      <div style="text-align:center">
        <div class="num strong" style="font-size:14px;letter-spacing:-.01em">${esc(inv.id)}</div>
        <div class="muted" style="font-size:12px">${esc(inv.position)} · ${esc(deptName(inv.dept))}</div>
      </div>
    </div>
    <div class="card-body" style="border-top:1px solid var(--line-soft)">
      <div class="flabel">Application link</div>
      <div class="linkbox"><code>${esc(url)}</code></div>
      <div class="row" style="margin-top:10px">
        <button class="btn sm" data-copy="${esc(url)}">${icon('copy',14)} Copy link</button>
        <button class="btn sm" data-qr-download="${esc(inv.id)}">${icon('download',14)} Download QR</button>
        <div style="flex:1 1 auto"></div>
        ${!used && !dead ? `<button class="btn sm primary" data-open-apply="${esc(inv.id)}">${icon('eye',14)} Open as applicant</button>` : ''}
      </div>
      <div class="divider"></div>
      <div class="token-state ${used?'used':dead?(inv.status==='Revoked'?'revoked':'expired'):'unused'}">
        ${icon(used?'checkcircle':dead?'xcircle':'unlock',15)}
        <div>
          <b>Status: ${esc(used ? 'Used / Submitted' : inv.status)}</b>
          <div style="font-size:11.5px;opacity:.85">${used
            ? `Submitted ${fmtDate(inv.submittedOn,'long')}${inv.submittedTime ? ` at ${fmtTime(inv.submittedTime)}` : ''} · Application ${esc(inv.applicationId)}`
            : dead ? (inv.revokeReason || 'This link can no longer accept an application.')
            : `Valid until ${fmtDate(inv.expires,'long')} · single use only`}</div>
        </div>
      </div>
      ${used ? `<button class="btn sm" style="margin-top:10px" data-open-app="${esc(inv.applicationId)}">${icon('arrowright',14)} View application ${esc(inv.applicationId)}</button>` : ''}
    </div>
  </div>`;
}

function openGenerateInvitation(prefill){
  prefill = prefill || {};
  openModal(`
    <div class="modal-head">
      <div style="flex:1 1 auto">
        <div class="card-title">Generate application invitation</div>
        <div class="card-sub">Creates one secure link and QR code for a single applicant.</div>
      </div>
      <button class="icon-btn" data-close-modal>${icon('close',16)}</button>
    </div>
    <div class="modal-body" id="genBody">
      <div class="fgrid fg2">
        <label class="field"><span class="flabel">Position <span class="req">*</span></span>
          <select class="input" id="genPos">${POSITIONS.map(p => `<option value="${esc(p.title)}" ${prefill.position===p.title?'selected':''}>${esc(p.title)}</option>`).join('')}</select></label>
        <label class="field"><span class="flabel">Branch / assignment</span>
          <select class="input" id="genBranch">${BRANCHES.map(b => `<option value="${b.code}">${esc(b.name)}</option>`).join('')}</select></label>
        <label class="field span2"><span class="flabel">Recruitment campaign</span>
          <select class="input" id="genCampaign">${CAMPAIGNS.map(c => `<option>${esc(c)}</option>`).join('')}</select></label>
        <label class="field"><span class="flabel">Applicant name <span class="req">*</span></span>
          <input class="input" id="genName" placeholder="e.g. Juan Dela Cruz" value="${esc(prefill.name||'')}"></label>
        <label class="field"><span class="flabel">Mobile number</span>
          <input class="input" id="genMobile" placeholder="09XX XXX XXXX"></label>
        <label class="field"><span class="flabel">Link valid for</span>
          <select class="input" id="genDays"><option value="3">3 days</option><option value="7" selected>7 days</option><option value="14">14 days</option></select></label>
        <div class="field"><span class="flabel">Single use</span>
          <div class="notice" style="padding:7px 10px">${icon('lock',14)}<span>The link expires on first successful submission.</span></div></div>
      </div>
      <div class="errmsg" id="genErr" style="display:none"></div>
    </div>
    <div class="modal-foot">
      <button class="btn" data-close-modal>Cancel</button>
      <button class="btn primary" id="genSubmit">${icon('qr',15)} Generate invitation</button>
    </div>`, { lg:false });

  $('#genSubmit').onclick = () => {
    const name = $('#genName').value.trim();
    if (!name){ $('#genName').classList.add('err'); $('#genErr').textContent = 'Enter the applicant name.'; $('#genErr').style.display='block'; return; }
    const position = $('#genPos').value;
    const inv = MockAPI.createInvitation({
      position, dept: posByTitle(position).dept, branch: $('#genBranch').value,
      campaign: $('#genCampaign').value, applicant:name, mobile: $('#genMobile').value.trim() || '—',
      days: Number($('#genDays').value),
    });
    showInvitationCreated(inv);
  };
}
function showInvitationCreated(inv){
  openModal(`
    <div class="modal-head">
      <div style="flex:1 1 auto">
        <div class="card-title">Invitation created</div>
        <div class="card-sub">Send this link or print the QR code for ${esc(inv.applicant)}.</div>
      </div>
      <button class="icon-btn" data-close-modal>${icon('close',16)}</button>
    </div>
    <div class="modal-body">${invitationQRPanel(inv)}</div>
    <div class="modal-foot">
      <button class="btn" data-close-modal>Done</button>
      <button class="btn primary" data-open-apply="${esc(inv.id)}">${icon('arrowright',15)} Open the applicant link</button>
    </div>`);
  toast('Invitation created', `${inv.id} · ${inv.position}`);
  renderNav();
}

function viewInvitations(){
  const rows = AppState.invitations.slice();
  const t = DataTable({
    rows,
    rowId:r => r.id,
    per:12,
    searchPlaceholder:'Search invitation, applicant, position',
    search:r => `${r.id} ${r.applicant} ${r.position} ${r.campaign} ${r.applicationId||''}`,
    filters:[
      { key:'status', label:'All statuses', options:['Unused','Opened','Submitted','Expired','Revoked'] },
      { key:'position', label:'All positions', options:[...new Set(AppState.invitations.map(i => i.position))] },
      { key:'dept', label:'All departments', options:DEPARTMENTS.map(d => ({ value:d.code, label:d.name })) },
    ],
    cols:[
      { key:'id', label:'Invitation ID', w:'150px', cls:'mono', render:r => `<span class="num strong" style="color:var(--ink)">${esc(r.id)}</span>` },
      { key:'applicant', label:'Applicant', render:r => `<div class="cellstack"><b>${esc(r.applicant)}</b><span>${esc(r.mobile)}</span></div>` },
      { key:'position', label:'Position', render:r => `<div class="cellstack"><b style="font-weight:500">${esc(r.position)}</b><span>${esc(deptName(r.dept))} · ${esc(branchName(r.branch))}</span></div>` },
      { key:'created', label:'Created', w:'110px', render:r => `<span class="muted">${fmtDate(r.created)}</span>` },
      { key:'expires', label:'Expires', w:'110px', render:r => {
          const left = daysBetween(d2s(TODAY), r.expires);
          if (r.status === 'Submitted') return `<span class="dim">—</span>`;
          return left < 0 ? `<span style="color:var(--ink-4)">Expired</span>` : `<span class="muted">${fmtDate(r.expires)}</span> <span class="dim">(${left}d)</span>`;
        } },
      { key:'status', label:'Status', w:'120px', render:r => badge(r.status === 'Submitted' ? 'Used' : r.status) },
      { key:'applicationId', label:'Application', w:'140px', render:r => r.applicationId
          ? `<button class="btn ghost sm num" data-open-app="${esc(r.applicationId)}">${esc(r.applicationId)}</button>`
          : `<span class="dim">—</span>` },
      { key:'act', label:'', w:'92px', sort:false, render:r => `<div class="rowactions">
          <button class="icon-btn" data-tip="Show QR" data-inv-qr="${esc(r.id)}">${icon('qr',15)}</button>
          <button class="icon-btn" data-tip="Copy link" data-copy="${esc(applyURL(r.id))}">${icon('copy',15)}</button>
          <button class="icon-btn" data-tip="More" data-inv-menu="${esc(r.id)}">${icon('dots',15)}</button>
        </div>` },
    ],
    onRow:id => openInvitationDrawer(id),
    emptyTitle:'No invitations yet',
    emptyText:'Generate an invitation to give one applicant a secure, single-use application link.',
    emptyAction:`<button class="btn primary sm" data-action="new-invitation">Generate invitation</button>`,
  });
  pendingTables.push(t);
  const stats = {
    unused:AppState.invitations.filter(i => i.status === 'Unused').length,
    opened:AppState.invitations.filter(i => i.status === 'Opened').length,
    used:AppState.invitations.filter(i => i.status === 'Submitted').length,
    dead:AppState.invitations.filter(i => ['Expired','Revoked'].includes(i.status)).length,
  };
  const body = `
    ${metricStrip([
      { label:'Invitations issued', value:AppState.invitations.length, note:'all time' },
      { label:'Unused', value:stats.unused, note:'link not yet opened' },
      { label:'Opened, not submitted', value:stats.opened, note:'follow up with the applicant' },
      { label:'Used / submitted', value:stats.used, note:'link consumed' },
      { label:'Expired or revoked', value:stats.dead, note:'cannot be reopened' },
    ])}
    <div style="margin-top:14px">${t.html()}</div>
    <div class="notice info" style="margin-top:14px">${icon('shield',15)}
      <div><b>Prototype note.</b> Single use is simulated in the browser so you can walk through the flow.
      In production the token must be validated and consumed on the server — treat this screen as the interface design, not the security model.</div>
    </div>`;
  return page('Invitations & QR codes', 'Each invitation is issued to one applicant and accepts exactly one application.', `
    <button class="btn primary" data-action="new-invitation">${icon('plus',15)} Generate invitation</button>`, body);
}

function openInvitationDrawer(id){
  const inv = invById(id); if (!inv) return;
  const app = inv.applicationId ? appById(inv.applicationId) : null;
  openDrawer(`
    <div class="drawer-head">
      <div class="row">
        <div style="min-width:0">
          <div class="row" style="gap:8px"><span class="num" style="font-size:16px;font-weight:620;letter-spacing:-.015em">${esc(inv.id)}</span>${badge(inv.status === 'Submitted' ? 'Used' : inv.status)}</div>
          <div class="muted" style="font-size:12.5px;margin-top:2px">${esc(inv.position)} · ${esc(deptName(inv.dept))} · ${esc(branchName(inv.branch))}</div>
        </div>
        <div style="flex:1 1 auto"></div>
        <button class="icon-btn" data-close-drawer>${icon('close',17)}</button>
      </div>
    </div>
    <div class="drawer-body">
      <div class="grid g2" style="align-items:start">
        <div>${invitationQRPanel(inv)}</div>
        <div class="stack">
          ${card('Invitation details','','', kv([
            ['Applicant', esc(inv.applicant)],
            ['Mobile', esc(inv.mobile)],
            ['Campaign', esc(inv.campaign)],
            ['Created by', esc(inv.createdBy)],
            ['Created', fmtDate(inv.created,'long')],
            ['Expires', fmtDate(inv.expires,'long')],
            ['Opened', inv.openedOn ? fmtDate(inv.openedOn,'long') : '<span class="dim">Not yet opened</span>'],
            ['Submitted', inv.submittedOn ? `${fmtDate(inv.submittedOn,'long')} ${inv.submittedTime||''}` : '<span class="dim">—</span>'],
            ['Application', app ? `<span class="num">${esc(app.id)}</span>` : '<span class="dim">—</span>'],
          ]))}
          ${card('Token lifecycle','','', `
            <div class="timeline">
              <div class="tl-item done"><div class="tl-title">Invitation generated</div><div class="tl-meta">${fmtDate(inv.created,'long')} · ${esc(inv.createdBy)}</div></div>
              <div class="tl-item ${inv.openedOn?'done':'pending'}"><div class="tl-title">Link opened</div><div class="tl-meta">${inv.openedOn ? fmtDate(inv.openedOn,'long') : 'Waiting for the applicant'}</div></div>
              <div class="tl-item ${inv.submittedOn?'done':'pending'}"><div class="tl-title">Application submitted</div><div class="tl-meta">${inv.submittedOn ? `${fmtDate(inv.submittedOn,'long')} ${inv.submittedTime||''}` : 'Token still open'}</div></div>
              <div class="tl-item ${inv.status==='Submitted'?'done':inv.status==='Revoked'?'blocked':'pending'}"><div class="tl-title">Token consumed</div><div class="tl-meta">${inv.status==='Submitted'?'Link can no longer be used':inv.status==='Revoked'?`Revoked ${fmtDate(inv.revokedOn)}`:'—'}</div></div>
            </div>`)}
        </div>
      </div>
    </div>
    <div class="drawer-foot">
      <button class="btn" data-close-drawer>Close</button>
      <div style="flex:1 1 auto"></div>
      ${app ? `<button class="btn" data-open-app="${esc(app.id)}">View application</button>` : ''}
      ${inv.status === 'Unused' || inv.status === 'Opened'
        ? `<button class="btn danger" data-revoke="${esc(inv.id)}">Revoke invitation</button>
           <button class="btn primary" data-open-apply="${esc(inv.id)}">Open applicant link</button>` : ''}
    </div>`, { wide:true });
}

/* ---------------------------------------------------------------------------
   15. VIEW — APPLICANT TRACKING SYSTEM
   --------------------------------------------------------------------------- */
let pendingTables = [];
function atsColumns(){
  return [
    { key:'id', label:'Application ID', w:'138px', render:r => `<span class="num" style="color:var(--ink);font-weight:550">${esc(r.id)}</span>` },
    { key:'name', label:'Applicant', render:r => personCell(r.name, `${r.mobile}`, r.avatar) },
    { key:'position', label:'Position', render:r => `<div class="cellstack"><b style="font-weight:500">${esc(r.position)}</b><span>${esc(branchName(r.branch))}</span></div>` },
    { key:'dept', label:'Department', w:'128px', render:r => esc(deptName(r.dept)) },
    { key:'applied', label:'Applied', w:'104px', sortValue:r => r.applied, render:r => `<span class="muted">${relTime(r.applied)}</span>` },
    { key:'stage', label:'Stage', w:'132px', sortValue:r => STAGE_ORDER(r.stage), render:r => badge(r.stage) },
    { key:'recruiter', label:'Recruiter', w:'140px', render:r => `<span class="muted">${esc(r.recruiter)}</span>` },
    { key:'score', label:'Score', w:'88px', align:'right', render:r => r.score ? `<b class="num">${r.score}</b><span class="dim">/100</span>` : '<span class="dim">—</span>' },
    { key:'updated', label:'Last updated', w:'112px', render:r => `<span class="muted">${relTime(r.updated)}</span>` },
  ];
}
function viewATS(){
  const t = DataTable({
    rows:AppState.applicants.slice(),
    rowId:r => r.id, per:12,
    searchPlaceholder:'Search applicant, ID, position',
    search:r => `${r.id} ${r.name} ${r.position} ${r.recruiter} ${r.invitationId}`,
    filters:[
      { key:'position', label:'All positions', options:[...new Set(AppState.applicants.map(a => a.position))] },
      { key:'dept', label:'All departments', options:DEPARTMENTS.map(d => ({ value:d.code, label:d.name })) },
      { key:'stage', label:'All stages', options:STAGES.concat(TERMINAL) },
      { key:'recruiter', label:'All recruiters', options:RECRUITERS },
      { key:'branch', label:'All locations', options:BRANCHES.map(b => ({ value:b.code, label:b.name })) },
    ],
    cols:atsColumns(),
    onRow:id => openApplicant(id),
    emptyTitle:'No applications match these filters',
    emptyText:'Try clearing a filter, or generate a new invitation to start an application.',
  });
  pendingTables.push(t);
  const live = AppState.applicants.filter(a => !['Hired','Rejected','Withdrawn'].includes(a.stage));
  const body = `
    ${metricStrip([
      { label:'In pipeline', value:live.length, note:'excludes hired and closed' },
      { label:'Awaiting screening', value:stageCount('Submitted'), note:'oldest waiting 2 days' },
      { label:'Interview stage', value:stageCount('Interview') + stageCount('Assessment'), note:'interview and assessment' },
      { label:'Offer stage', value:stageCount('Selected') + stageCount('Job Offer') + stageCount('Pre-Employment'), note:'selected through requirements' },
      { label:'Hired this year', value:stageCount('Hired'), note:'converted to employee records' },
      { label:'Closed', value:stageCount('Rejected') + stageCount('Withdrawn'), note:'rejected or withdrawn' },
    ])}
    <div style="margin-top:14px">${t.html()}</div>`;
  return page('Applicant tracking', 'Every application traces back to the invitation that created it.', `
    <button class="btn" data-action="export">${icon('download',15)} Export</button>
    <button class="btn primary" data-action="new-invitation">${icon('plus',15)} New invitation</button>`, body);
}

/* ---------------------------------------------------------------------------
   16. APPLICANT DETAIL DRAWER
   --------------------------------------------------------------------------- */
const APP_TABS = ['Application','Screening','Interviews','Assessment','Evaluation','Requirements','Documents','Timeline','Notes'];
let currentAppTab = 'Application';

function nextActionFor(a){
  switch (a.stage){
    case 'Submitted': return { label:'Start screening', act:`screen:${a.id}` };
    case 'Screening': return { label:'Complete screening', act:`screen:${a.id}` };
    case 'Shortlisted': return { label:'Schedule interview', act:`interview:${a.id}` };
    case 'Interview': {
      const iv = a.interviews.find(i => i.status === 'Scheduled');
      return iv ? { label:'Record interview result', act:`ivresult:${a.id}:${iv.id}` } : { label:'Schedule interview', act:`interview:${a.id}` };
    }
    case 'Assessment': return { label:'Record assessment', act:`assess:${a.id}` };
    case 'Final Evaluation': return { label:'Complete final evaluation', act:`evaluate:${a.id}` };
    case 'Selected': return { label:'Prepare job offer', act:`offer:${a.id}` };
    case 'Job Offer': return { label:'Record offer response', act:`offerresp:${a.id}` };
    case 'Pre-Employment': return { label:'Convert to employee', act:`convert:${a.id}`, primary:true };
    case 'Hired': return { label:'Open employee record', act:`emp:${a.employeeId||''}` };
    default: return null;
  }
}
function stageRail(a){
  const idx = STAGE_ORDER(a.stage);
  const shown = ['Submitted','Screening','Shortlisted','Interview','Assessment','Final Evaluation','Selected','Job Offer','Pre-Employment','Hired'];
  return `<div class="rail">${shown.map(s => {
    const si = STAGE_ORDER(s);
    const cls = TERMINAL.includes(a.stage) ? (si <= idx ? 'done' : '') : si < idx ? 'done' : si === idx ? 'current' : '';
    return `<div class="rail-step ${cls}">
      <div class="n">${cls==='done'?icon('check',12):cls==='current'?icon('clock',12):''}${esc(s)}</div>
      <div class="v">${si < idx ? 'Done' : si === idx ? 'Current' : '—'}</div></div>`;
  }).join('')}</div>`;
}
function appTabContent(a){
  switch (currentAppTab){
    case 'Application': return `
      <div class="grid g2" style="align-items:start">
        ${card('Personal information','','', kv([
          ['Full name', `${esc(a.first)} ${esc(a.middle||'')} ${esc(a.last)} ${esc(a.suffix||'')}`],
          ['Date of birth', `${fmtDate(a.birth,'long')} <span class="dim">(${2026 - Number(a.birth.slice(0,4))} yrs)</span>`],
          ['Sex', esc(a.sex)], ['Civil status', esc(a.civil)], ['Nationality', esc(a.nationality)],
        ]))}
        ${card('Contact information','','', kv([
          ['Mobile', esc(a.mobile)], ['Email', esc(a.email)],
          ['Current address', esc(a.address)], ['Permanent address', esc(a.permAddress)],
          ['Emergency contact', `${esc(a.emergency.name)} <span class="muted">(${esc(a.emergency.rel)})</span><br><span class="muted">${esc(a.emergency.phone)}</span>`],
        ]))}
      </div>
      <div class="grid g2" style="margin-top:14px;align-items:start">
        ${card('Position applied for','','', kv([
          ['Position', esc(a.position)], ['Department', esc(deptName(a.dept))],
          ['Preferred location', esc(branchName(a.branch))], ['Employment type', esc(a.empType)],
          ['Invitation', `<span class="num">${esc(a.invitationId)}</span>`],
        ]))}
        ${card('Educational background','','', kv([
          ['Highest attainment', esc(a.education.attainment)], ['School', esc(a.education.school)],
          ['Course', esc(a.education.course)], ['Year graduated', esc(a.education.year)],
        ]))}
      </div>
      <div style="margin-top:14px">${card('Work experience', `${a.experience.length} entr${a.experience.length===1?'y':'ies'}`,'',
        a.experience.length ? a.experience.map(x => `
          <div class="exp-row">
            <div class="exp-head"><b>${esc(x.position)}</b><span class="muted">·</span><span class="muted">${esc(x.company)}</span>
              <span style="margin-left:auto" class="chip">${fmtDate(x.start,'md')} ${x.start.slice(0,4)} – ${x.end === 'Present' ? 'Present' : `${fmtDate(x.end,'md')} ${x.end.slice(0,4)}`}</span></div>
            <div class="muted" style="font-size:12.5px">Reason for leaving: ${esc(x.reason)}</div>
          </div>`).join('') : '<div class="empty"><b>No previous employment declared</b><p>The applicant indicated no prior work experience.</p></div>')}
      </div>
      <div class="grid g2" style="margin-top:14px;align-items:start">
        ${card('Skills, certifications and licences','','', `
          <div class="flabel">Skills</div><div class="tag-list">${a.skills.map(s => `<span class="chip">${esc(s)}</span>`).join('') || '<span class="dim">—</span>'}</div>
          <div class="flabel" style="margin-top:12px">Certifications</div><div class="tag-list">${(a.certifications||[]).map(s => `<span class="chip">${icon('award',12)}${esc(s)}</span>`).join('') || '<span class="dim">None declared</span>'}</div>
          <div class="flabel" style="margin-top:12px">Licences</div><div class="tag-list">${(a.licenses||[]).map(s => `<span class="chip">${icon('idcard',12)}${esc(s)}</span>`).join('') || '<span class="dim">None declared</span>'}</div>`)}
        ${card('Application responses','','', kv(APPLICATION_QUESTIONS.map(q => [q.label, q.key === 'salary' ? peso(a.answers[q.key] || 0) : esc(a.answers[q.key] || '—')])))}
      </div>`;

    case 'Screening': return a.screening ? `
      ${card('Screening result', `${fmtDate(a.screening.date,'long')} · ${esc(a.screening.by)}`, badge(a.screening.result), `
        <div class="row" style="gap:12px;margin-bottom:14px">
          <div class="scorebox"><span class="sl">Screening score</span><span class="sv">${a.screening.score}<small>/100</small></span></div>
          <div style="flex:1 1 auto">${progressBar(Object.values(a.screening.results).filter(v=>v==='Pass').length, SCREENING_CRITERIA.length, 'ok')}</div>
        </div>
        <table class="data"><thead><tr><th>Criteria</th><th class="right" style="width:90px">Weight</th><th style="width:110px">Result</th></tr></thead>
        <tbody>${SCREENING_CRITERIA.map(c => `<tr><td class="primary">${esc(c.label)}</td><td class="right muted">${c.weight}%</td><td>${badge(a.screening.results[c.key] || 'Hold')}</td></tr>`).join('')}</tbody></table>
        <div class="divider"></div>
        <div class="flabel">Screening notes</div><div class="note-body">${esc(a.screening.notes)}</div>`)}
      ` : `<div class="empty">${icon('filter',22)}<b>Not yet screened</b><p>Run the screening checklist to record whether this applicant meets the minimum qualifications for ${esc(a.position)}.</p>
           <button class="btn primary sm" data-act="screen:${esc(a.id)}">Start screening</button></div>`;

    case 'Interviews': return a.interviews.length ? a.interviews.map(iv => `
      ${card(iv.round, `${fmtDate(iv.date,'long')} · ${iv.time} · ${esc(iv.type)}`, badge(iv.status), `
        ${kv([['Interviewer', esc(iv.interviewer)],['Location / link', esc(iv.location)],['Status', badge(iv.status)]])}
        ${iv.status === 'Completed' ? `
          <div class="divider"></div>
          <div class="row wrap" style="gap:10px">
            ${INTERVIEW_CRITERIA.map(c => `<div class="scorebox" style="min-width:132px"><span class="sl">${esc(c.label)}</span><span class="sv">${iv.scores[c.key]||'—'}<small>/5</small></span></div>`).join('')}
            <div class="scorebox" style="min-width:132px;border-color:var(--accent-line);background:var(--accent-tint)"><span class="sl">Overall</span><span class="sv" style="color:var(--accent)">${iv.overall}<small>/5</small></span></div>
          </div>
          <div class="divider"></div>
          <div class="row" style="gap:10px"><span class="flabel" style="margin:0">Decision</span>${badge(iv.decision||'Hold')}</div>
          <div class="note-body" style="margin-top:8px">${esc(iv.remarks)}</div>`
        : `<div class="divider"></div><div class="notice info">${icon('clock',15)}<div>Interview is scheduled. Record the evaluation once it is completed.</div></div>
           <button class="btn primary sm" style="margin-top:10px" data-act="ivresult:${esc(a.id)}:${esc(iv.id)}">Record interview result</button>`}
      `)}`).join('') + `<div style="margin-top:12px"><button class="btn sm" data-act="interview:${esc(a.id)}">${icon('plus',14)} Schedule another interview</button></div>`
      : `<div class="empty">${icon('calendar',22)}<b>No interview scheduled</b><p>Set the date, interviewer and type. The applicant will move to the interview stage automatically.</p>
         <button class="btn primary sm" data-act="interview:${esc(a.id)}">Schedule interview</button></div>`;

    case 'Assessment': return a.assessments.length ? `
      ${card('Assessment results', `${a.assessments.length} assessment${a.assessments.length>1?'s':''} on file`, `<button class="btn sm" data-act="assess:${esc(a.id)}">${icon('plus',14)} Add</button>`, `
        <table class="data"><thead><tr><th>Assessment</th><th>Type</th><th>Date</th><th class="right">Score</th><th class="right">Passing</th><th style="width:100px">Result</th></tr></thead>
        <tbody>${a.assessments.map(x => `<tr>
          <td class="primary">${esc(x.name)}</td><td class="muted">${esc(x.type)}</td><td class="muted">${fmtDate(x.date)}</td>
          <td class="right"><b class="num">${x.score}</b></td><td class="right muted num">${x.passing}</td><td>${badge(x.result)}</td></tr>`).join('')}</tbody></table>`)}`
      : `<div class="empty">${icon('target',22)}<b>No assessment recorded</b><p>Record a skills, technical, aptitude or behavioural assessment for this applicant.</p>
         <button class="btn primary sm" data-act="assess:${esc(a.id)}">Record assessment</button></div>`;

    case 'Evaluation': return `
      ${a.evaluation ? card('Final evaluation', `${fmtDate(a.evaluation.date,'long')} · ${esc(a.evaluation.by)}`, badge(a.evaluation.decision), `
        <div class="row wrap" style="gap:10px">
          <div class="scorebox"><span class="sl">Screening (25%)</span><span class="sv">${a.evaluation.screening}<small>%</small></span></div>
          <div class="scorebox"><span class="sl">Interview (40%)</span><span class="sv">${a.evaluation.interview}<small>%</small></span></div>
          <div class="scorebox"><span class="sl">Assessment (35%)</span><span class="sv">${a.evaluation.assessment}<small>%</small></span></div>
          <div class="scorebox" style="border-color:var(--accent-line);background:var(--accent-tint)"><span class="sl">Overall</span><span class="sv" style="color:var(--accent)">${a.evaluation.overall}<small>%</small></span></div>
        </div>
        <div class="divider"></div>
        ${kv([['Hiring recommendation', badge(a.evaluation.recommendation, 'lg')],['Final decision', badge(a.evaluation.decision,'lg')],['Remarks', esc(a.evaluation.remarks)]])}`)
      : `<div class="empty">${icon('award',22)}<b>Final evaluation pending</b><p>The system combines screening, interview and assessment scores into one weighted recommendation.</p>
         <button class="btn primary sm" data-act="evaluate:${esc(a.id)}">Run final evaluation</button></div>`}
      ${a.offer ? `<div style="margin-top:14px">${card('Job offer', esc(a.offer.id), badge(a.offer.status), `
        ${kv([
          ['Position', esc(a.offer.position)], ['Department', esc(deptName(a.offer.dept))],
          ['Employment type', esc(a.offer.empType)], ['Start date', fmtDate(a.offer.start,'long')],
          ['Basic salary', `<b>${peso(a.offer.salary)}</b> <span class="muted">per month</span>`],
          ['Allowances', a.offer.allowances.map(x => `${esc(x.name)} ${peso(x.amount)}`).join(' · ')],
          ['Work schedule', esc(a.offer.schedule)], ['Probationary period', esc(a.offer.probation)],
          ['Offer expiry', fmtDate(a.offer.expiry,'long')],
          ['Prepared by', esc(a.offer.preparedBy)], ['Approved by', esc(a.offer.approvedBy || '—')],
        ])}
        ${a.offer.status !== 'Accepted' && a.offer.status !== 'Declined' ? `<div class="divider"></div>
          <div class="row"><button class="btn sm" data-act="offerresp:${esc(a.id)}">Record applicant response</button></div>` : ''}`)}</div>` : ''}`;

    case 'Requirements': return a.preEmployment ? `
      ${card('Pre-employment requirements', `${a.preEmployment.filter(r=>r.status!=='Pending').length} of ${a.preEmployment.length} received`, '', `
        <div style="margin-bottom:12px">${progressBar(a.preEmployment.filter(r => r.status === 'Verified' || r.status === 'Complete').length, a.preEmployment.length)}</div>
        <div>${a.preEmployment.map((r,i) => `
          <div class="checklist-item">
            <span class="stepdot ${r.status==='Verified'?'done':r.status==='Submitted'?'active':''}">${r.status==='Verified'?icon('check',11):i+1}</span>
            <span class="ci-body"><span class="ci-title">${esc(r.name)}</span>
              <span class="ci-meta">${r.submitted ? `Received ${fmtDate(r.submitted)} · ${esc(r.by)}` : 'Not yet submitted'}</span></span>
            ${badge(r.status)}
            <select class="select" data-req="${esc(a.id)}:${i}" style="width:118px">
              ${['Pending','Submitted','Verified','Rejected'].map(s => `<option ${r.status===s?'selected':''}>${s}</option>`).join('')}
            </select>
          </div>`).join('')}</div>`,
        `<button class="btn primary" data-act="convert:${esc(a.id)}">${icon('userplus',15)} Convert to employee</button>
         <span class="muted">Creates the employee record and starts onboarding.</span>`)}`
      : `<div class="empty">${icon('file',22)}<b>Requirements not yet started</b><p>The checklist opens once the applicant accepts the job offer.</p></div>`;

    case 'Documents': return card('Documents', `${a.documents.length} file${a.documents.length===1?'':'s'}`, `<button class="btn sm" data-act="upload:${esc(a.id)}">${icon('plus',14)} Simulate upload</button>`, `
      <div class="grid g2">${a.documents.map(d => `
        <div class="doc-tile"><span class="doc-ico">${icon('file',15)}</span>
          <div style="flex:1 1 auto;min-width:0"><div class="ci-title">${esc(d.name)}</div><div class="ci-meta">${esc(d.type)} · uploaded ${fmtDate(d.date)}</div></div>
          ${badge(d.status)}</div>`).join('')}</div>`);

    case 'Timeline': return card('Recruitment timeline', 'Every action recorded against this application','', `
      <div class="timeline">${a.timeline.map(t => `
        <div class="tl-item ${t.state||'done'}">
          <div class="tl-title">${esc(t.action)}</div>
          <div class="tl-meta"><span>${fmtDate(t.date,'long')}</span>${t.time && t.time !== '—' ? `<span>${esc(t.time)}</span>` : ''}<span>·</span><span>${esc(t.user)}</span></div>
          ${t.note ? `<div class="tl-note">${esc(t.note)}</div>` : ''}
        </div>`).join('')}</div>`);

    case 'Notes': return card('HR notes', `${a.notes.length} note${a.notes.length===1?'':'s'}`, '', `
      <div class="field"><textarea class="textarea" id="noteInput" placeholder="Add an internal note. Applicants never see this."></textarea>
        <div class="row" style="margin-top:8px"><button class="btn primary sm" data-act="note:${esc(a.id)}">Add note</button></div></div>
      <div class="divider"></div>
      ${a.notes.length ? a.notes.map(n => `
        <div class="note-item"><div class="note-head">
          <span class="avatar" style="width:20px;height:20px;font-size:9px;background:${avatarColor(n.by)}">${initials(n.by)}</span>
          <b style="color:var(--ink);font-weight:550">${esc(n.by)}</b><span class="dim">${fmtDate(n.date)} ${esc(n.time||'')}</span></div>
        <div class="note-body">${esc(n.text)}</div></div>`).join('')
        : '<div class="empty"><b>No notes yet</b><p>Notes stay internal to the HR team.</p></div>'}`);
  }
}
function openApplicant(id, tab){
  const a = appById(id); if (!a) return;
  currentAppTab = tab || 'Application';
  const next = nextActionFor(a);
  openDrawer(`
    <div class="drawer-head">
      <div class="row" style="align-items:flex-start">
        <span class="avatar lg" style="background:${a.avatar}">${initials(a.name)}</span>
        <div style="min-width:0;flex:1 1 auto">
          <div class="row" style="gap:8px;flex-wrap:wrap">
            <span style="font-size:17px;font-weight:620;letter-spacing:-.018em">${esc(a.name)}</span>${badge(a.stage)}
            ${a.score ? `<span class="chip">${icon('star',12)} ${a.score}/100</span>` : ''}
          </div>
          <div class="muted" style="font-size:12.5px;margin-top:2px">
            <span class="num">${esc(a.id)}</span> · ${esc(a.position)} · ${esc(deptName(a.dept))} · applied ${fmtDate(a.applied,'long')}
          </div>
          <div class="dim" style="font-size:11.5px;margin-top:2px">Invitation <span class="num">${esc(a.invitationId)}</span> · recruiter ${esc(a.recruiter)}</div>
        </div>
        <button class="icon-btn" data-close-drawer>${icon('close',17)}</button>
      </div>
      <div style="margin-top:12px">${stageRail(a)}</div>
    </div>
    <div class="drawer-tabs"><div class="tabs">
      ${APP_TABS.map(t => `<button class="tab ${t===currentAppTab?'on':''}" data-apptab="${t}">${t}${
        t==='Interviews'&&a.interviews.length?`<span class="cnt">${a.interviews.length}</span>`:
        t==='Assessment'&&a.assessments.length?`<span class="cnt">${a.assessments.length}</span>`:
        t==='Notes'&&a.notes.length?`<span class="cnt">${a.notes.length}</span>`:''}</button>`).join('')}
    </div></div>
    <div class="drawer-body" id="appTabBody">${appTabContent(a)}</div>
    <div class="drawer-foot">
      <button class="btn" data-close-drawer>Close</button>
      <button class="btn" data-act="reject:${esc(a.id)}">Reject</button>
      <div style="flex:1 1 auto"></div>
      ${next ? `<button class="btn primary" data-act="${esc(next.act)}">${esc(next.label)}</button>` : `<span class="muted">No further action for this stage.</span>`}
    </div>`, { wide:true });

  $$('#drawer [data-apptab]').forEach(b => b.onclick = () => {
    currentAppTab = b.dataset.apptab;
    $$('#drawer [data-apptab]').forEach(x => x.classList.toggle('on', x === b));
    $('#appTabBody').innerHTML = appTabContent(appById(id));
    $('#appTabBody').scrollTop = 0;
  });
}

/* ---------------------------------------------------------------------------
   17. RECRUITMENT ACTION FORMS
   --------------------------------------------------------------------------- */
function formScreening(appId){
  const a = appById(appId); if (!a) return;
  openModal(`
    <div class="modal-head"><div style="flex:1 1 auto">
      <div class="card-title">Screening — ${esc(a.name)}</div>
      <div class="card-sub">${esc(a.position)} · ${esc(a.id)}</div></div>
      <button class="icon-btn" data-close-modal>${icon('close',16)}</button></div>
    <div class="modal-body">
      <table class="data"><thead><tr><th>Criteria</th><th class="right" style="width:80px">Weight</th><th style="width:190px">Assessment</th></tr></thead>
      <tbody>${SCREENING_CRITERIA.map(c => `
        <tr><td class="primary">${esc(c.label)}</td><td class="right muted">${c.weight}%</td>
        <td><div class="seg" data-crit="${c.key}">
          ${['Pass','Hold','Fail'].map(v => `<button data-v="${v}" class="${v==='Pass'?'on':''}">${v}</button>`).join('')}
        </div></td></tr>`).join('')}</tbody></table>
      <div class="field" style="margin-top:14px"><span class="flabel">Screening notes</span>
        <textarea class="textarea" id="scrNotes" placeholder="Availability, salary expectation, distance from the plant, other observations."></textarea></div>
      <div class="notice info">${icon('info',15)}<div>The overall result decides the next stage: a pass shortlists the applicant, a hold keeps them in the pool, a fail closes the application.</div></div>
    </div>
    <div class="modal-foot">
      <button class="btn" data-close-modal>Cancel</button>
      <button class="btn danger" data-scr="Fail">Fail</button>
      <button class="btn" data-scr="Hold">Hold</button>
      <button class="btn primary" data-scr="Pass">Pass and shortlist</button>
    </div>`, { lg:true });

  $$('#modal .seg').forEach(seg => seg.querySelectorAll('button').forEach(b => b.onclick = () => {
    seg.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
  }));
  $$('#modal [data-scr]').forEach(btn => btn.onclick = () => {
    const results = {};
    $$('#modal .seg').forEach(seg => { results[seg.dataset.crit] = seg.querySelector('button.on').dataset.v; });
    const score = Math.round(SCREENING_CRITERIA.reduce((s,c) => s + (results[c.key] === 'Pass' ? c.weight : results[c.key] === 'Hold' ? c.weight/2 : 0), 0));
    MockAPI.saveScreening(appId, { results, score, result:btn.dataset.scr, notes:$('#scrNotes').value.trim() });
    closeModal(); toast('Screening saved', `${a.name} · ${btn.dataset.scr} · ${score}%`);
    refresh(); openApplicant(appId, 'Screening');
  });
}

function formInterview(appId){
  const a = appById(appId); if (!a) return;
  const interviewers = [...HR_USERS.map(h => `${h} — HR`), ...DEPARTMENTS.map(d => `${d.head} — ${d.name}`)];
  openModal(`
    <div class="modal-head"><div style="flex:1 1 auto">
      <div class="card-title">Schedule interview</div>
      <div class="card-sub">${esc(a.name)} · ${esc(a.position)}</div></div>
      <button class="icon-btn" data-close-modal>${icon('close',16)}</button></div>
    <div class="modal-body"><div class="fgrid fg2">
      <label class="field"><span class="flabel">Round</span>
        <select class="input" id="ivRound"><option>Initial interview</option><option>Second interview</option><option>Final interview</option></select></label>
      <label class="field"><span class="flabel">Interviewer</span>
        <select class="input" id="ivBy">${interviewers.map(i => `<option>${esc(i)}</option>`).join('')}</select></label>
      <label class="field"><span class="flabel">Date</span><input class="input" type="date" id="ivDate" value="${d2s(addDays(TODAY,2))}"></label>
      <label class="field"><span class="flabel">Time</span><input class="input" type="time" id="ivTime" value="10:00"></label>
      <label class="field"><span class="flabel">Interview type</span>
        <select class="input" id="ivType"><option>Face-to-face</option><option>Video call</option><option>Phone</option></select></label>
      <label class="field"><span class="flabel">Location / meeting link</span>
        <input class="input" id="ivLoc" value="${esc(branchName(a.branch))} — HR Office"></label>
    </div></div>
    <div class="modal-foot"><button class="btn" data-close-modal>Cancel</button>
      <button class="btn primary" id="ivSave">Schedule interview</button></div>`);
  $('#ivSave').onclick = () => {
    MockAPI.scheduleInterview(appId, {
      round:$('#ivRound').value, interviewer:$('#ivBy').value, date:$('#ivDate').value,
      time:$('#ivTime').value, type:$('#ivType').value, location:$('#ivLoc').value,
    });
    closeModal(); toast('Interview scheduled', `${a.name} · ${fmtDate($('#ivDate').value)}`);
    refresh(); openApplicant(appId, 'Interviews');
  };
}

function formInterviewResult(appId, ivId){
  const a = appById(appId); const iv = a.interviews.find(i => i.id === ivId); if (!iv) return;
  openModal(`
    <div class="modal-head"><div style="flex:1 1 auto">
      <div class="card-title">${esc(iv.round)} evaluation</div>
      <div class="card-sub">${esc(a.name)} · ${fmtDate(iv.date,'long')} ${esc(iv.time)}</div></div>
      <button class="icon-btn" data-close-modal>${icon('close',16)}</button></div>
    <div class="modal-body">
      ${INTERVIEW_CRITERIA.map(c => `
        <div class="row" style="padding:8px 0;border-bottom:1px solid var(--line-soft)">
          <span style="flex:1 1 auto;font-size:13px">${esc(c.label)}</span>
          <div class="rating" data-rate="${c.key}">${[1,2,3,4,5].map(n => `<button data-n="${n}" class="${n===4?'on':''}">${n}</button>`).join('')}</div>
        </div>`).join('')}
      <div class="field" style="margin-top:14px"><span class="flabel">Remarks</span>
        <textarea class="textarea" id="ivRemarks" placeholder="Strengths, concerns, recommendation."></textarea></div>
    </div>
    <div class="modal-foot">
      <button class="btn" data-close-modal>Cancel</button>
      <button class="btn danger" data-iv="Fail">Fail</button>
      <button class="btn" data-iv="Hold">Hold</button>
      <button class="btn" data-iv="Further Interview">Further interview</button>
      <button class="btn primary" data-iv="Pass">Pass</button>
    </div>`, { lg:true });
  $$('#modal .rating').forEach(r => r.querySelectorAll('button').forEach(b => b.onclick = () => {
    r.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
  }));
  $$('#modal [data-iv]').forEach(btn => btn.onclick = () => {
    const scores = {};
    $$('#modal .rating').forEach(r => scores[r.dataset.rate] = Number(r.querySelector('button.on').dataset.n));
    MockAPI.saveInterviewResult(appId, ivId, scores, btn.dataset.iv, $('#ivRemarks').value.trim());
    closeModal(); toast('Interview result saved', `${a.name} · ${btn.dataset.iv}`);
    refresh(); openApplicant(appId, 'Interviews');
  });
}

function formAssessment(appId){
  const a = appById(appId); if (!a) return;
  openModal(`
    <div class="modal-head"><div style="flex:1 1 auto">
      <div class="card-title">Record assessment</div><div class="card-sub">${esc(a.name)} · ${esc(a.position)}</div></div>
      <button class="icon-btn" data-close-modal>${icon('close',16)}</button></div>
    <div class="modal-body"><div class="fgrid fg2">
      <label class="field"><span class="flabel">Assessment name</span><input class="input" id="asName" value="Skills Demonstration"></label>
      <label class="field"><span class="flabel">Type</span>
        <select class="input" id="asType"><option>Skills Test</option><option>Technical Test</option><option>Aptitude Test</option><option>Behavioral Assessment</option></select></label>
      <label class="field"><span class="flabel">Date taken</span><input class="input" type="date" id="asDate" value="${d2s(TODAY)}"></label>
      <label class="field"><span class="flabel">Passing score</span><input class="input" type="number" id="asPass" value="75"></label>
      <label class="field span2"><span class="flabel">Score obtained</span><input class="input" type="number" id="asScore" value="82"></label>
    </div></div>
    <div class="modal-foot"><button class="btn" data-close-modal>Cancel</button>
      <button class="btn primary" id="asSave">Save assessment</button></div>`);
  $('#asSave').onclick = () => {
    MockAPI.addAssessment(appId, {
      name:$('#asName').value, type:$('#asType').value, date:$('#asDate').value,
      score:Number($('#asScore').value), passing:Number($('#asPass').value),
    });
    closeModal(); toast('Assessment recorded', `${a.name} · ${$('#asScore').value} points`);
    refresh(); openApplicant(appId, 'Assessment');
  };
}

function formEvaluation(appId){
  const a = appById(appId); if (!a) return;
  const iv = a.interviews.length ? Math.round(a.interviews.reduce((s,i)=>s+i.overall,0)/a.interviews.length*20) : 0;
  const asm = a.assessments.length ? Math.round(a.assessments.reduce((s,x)=>s+x.score,0)/a.assessments.length) : 0;
  const scr = a.screening ? a.screening.score : 0;
  const overall = Math.round(scr*.25 + iv*.4 + asm*.35);
  const rec = overall >= 88 ? 'Highly Recommended' : overall >= 78 ? 'Recommended' : overall >= 70 ? 'For Further Review' : 'Not Recommended';
  openModal(`
    <div class="modal-head"><div style="flex:1 1 auto">
      <div class="card-title">Final evaluation</div><div class="card-sub">${esc(a.name)} · ${esc(a.id)}</div></div>
      <button class="icon-btn" data-close-modal>${icon('close',16)}</button></div>
    <div class="modal-body">
      <div class="row wrap" style="gap:10px">
        <div class="scorebox"><span class="sl">Screening (25%)</span><span class="sv">${scr}<small>%</small></span></div>
        <div class="scorebox"><span class="sl">Interview (40%)</span><span class="sv">${iv}<small>%</small></span></div>
        <div class="scorebox"><span class="sl">Assessment (35%)</span><span class="sv">${asm}<small>%</small></span></div>
        <div class="scorebox" style="border-color:var(--accent-line);background:var(--accent-tint)"><span class="sl">Overall</span><span class="sv" style="color:var(--accent)">${overall}<small>%</small></span></div>
      </div>
      <div class="divider"></div>
      <div class="row" style="gap:10px"><span class="flabel" style="margin:0">Hiring recommendation</span>${badge(rec,'lg')}</div>
      <div class="field" style="margin-top:14px"><span class="flabel">Remarks</span>
        <textarea class="textarea" id="evRemarks" placeholder="Basis for the decision, conditions, salary recommendation.">Endorsed to management for approval of the job offer.</textarea></div>
    </div>
    <div class="modal-foot">
      <button class="btn" data-close-modal>Cancel</button>
      <button class="btn danger" data-ev="Rejected">Reject</button>
      <button class="btn" data-ev="On Hold">Put on hold</button>
      <button class="btn primary" data-ev="Selected">Select applicant</button>
    </div>`, { lg:true });
  $$('#modal [data-ev]').forEach(b => b.onclick = () => {
    MockAPI.saveEvaluation(appId, b.dataset.ev, $('#evRemarks').value.trim());
    closeModal(); toast('Final evaluation saved', `${a.name} · ${b.dataset.ev}`);
    refresh(); openApplicant(appId, 'Evaluation');
  });
}

function formOffer(appId){
  const a = appById(appId); if (!a) return;
  const p = posByTitle(a.position);
  const suggested = Math.round((p.min + p.max)/2/500)*500;
  openModal(`
    <div class="modal-head"><div style="flex:1 1 auto">
      <div class="card-title">Prepare job offer</div><div class="card-sub">${esc(a.name)} · ${esc(a.position)}</div></div>
      <button class="icon-btn" data-close-modal>${icon('close',16)}</button></div>
    <div class="modal-body"><div class="fgrid fg2">
      <label class="field"><span class="flabel">Position</span><input class="input" value="${esc(a.position)}" disabled></label>
      <label class="field"><span class="flabel">Department</span><input class="input" value="${esc(deptName(a.dept))}" disabled></label>
      <label class="field"><span class="flabel">Branch</span>
        <select class="input" id="ofBranch">${BRANCHES.map(b => `<option value="${b.code}" ${b.code===a.branch?'selected':''}>${esc(b.name)}</option>`).join('')}</select></label>
      <label class="field"><span class="flabel">Employment type</span>
        <select class="input" id="ofType"><option>Probationary (6 months)</option><option>Project-Based</option><option>Contractual</option></select></label>
      <label class="field"><span class="flabel">Start date</span><input class="input" type="date" id="ofStart" value="${d2s(addDays(TODAY,14))}"></label>
      <label class="field"><span class="flabel">Basic salary (monthly)</span><input class="input" type="number" id="ofSalary" value="${suggested}">
        <span class="hint">Approved range: ${peso(p.min)} – ${peso(p.max)}</span></label>
      <label class="field"><span class="flabel">Work schedule</span>
        <select class="input" id="ofSched"><option>Shifting, 6 days/week</option><option>Monday to Friday, 8:00 AM – 5:00 PM</option><option>Monday to Saturday, 8:00 AM – 5:00 PM</option></select></label>
      <label class="field"><span class="flabel">Offer expiry</span><input class="input" type="date" id="ofExpiry" value="${d2s(addDays(TODAY,7))}"></label>
    </div></div>
    <div class="modal-foot"><button class="btn" data-close-modal>Cancel</button>
      <button class="btn" id="ofDraft">Save as draft</button>
      <button class="btn primary" id="ofSend">Save and send offer</button></div>`, { lg:true });
  const collect = () => ({
    position:a.position, dept:a.dept, branch:$('#ofBranch').value, empType:$('#ofType').value,
    start:$('#ofStart').value, salary:Number($('#ofSalary').value),
    allowances:[{ name:'Meal allowance', amount:2000 },{ name:'Transportation', amount:1500 }],
    schedule:$('#ofSched').value, probation:'6 months', expiry:$('#ofExpiry').value,
  });
  $('#ofDraft').onclick = () => { MockAPI.createOffer(appId, collect()); closeModal(); toast('Offer saved as draft'); refresh(); openApplicant(appId,'Evaluation'); };
  $('#ofSend').onclick = () => {
    MockAPI.createOffer(appId, collect()); MockAPI.setOfferStatus(appId, 'Sent');
    closeModal(); toast('Job offer sent', `${a.name} · ${peso($('#ofSalary').value)}`);
    refresh(); openApplicant(appId,'Evaluation');
  };
}

function formOfferResponse(appId){
  const a = appById(appId); if (!a || !a.offer) return;
  openModal(`
    <div class="modal-head"><div style="flex:1 1 auto">
      <div class="card-title">Record offer response</div><div class="card-sub">${esc(a.name)} · offer ${esc(a.offer.id)}</div></div>
      <button class="icon-btn" data-close-modal>${icon('close',16)}</button></div>
    <div class="modal-body">
      ${kv([['Position', esc(a.offer.position)],['Basic salary', peso(a.offer.salary)],['Start date', fmtDate(a.offer.start,'long')],['Offer expiry', fmtDate(a.offer.expiry,'long')]])}
      <div class="notice info" style="margin-top:12px">${icon('info',15)}<div>Accepting the offer opens the pre-employment checklist. The applicant still does not appear in the employee master until they are converted.</div></div>
    </div>
    <div class="modal-foot"><button class="btn" data-close-modal>Cancel</button>
      <button class="btn danger" data-resp="Declined">Applicant declined</button>
      <button class="btn primary" data-resp="Accepted">Applicant accepted</button></div>`);
  $$('#modal [data-resp]').forEach(b => b.onclick = () => {
    MockAPI.setOfferStatus(appId, b.dataset.resp);
    closeModal(); toast(`Offer ${b.dataset.resp.toLowerCase()}`, a.name);
    refresh(); openApplicant(appId, b.dataset.resp === 'Accepted' ? 'Requirements' : 'Evaluation');
  });
}

function formConvert(appId){
  const a = appById(appId); if (!a) return;
  const pending = (a.preEmployment || []).filter(r => r.status === 'Pending').length;
  const sups = AppState.employees.filter(e => e.dept === a.dept && e.level !== 'Rank & File').map(e => e.name);
  openModal(`
    <div class="modal-head"><div style="flex:1 1 auto">
      <div class="card-title">Convert applicant to employee</div>
      <div class="card-sub">${esc(a.name)} · ${esc(a.id)} → new employee record</div></div>
      <button class="icon-btn" data-close-modal>${icon('close',16)}</button></div>
    <div class="modal-body">
      <div class="notice ${pending?'warn':'ok'}">${icon(pending?'alert':'checkcircle',15)}
        <div>${pending ? `<b>${pending} requirement${pending>1?'s are':' is'} still pending.</b> You can still proceed, but the record will be flagged for follow-up.`
        : '<b>All pre-employment requirements are complete.</b> This applicant is ready to be hired.'}</div></div>
      <div class="fgrid fg2" style="margin-top:14px">
        <label class="field"><span class="flabel">Date hired</span><input class="input" type="date" id="cvStart" value="${a.offer ? a.offer.start : d2s(TODAY)}"></label>
        <label class="field"><span class="flabel">Branch assignment</span>
          <select class="input" id="cvBranch">${BRANCHES.map(b => `<option value="${b.code}" ${b.code===a.branch?'selected':''}>${esc(b.name)}</option>`).join('')}</select></label>
        <label class="field"><span class="flabel">Immediate supervisor</span>
          <select class="input" id="cvSup">${(sups.length?sups:[(DEPARTMENTS.find(d=>d.code===a.dept)||{}).head]).map(s => `<option>${esc(s)}</option>`).join('')}</select></label>
        <label class="field"><span class="flabel">Shift assignment</span>
          <select class="input" id="cvShift">${SHIFTS.filter(s=>s.code!=='RST').map(s => `<option value="${s.code}">${esc(s.name)} · ${s.start}–${s.end}</option>`).join('')}</select></label>
        <label class="field"><span class="flabel">Rest day</span>
          <select class="input" id="cvRest">${['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'].map(d => `<option>${d}</option>`).join('')}</select></label>
        <label class="field"><span class="flabel">Employment status</span><input class="input" value="Probationary (6 months)" disabled></label>
      </div>
      <div class="notice" style="margin-top:4px">${icon('link',15)}<div>The new employee record keeps a permanent link back to invitation <span class="num">${esc(a.invitationId)}</span> and application <span class="num">${esc(a.id)}</span>.</div></div>
    </div>
    <div class="modal-foot"><button class="btn" data-close-modal>Cancel</button>
      <button class="btn primary" id="cvGo">${icon('userplus',15)} Create employee record</button></div>`, { lg:true });
  $('#cvGo').onclick = () => {
    const res = MockAPI.convertToEmployee(appId, {
      start:$('#cvStart').value, branch:$('#cvBranch').value, supervisor:$('#cvSup').value,
      shift:$('#cvShift').value, restDay:$('#cvRest').value, force:true,
    });
    closeModal();
    if (!res.ok){ toast('Cannot convert yet', res.error, 'warn'); return; }
    closeDrawer();
    toast('Employee record created', `${res.employee.name} · ${res.employee.id}`);
    refresh();
    setTimeout(() => showHiredConfirmation(res.employee, a), 120);
  };
}
function showHiredConfirmation(emp, app){
  openModal(`
    <div class="modal-body" style="text-align:center;padding:26px 22px">
      <div class="success-mark" style="margin:0 auto 14px">${icon('userplus',22)}</div>
      <div class="card-title" style="font-size:17px">${esc(emp.name)} is now an employee</div>
      <div class="card-sub" style="margin-top:5px">Onboarding has started and the record is live in the employee master.</div>
      <div class="ref-box" style="margin-top:18px"><span class="rl">Employee ID</span><span class="rv num">${esc(emp.id)}</span></div>
      <div class="row" style="justify-content:center;gap:8px;font-size:12px" class="muted">
        <span class="chip num">${esc(app.invitationId)}</span>${icon('arrowright',13)}
        <span class="chip num">${esc(app.id)}</span>${icon('arrowright',13)}
        <span class="chip num" style="border-color:var(--accent-line);background:var(--accent-tint);color:var(--accent)">${esc(emp.id)}</span>
      </div>
    </div>
    <div class="modal-foot"><button class="btn" data-close-modal>Close</button>
      <button class="btn" data-goto="#/onboarding" data-close-modal>Open onboarding</button>
      <button class="btn primary" data-open-emp="${esc(emp.id)}">View employee record</button></div>`);
}

/* ---------------------------------------------------------------------------
   18. VIEWS — RECRUITMENT STAGE QUEUES
   --------------------------------------------------------------------------- */
function stageQueue(cfg){
  const t = DataTable({
    rows:cfg.rows, rowId:r => cfg.rowId ? cfg.rowId(r) : r.id, per:10,
    searchPlaceholder:cfg.searchPlaceholder || 'Search applicant or ID',
    search:cfg.search || (r => `${r.id} ${r.name} ${r.position}`),
    filters:cfg.filters, cols:cfg.cols,
    onRow:cfg.onRow, emptyTitle:cfg.emptyTitle, emptyText:cfg.emptyText, emptyIcon:cfg.emptyIcon,
  });
  pendingTables.push(t);
  return t.html();
}
const appBase = [
  { key:'id', label:'Application', w:'134px', render:r => `<span class="num" style="color:var(--ink);font-weight:550">${esc(r.id)}</span>` },
  { key:'name', label:'Applicant', render:r => personCell(r.name, r.mobile, r.avatar) },
  { key:'position', label:'Position', render:r => `<div class="cellstack"><b style="font-weight:500">${esc(r.position)}</b><span>${esc(deptName(r.dept))}</span></div>` },
];

function viewScreening(){
  const rows = AppState.applicants.filter(a => ['Submitted','Screening','Shortlisted','On Hold'].includes(a.stage));
  const body = `
    ${metricStrip([
      { label:'Awaiting screening', value:stageCount('Submitted'), note:'not yet reviewed' },
      { label:'In screening', value:stageCount('Screening'), note:'review in progress' },
      { label:'Shortlisted', value:stageCount('Shortlisted'), note:'ready for interview' },
      { label:'On hold', value:stageCount('On Hold'), note:'kept in the talent pool' },
    ])}
    <div style="margin-top:14px">${stageQueue({
      rows,
      cols:[...appBase,
        { key:'applied', label:'Submitted', w:'118px', render:r => `<span class="muted">${relTime(r.applied, r.submittedTime)}</span>` },
        { key:'score', label:'Screening score', w:'150px', render:r => r.screening
            ? `<div class="meterline" style="max-width:120px"><div class="meter ${r.screening.score>=70?'ok':'warn'}"><i style="width:${r.screening.score}%"></i></div><span class="pct">${r.screening.score}%</span></div>`
            : '<span class="dim">Not screened</span>' },
        { key:'stage', label:'Status', w:'126px', render:r => badge(r.stage) },
        { key:'act', label:'', w:'150px', sort:false, render:r => `<div class="rowactions"><button class="btn sm primary" data-act="screen:${esc(r.id)}">${r.screening?'Re-screen':'Screen'}</button></div>` },
      ],
      onRow:id => openApplicant(id, 'Screening'),
      emptyTitle:'Nothing to screen', emptyIcon:'checkcircle',
      emptyText:'Every submitted application has been reviewed.',
    })}</div>`;
  return page('Screening', 'Check each application against the minimum qualifications for the position.', '', body);
}

function viewInterviews(){
  const rows = [];
  AppState.applicants.forEach(a => a.interviews.forEach(iv => rows.push({ ...iv, app:a, key:a.id + iv.id })));
  rows.sort((x,y) => (x.date < y.date ? 1 : -1));
  const upcoming = rows.filter(r => r.status === 'Scheduled');
  const body = `
    ${metricStrip([
      { label:'Scheduled', value:upcoming.length, note:'awaiting evaluation' },
      { label:'Today', value:rows.filter(r => r.date === d2s(TODAY)).length, note:fmtDate(d2s(TODAY),'dow') },
      { label:'Completed', value:rows.filter(r => r.status === 'Completed').length, note:'results recorded' },
      { label:'Awaiting scheduling', value:stageCount('Shortlisted'), note:'shortlisted applicants' },
    ])}
    <div style="margin-top:14px">${stageQueue({
        rows, rowId:r => r.app.id,
        search:r => `${r.app.id} ${r.app.name} ${r.app.position} ${r.interviewer}`,
        filters:[{ key:'status', label:'All statuses', options:['Scheduled','Completed'] },{ key:'round', label:'All rounds', options:['Initial interview','Second interview','Final interview'] }],
        cols:[
          { key:'date', label:'Schedule', w:'150px', render:r => `<div class="cellstack"><b>${fmtDate(r.date,'dow')}</b><span>${esc(r.time)} · ${esc(r.type)}</span></div>` },
          { key:'name', label:'Applicant', render:r => personCell(r.app.name, `${r.app.position}`, r.app.avatar) },
          { key:'round', label:'Round', w:'134px', render:r => esc(r.round) },
          { key:'interviewer', label:'Interviewer', render:r => `<span class="muted">${esc(r.interviewer)}</span>` },
          { key:'overall', label:'Rating', w:'92px', align:'right', render:r => r.status === 'Completed' ? `<b class="num">${r.overall}</b><span class="dim">/5</span>` : '<span class="dim">—</span>' },
          { key:'status', label:'Status', w:'118px', render:r => badge(r.status) },
          { key:'act', label:'', w:'128px', sort:false, render:r => r.status === 'Scheduled'
              ? `<div class="rowactions"><button class="btn sm primary" data-act="ivresult:${esc(r.app.id)}:${esc(r.id)}">Record result</button></div>` : '' },
        ],
        onRow:id => openApplicant(id, 'Interviews'),
        emptyTitle:'No interviews yet', emptyIcon:'calendar',
        emptyText:'Shortlisted applicants appear here once an interview is scheduled.',
      })}</div>
    <div style="margin-top:14px">
      ${card('Ready to schedule', `${stageCount('Shortlisted')} shortlisted applicant${stageCount('Shortlisted')===1?'':'s'}`,'',
        AppState.applicants.filter(a => a.stage === 'Shortlisted').length
        ? AppState.applicants.filter(a => a.stage === 'Shortlisted').map(a => `
          <div class="checklist-item">
            <span class="avatar" style="background:${a.avatar}">${initials(a.name)}</span>
            <span class="ci-body"><span class="ci-title">${esc(a.name)}</span><span class="ci-meta">${esc(a.position)} · screened ${relTime(a.screening?a.screening.date:a.applied)}</span></span>
            <button class="btn sm" data-act="interview:${esc(a.id)}">Schedule</button>
          </div>`).join('')
        : '<div class="empty"><b>No one waiting</b><p>Shortlisted applicants will appear here.</p></div>')}
    </div>`;
  return page('Interviews', 'Schedule interviews and record structured evaluations.', '', body);
}

function viewAssessments(){
  const rows = [];
  AppState.applicants.forEach(a => a.assessments.forEach(x => rows.push({ ...x, app:a })));
  const waiting = AppState.applicants.filter(a => a.stage === 'Assessment');
  const body = `
    ${metricStrip([
      { label:'Awaiting assessment', value:waiting.length, note:'passed the interview' },
      { label:'Assessments recorded', value:rows.length, note:'all applicants' },
      { label:'Pass rate', value:rows.length ? pct(rows.filter(r => r.result === 'Passed').length, rows.length) + '%' : '—', note:'across all tests' },
      { label:'Average score', value:rows.length ? Math.round(rows.reduce((s,r) => s + r.score, 0) / rows.length) : '—', note:'points' },
    ])}
    <div style="margin-top:14px">${stageQueue({
        rows, rowId:r => r.app.id,
        search:r => `${r.app.name} ${r.name} ${r.app.position}`,
        filters:[{ key:'result', label:'All results', options:['Passed','Failed'] },{ key:'type', label:'All types', options:[...new Set(rows.map(r => r.type))] }],
        cols:[
          { key:'name2', label:'Applicant', render:r => personCell(r.app.name, r.app.position, r.app.avatar), sortValue:r => r.app.name },
          { key:'name', label:'Assessment', render:r => `<div class="cellstack"><b style="font-weight:500">${esc(r.name)}</b><span>${esc(r.type)}</span></div>` },
          { key:'date', label:'Date', w:'110px', render:r => fmtDate(r.date) },
          { key:'score', label:'Score', w:'150px', render:r => `<div class="meterline" style="max-width:120px"><div class="meter ${r.result==='Passed'?'ok':'bad'}"><i style="width:${r.score}%"></i></div><span class="pct">${r.score}</span></div>` },
          { key:'result', label:'Result', w:'104px', render:r => badge(r.result) },
        ],
        onRow:id => openApplicant(id, 'Assessment'),
        emptyTitle:'No assessments recorded', emptyIcon:'target',
        emptyText:'Record skills or aptitude tests for applicants who passed the interview.',
      })}</div>
    <div style="margin-top:14px">
      ${card('Awaiting assessment', `${waiting.length} applicant${waiting.length===1?'':'s'}`,'',
        waiting.length ? waiting.map(a => `
          <div class="checklist-item">
            <span class="avatar" style="background:${a.avatar}">${initials(a.name)}</span>
            <span class="ci-body"><span class="ci-title">${esc(a.name)}</span><span class="ci-meta">${esc(a.position)}</span></span>
            <button class="btn sm" data-act="assess:${esc(a.id)}">Record</button>
          </div>`).join('') : '<div class="empty"><b>Nothing pending</b><p>Applicants move here after a passed interview.</p></div>')}
    </div>`;
  return page('Assessments', 'Skills, technical and aptitude results for applicants in the pipeline.', '', body);
}

function viewEvaluation(){
  const rows = AppState.applicants.filter(a => a.evaluation || a.stage === 'Final Evaluation');
  const body = `
    ${metricStrip([
      { label:'Awaiting evaluation', value:stageCount('Final Evaluation'), note:'assessment complete' },
      { label:'Selected', value:stageCount('Selected'), note:'approved for an offer' },
      { label:'Highly recommended', value:rows.filter(r => r.evaluation && r.evaluation.recommendation === 'Highly Recommended').length, note:'score 88% and above' },
      { label:'Average final score', value:rows.filter(r=>r.evaluation).length ? Math.round(rows.filter(r=>r.evaluation).reduce((s,r) => s + r.evaluation.overall, 0) / rows.filter(r=>r.evaluation).length) + '%' : '—', note:'weighted' },
    ])}
    <div style="margin-top:14px">${stageQueue({
      rows,
      cols:[...appBase,
        { key:'scr', label:'Screening', w:'96px', align:'right', render:r => r.evaluation ? `<span class="num muted">${r.evaluation.screening}%</span>` : '—', sortValue:r => r.evaluation?r.evaluation.screening:0 },
        { key:'ivs', label:'Interview', w:'96px', align:'right', render:r => r.evaluation ? `<span class="num muted">${r.evaluation.interview}%</span>` : '—', sortValue:r => r.evaluation?r.evaluation.interview:0 },
        { key:'asm', label:'Assessment', w:'104px', align:'right', render:r => r.evaluation ? `<span class="num muted">${r.evaluation.assessment}%</span>` : '—', sortValue:r => r.evaluation?r.evaluation.assessment:0 },
        { key:'ov', label:'Overall', w:'96px', align:'right', render:r => r.evaluation ? `<b class="num">${r.evaluation.overall}%</b>` : '<span class="dim">—</span>', sortValue:r => r.evaluation?r.evaluation.overall:0 },
        { key:'rec', label:'Recommendation', w:'170px', render:r => r.evaluation ? badge(r.evaluation.recommendation) : '<span class="dim">Pending</span>' },
        { key:'act', label:'', w:'132px', sort:false, render:r => r.stage === 'Final Evaluation'
            ? `<div class="rowactions"><button class="btn sm primary" data-act="evaluate:${esc(r.id)}">Evaluate</button></div>`
            : (r.stage === 'Selected' ? `<div class="rowactions"><button class="btn sm primary" data-act="offer:${esc(r.id)}">Prepare offer</button></div>` : '') },
      ],
      onRow:id => openApplicant(id, 'Evaluation'),
      emptyTitle:'No applicants at final evaluation', emptyIcon:'award',
      emptyText:'Applicants arrive here once interviews and assessments are complete.',
    })}</div>`;
  return page('Final evaluation', 'Screening, interview and assessment scores combined into one weighted recommendation.', '', body);
}

function viewOffers(){
  const rows = AppState.applicants.filter(a => a.offer).map(a => ({ ...a.offer, app:a }));
  const body = `
    ${metricStrip([
      { label:'Offers sent', value:rows.filter(r => r.status !== 'Draft').length, note:'all time' },
      { label:'Awaiting response', value:rows.filter(r => r.status === 'Sent').length, note:'with the applicant' },
      { label:'Accepted', value:rows.filter(r => r.status === 'Accepted').length, note:'moved to pre-employment' },
      { label:'Acceptance rate', value:rows.length ? pct(rows.filter(r => r.status === 'Accepted').length, rows.filter(r => r.status !== 'Draft').length) + '%' : '—', note:'of offers sent' },
      { label:'Ready for an offer', value:stageCount('Selected'), note:'selected applicants' },
    ])}
    <div style="margin-top:14px">${stageQueue({
      rows, rowId:r => r.app.id,
      search:r => `${r.id} ${r.app.name} ${r.position}`,
      filters:[{ key:'status', label:'All statuses', options:['Draft','Pending Approval','Approved','Sent','Accepted','Declined','Expired'] }],
      cols:[
        { key:'id', label:'Offer ID', w:'140px', render:r => `<span class="num muted">${esc(r.id)}</span>` },
        { key:'name', label:'Applicant', render:r => personCell(r.app.name, r.app.id, r.app.avatar), sortValue:r => r.app.name },
        { key:'position', label:'Position', render:r => `<div class="cellstack"><b style="font-weight:500">${esc(r.position)}</b><span>${esc(branchName(r.branch))}</span></div>` },
        { key:'salary', label:'Offered salary', w:'126px', align:'right', render:r => `<b class="num">${peso(r.salary)}</b>` },
        { key:'start', label:'Start date', w:'112px', render:r => fmtDate(r.start) },
        { key:'expiry', label:'Expires', w:'110px', render:r => `<span class="muted">${fmtDate(r.expiry)}</span>` },
        { key:'status', label:'Status', w:'126px', render:r => badge(r.status) },
        { key:'act', label:'', w:'138px', sort:false, render:r => r.status === 'Sent'
            ? `<div class="rowactions"><button class="btn sm primary" data-act="offerresp:${esc(r.app.id)}">Record response</button></div>` : '' },
      ],
      onRow:id => openApplicant(id, 'Evaluation'),
      emptyTitle:'No job offers yet', emptyIcon:'send',
      emptyText:'Prepare an offer once an applicant has been selected.',
    })}</div>`;
  return page('Job offers', 'Draft, approval, release and applicant response — all tracked against the application.', '', body);
}

function viewPreEmployment(){
  const rows = AppState.applicants.filter(a => a.preEmployment);
  const body = `
    ${metricStrip([
      { label:'In pre-employment', value:rows.filter(r => r.stage === 'Pre-Employment').length, note:'completing requirements' },
      { label:'Ready to hire', value:rows.filter(r => r.stage === 'Pre-Employment' && r.preEmployment.every(x => x.status !== 'Pending')).length, note:'all requirements in' },
      { label:'Hired', value:stageCount('Hired'), note:'converted to employees' },
    ])}
    <div style="margin-top:14px">${stageQueue({
      rows,
      cols:[...appBase,
        { key:'start', label:'Target start', w:'116px', render:r => r.offer ? fmtDate(r.offer.start) : '—', sortValue:r => r.offer?r.offer.start:'' },
        { key:'prog', label:'Requirements', w:'190px', sortValue:r => r.preEmployment.filter(x=>x.status!=='Pending').length,
          render:r => progressBar(r.preEmployment.filter(x => x.status !== 'Pending').length, r.preEmployment.length) },
        { key:'stage', label:'Status', w:'128px', render:r => badge(r.stage) },
        { key:'act', label:'', w:'166px', sort:false, render:r => r.stage === 'Pre-Employment'
            ? `<div class="rowactions"><button class="btn sm primary" data-act="convert:${esc(r.id)}">Convert to employee</button></div>`
            : (r.employeeId ? `<div class="rowactions"><button class="btn sm" data-open-emp="${esc(r.employeeId)}">Employee record</button></div>` : '') },
      ],
      onRow:id => openApplicant(id, 'Requirements'),
      emptyTitle:'No one in pre-employment', emptyIcon:'file',
      emptyText:'Applicants appear here after accepting a job offer.',
    })}</div>
    <div class="notice info" style="margin-top:14px">${icon('shield',15)}
      <div><b>Business rule.</b> Only applicants who complete this stage and are explicitly converted become employee records. Applying alone never creates an employee.</div></div>`;
  return page('Pre-employment', 'Requirement checklist before an applicant becomes an employee.', '', body);
}

/* ---------------------------------------------------------------------------
   19. PUBLIC APPLICANT PORTAL   (route: #/apply/<invitation-id>)
   This is what the applicant sees. It never exposes internal HR information.
   --------------------------------------------------------------------------- */
let portalExpRows = 1;

const PORTAL_SECTIONS = [
  { id:'sec-personal',  label:'Personal' },
  { id:'sec-contact',   label:'Contact' },
  { id:'sec-position',  label:'Position' },
  { id:'sec-education', label:'Education' },
  { id:'sec-experience',label:'Experience' },
  { id:'sec-review',    label:'Review' },
];
function portalShell(inner, showSteps, stepIdx){
  const steps = PORTAL_SECTIONS;
  return `
  <div class="portal">
    <header class="portal-top">
      <img class="brand-mark" src="logo.png" alt="Art Fresh Chicken" style="height:26px" />
      <div>
        <div style="font-size:13.5px;font-weight:620;letter-spacing:-.012em">${esc(COMPANY.name)}</div>
        <div style="font-size:11px;color:var(--ink-4)">Application portal</div>
      </div>
      <div style="flex:1 1 auto"></div>
      <span class="chip">${icon('lock',12)} Secure single-use link</span>
    </header>
    <div class="portal-wrap">
      ${showSteps ? `<div class="portal-steps" id="portalSteps">${steps.map((s,i) => `
        <button type="button" class="pstep ${i===stepIdx?'on':''}" data-jump="${s.id}"><b>${esc(s.label)}</b>Step ${i+1}</button>`).join('')}</div>` : ''}
      ${inner}
    </div>
    <div class="portal-foot">
      ${esc(COMPANY.name)} · This link was issued to one applicant and can be used once.<br>
      <span style="opacity:.75">Prototype — no data leaves this browser.</span>
    </div>
  </div>`;
}

function portalNotice(kind, title, lines, inv){
  return portalShell(`
    <div class="portal-card">
      <div class="notice ${kind}" style="align-items:flex-start">
        ${icon(kind === 'ok' ? 'checkcircle' : kind === 'danger' ? 'xcircle' : 'alert', 18)}
        <div>
          <div style="font-size:14.5px;font-weight:620;margin-bottom:3px">${esc(title)}</div>
          ${lines.map(l => `<div style="font-size:12.5px;line-height:1.6">${l}</div>`).join('')}
        </div>
      </div>
      ${inv ? `<div class="divider"></div>
        ${kv([
          ['Invitation ID', `<span class="num">${esc(inv.id)}</span>`],
          ['Position applied for', esc(inv.position)],
          inv.submittedOn ? ['Date submitted', `${fmtDate(inv.submittedOn,'long')}${inv.submittedTime?` at ${fmtTime(inv.submittedTime)}`:''}`] : null,
          inv.applicationId ? ['Application ID', `<span class="num strong">${esc(inv.applicationId)}</span>`] : null,
          inv.applicationId ? ['Application status', badge('Submitted')] : null,
        ].filter(Boolean))}` : ''}
      <div class="divider"></div>
      <div class="muted" style="font-size:12.5px;line-height:1.6">
        If you think this is a mistake, please contact the Human Resources office that issued your invitation.
        Do not share your link with anyone else.
      </div>
      <div style="margin-top:16px"><button class="btn" data-portal-exit>${icon('arrowright',14)} Back to the HR system (prototype)</button></div>
    </div>`);
}

function renderPortal(invId){
  const inv = AppState.invitations.find(i => i.id.toLowerCase() === String(invId).toLowerCase());
  const root = $('#portalRoot');
  $('#app').classList.add('hidden');
  root.classList.remove('hidden');
  document.body.style.overflow = '';

  if (!inv){
    root.innerHTML = portalNotice('danger','Invitation not found',
      ['The link you opened does not match any application invitation.',
       'Please check the link sent to you, or request a new one from the HR office.']);
    return bindPortal();
  }
  if (inv.status === 'Submitted'){
    root.innerHTML = portalNotice('ok','Application invitation already used.',
      ['This invitation has already been used to submit an application.',
       'Each invitation can be used only once.'], inv);
    return bindPortal();
  }
  if (inv.status === 'Revoked'){
    root.innerHTML = portalNotice('danger','This invitation has been cancelled',
      ['The HR office cancelled this application link.',
       inv.revokeReason ? esc(inv.revokeReason) : 'Please contact HR if you believe this is an error.'], inv);
    return bindPortal();
  }
  if (s2d(inv.expires) < TODAY){
    root.innerHTML = portalNotice('warn','This invitation has expired',
      [`The link was valid until ${fmtDate(inv.expires,'long')}.`,
       'Please request a new invitation from the HR office.'], inv);
    return bindPortal();
  }

  MockAPI.openInvitation(inv.id);
  portalExpRows = 1;
  root.innerHTML = portalShell(`
    <div style="margin-bottom:18px">
      <h1 class="portal-h1">Application form</h1>
      <p class="portal-lead">Please complete all required fields. Your answers go directly to the Human Resources office of ${esc(COMPANY.name)} This link can be used once, so review your details before submitting.</p>
      <div class="row" style="gap:8px;margin-top:12px;flex-wrap:wrap">
        <span class="chip">${icon('briefcase',12)} ${esc(inv.position)}</span>
        <span class="chip">${icon('building',12)} ${esc(branchName(inv.branch))}</span>
        <span class="chip num">${esc(inv.id)}</span>
      </div>
    </div>

    <form class="portal-card" id="applyForm" autocomplete="off">
      <section class="portal-section" id="sec-personal">
        <h3>Personal information</h3><div class="sdesc">Enter your name exactly as it appears on your government-issued ID.</div>
        <div class="fgrid fg3">
          <label class="field"><span class="flabel">First name <span class="req">*</span></span><input class="input" name="first" required></label>
          <label class="field"><span class="flabel">Middle name</span><input class="input" name="middle"></label>
          <label class="field"><span class="flabel">Last name <span class="req">*</span></span><input class="input" name="last" required></label>
          <label class="field"><span class="flabel">Suffix</span><input class="input" name="suffix" placeholder="Jr., Sr., III"></label>
          <label class="field"><span class="flabel">Date of birth <span class="req">*</span></span><input class="input" type="date" name="birth" required></label>
          <label class="field"><span class="flabel">Sex <span class="req">*</span></span>
            <select class="input" name="sex" required><option value="">Select</option><option>Male</option><option>Female</option></select></label>
          <label class="field"><span class="flabel">Civil status <span class="req">*</span></span>
            <select class="input" name="civil" required><option value="">Select</option><option>Single</option><option>Married</option><option>Widowed</option><option>Separated</option></select></label>
          <label class="field"><span class="flabel">Nationality</span><input class="input" name="nationality" value="Filipino"></label>
        </div>
      </section>

      <section class="portal-section" id="sec-contact">
        <h3>Contact information</h3><div class="sdesc">We will use these details to contact you about your application.</div>
        <div class="fgrid fg2">
          <label class="field"><span class="flabel">Mobile number <span class="req">*</span></span><input class="input" name="mobile" placeholder="09XX XXX XXXX" required></label>
          <label class="field"><span class="flabel">Email address</span><input class="input" type="email" name="email" placeholder="name@email.com"></label>
          <label class="field span2"><span class="flabel">Current address <span class="req">*</span></span><input class="input" name="address" placeholder="House no., street, barangay, city or municipality, province" required></label>
          <label class="field span2"><span class="flabel">Permanent address</span><input class="input" name="permAddress" placeholder="Leave blank if the same as your current address"></label>
        </div>
      </section>

      <section class="portal-section">
        <h3>Emergency contact</h3><div class="sdesc">The person we should contact in case of an emergency.</div>
        <div class="fgrid fg3">
          <label class="field"><span class="flabel">Full name <span class="req">*</span></span><input class="input" name="emgName" required></label>
          <label class="field"><span class="flabel">Relationship <span class="req">*</span></span>
            <select class="input" name="emgRel" required><option value="">Select</option><option>Spouse</option><option>Parent</option><option>Sibling</option><option>Child</option><option>Relative</option><option>Friend</option></select></label>
          <label class="field"><span class="flabel">Contact number <span class="req">*</span></span><input class="input" name="emgPhone" required></label>
        </div>
      </section>

      <section class="portal-section" id="sec-position">
        <h3>Position applied for</h3><div class="sdesc">This was set by the HR office when your invitation was issued.</div>
        <div class="fgrid fg2">
          <label class="field"><span class="flabel">Position</span><input class="input" value="${esc(inv.position)}" disabled></label>
          <label class="field"><span class="flabel">Department</span><input class="input" value="${esc(deptName(inv.dept))}" disabled></label>
          <label class="field"><span class="flabel">Preferred work location</span>
            <select class="input" name="branch">${BRANCHES.map(b => `<option value="${b.code}" ${b.code===inv.branch?'selected':''}>${esc(b.name)}</option>`).join('')}</select></label>
          <label class="field"><span class="flabel">Employment type preference</span>
            <select class="input" name="empType"><option>Full-time</option><option>Part-time</option><option>Project-Based</option><option>Seasonal</option></select></label>
        </div>
      </section>

      <section class="portal-section" id="sec-education">
        <h3>Educational background</h3>
        <div class="fgrid fg2">
          <label class="field"><span class="flabel">Highest educational attainment <span class="req">*</span></span>
            <select class="input" name="attainment" required><option value="">Select</option>${ATTAINMENT.map(a => `<option>${esc(a)}</option>`).join('')}</select></label>
          <label class="field"><span class="flabel">School or institution <span class="req">*</span></span><input class="input" name="school" required></label>
          <label class="field"><span class="flabel">Course or strand</span><input class="input" name="course"></label>
          <label class="field"><span class="flabel">Year graduated</span><input class="input" name="gradYear" placeholder="e.g. 2019"></label>
        </div>
      </section>

      <section class="portal-section" id="sec-experience">
        <h3>Work experience</h3><div class="sdesc">Start with your most recent employer. Leave blank if this is your first job.</div>
        <div id="expRows"></div>
        <button type="button" class="btn sm" id="addExp">${icon('plus',14)} Add another employer</button>
      </section>

      <section class="portal-section">
        <h3>Skills, certifications and licences</h3>
        <div class="fgrid fg1">
          <label class="field"><span class="flabel">Skills</span><input class="input" name="skills" placeholder="Separate with commas, e.g. Deboning, Machine operation, Inventory counting"></label>
          <label class="field"><span class="flabel">Certifications</span><input class="input" name="certifications" placeholder="e.g. Food Handler's Certificate, TESDA NC II"></label>
          <label class="field"><span class="flabel">Licences</span><input class="input" name="licenses" placeholder="e.g. Professional Driver's Licence"></label>
        </div>
      </section>

      <section class="portal-section">
        <h3>Additional information</h3>
        <div class="fgrid fg2">
          ${APPLICATION_QUESTIONS.map(q => `
            <label class="field ${q.type==='number'?'':'span2'}"><span class="flabel">${esc(q.label)} <span class="req">*</span></span>
              ${q.type === 'select'
                ? `<select class="input" name="q_${q.key}" required><option value="">Select</option>${q.options.map(o => `<option>${esc(o)}</option>`).join('')}</select>`
                : `<input class="input" type="number" name="q_${q.key}" placeholder="${esc(q.placeholder||'')}" required>`}
            </label>`).join('')}
        </div>
      </section>

      <section class="portal-section" id="sec-review">
        <h3>Certification and consent</h3>
        <label class="check" style="margin-top:6px"><input type="checkbox" name="consent" id="consentBox">
          <span>I certify that the information I provided is accurate and complete. I understand that any false statement may be a ground for disqualification or termination of employment. I allow ${esc(COMPANY.name)} to process my personal data for recruitment purposes.</span></label>
        <div class="errmsg" id="formErr" style="margin-top:10px"></div>
        <div class="row" style="margin-top:16px;gap:10px">
          <button type="button" class="btn primary lg" id="submitApp">${icon('send',15)} Submit application</button>
          <span class="muted" style="font-size:12px">You can submit this form only once.</span>
        </div>
      </section>
    </form>`, true, 0);

  renderExpRows();
  bindPortal();

  bindPortalSteps();
  $('#addExp').onclick = () => { portalExpRows++; renderExpRows(true); };
  $('#submitApp').onclick = () => submitPortalForm(inv);
  const form = $('#applyForm');
  form.addEventListener('input', e => {
    const f = e.target.closest('.field');
    if (f) f.classList.remove('invalid');
    e.target.classList.remove('err');
  });
}

function bindPortalSteps(){
  const bar = $('#portalSteps'); if (!bar) return;
  bar.querySelectorAll('[data-jump]').forEach(b => b.onclick = () => {
    const el = document.getElementById(b.dataset.jump);
    if (el) el.scrollIntoView({ behavior:'smooth', block:'start' });
  });
  const spy = () => {
    let active = 0;
    PORTAL_SECTIONS.forEach((sec, i) => {
      const el = document.getElementById(sec.id);
      if (el && el.getBoundingClientRect().top < 180) active = i;
    });
    bar.querySelectorAll('.pstep').forEach((b, i) => {
      b.classList.toggle('on', i === active);
      b.classList.toggle('done', i < active);
    });
  };
  window.removeEventListener('scroll', window._portalSpy);
  window._portalSpy = spy;
  window.addEventListener('scroll', spy, { passive:true });
  spy();
}
function renderExpRows(keep){
  const host = $('#expRows'); if (!host) return;
  const existing = keep ? Array.from(host.querySelectorAll('.exp-row')).map(r => ({
    company:r.querySelector('[name=expCompany]').value, position:r.querySelector('[name=expPosition]').value,
    start:r.querySelector('[name=expStart]').value, end:r.querySelector('[name=expEnd]').value,
    reason:r.querySelector('[name=expReason]').value,
  })) : [];
  host.innerHTML = Array.from({ length:portalExpRows }, (_, i) => {
    const v = existing[i] || {};
    return `<div class="exp-row">
      <div class="exp-head"><b>Employer ${i+1}</b><div style="flex:1 1 auto"></div>
        ${i > 0 ? `<button type="button" class="icon-btn" data-rm-exp="${i}" data-tip="Remove">${icon('trash',14)}</button>` : ''}</div>
      <div class="fgrid fg2">
        <label class="field"><span class="flabel">Company name</span><input class="input" name="expCompany" value="${esc(v.company||'')}"></label>
        <label class="field"><span class="flabel">Position held</span><input class="input" name="expPosition" value="${esc(v.position||'')}"></label>
        <label class="field"><span class="flabel">Start date</span><input class="input" type="month" name="expStart" value="${esc(v.start||'')}"></label>
        <label class="field"><span class="flabel">End date</span><input class="input" type="month" name="expEnd" value="${esc(v.end||'')}"></label>
        <label class="field span2"><span class="flabel">Reason for leaving</span><input class="input" name="expReason" value="${esc(v.reason||'')}"></label>
      </div></div>`;
  }).join('');
  host.querySelectorAll('[data-rm-exp]').forEach(b => b.onclick = () => { portalExpRows = Math.max(1, portalExpRows - 1); renderExpRows(true); });
}

function submitPortalForm(inv){
  const form = $('#applyForm');
  const err = $('#formErr');
  const required = Array.from(form.querySelectorAll('[required]'));
  let firstBad = null;
  required.forEach(el => {
    const ok = String(el.value).trim() !== '';
    el.classList.toggle('err', !ok);
    const f = el.closest('.field'); if (f) f.classList.toggle('invalid', !ok);
    if (!ok && !firstBad) firstBad = el;
  });
  if (firstBad){
    err.textContent = 'Please complete the required fields marked in red.';
    err.style.display = 'block';
    firstBad.scrollIntoView({ behavior:'smooth', block:'center' });
    firstBad.focus({ preventScroll:true });
    return;
  }
  if (!$('#consentBox').checked){
    err.textContent = 'Please confirm the certification and consent statement before submitting.';
    err.style.display = 'block';
    $('#consentBox').scrollIntoView({ behavior:'smooth', block:'center' });
    return;
  }
  err.style.display = 'none';
  const val = n => { const el = form.querySelector(`[name="${n}"]`); return el ? el.value.trim() : ''; };
  const experience = Array.from(form.querySelectorAll('.exp-row')).map(r => ({
    company:r.querySelector('[name=expCompany]').value.trim(),
    position:r.querySelector('[name=expPosition]').value.trim(),
    start:(r.querySelector('[name=expStart]').value || '') + '-01',
    end:(r.querySelector('[name=expEnd]').value || '') ? r.querySelector('[name=expEnd]').value + '-28' : 'Present',
    reason:r.querySelector('[name=expReason]').value.trim(),
  })).filter(x => x.company);
  const answers = {};
  APPLICATION_QUESTIONS.forEach(q => answers[q.key] = val('q_' + q.key));

  const btn = $('#submitApp');
  btn.disabled = true; btn.innerHTML = 'Submitting…';

  setTimeout(() => {
    const res = MockAPI.submitApplication(inv.id, {
      first:val('first'), middle:val('middle'), last:val('last'), suffix:val('suffix'),
      birth:val('birth'), sex:val('sex'), civil:val('civil'), nationality:val('nationality'),
      mobile:val('mobile'), email:val('email'), address:val('address'),
      permAddress:val('permAddress') || 'Same as current address',
      emgName:val('emgName'), emgRel:val('emgRel'), emgPhone:val('emgPhone'),
      position:inv.position, dept:inv.dept, branch:val('branch'), empType:val('empType'),
      attainment:val('attainment'), school:val('school'), course:val('course'), gradYear:val('gradYear'),
      experience, skills:val('skills'), certifications:val('certifications'), licenses:val('licenses'),
      answers,
    });
    if (!res.ok){ renderPortal(inv.id); return; }
    renderPortalSuccess(res.application, inv);
  }, 620);
}

function renderPortalSuccess(app, inv){
  $('#portalRoot').innerHTML = portalShell(`
    <div class="portal-card" style="text-align:center;padding:34px 26px">
      <div class="success-mark" style="margin:0 auto 14px">${icon('check',24)}</div>
      <h1 class="portal-h1">Application submitted</h1>
      <p class="portal-lead" style="margin:6px auto 0">Thank you, ${esc(app.first)}. Your application has been received by the Human Resources office.</p>

      <div class="ref-box" style="max-width:420px;margin:20px auto">
        <span class="rl">Application ID</span>
        <span class="rv num">${esc(app.id)}</span>
      </div>

      <div style="max-width:460px;margin:0 auto;text-align:left">
        ${kv([
          ['Position applied for', esc(app.position)],
          ['Preferred location', esc(branchName(app.branch))],
          ['Date submitted', `${fmtDate(app.applied,'long')} at ${esc(fmtTime(app.submittedTime))}`],
          ['Status', badge('Submitted')],
        ])}
      </div>

      <div class="notice ok" style="margin-top:18px;text-align:left">${icon('info',15)}
        <div>Please keep your Application ID. The HR office will contact you using the mobile number you provided if you are shortlisted for an interview.</div></div>

      <div class="notice warn" style="margin-top:10px;text-align:left">${icon('lock',15)}
        <div>This invitation link is now closed and cannot be used again.</div></div>

      <div style="margin-top:18px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="btn" data-portal-retry="${esc(inv.id)}">Try opening the link again</button>
        <button class="btn primary" data-portal-exit>Back to the HR system (prototype)</button>
      </div>
    </div>`);
  bindPortal();
}

function bindPortal(){
  $$('#portalRoot [data-portal-exit]').forEach(b => b.onclick = () => { location.hash = '#/recruitment/invitations'; });
  $$('#portalRoot [data-portal-retry]').forEach(b => b.onclick = () => { location.hash = `#/apply/${b.dataset.portalRetry.toLowerCase()}`; renderPortal(b.dataset.portalRetry); });
}
function leavePortal(){
  $('#portalRoot').classList.add('hidden');
  $('#portalRoot').innerHTML = '';
  $('#app').classList.remove('hidden');
}

/* ---------------------------------------------------------------------------
   20. VIEWS — EMPLOYEE MASTER + PROFILE
   --------------------------------------------------------------------------- */
function viewEmployees(){
  const rows = AppState.employees.slice();
  const t = DataTable({
    rows, rowId:r => r.id, per:14,
    searchPlaceholder:'Search name, employee ID, position',
    search:r => `${r.id} ${r.name} ${r.position} ${deptName(r.dept)} ${branchName(r.branch)}`,
    filters:[
      { key:'dept', label:'All departments', options:DEPARTMENTS.map(d => ({ value:d.code, label:d.name })) },
      { key:'branch', label:'All branches', options:BRANCHES.map(b => ({ value:b.code, label:b.name })) },
      { key:'status', label:'All statuses', options:EMPLOYMENT_STATUSES },
      { key:'type', label:'All types', options:EMPLOYMENT_TYPES },
      { key:'shift', label:'All shifts', options:SHIFTS.map(s => ({ value:s.code, label:s.name })) },
    ],
    cols:[
      { key:'id', label:'Employee ID', w:'132px', render:r => `<span class="num" style="color:var(--ink);font-weight:550">${esc(r.id)}</span>` },
      { key:'name', label:'Employee', render:r => personCell(r.name, r.email, r.avatar) },
      { key:'position', label:'Position', render:r => `<div class="cellstack"><b style="font-weight:500">${esc(r.position)}</b><span>${esc(r.level)}</span></div>` },
      { key:'dept', label:'Department', w:'126px', render:r => esc(deptName(r.dept)) },
      { key:'branch', label:'Branch', w:'150px', render:r => `<span class="muted">${esc(branchName(r.branch))}</span>` },
      { key:'hired', label:'Date hired', w:'112px', render:r => `<div class="cellstack"><b style="font-weight:500">${fmtDate(r.hired)}</b><span>${yearsSince(r.hired)} yrs</span></div>` },
      { key:'type', label:'Type', w:'112px', render:r => `<span class="muted">${esc(r.type)}</span>` },
      { key:'status', label:'Status', w:'122px', render:r => badge(r.status) },
    ],
    onRow:id => go(`#/employees/${id}`),
    emptyTitle:'No employees match these filters',
    emptyText:'Adjust the filters to see more records.',
  });
  pendingTables.push(t);
  const active = activeEmployees();
  const body = `
    ${metricStrip([
      { label:'Active employees', value:active.length, note:`${AppState.employees.length} records on file` },
      { label:'Regular', value:active.filter(e => e.status === 'Regular').length, note:pct(active.filter(e=>e.status==='Regular').length, active.length) + '% of workforce' },
      { label:'Probationary', value:active.filter(e => e.status === 'Probationary').length, note:'due for evaluation' },
      { label:'On leave', value:active.filter(e => e.status === 'On Leave').length, note:'currently away' },
      { label:'Separated', value:AppState.employees.filter(e => e.status === 'Separated').length, note:'this year' },
    ])}
    <div style="margin-top:14px">${t.html()}</div>`;
  return page('Employee master', 'Only applicants who were officially hired appear here.', `
    <button class="btn" data-action="export">${icon('download',15)} Export</button>
    <button class="btn primary" data-goto="#/recruitment/preemployment">${icon('userplus',15)} Hire from pipeline</button>`, body);
}

const EMP_TABS = ['Overview','Employment','Compensation','Attendance','Leave','Performance','Training','Documents','Movement','Relations','Activity'];
let currentEmpTab = 'Overview';

function empTabContent(e){
  const leaveRows = AppState.leave.filter(l => l.emp === e.id);
  const perfRows = AppState.performance.filter(p => p.emp === e.id);
  const trainRows = AppState.trainings.filter(t => t.emp === e.id);
  const moveRows = AppState.movements.filter(m => m.emp === e.id);
  const caseRows = AppState.cases.filter(c => c.emp === e.id);
  const docs = docsFor(e);
  const last14 = Array.from({ length:14 }, (_, i) => d2s(addDays(TODAY, -13 + i)));

  switch (currentEmpTab){
    case 'Overview': return `
      <div class="grid g2" style="align-items:start">
        ${card('Personal information','','', kv([
          ['Full name', `${esc(e.first)} ${esc(e.middle||'')} ${esc(e.last)}`],
          ['Date of birth', `${fmtDate(e.birth,'long')} <span class="dim">(${2026 - Number(e.birth.slice(0,4))} yrs)</span>`],
          ['Sex', esc(e.sex)], ['Civil status', esc(e.civil)], ['Nationality', esc(e.nationality)],
          ['Mobile', esc(e.mobile)], ['Email', esc(e.email)], ['Address', esc(e.address)],
        ]))}
        ${card('Emergency contact','','', kv([
          ['Name', esc(e.emergency.name)], ['Relationship', esc(e.emergency.rel)], ['Contact number', esc(e.emergency.phone)],
        ])) + card('Educational background','','', kv([
          ['Attainment', esc(e.education.attainment)], ['School', esc(e.education.school)],
          ['Course', esc(e.education.course)], ['Year graduated', esc(e.education.year)],
        ]))}
      </div>`;

    case 'Employment': return `
      <div class="grid g2" style="align-items:start">
        ${card('Employment details','','', kv([
          ['Employee ID', `<span class="num">${esc(e.id)}</span>`],
          ['Position', esc(e.position)], ['Level', esc(e.level)],
          ['Department', esc(deptName(e.dept))], ['Branch', esc(branchName(e.branch))],
          ['Employment type', esc(e.type)], ['Status', badge(e.status)],
          ['Date hired', fmtDate(e.hired,'long')], ['Length of service', `${yearsSince(e.hired)} years`],
          e.probationEnd ? ['Probation ends', fmtDate(e.probationEnd,'long')] : null,
          ['Immediate supervisor', esc(e.supervisor || '—')],
          e.statusNote ? ['Status note', esc(e.statusNote)] : null,
        ].filter(Boolean)))}
        ${card('Work schedule','','', kv([
          ['Assigned shift', `${esc(shiftBy(e.shift).name)} <span class="muted">(${shiftBy(e.shift).start} – ${shiftBy(e.shift).end})</span>`],
          ['Rest day', esc(e.restDay)],
          ['Work location', esc(branchName(e.branch))],
        ])) + (e.fromApplication ? card('Hiring source','Traceable back to the original application','', `
          <div class="row" style="gap:8px;flex-wrap:wrap">
            <span class="chip num">${esc((appById(e.fromApplication)||{}).invitationId || '—')}</span>${icon('arrowright',13,'dim')}
            <button class="chip num" data-open-app="${esc(e.fromApplication)}" style="cursor:pointer">${esc(e.fromApplication)}</button>${icon('arrowright',13,'dim')}
            <span class="chip num" style="border-color:var(--accent-line);background:var(--accent-tint);color:var(--accent)">${esc(e.id)}</span>
          </div>`) : '')}
      </div>`;

    case 'Compensation': {
      const totalAllow = e.allowances.reduce((s,a) => s + a.amount, 0);
      return `<div class="grid g2" style="align-items:start">
        ${card('Compensation summary','Not a payroll computation','', `
          <div class="row wrap" style="gap:10px;margin-bottom:12px">
            <div class="scorebox"><span class="sl">Basic salary</span><span class="sv" style="font-size:17px">${peso(e.salary)}</span></div>
            <div class="scorebox"><span class="sl">Allowances</span><span class="sv" style="font-size:17px">${peso(totalAllow)}</span></div>
            <div class="scorebox" style="border-color:var(--accent-line);background:var(--accent-tint)"><span class="sl">Monthly total</span><span class="sv" style="font-size:17px;color:var(--accent)">${peso(e.salary + totalAllow)}</span></div>
          </div>
          <table class="data"><thead><tr><th>Allowance</th><th class="right">Amount</th></tr></thead>
          <tbody>${e.allowances.map(a => `<tr><td class="primary">${esc(a.name)}</td><td class="right num">${peso(a.amount)}</td></tr>`).join('')}</tbody></table>`)}
        ${card('Government contributions','Enrolment status only','', kv([
          ['SSS', badge('Verified')], ['PhilHealth', badge('Verified')], ['Pag-IBIG', badge('Verified')],
          ['TIN', badge('Verified')], ['Bank account', `<span class="muted">Payroll account ending 4417</span>`],
        ])) + card('Salary history','','', moveRows.filter(m => m.prevSalary !== m.newSalary).length
          ? `<table class="data"><thead><tr><th>Effective</th><th>Reason</th><th class="right">From</th><th class="right">To</th></tr></thead>
             <tbody>${moveRows.filter(m => m.prevSalary !== m.newSalary).map(m => `<tr><td>${fmtDate(m.effective)}</td><td class="muted">${esc(m.type)}</td>
             <td class="right num muted">${peso(m.prevSalary)}</td><td class="right num strong">${peso(m.newSalary)}</td></tr>`).join('')}</tbody></table>`
          : '<div class="empty"><b>No salary changes on file</b><p>Adjustments recorded through movement will appear here.</p></div>')}
      </div>`;
    }

    case 'Attendance': {
      const recs = last14.filter(d => s2d(e.hired) <= s2d(d)).map(d => attendanceFor(e, d));
      const present = recs.filter(r => r.status === 'Present' || r.status === 'Late').length;
      const workdays = recs.filter(r => r.status !== 'Rest Day').length;
      if (!recs.length) return `<div class="empty">${icon('clock',22)}<b>No attendance yet</b><p>${esc(e.name)} starts on ${fmtDate(e.hired,'long')}. Time records will appear from the first working day.</p></div>`;
      return `${card('Attendance — last 14 days', `${present} of ${workdays} work days`, '', `
        <div class="row wrap" style="gap:10px;margin-bottom:12px">
          <div class="scorebox"><span class="sl">Attendance rate</span><span class="sv">${pct(present, workdays)}<small>%</small></span></div>
          <div class="scorebox"><span class="sl">Late</span><span class="sv">${recs.filter(r => r.status === 'Late').length}</span></div>
          <div class="scorebox"><span class="sl">Absent</span><span class="sv">${recs.filter(r => r.status === 'Absent').length}</span></div>
          <div class="scorebox"><span class="sl">Overtime</span><span class="sv">${Math.round(recs.reduce((s,r) => s + r.ot, 0)/60)}<small> hrs</small></span></div>
        </div>
        <table class="data"><thead><tr><th>Date</th><th>Shift</th><th>Time in</th><th>Time out</th><th class="right">Late (min)</th><th class="right">OT (min)</th><th style="width:110px">Status</th></tr></thead>
        <tbody>${recs.slice().reverse().map(r => `<tr>
          <td class="primary">${fmtDate(r.date,'dow')}</td><td class="muted">${esc(shiftBy(r.shift).name)}</td>
          <td class="num">${esc(r.in)}</td><td class="num">${esc(r.out)}</td>
          <td class="right num ${r.late?'':'dim'}">${r.late || '—'}</td><td class="right num ${r.ot?'':'dim'}">${r.ot || '—'}</td>
          <td>${badge(r.status)}</td></tr>`).join('')}</tbody></table>`)}`;
    }

    case 'Leave': {
      const used = {};
      LEAVE_TYPES.forEach(t => used[t.code] = leaveRows.filter(l => l.type === t.code && l.status === 'Approved').reduce((s,l) => s + l.days, 0));
      return `<div class="grid g2" style="align-items:start">
        ${card('Leave balance','Credits for 2026','', `
          <table class="data"><thead><tr><th>Leave type</th><th class="right">Credits</th><th class="right">Used</th><th class="right">Remaining</th></tr></thead>
          <tbody>${LEAVE_TYPES.map(t => `<tr><td class="primary">${esc(t.name)}</td>
            <td class="right num">${t.credits}</td><td class="right num">${used[t.code]}</td>
            <td class="right num strong">${t.credits - used[t.code]}</td></tr>`).join('')}</tbody></table>`)}
        ${card('Leave history', `${leaveRows.length} record${leaveRows.length===1?'':'s'}`,'', leaveRows.length
          ? `<table class="data"><thead><tr><th>Reference</th><th>Type</th><th>Dates</th><th class="right">Days</th><th>Status</th></tr></thead>
             <tbody>${leaveRows.map(l => `<tr><td class="mono">${esc(l.id)}</td><td>${esc((LEAVE_TYPES.find(t=>t.code===l.type)||{}).name)}</td>
             <td class="muted">${fmtDate(l.start,'md')}–${fmtDate(l.end,'md')}</td><td class="right num">${l.days}</td><td>${badge(l.status)}</td></tr>`).join('')}</tbody></table>`
          : '<div class="empty"><b>No leave filed</b><p>Leave requests will appear here once filed.</p></div>')}
      </div>`;
    }

    case 'Performance': return perfRows.length ? perfRows.map(p => card(p.period, `${esc(p.type)} · evaluator ${esc(p.evaluator)}`, badge(p.status), `
      ${p.status === 'Completed' ? `
        <div class="row wrap" style="gap:10px;margin-bottom:12px">
          <div class="scorebox" style="border-color:var(--accent-line);background:var(--accent-tint)"><span class="sl">Overall rating</span><span class="sv" style="color:var(--accent)">${p.overall}<small>/5</small></span></div>
          <div class="scorebox"><span class="sl">Decision</span><span class="sv" style="font-size:14px">${esc(p.decision||'—')}</span></div>
        </div>
        <table class="data"><thead><tr><th>KPI</th><th class="right" style="width:80px">Weight</th><th class="right" style="width:80px">Rating</th><th style="width:140px">Score</th></tr></thead>
        <tbody>${p.kpis.map(k => `<tr><td class="primary">${esc(k.name)}</td><td class="right muted">${k.weight}%</td>
          <td class="right num">${k.rating}/5</td><td><div class="meter"><i style="width:${k.rating/5*100}%"></i></div></td></tr>`).join('')}</tbody></table>
        <div class="divider"></div><div class="flabel">Remarks</div><div class="note-body">${esc(p.remarks)}</div>`
      : `<div class="notice info">${icon('clock',15)}<div>Evaluation due ${fmtDate(p.due,'long')}.</div></div>
         <button class="btn primary sm" style="margin-top:10px" data-act="review:${esc(p.id)}">Complete evaluation</button>`}
    `)).join('') : `<div class="empty">${icon('target',22)}<b>No evaluations on file</b><p>Performance reviews will appear here once scheduled.</p></div>`;

    case 'Training': return card('Training records', `${trainRows.length} record${trainRows.length===1?'':'s'}`, '', trainRows.length
      ? `<table class="data"><thead><tr><th>Programme</th><th>Type</th><th>Date</th><th class="right">Hours</th><th>Result</th><th>Certificate</th><th style="width:118px">Status</th></tr></thead>
         <tbody>${trainRows.map(t => `<tr><td class="primary">${esc(t.name)}</td><td class="muted">${esc(t.type)}</td>
         <td class="muted">${fmtDate(t.date)}</td><td class="right num">${t.hours}</td><td>${badge(t.result)}</td>
         <td class="mono">${esc(t.certificate)}</td><td>${badge(t.status)}</td></tr>`).join('')}</tbody></table>`
      : '<div class="empty"><b>No training recorded</b><p>Completed programmes and certifications appear here.</p></div>');

    case 'Documents': return card('201 file documents', `${docs.filter(d => d.status !== 'Missing').length} of ${docs.length} on file`, '', `
      <div style="margin-bottom:12px">${progressBar(docs.filter(d => d.status !== 'Missing').length, docs.length)}</div>
      <div class="grid g2">${docs.map(d => `
        <div class="doc-tile"><span class="doc-ico">${icon(d.status === 'Missing' ? 'alert' : 'file',15)}</span>
          <div style="flex:1 1 auto;min-width:0"><div class="ci-title">${esc(d.name)}</div>
            <div class="ci-meta">${esc(d.category)}${d.uploaded ? ` · uploaded ${fmtDate(d.uploaded)}` : ''}${d.expiry ? ` · expires ${fmtDate(d.expiry)}` : ''}</div></div>
          ${badge(d.status)}</div>`).join('')}</div>`);

    case 'Movement': return card('Career and movement history', `${moveRows.length} record${moveRows.length===1?'':'s'}`, '', moveRows.length
      ? `<div class="timeline">${moveRows.sort((a,b) => a.effective < b.effective ? 1 : -1).map(m => `
          <div class="tl-item ${s2d(m.effective) > TODAY ? 'current' : 'done'}">
            <div class="tl-title">${esc(m.type)} ${badge(m.status)}</div>
            <div class="tl-meta"><span>Effective ${fmtDate(m.effective,'long')}</span>${m.approvedBy?`<span>· approved by ${esc(m.approvedBy)}</span>`:''}</div>
            <div class="tl-note">${esc(m.from)} → <b>${esc(m.to)}</b>${m.prevSalary !== m.newSalary ? ` · ${peso(m.prevSalary)} → <b>${peso(m.newSalary)}</b>` : ''}<br>
              <span class="muted">${esc(m.reason)}</span></div>
          </div>`).join('')}</div>`
      : '<div class="empty"><b>No movement on file</b><p>Promotions, transfers and adjustments appear here.</p></div>');

    case 'Relations': return caseRows.length
      ? caseRows.map(c => card(c.type, `${esc(c.id)} · filed ${fmtDate(c.date,'long')}`, badge(c.status), `
          ${c.confidential ? `<div class="conf-flag" style="margin-bottom:10px">${icon('lock',12)} Confidential — restricted to HR Manager and above</div>` : ''}
          ${kv([['Description', esc(c.description)],['Handling officer', esc(c.officer)],['Target closing date', fmtDate(c.dueDate,'long')],
                ['Resolution', c.resolution ? esc(c.resolution) : '<span class="dim">Ongoing</span>']])}`)).join('')
      : `<div class="empty">${icon('shield',22)}<b>No employee relations cases</b><p>This employee has no disciplinary, grievance or incident records.</p></div>`;

    case 'Activity': {
      const acts = AppState.audit.filter(a => a.record === e.id).concat([
        { at:`${e.hired} 09:00`, user:'HR', module:'Employees', action:'Employee record created', record:e.id, detail:e.fromApplication ? `From application ${e.fromApplication}` : 'Migrated record' },
      ]);
      return card('Activity log','All recorded changes for this employee','', `
        <div class="timeline">${acts.map(a => `
          <div class="tl-item done"><div class="tl-title">${esc(a.action)}</div>
          <div class="tl-meta"><span>${esc(a.at)}</span><span>·</span><span>${esc(a.user)}</span><span>·</span><span>${esc(a.module)}</span></div>
          ${a.detail ? `<div class="tl-note">${esc(a.detail)}</div>` : ''}</div>`).join('')}</div>`);
    }
  }
}

function viewEmployeeProfile(id){
  const e = empById(id);
  if (!e) return page('Employee not found', '', '', `<div class="empty">${icon('alert',22)}<b>No record for ${esc(id)}</b><p>The employee record may have been removed.</p><button class="btn sm" data-goto="#/employees">Back to employee master</button></div>`);
  const onb = AppState.onboarding.find(o => o.emp === e.id);
  const sep = AppState.offboarding.find(o => o.emp === e.id);
  renderCrumbs([e.name], ['Employees','Employee master']);
  const body = `
    <div class="card" style="margin-bottom:14px">
      <div class="card-body">
        <div class="row" style="gap:14px;align-items:flex-start;flex-wrap:wrap">
          <span class="avatar xl" style="background:${e.avatar}">${initials(e.name)}</span>
          <div style="flex:1 1 260px;min-width:0">
            <div class="row" style="gap:8px;flex-wrap:wrap">
              <h1 class="page-title" style="font-size:21px;margin:0">${esc(e.name)}</h1>${badge(e.status)}
              ${e.type === 'Probationary' && e.probationEnd ? `<span class="chip">${icon('clock',12)} Probation ends ${fmtDate(e.probationEnd)}</span>` : ''}
            </div>
            <div class="muted" style="font-size:13px;margin-top:3px">${esc(e.position)} · ${esc(deptName(e.dept))} · ${esc(branchName(e.branch))}</div>
            <div class="dim" style="font-size:12px;margin-top:2px"><span class="num">${esc(e.id)}</span> · hired ${fmtDate(e.hired,'long')} · reports to ${esc(e.supervisor||'—')}</div>
          </div>
          <div class="row" style="gap:8px">
            ${e.status !== 'Separated' ? `<button class="btn" data-act="movement:${esc(e.id)}">${icon('arrowright',15)} Record movement</button>
            <button class="btn" data-act="offboard:${esc(e.id)}">${icon('logout',15)} Start offboarding</button>` : ''}
            <button class="btn" data-goto="#/employees">${icon('users',15)} All employees</button>
          </div>
        </div>
        ${onb && onb.stepIdx < onb.steps.length ? `
          <div class="divider"></div>
          <div class="row" style="gap:12px;flex-wrap:wrap">
            <span class="chip accent">${icon('bolt',12)} Onboarding in progress</span>
            <div style="flex:1 1 240px">${progressBar(onb.stepIdx, onb.steps.length)}</div>
            <span class="muted" style="font-size:12px">Next: ${esc(onb.steps[onb.stepIdx] || 'Complete')}</span>
            <button class="btn sm" data-act="onbstep:${esc(onb.id)}">Complete step</button>
          </div>` : ''}
        ${sep ? `<div class="divider"></div>
          <div class="notice ${sep.status==='Completed'?'':'warn'}">${icon('logout',15)}
          <div><b>${esc(sep.type)}</b> — ${esc(sep.stage)} · last day ${fmtDate(sep.lastDay,'long')}
          <button class="btn sm" style="margin-left:8px" data-goto="#/offboarding">Open offboarding</button></div></div>` : ''}
      </div>
    </div>
    <div class="tabs" style="margin-bottom:14px">${EMP_TABS.map(t => `<button class="tab ${t===currentEmpTab?'on':''}" data-emptab="${t}">${t}</button>`).join('')}</div>
    <div id="empTabBody">${empTabContent(e)}</div>`;
  return body;
}

/* ---------------------------------------------------------------------------
   21. VIEWS — ONBOARDING, MOVEMENT, OFFBOARDING
   --------------------------------------------------------------------------- */
function viewOnboarding(){
  const rows = AppState.onboarding.map(o => ({ ...o, e:empById(o.emp) })).filter(r => r.e);
  const active = rows.filter(r => r.stepIdx < r.steps.length);
  const body = `
    ${metricStrip([
      { label:'In onboarding', value:active.length, note:'not yet complete' },
      { label:'Completed', value:rows.length - active.length, note:'fully onboarded' },
      { label:'Starting this month', value:rows.filter(r => r.e.hired.slice(0,7) === d2s(TODAY).slice(0,7)).length, note:fmtDate(d2s(TODAY),'long').split(' ')[0] },
      { label:'Average completion', value:rows.length ? pct(rows.reduce((s,r) => s + r.stepIdx, 0), rows.reduce((s,r) => s + r.steps.length, 0)) + '%' : '—', note:'across all new hires' },
    ])}
    <div style="margin-top:14px">${stageQueue({
      rows, rowId:r => r.emp,
      search:r => `${r.e.name} ${r.e.id} ${r.e.position}`,
      filters:[{ key:'owner', label:'All owners', options:[...new Set(rows.map(r => r.owner))] }],
      cols:[
        { key:'emp', label:'Employee', render:r => personCell(r.e.name, r.e.id, r.e.avatar), sortValue:r => r.e.name },
        { key:'position', label:'Position', render:r => `<div class="cellstack"><b style="font-weight:500">${esc(r.e.position)}</b><span>${esc(deptName(r.e.dept))}</span></div>`, sortValue:r => r.e.position },
        { key:'started', label:'Started', w:'110px', render:r => fmtDate(r.started) },
        { key:'step', label:'Current step', render:r => r.stepIdx >= r.steps.length ? '<span class="muted">All steps complete</span>' : `<span class="muted">${esc(r.steps[r.stepIdx])}</span>`, sortValue:r => r.stepIdx },
        { key:'prog', label:'Progress', w:'200px', render:r => progressBar(r.stepIdx, r.steps.length), sortValue:r => r.stepIdx / r.steps.length },
        { key:'act', label:'', w:'140px', sort:false, render:r => r.stepIdx < r.steps.length
            ? `<div class="rowactions"><button class="btn sm primary" data-act="onbstep:${esc(r.id)}">Complete step</button></div>` : '' },
      ],
      onRow:id => go(`#/employees/${id}`),
      emptyTitle:'No one in onboarding', emptyIcon:'userplus',
      emptyText:'New hires appear here automatically when an applicant is converted to an employee.',
    })}</div>
    ${active.length ? `<div class="grid g2" style="margin-top:14px">${active.slice(0,2).map(r => card(r.e.name, `${esc(r.e.position)} · started ${fmtDate(r.started)}`, badge(r.stepIdx >= r.steps.length ? 'Completed' : 'In Progress'), `
      <div class="timeline">${r.steps.map((s,i) => `
        <div class="tl-item ${i < r.stepIdx ? 'done' : i === r.stepIdx ? 'current' : 'pending'}">
          <div class="tl-title">${esc(s)}</div>
          <div class="tl-meta">${i < r.stepIdx ? 'Completed' : i === r.stepIdx ? 'In progress' : 'Not started'}</div>
        </div>`).join('')}</div>`)).join('')}</div>` : ''}`;
  return page('Onboarding', 'Structured first-weeks workflow for every new hire.', '', body);
}

function viewMovement(){
  const rows = AppState.movements.map(m => ({ ...m, e:empById(m.emp) })).filter(r => r.e);
  const body = `
    ${metricStrip([
      { label:'Movements this year', value:rows.length, note:'all types' },
      { label:'Promotions', value:rows.filter(r => r.type === 'Promotion').length, note:'internal advancement' },
      { label:'Transfers', value:rows.filter(r => r.type === 'Transfer').length, note:'between branches' },
      { label:'Regularizations', value:rows.filter(r => r.type === 'Probationary → Regular').length, note:'after probation' },
      { label:'Pending approval', value:rows.filter(r => r.status === 'Pending Approval').length, note:'effective in future' },
    ])}
    <div style="margin-top:14px">${stageQueue({
      rows, rowId:r => r.emp,
      search:r => `${r.e.name} ${r.type} ${r.from} ${r.to}`,
      filters:[
        { key:'type', label:'All movement types', options:[...new Set(rows.map(r => r.type))] },
        { key:'status', label:'All statuses', options:['Approved','Pending Approval'] },
      ],
      cols:[
        { key:'id', label:'Reference', w:'118px', cls:'mono', render:r => esc(r.id) },
        { key:'emp', label:'Employee', render:r => personCell(r.e.name, r.e.id, r.e.avatar), sortValue:r => r.e.name },
        { key:'type', label:'Movement', w:'170px', render:r => `<b style="font-weight:550;color:var(--ink)">${esc(r.type)}</b>` },
        { key:'change', label:'Change', render:r => `<span class="muted">${esc(r.from)}</span> → <b style="font-weight:550">${esc(r.to)}</b>`, sort:false },
        { key:'salary', label:'Salary', w:'150px', align:'right', render:r => r.prevSalary !== r.newSalary
            ? `<span class="muted num" style="text-decoration:line-through">${peso(r.prevSalary)}</span> <b class="num">${peso(r.newSalary)}</b>` : '<span class="dim">No change</span>' },
        { key:'effective', label:'Effective', w:'112px', render:r => fmtDate(r.effective) },
        { key:'status', label:'Status', w:'140px', render:r => badge(r.status) },
      ],
      onRow:id => go(`#/employees/${id}`),
      emptyTitle:'No movement records', emptyIcon:'arrowright',
      emptyText:'Promotions, transfers and adjustments will appear here.',
    })}</div>`;
  return page('Career & movement', 'Promotions, transfers, regularizations and salary adjustments.', '', body);
}

function viewOffboarding(){
  const rows = AppState.offboarding.map(o => ({ ...o, e:empById(o.emp) })).filter(r => r.e);
  const STEPS = ['Separation Request','Approval','Exit Interview','Clearance','Asset Return','Final HR Processing'];
  const body = `
    ${metricStrip([
      { label:'Active cases', value:rows.filter(r => r.status !== 'Completed').length, note:'in progress' },
      { label:'Resignations', value:rows.filter(r => r.type === 'Resignation').length, note:'this year' },
      { label:'End of contract', value:rows.filter(r => r.type === 'End of Contract').length, note:'this year' },
      { label:'Completed', value:rows.filter(r => r.status === 'Completed').length, note:'fully cleared' },
    ])}
    <div style="margin-top:14px">${stageQueue({
      rows, rowId:r => r.id,
      search:r => `${r.e.name} ${r.type} ${r.id}`,
      filters:[
        { key:'type', label:'All separation types', options:['Resignation','End of Contract','Termination','Retirement','Redundancy'] },
        { key:'status', label:'All statuses', options:['In Progress','Completed'] },
      ],
      cols:[
        { key:'id', label:'Reference', w:'124px', cls:'mono', render:r => esc(r.id) },
        { key:'emp', label:'Employee', render:r => personCell(r.e.name, `${r.e.position} · ${deptName(r.e.dept)}`, r.e.avatar), sortValue:r => r.e.name },
        { key:'type', label:'Type', w:'146px', render:r => `<b style="font-weight:550;color:var(--ink)">${esc(r.type)}</b>` },
        { key:'lastDay', label:'Last day', w:'112px', render:r => fmtDate(r.lastDay) },
        { key:'stage', label:'Stage', w:'160px', render:r => `<span class="muted">${esc(r.stage)}</span>`, sortValue:r => r.stageIdx },
        { key:'clr', label:'Clearance', w:'186px', render:r => progressBar(r.clearance.filter(c => c.status === 'Complete').length, r.clearance.length), sortValue:r => r.clearance.filter(c=>c.status==='Complete').length },
        { key:'status', label:'Status', w:'122px', render:r => badge(r.status) },
      ],
      onRow:id => openOffboarding(id),
      emptyTitle:'No separations on record', emptyIcon:'logout',
      emptyText:'Start offboarding from an employee profile when someone resigns or a contract ends.',
    })}</div>`;
  return page('Offboarding', 'Separation, clearance and final processing.', '', body);
}

function openOffboarding(id){
  const o = AppState.offboarding.find(x => x.id === id); if (!o) return;
  const e = empById(o.emp); if (!e) return;
  const STEPS = ['Separation Request','Approval','Exit Interview','Clearance','Asset Return','Final HR Processing'];
  openDrawer(`
    <div class="drawer-head">
      <div class="row" style="align-items:flex-start">
        <span class="avatar lg" style="background:${e.avatar}">${initials(e.name)}</span>
        <div style="flex:1 1 auto;min-width:0">
          <div class="row" style="gap:8px"><span style="font-size:16px;font-weight:620;letter-spacing:-.015em">${esc(e.name)}</span>${badge(o.status)}</div>
          <div class="muted" style="font-size:12.5px;margin-top:2px"><span class="num">${esc(o.id)}</span> · ${esc(o.type)} · last day ${fmtDate(o.lastDay,'long')}</div>
        </div>
        <button class="icon-btn" data-close-drawer>${icon('close',17)}</button>
      </div>
    </div>
    <div class="drawer-body">
      ${card('Separation details','','', kv([
        ['Employee', `${esc(e.name)} <span class="num muted">${esc(e.id)}</span>`],
        ['Position', `${esc(e.position)} · ${esc(deptName(e.dept))}`],
        ['Separation type', esc(o.type)], ['Reason', esc(o.reason)],
        ['Date filed', fmtDate(o.filed,'long')], ['Last working day', fmtDate(o.lastDay,'long')],
        ['Current stage', badge(o.stage)],
      ]))}
      <div style="margin-top:14px">${card('Separation workflow','','', `
        <div class="timeline">${STEPS.map((s,i) => `
          <div class="tl-item ${i < o.stageIdx ? 'done' : i === o.stageIdx ? 'current' : 'pending'}">
            <div class="tl-title">${esc(s)}</div>
            <div class="tl-meta">${i < o.stageIdx ? 'Completed' : i === o.stageIdx ? 'In progress' : 'Not started'}</div>
          </div>`).join('')}
          <div class="tl-item ${o.status === 'Completed' ? 'done' : 'pending'}"><div class="tl-title">Separation completed</div>
            <div class="tl-meta">${o.status === 'Completed' ? 'Employee status set to Separated' : 'Pending'}</div></div>
        </div>`)}</div>
      <div class="grid g2" style="margin-top:14px;align-items:start">
        ${card('Clearance checklist', `${o.clearance.filter(c => c.status === 'Complete').length} of ${o.clearance.length} cleared`, '', `
          <div>${o.clearance.map(c => `
            <div class="checklist-item">
              <span class="stepdot ${c.status === 'Complete' ? 'done' : ''}">${c.status === 'Complete' ? icon('check',11) : ''}</span>
              <span class="ci-body"><span class="ci-title">${esc(c.unit)}</span><span class="ci-meta">${esc(c.owner)}</span></span>
              ${badge(c.status)}</div>`).join('')}</div>`)}
        ${card('Asset return','','', `
          <div>${o.assets.map(a => `
            <div class="checklist-item">
              <span class="stepdot ${a.status === 'Returned' ? 'done' : ''}">${a.status === 'Returned' ? icon('check',11) : ''}</span>
              <span class="ci-body"><span class="ci-title">${esc(a.name)}</span></span>
              ${badge(a.status === 'Returned' ? 'Complete' : 'Pending')}</div>`).join('')}</div>`)
          + (o.exitInterview ? card('Exit interview', `${fmtDate(o.exitInterview.date,'long')} · ${esc(o.exitInterview.by)}`, '', kv([
              ['Overall experience', `${o.exitInterview.rating}/5`],
              ['Eligible for rehire', o.exitInterview.wouldRehire ? badge('Approved') : badge('Rejected')],
              ['Notes', esc(o.exitInterview.notes)],
            ])) : '')}
      </div>
    </div>
    <div class="drawer-foot">
      <button class="btn" data-close-drawer>Close</button>
      <div style="flex:1 1 auto"></div>
      <button class="btn" data-open-emp="${esc(e.id)}">Employee record</button>
      ${o.status !== 'Completed' ? `<button class="btn primary" data-act="offstep:${esc(o.id)}">Complete ${esc(o.stage)}</button>` : ''}
    </div>`, { wide:true });
}

/* ---------------------------------------------------------------------------
   22. VIEWS — ATTENDANCE, SHIFTS, CORRECTIONS
   --------------------------------------------------------------------------- */
let attendanceDate = null;
function viewAttendance(){
  const date = attendanceDate || d2s(TODAY);
  const rows = onDutyRoster(date).map(e => ({ ...attendanceFor(e, date), e }));
  const s = attendanceSummary(date);
  const onDuty = s.total - s['Rest Day'] - s['On Leave'];
  const trendDates = Array.from({ length:10 }, (_,i) => d2s(addDays(s2d(date), -9 + i)));
  const trend = trendDates.map(d => { const x = attendanceSummary(d); return pct(x.Present + x.Late, Math.max(1, x.total - x['Rest Day'] - x['On Leave'])); });

  const t = DataTable({
    rows, rowId:r => r.e.id, per:14,
    searchPlaceholder:'Search employee or ID',
    search:r => `${r.e.name} ${r.e.id} ${r.e.position}`,
    filters:[
      { key:'dept', label:'All departments', options:DEPARTMENTS.map(d => ({ value:d.code, label:d.name })) },
      { key:'status', label:'All statuses', options:['Present','Late','Absent','Undertime','On Leave','Rest Day'] },
      { key:'shift', label:'All shifts', options:SHIFTS.map(x => ({ value:x.code, label:x.name })) },
    ],
    filterValue:(r,k) => k === 'dept' ? r.e.dept : r[k],
    cols:[
      { key:'emp', label:'Employee', render:r => personCell(r.e.name, r.e.id, r.e.avatar), sortValue:r => r.e.name },
      { key:'dept', label:'Department', w:'124px', render:r => esc(deptName(r.e.dept)), sortValue:r => r.e.dept },
      { key:'shift', label:'Shift', w:'150px', render:r => `<div class="cellstack"><b style="font-weight:500">${esc(shiftBy(r.shift).name)}</b><span>${shiftBy(r.shift).start} – ${shiftBy(r.shift).end}</span></div>` },
      { key:'in', label:'Time in', w:'92px', align:'right', render:r => `<span class="num ${r.in==='—'?'dim':''}">${esc(r.in)}</span>` },
      { key:'out', label:'Time out', w:'92px', align:'right', render:r => `<span class="num ${r.out==='—'?'dim':''}">${esc(r.out)}</span>` },
      { key:'late', label:'Late', w:'80px', align:'right', render:r => r.late ? `<span class="num" style="color:var(--warn)">${r.late}m</span>` : '<span class="dim">—</span>' },
      { key:'ot', label:'Overtime', w:'92px', align:'right', render:r => r.ot ? `<span class="num" style="color:var(--info)">${r.ot}m</span>` : '<span class="dim">—</span>' },
      { key:'status', label:'Status', w:'116px', render:r => badge(r.status + (r.corrected ? '' : '')) },
      { key:'act', label:'', w:'96px', sort:false, render:r => `<div class="rowactions"><button class="btn ghost sm" data-act="correct:${esc(r.e.id)}:${esc(date)}">Correct</button></div>` },
    ],
    onRow:id => go(`#/employees/${id}`),
    emptyTitle:'No attendance records', emptyText:'Choose another date or clear the filters.',
  });
  pendingTables.push(t);
  const body = `
    ${metricStrip([
      { label:'On duty', value:onDuty, note:`of ${s.total} active employees` },
      { label:'Present', value:s.Present, note:pct(s.Present, onDuty) + '% of those on duty' },
      { label:'Late', value:s.Late, note:'beyond grace period' },
      { label:'Undertime', value:s.Undertime, note:'left before shift end' },
      { label:'Absent', value:s.Absent, note:'no time record' },
      { label:'On leave', value:s['On Leave'], note:'approved leave' },
      { label:'Rest day', value:s['Rest Day'], note:'scheduled off' },
      { label:'Overtime', value:Math.round(s.ot/60), unit:'hrs', note:'logged today' },
    ])}
    <div class="grid g-2-1" style="margin-top:14px;align-items:start">
      ${card('Attendance rate','Last 10 days','', lineChart([{ values:trend }], trendDates.map(d => fmtDate(d,'md')), { h:170, zero:false }))}
      ${card('By department', fmtDate(date,'dow'), '', hbars(DEPARTMENTS.map(d => {
        const list = onDutyRoster(date).filter(e => e.dept === d.code);
        const present = list.filter(e => ['Present','Late'].includes(attendanceFor(e, date).status)).length;
        const duty = list.filter(e => !['Rest Day','On Leave'].includes(attendanceFor(e, date).status)).length;
        return { label:d.name, value:duty ? Math.round(present/duty*100) : 0 };
      }).sort((a,b) => b.value - a.value), { fmt:r => r.value + '%' }))}
    </div>
    <div style="margin-top:14px">${t.html()}</div>`;
  return page('Daily attendance', `${fmtDate(date,'dow')}, ${date.slice(0,4)} · generated from the assigned shift schedule`, `
    <input class="input" type="date" id="attDate" value="${date}" style="width:154px">
    <button class="btn" data-goto="#/attendance/corrections">${icon('edit',15)} Corrections</button>`, body);
}

function viewShifts(){
  const days = Array.from({ length:7 }, (_,i) => addDays(TODAY, i));
  const dept = AppState.filters.shiftDept || 'PRD';
  const list = activeEmployees().filter(e => e.dept === dept).slice(0, 18);
  const shiftOf = (e, d) => AppState.shiftOverrides[e.id + d2s(d)] || (DOW[d.getDay()] === e.restDay.slice(0,3) ? 'RST' : e.shift);
  const coverage = SHIFTS.filter(s => s.code !== 'RST').map(s => ({
    label:s.name, value:activeEmployees().filter(e => e.dept === dept && shiftOf(e, TODAY) === s.code).length,
  }));
  const body = `
    ${metricStrip([
      ...SHIFTS.filter(s => s.code !== 'RST').map(s => ({
        label:s.name, value:activeEmployees().filter(e => shiftOf(e, TODAY) === s.code).length, note:`${s.start} – ${s.end}`,
      })),
      { label:'On rest day', value:activeEmployees().filter(e => shiftOf(e, TODAY) === 'RST').length, note:'company-wide today' },
    ])}
    <div style="margin-top:14px">
      ${card('Shift board', `${esc(deptName(dept))} · next 7 days`, `
        <select class="select" id="shiftDept">${DEPARTMENTS.map(d => `<option value="${d.code}" ${d.code===dept?'selected':''}>${esc(d.name)}</option>`).join('')}</select>`, `
        <div class="shiftboard"><table class="shiftgrid data">
          <thead><tr><th class="emp">Employee</th>${days.map(d => `<th>${DOW[d.getDay()]}<br><span class="dim num" style="font-weight:400">${d.getDate()}</span></th>`).join('')}</tr></thead>
          <tbody>${list.map(e => `<tr>
            <td class="emp">${personCell(e.name, e.position, e.avatar)}</td>
            ${days.map(d => { const code = shiftOf(e, d); const s = shiftBy(code);
              return `<td><button class="shiftcell ${s.cls}" data-shift="${esc(e.id)}:${d2s(d)}">
                <b>${code === 'RST' ? 'Rest' : s.name.split(' ')[0]}</b><span>${code === 'RST' ? '—' : `${s.start}–${s.end}`}</span></button></td>`;
            }).join('')}</tr>`).join('')}</tbody>
        </table></div>
        <div class="row" style="gap:10px;margin-top:10px;flex-wrap:wrap">
          ${SHIFTS.map(s => `<span class="chip"><span class="dot" style="background:${s.cls==='m'?'#2b5f8f':s.cls==='d'?'var(--accent)':s.cls==='n'?'var(--purple)':'var(--ink-4)'}"></span>${esc(s.name)}</span>`).join('')}
          <span class="dim" style="font-size:11.5px">Click any cell to reassign the shift.</span>
        </div>`)}
    </div>
    <div class="grid g2" style="margin-top:14px;align-items:start">
      ${card('Coverage today', esc(deptName(dept)), '', hbars(coverage))}
      ${card('Shift definitions','','', `<table class="data"><thead><tr><th>Shift</th><th>Start</th><th>End</th><th class="right">Hours</th></tr></thead>
          <tbody>${SHIFTS.map(s => `<tr><td class="primary">${esc(s.name)}</td><td class="num">${s.start}</td><td class="num">${s.end}</td><td class="right num">${s.hours || '—'}</td></tr>`).join('')}</tbody></table>`)}
    </div>`;
  return page('Shift schedule', 'Assign morning, mid and night shifts across the week.', '', body);
}

function viewCorrections(){
  const rows = AppState.corrections.map(c => ({ ...c, e:empById(c.emp) })).filter(r => r.e);
  const body = `
    ${metricStrip([
      { label:'Pending', value:rows.filter(r => r.status === 'Pending').length, note:'waiting for approval' },
      { label:'Approved', value:rows.filter(r => r.status === 'Approved').length, note:'attendance updated' },
      { label:'Rejected', value:rows.filter(r => r.status === 'Rejected').length, note:'declined' },
    ])}
    <div style="margin-top:14px">${stageQueue({
      rows, rowId:r => r.id,
      search:r => `${r.e.name} ${r.id}`,
      filters:[{ key:'status', label:'All statuses', options:['Pending','Approved','Rejected'] }],
      cols:[
        { key:'id', label:'Reference', w:'120px', cls:'mono', render:r => esc(r.id) },
        { key:'emp', label:'Employee', render:r => personCell(r.e.name, r.e.id, r.e.avatar), sortValue:r => r.e.name },
        { key:'date', label:'Date of record', w:'128px', render:r => fmtDate(r.date) },
        { key:'req', label:'Requested change', render:r => `<span class="muted">In</span> <b class="num">${esc(r.newIn||'—')}</b> <span class="muted">Out</span> <b class="num">${esc(r.newOut||'—')}</b>`, sort:false },
        { key:'reason', label:'Reason', render:r => `<span class="muted">${esc(r.reason)}</span>` },
        { key:'status', label:'Status', w:'116px', render:r => badge(r.status) },
        { key:'act', label:'', w:'150px', sort:false, render:r => r.status === 'Pending'
            ? `<div class="rowactions"><button class="btn sm" data-act="corrreject:${esc(r.id)}">Reject</button><button class="btn sm primary" data-act="corrapprove:${esc(r.id)}">Approve</button></div>` : '' },
      ],
      emptyTitle:'No correction requests', emptyIcon:'edit',
      emptyText:'File a correction from the daily attendance screen when a time record needs adjustment.',
    })}</div>`;
  return page('Attendance corrections', 'Requests to adjust a time record, with an approval trail.', '', body);
}

/* ---------------------------------------------------------------------------
   23. VIEW — LEAVE MANAGEMENT
   --------------------------------------------------------------------------- */
function viewLeave(){
  const rows = AppState.leave.map(l => ({ ...l, e:empById(l.emp) })).filter(r => r.e);
  const pending = rows.filter(r => ['For Approval','Pending'].includes(r.status));
  const onLeaveToday = rows.filter(r => r.status === 'Approved' && s2d(r.start) <= TODAY && s2d(r.end) >= TODAY);
  const monthStart = new Date(TODAY.getFullYear(), TODAY.getMonth(), 1);
  const firstDow = monthStart.getDay();
  const daysInMonth = new Date(TODAY.getFullYear(), TODAY.getMonth()+1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(TODAY.getFullYear(), TODAY.getMonth(), d));
  while (cells.length % 7) cells.push(null);

  const body = `
    ${metricStrip([
      { label:'For approval', value:pending.length, note:'awaiting action' },
      { label:'On leave today', value:onLeaveToday.length, note:fmtDate(d2s(TODAY),'dow') },
      { label:'Approved this month', value:rows.filter(r => r.status === 'Approved' && r.start.slice(0,7) === d2s(TODAY).slice(0,7)).length, note:'current month' },
      { label:'Rejected', value:rows.filter(r => r.status === 'Rejected').length, note:'this year' },
      { label:'Total leave days', value:rows.filter(r => r.status === 'Approved').reduce((s,r) => s + r.days, 0), note:'approved, year to date' },
    ])}
    <div style="margin-top:14px">${stageQueue({
        rows, rowId:r => r.id,
        search:r => `${r.e.name} ${r.id} ${r.reason}`,
        filters:[
          { key:'type', label:'All leave types', options:LEAVE_TYPES.map(t => ({ value:t.code, label:t.name })) },
          { key:'status', label:'All statuses', options:['For Approval','Pending','Approved','Rejected'] },
        ],
        cols:[
          { key:'id', label:'Reference', w:'126px', cls:'mono', render:r => esc(r.id) },
          { key:'emp', label:'Employee', render:r => personCell(r.e.name, `${deptName(r.e.dept)}`, r.e.avatar), sortValue:r => r.e.name },
          { key:'type', label:'Type', w:'132px', render:r => esc((LEAVE_TYPES.find(t => t.code === r.type)||{}).name) },
          { key:'start', label:'Dates', w:'156px', render:r => `<div class="cellstack"><b style="font-weight:500">${fmtDate(r.start,'md')} – ${fmtDate(r.end,'md')}</b><span>filed ${relTime(r.filed)}</span></div>` },
          { key:'days', label:'Days', w:'70px', align:'right', render:r => `<b class="num">${r.days}</b>` },
          { key:'status', label:'Status', w:'126px', render:r => badge(r.status) },
          { key:'act', label:'', w:'150px', sort:false, render:r => ['For Approval','Pending'].includes(r.status)
              ? `<div class="rowactions"><button class="btn sm" data-act="leavereject:${esc(r.id)}">Reject</button><button class="btn sm primary" data-act="leaveapprove:${esc(r.id)}">Approve</button></div>` : '' },
        ],
        onRow:id => openLeave(id),
        emptyTitle:'No leave requests', emptyIcon:'calendar',
        emptyText:'Filed leave requests will appear here for review.',
      })}</div>
    <div style="margin-top:14px">
      ${card('Leave calendar', `${MONTHS[TODAY.getMonth()]} ${TODAY.getFullYear()}`, '', `
        <div class="cal">
          ${DOW.map(d => `<div class="cal-dow">${d}</div>`).join('')}
          ${cells.map(c => {
            if (!c) return `<div class="cal-cell out"></div>`;
            const ds = d2s(c);
            const evs = rows.filter(r => r.status === 'Approved' && ds >= r.start && ds <= r.end);
            return `<div class="cal-cell ${ds === d2s(TODAY) ? 'today' : ''}">
              <div class="cal-date">${c.getDate()}</div>
              ${evs.slice(0,3).map(r => `<button class="cal-ev ${(LEAVE_TYPES.find(t=>t.code===r.type)||{}).cls}" data-tip="${esc(r.e.name)} · ${esc(r.type)}">${esc(r.e.first || r.e.name.split(' ')[0])} ${esc(r.type)}</button>`).join('')}
              ${evs.length > 3 ? `<div class="dim" style="font-size:10.5px;margin-top:2px">+${evs.length-3} more</div>` : ''}
            </div>`;
          }).join('')}
        </div>
        <div class="row" style="gap:8px;margin-top:10px;flex-wrap:wrap">
          ${LEAVE_TYPES.map(t => `<span class="chip"><span class="dot" style="background:${t.cls==='vl'?'var(--info)':t.cls==='sl'?'#c08a1e':t.cls==='el'?'var(--bad)':'var(--purple)'}"></span>${esc(t.name)}</span>`).join('')}
        </div>`)}
    </div>`;
  return page('Leave management', 'Filing, approval routing and leave balances.', `
    <button class="btn primary" data-action="file-leave">${icon('plus',15)} File leave</button>`, body);
}

function openLeave(id){
  const l = AppState.leave.find(x => x.id === id); if (!l) return;
  const e = empById(l.emp); if (!e) return;
  const used = LEAVE_TYPES.map(t => ({ t, used:AppState.leave.filter(x => x.emp === e.id && x.type === t.code && x.status === 'Approved').reduce((s,x) => s + x.days, 0) }));
  openDrawer(`
    <div class="drawer-head"><div class="row" style="align-items:flex-start">
      <span class="avatar lg" style="background:${e.avatar}">${initials(e.name)}</span>
      <div style="flex:1 1 auto;min-width:0">
        <div class="row" style="gap:8px"><span style="font-size:16px;font-weight:620">${esc(e.name)}</span>${badge(l.status)}</div>
        <div class="muted" style="font-size:12.5px;margin-top:2px"><span class="num">${esc(l.id)}</span> · ${esc((LEAVE_TYPES.find(t=>t.code===l.type)||{}).name)}</div>
      </div>
      <button class="icon-btn" data-close-drawer>${icon('close',17)}</button>
    </div></div>
    <div class="drawer-body">
      ${card('Request details','','', kv([
        ['Leave type', esc((LEAVE_TYPES.find(t=>t.code===l.type)||{}).name)],
        ['Inclusive dates', `${fmtDate(l.start,'long')} – ${fmtDate(l.end,'long')}`],
        ['Number of days', `<b>${l.days}</b>`],
        ['Reason', esc(l.reason)],
        ['Date filed', fmtDate(l.filed,'long')],
        ['Immediate supervisor', esc(l.approver || '—')],
        ['HR reviewer', esc(l.hrReviewer || '—')],
        l.remarks ? ['Remarks', esc(l.remarks)] : null,
      ].filter(Boolean)))}
      <div style="margin-top:14px">${card('Approval route','','', `
        <div class="timeline">
          <div class="tl-item done"><div class="tl-title">Filed by employee</div><div class="tl-meta">${fmtDate(l.filed,'long')}</div></div>
          <div class="tl-item ${l.status === 'Approved' || l.status === 'Rejected' ? 'done' : 'current'}"><div class="tl-title">Supervisor endorsement</div><div class="tl-meta">${esc(l.approver||'—')}</div></div>
          <div class="tl-item ${l.status === 'Approved' ? 'done' : l.status === 'Rejected' ? 'blocked' : 'pending'}"><div class="tl-title">HR review</div><div class="tl-meta">${l.hrReviewer ? esc(l.hrReviewer) : l.status === 'Rejected' ? 'Rejected' : 'Pending'}</div></div>
        </div>`)}</div>
      <div style="margin-top:14px">${card('Leave balance','Credits for 2026','', `
        <table class="data"><thead><tr><th>Leave type</th><th class="right">Credits</th><th class="right">Used</th><th class="right">Remaining</th></tr></thead>
        <tbody>${used.map(u => `<tr><td class="primary">${esc(u.t.name)}</td><td class="right num">${u.t.credits}</td>
          <td class="right num">${u.used}</td><td class="right num strong">${u.t.credits - u.used}</td></tr>`).join('')}</tbody></table>`)}</div>
    </div>
    <div class="drawer-foot">
      <button class="btn" data-close-drawer>Close</button>
      <div style="flex:1 1 auto"></div>
      <button class="btn" data-open-emp="${esc(e.id)}">Employee record</button>
      ${['For Approval','Pending'].includes(l.status) ? `
        <button class="btn danger" data-act="leavereject:${esc(l.id)}">Reject</button>
        <button class="btn primary" data-act="leaveapprove:${esc(l.id)}">Approve</button>` : ''}
    </div>`);
}

/* ---------------------------------------------------------------------------
   24. VIEWS — PERFORMANCE, TRAINING, RELATIONS
   --------------------------------------------------------------------------- */
function viewPerformance(){
  const rows = AppState.performance.map(p => ({ ...p, e:empById(p.emp) })).filter(r => r.e);
  const done = rows.filter(r => r.status === 'Completed');
  const dist = [1,2,3,4,5].map(n => ({ label:`${n}.0 – ${n}.9`, value:done.filter(r => Math.floor(r.overall) === n).length }));
  const body = `
    ${metricStrip([
      { label:'Evaluations due', value:rows.filter(r => r.status !== 'Completed').length, note:'not yet completed' },
      { label:'Completed', value:done.length, note:'this cycle' },
      { label:'Average rating', value:done.length ? (done.reduce((s,r) => s + r.overall, 0)/done.length).toFixed(2) : '—', note:'out of 5.00' },
      { label:'Probationary reviews', value:rows.filter(r => r.type === 'Probationary Evaluation').length, note:'regularization decisions' },
      { label:'For promotion', value:done.filter(r => r.decision === 'Promotion Recommendation').length, note:'recommended' },
    ])}
    <div style="margin-top:14px">${stageQueue({
        rows, rowId:r => r.id,
        search:r => `${r.e.name} ${r.period} ${r.id}`,
        filters:[
          { key:'status', label:'All statuses', options:['Not Started','In Progress','Completed'] },
          { key:'type', label:'All types', options:['Probationary Evaluation','Regular Evaluation'] },
        ],
        cols:[
          { key:'emp', label:'Employee', w:'250px', render:r => personCell(r.e.name, `${r.e.position} · ${deptName(r.e.dept)}`, r.e.avatar), sortValue:r => r.e.name },
          { key:'period', label:'Review period', w:'190px', render:r => `<div class="cellstack"><b style="font-weight:500">${esc(r.period)}</b><span>${esc(r.type)}</span></div>` },
          { key:'evaluator', label:'Evaluator', w:'150px', render:r => `<span class="muted">${esc(r.evaluator)}</span>` },
          { key:'due', label:'Due', w:'106px', render:r => s2d(r.due) < TODAY && r.status !== 'Completed'
              ? `<span style="color:var(--bad)">${fmtDate(r.due)}</span>` : fmtDate(r.due) },
          { key:'overall', label:'Rating', w:'132px', render:r => r.status === 'Completed'
              ? `<div class="meterline" style="max-width:104px"><div class="meter ${r.overall>=4?'ok':r.overall>=3?'':'warn'}"><i style="width:${r.overall/5*100}%"></i></div><span class="pct">${r.overall}</span></div>`
              : '<span class="dim">—</span>' },
          { key:'decision', label:'Decision', w:'166px', render:r => r.decision ? badge(r.decision) : '<span class="dim">Pending</span>' },
          { key:'act', label:'', w:'112px', sort:false, render:r => r.status !== 'Completed'
              ? `<div class="rowactions"><button class="btn sm primary" data-act="review:${esc(r.id)}">Evaluate</button></div>` : '' },
        ],
        onRow:id => { const p = AppState.performance.find(x => x.id === id); if (p) go(`#/employees/${p.emp}`); },
        emptyTitle:'No evaluations scheduled', emptyIcon:'target',
        emptyText:'Performance reviews will appear here once the cycle opens.',
      })}</div>
    <div class="grid g2" style="margin-top:14px;align-items:start">
      ${card('Rating distribution', `${done.length} completed evaluations`, '', hbars(dist))}
      ${card('Regularization decisions','Probationary employees','', hbars([
          { label:'Regularize', value:done.filter(r => r.decision === 'Regularize').length },
          { label:'Extend probation', value:done.filter(r => r.decision === 'Extend Probation').length },
          { label:'Development required', value:done.filter(r => r.decision === 'Development Required').length },
          { label:'Promotion recommendation', value:done.filter(r => r.decision === 'Promotion Recommendation').length },
        ]))}
    </div>`;
  return page('Performance management', 'Probationary and regular evaluations with weighted KPIs.', '', body);
}

function formReview(id){
  const p = AppState.performance.find(x => x.id === id); if (!p) return;
  const e = empById(p.emp); if (!e) return;
  openModal(`
    <div class="modal-head"><div style="flex:1 1 auto">
      <div class="card-title">${esc(p.type)}</div>
      <div class="card-sub">${esc(e.name)} · ${esc(p.period)}</div></div>
      <button class="icon-btn" data-close-modal>${icon('close',16)}</button></div>
    <div class="modal-body">
      ${p.kpis.map((k,i) => `
        <div class="row" style="padding:9px 0;border-bottom:1px solid var(--line-soft);gap:10px">
          <span style="flex:1 1 auto;font-size:13px">${esc(k.name)} <span class="dim">· ${k.weight}%</span></span>
          <div class="rating" data-kpi="${i}">${[1,2,3,4,5].map(n => `<button data-n="${n}" class="${n===k.rating?'on':''}">${n}</button>`).join('')}</div>
        </div>`).join('')}
      <div class="field" style="margin-top:14px"><span class="flabel">Remarks</span>
        <textarea class="textarea" id="prRemarks" placeholder="Strengths, areas for improvement, agreed goals.">${esc(p.remarks||'')}</textarea></div>
      <label class="field"><span class="flabel">Decision</span>
        <select class="input" id="prDecision">
          ${(p.type === 'Probationary Evaluation'
            ? ['Regularize','Extend Probation','Development Required']
            : ['Regularize','Promotion Recommendation','Development Required']).map(d => `<option ${p.decision===d?'selected':''}>${d}</option>`).join('')}
        </select></label>
      ${p.type === 'Probationary Evaluation' ? `<div class="notice info">${icon('info',15)}<div>Choosing <b>Regularize</b> changes the employment status of ${esc(e.name)} from probationary to regular.</div></div>` : ''}
    </div>
    <div class="modal-foot"><button class="btn" data-close-modal>Cancel</button>
      <button class="btn primary" id="prSave">Save evaluation</button></div>`, { lg:true });
  $$('#modal .rating').forEach(r => r.querySelectorAll('button').forEach(b => b.onclick = () => {
    r.querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b));
  }));
  $('#prSave').onclick = () => {
    const kpis = p.kpis.map((k,i) => ({ ...k, rating:Number($(`#modal [data-kpi="${i}"] button.on`).dataset.n) }));
    MockAPI.saveReview(id, kpis, $('#prDecision').value, $('#prRemarks').value.trim());
    closeModal(); toast('Evaluation saved', `${e.name} · ${$('#prDecision').value}`); refresh();
  };
}

function viewTraining(){
  const rows = AppState.trainings.map(t => ({ ...t, e:empById(t.emp) })).filter(r => r.e);
  const body = `
    ${metricStrip([
      { label:'Training records', value:rows.length, note:'all employees' },
      { label:'Scheduled sessions', value:AppState.trainingSessions.filter(s => s.status === 'Scheduled').length, note:'upcoming' },
      { label:'Expiring certifications', value:rows.filter(r => r.status === 'Expiring Soon').length, note:'within 60 days' },
      { label:'Expired', value:rows.filter(r => r.status === 'Expired').length, note:'needs renewal' },
      { label:'Total hours', value:rows.reduce((s,r) => s + r.hours, 0), note:'delivered this year' },
    ])}
    <div style="margin-top:14px">${stageQueue({
        rows, rowId:r => r.emp,
        search:r => `${r.e.name} ${r.name} ${r.provider}`,
        filters:[
          { key:'type', label:'All types', options:TRAINING_TYPES },
          { key:'status', label:'All statuses', options:['Valid','Expiring Soon','Expired'] },
          { key:'result', label:'All results', options:['Passed','Failed'] },
        ],
        cols:[
          { key:'emp', label:'Employee', render:r => personCell(r.e.name, deptName(r.e.dept), r.e.avatar), sortValue:r => r.e.name },
          { key:'name', label:'Programme', render:r => `<div class="cellstack"><b style="font-weight:500">${esc(r.name)}</b><span>${esc(r.provider)}</span></div>` },
          { key:'type', label:'Type', w:'150px', render:r => `<span class="muted">${esc(r.type)}</span>` },
          { key:'date', label:'Completed', w:'112px', render:r => fmtDate(r.date) },
          { key:'hours', label:'Hours', w:'74px', align:'right', render:r => `<span class="num">${r.hours}</span>` },
          { key:'expiry', label:'Valid until', w:'118px', render:r => r.expiry ? fmtDate(r.expiry) : '<span class="dim">No expiry</span>' },
          { key:'status', label:'Status', w:'126px', render:r => badge(r.status) },
        ],
        onRow:id => go(`#/employees/${id}`),
        emptyTitle:'No training records', emptyIcon:'book',
        emptyText:'Completed programmes and certifications will appear here.',
      })}</div>
    <div class="grid g2" style="margin-top:14px;align-items:start">
      ${card('Training calendar','Scheduled sessions','', `
        <div>${AppState.trainingSessions.map(s => `
          <div class="checklist-item">
            <span class="doc-ico">${icon('book',15)}</span>
            <span class="ci-body"><span class="ci-title">${esc(s.name)}</span>
              <span class="ci-meta">${fmtDate(s.date,'dow')} · ${esc(s.time)}<br>${esc(s.venue)}</span></span>
            <div style="text-align:right">
              ${badge(s.status)}
              <div class="dim num" style="font-size:11px;margin-top:3px">${s.enrolled}/${s.seats} seats</div>
            </div>
          </div>`).join('')}</div>`)}
      ${card('By training type','Records this year','', hbars(TRAINING_TYPES.map(t => ({ label:t, value:rows.filter(r => r.type === t).length })).sort((a,b) => b.value - a.value)))}
    </div>`;
  return page('Training & development', 'Programmes, attendance and certification validity.', '', body);
}

function viewRelations(){
  const isManager = ['ADMIN','HRMGR'].includes(AppState.currentUser.role);
  const all = AppState.cases.map(c => ({ ...c, e:empById(c.emp) })).filter(r => r.e);
  const rows = all.filter(c => isManager || !c.confidential);
  const hidden = all.length - rows.length;
  const body = `
    ${metricStrip([
      { label:'Open cases', value:all.filter(c => c.status === 'Open').length, note:'newly filed' },
      { label:'Under investigation', value:all.filter(c => c.status === 'Under Investigation').length, note:'in process' },
      { label:'Resolved', value:all.filter(c => c.status === 'Resolved').length, note:'this year' },
      { label:'Confidential', value:all.filter(c => c.confidential).length, note:'restricted access' },
    ])}
    ${hidden ? `<div class="notice warn" style="margin-top:14px">${icon('lock',15)}
      <div><b>${hidden} confidential case${hidden>1?'s are':' is'} hidden.</b> Your current role (${esc(AppState.currentUser.roleName)}) cannot view confidential employee relations records. Switch to HR Manager from the profile menu to see them.</div></div>` : ''}
    <div style="margin-top:14px">${stageQueue({
      rows, rowId:r => r.id,
      search:r => `${r.e.name} ${r.id} ${r.type} ${r.description}`,
      filters:[
        { key:'type', label:'All case types', options:[...new Set(all.map(c => c.type))] },
        { key:'status', label:'All statuses', options:['Open','Under Investigation','Resolved','Closed'] },
      ],
      cols:[
        { key:'id', label:'Case ID', w:'126px', cls:'mono', render:r => `${esc(r.id)}${r.confidential ? ` <span class="tick">${icon('lock',11)}</span>` : ''}` },
        { key:'emp', label:'Employee', render:r => personCell(r.e.name, `${r.e.position} · ${deptName(r.e.dept)}`, r.e.avatar), sortValue:r => r.e.name },
        { key:'type', label:'Case type', w:'160px', render:r => `<b style="font-weight:550;color:var(--ink)">${esc(r.type)}</b>` },
        { key:'description', label:'Description', render:r => `<span class="muted">${esc(r.description)}</span>` },
        { key:'date', label:'Filed', w:'106px', render:r => fmtDate(r.date) },
        { key:'officer', label:'Officer', w:'140px', render:r => `<span class="muted">${esc(r.officer)}</span>` },
        { key:'status', label:'Status', w:'156px', render:r => badge(r.status) },
      ],
      onRow:id => openCase(id),
      emptyTitle:'No employee relations cases', emptyIcon:'shield',
      emptyText:'Disciplinary actions, grievances and incidents are logged here.',
    })}</div>`;
  return page('Employee relations', 'Confidential handling of disciplinary actions, grievances and incidents.', `
    <button class="btn primary" data-action="new-case">${icon('plus',15)} Log a case</button>`, body);
}

function openCase(id){
  const c = AppState.cases.find(x => x.id === id); if (!c) return;
  const e = empById(c.emp); if (!e) return;
  openDrawer(`
    <div class="drawer-head"><div class="row" style="align-items:flex-start">
      <div style="flex:1 1 auto;min-width:0">
        <div class="row" style="gap:8px;flex-wrap:wrap">
          <span style="font-size:16px;font-weight:620">${esc(c.type)}</span>${badge(c.status)}
          ${c.confidential ? `<span class="conf-flag">${icon('lock',11)} Confidential</span>` : ''}
        </div>
        <div class="muted" style="font-size:12.5px;margin-top:2px"><span class="num">${esc(c.id)}</span> · filed ${fmtDate(c.date,'long')} · ${esc(c.officer)}</div>
      </div>
      <button class="icon-btn" data-close-drawer>${icon('close',17)}</button>
    </div></div>
    <div class="drawer-body">
      ${card('Case details','','', kv([
        ['Employee', `${personCell(e.name, `${e.position} · ${deptName(e.dept)}`, e.avatar)}`],
        ['Case type', esc(c.type)], ['Description', esc(c.description)],
        ['Handling officer', esc(c.officer)], ['Date filed', fmtDate(c.date,'long')],
        ['Target closing date', fmtDate(c.dueDate,'long')],
        ['Resolution', c.resolution ? esc(c.resolution) : '<span class="dim">Ongoing</span>'],
      ]))}
      <div style="margin-top:14px">${card('Case log','','', `
        <div class="timeline">${c.notes.map(n => `
          <div class="tl-item done"><div class="tl-title">${esc(n.by)}</div>
          <div class="tl-meta">${fmtDate(n.date,'long')}</div>
          <div class="tl-note">${esc(n.text)}</div></div>`).join('')}</div>
        <div class="divider"></div>
        <div class="field"><span class="flabel">Add to the case log</span>
          <textarea class="textarea" id="caseNote" placeholder="Record the next action, hearing or agreement."></textarea></div>
        <div class="row" style="gap:8px">
          <button class="btn sm" data-act="caseupdate:${esc(c.id)}:Under Investigation">Mark under investigation</button>
          <button class="btn sm" data-act="caseupdate:${esc(c.id)}:Resolved">Mark resolved</button>
          <button class="btn sm" data-act="caseupdate:${esc(c.id)}:Closed">Close case</button>
        </div>`)}</div>
    </div>
    <div class="drawer-foot">
      <button class="btn" data-close-drawer>Close</button>
      <div style="flex:1 1 auto"></div>
      <button class="btn" data-open-emp="${esc(e.id)}">Employee record</button>
    </div>`);
}

/* ---------------------------------------------------------------------------
   25. VIEWS — COMPENSATION, DOCUMENTS, WORKFORCE PLANNING
   --------------------------------------------------------------------------- */
function viewCompensation(){
  const emps = activeEmployees();
  const rows = emps.map(e => ({ ...e, allowTotal:e.allowances.reduce((s,a) => s + a.amount, 0) }));
  const byDept = DEPARTMENTS.map(d => {
    const list = emps.filter(e => e.dept === d.code);
    return { label:d.name, value:list.length ? Math.round(list.reduce((s,e) => s + e.salary, 0) / list.length) : 0 };
  }).sort((a,b) => b.value - a.value);
  const bands = [
    { label:'Below ₱18,000', test:s => s < 18000 },
    { label:'₱18,000 – ₱24,999', test:s => s >= 18000 && s < 25000 },
    { label:'₱25,000 – ₱34,999', test:s => s >= 25000 && s < 35000 },
    { label:'₱35,000 – ₱49,999', test:s => s >= 35000 && s < 50000 },
    { label:'₱50,000 and above', test:s => s >= 50000 },
  ].map(b => ({ label:b.label, value:emps.filter(e => b.test(e.salary)).length }));
  const monthly = emps.reduce((s,e) => s + e.salary + e.allowances.reduce((x,a) => x + a.amount, 0), 0);

  const body = `
    ${metricStrip([
      { label:'Employees on payroll', value:emps.length, note:'active records' },
      { label:'Monthly compensation', value:peso(monthly), note:'basic plus allowances' },
      { label:'Average basic salary', value:peso(Math.round(emps.reduce((s,e) => s + e.salary, 0) / emps.length)), note:'company-wide' },
      { label:'Allowance cost', value:peso(emps.reduce((s,e) => s + e.allowances.reduce((x,a) => x + a.amount, 0), 0)), note:'per month' },
    ])}
    <div class="grid g2" style="margin-top:14px;align-items:start">
      ${card('Average salary by department','','', hbars(byDept, { fmt:r => peso(r.value) }))}
      ${card('Salary band distribution','Active employees','', hbars(bands))}
    </div>
    <div style="margin-top:14px">${stageQueue({
      rows, rowId:r => r.id,
      search:r => `${r.name} ${r.id} ${r.position}`,
      filters:[
        { key:'dept', label:'All departments', options:DEPARTMENTS.map(d => ({ value:d.code, label:d.name })) },
        { key:'level', label:'All levels', options:['Rank & File','Supervisory','Managerial'] },
      ],
      cols:[
        { key:'name', label:'Employee', render:r => personCell(r.name, r.id, r.avatar) },
        { key:'position', label:'Position', render:r => `<div class="cellstack"><b style="font-weight:500">${esc(r.position)}</b><span>${esc(deptName(r.dept))}</span></div>` },
        { key:'level', label:'Level', w:'128px', render:r => `<span class="muted">${esc(r.level)}</span>` },
        { key:'salary', label:'Basic salary', w:'128px', align:'right', render:r => `<b class="num">${peso(r.salary)}</b>` },
        { key:'allowTotal', label:'Allowances', w:'120px', align:'right', render:r => `<span class="num muted">${peso(r.allowTotal)}</span>` },
        { key:'total', label:'Monthly total', w:'134px', align:'right', render:r => `<b class="num">${peso(r.salary + r.allowTotal)}</b>`, sortValue:r => r.salary + r.allowTotal },
        { key:'type', label:'Type', w:'118px', render:r => `<span class="muted">${esc(r.type)}</span>` },
      ],
      onRow:id => go(`#/employees/${id}`),
      emptyTitle:'No compensation records', emptyText:'Active employees will appear here.',
    })}</div>
    <div class="notice info" style="margin-top:14px">${icon('info',15)}
      <div>This module holds compensation <b>profiles</b> only — salary structure, allowances and benefit enrolment. It does not compute payroll, deductions or payslips.</div></div>`;
  return page('Compensation & benefits', 'Salary structure, allowances and government benefit enrolment.', `
    <button class="btn" data-action="export">${icon('download',15)} Export</button>`, body);
}

function viewDocuments(){
  const rows = allDocuments();
  const byStatus = s => rows.filter(r => r.status === s).length;
  const body = `
    ${metricStrip([
      { label:'Documents tracked', value:rows.length, note:`across ${activeEmployees().length} employees` },
      { label:'Valid', value:byStatus('Valid'), note:pct(byStatus('Valid'), rows.length) + '% of all documents' },
      { label:'Expiring soon', value:byStatus('Expiring Soon'), note:'within 45 days' },
      { label:'Expired', value:byStatus('Expired'), note:'needs renewal' },
      { label:'Missing', value:byStatus('Missing'), note:'not yet submitted' },
    ])}
    <div style="margin-top:14px">${stageQueue({
        rows, rowId:r => r.emp,
        search:r => `${r.empName} ${r.name} ${r.category}`,
        filters:[
          { key:'category', label:'All categories', options:[...new Set(rows.map(r => r.category))] },
          { key:'status', label:'All statuses', options:['Valid','Expiring Soon','Expired','Missing'] },
          { key:'dept', label:'All departments', options:DEPARTMENTS.map(d => ({ value:d.code, label:d.name })) },
        ],
        cols:[
          { key:'empName', label:'Employee', render:r => personCell(r.empName, r.emp) },
          { key:'name', label:'Document', render:r => `<div class="cellstack"><b style="font-weight:500">${esc(r.name)}</b><span>${esc(r.category)}</span></div>` },
          { key:'uploaded', label:'Uploaded', w:'118px', render:r => r.uploaded ? fmtDate(r.uploaded) : '<span class="dim">—</span>' },
          { key:'expiry', label:'Expires', w:'118px', render:r => r.expiry ? fmtDate(r.expiry) : '<span class="dim">No expiry</span>' },
          { key:'status', label:'Status', w:'130px', render:r => badge(r.status) },
        ],
        onRow:id => go(`#/employees/${id}`),
        emptyTitle:'No documents match', emptyText:'Adjust the filters to see more records.',
      })}</div>
    <div class="grid g2" style="margin-top:14px;align-items:start">
      ${card('By category','Document count','', hbars([...new Set(rows.map(r => r.category))].map(c => ({ label:c, value:rows.filter(r => r.category === c).length }))))}
      ${card('Needs attention','Expiring, expired or missing','', `
          <div>${rows.filter(r => r.status !== 'Valid').slice(0,8).map(r => `
            <button class="checklist-item" style="width:100%;text-align:left" data-goto="#/employees/${esc(r.emp)}">
              <span class="doc-ico">${icon('alert',14)}</span>
              <span class="ci-body"><span class="ci-title">${esc(r.name)}</span><span class="ci-meta">${esc(r.empName)} · ${esc(deptName(r.dept))}</span></span>
              ${badge(r.status)}</button>`).join('')}</div>`)}
    </div>`;
  return page('Document centre', 'Every 201 file document, with expiry tracking.', '', body);
}

function viewWorkforce(){
  const emps = activeEmployees();
  const rows = DEPARTMENTS.map(d => {
    const current = emps.filter(e => e.dept === d.code).length;
    const prob = emps.filter(e => e.dept === d.code && e.status === 'Probationary').length;
    const openApps = AppState.applicants.filter(a => a.dept === d.code && !['Hired','Rejected','Withdrawn'].includes(a.stage)).length;
    return { ...d, current, prob, vacancies:Math.max(0, d.authorized - current), fill:pct(current, d.authorized), openApps };
  });
  const totals = rows.reduce((s,r) => ({ auth:s.auth + r.authorized, cur:s.cur + r.current, vac:s.vac + r.vacancies }), { auth:0, cur:0, vac:0 });
  const body = `
    ${metricStrip([
      { label:'Authorised headcount', value:totals.auth, note:'approved plantilla' },
      { label:'Current headcount', value:totals.cur, note:pct(totals.cur, totals.auth) + '% filled' },
      { label:'Vacancies', value:totals.vac, note:'open positions' },
      { label:'In the pipeline', value:AppState.applicants.filter(a => !['Hired','Rejected','Withdrawn'].includes(a.stage)).length, note:'active applicants' },
      { label:'Probationary', value:emps.filter(e => e.status === 'Probationary').length, note:'within first 6 months' },
    ])}
    <div style="margin-top:14px">${card('Headcount against plantilla','Authorised versus current, by department','', `
      <table class="data">
        <thead><tr><th>Department</th><th>Head</th><th class="right">Authorised</th><th class="right">Current</th><th class="right">Vacancies</th><th style="width:190px">Fill rate</th><th class="right">Applicants</th></tr></thead>
        <tbody>${rows.map(r => `<tr class="clickable" data-goto="#/employees">
          <td class="primary">${esc(r.name)}</td>
          <td class="muted">${esc(r.head)}</td>
          <td class="right num">${r.authorized}</td>
          <td class="right num strong">${r.current}</td>
          <td class="right num ${r.vacancies ? '' : 'dim'}">${r.vacancies || '—'}</td>
          <td><div class="meterline"><div class="meter ${r.fill>=95?'ok':r.fill>=80?'':'warn'}"><i style="width:${Math.min(100,r.fill)}%"></i></div><span class="pct">${r.fill}%</span></div></td>
          <td class="right num ${r.openApps ? '' : 'dim'}">${r.openApps || '—'}</td></tr>`).join('')}
        </tbody>
        <tfoot><tr style="border-top:1px solid var(--line)">
          <td class="primary"><b>Total</b></td><td></td>
          <td class="right num"><b>${totals.auth}</b></td><td class="right num"><b>${totals.cur}</b></td>
          <td class="right num"><b>${totals.vac}</b></td>
          <td><div class="meterline"><div class="meter"><i style="width:${pct(totals.cur,totals.auth)}%"></i></div><span class="pct">${pct(totals.cur,totals.auth)}%</span></div></td>
          <td class="right num"><b>${rows.reduce((s,r) => s + r.openApps, 0)}</b></td>
        </tr></tfoot>
      </table>`)}</div>
    <div class="grid g2" style="margin-top:14px;align-items:start">
      ${card('Vacancies by department','Open positions','', hbars(rows.filter(r => r.vacancies).map(r => ({ label:r.name, value:r.vacancies })).sort((a,b) => b.value - a.value)))}
      ${card('Headcount by branch','Active employees','', hbars(BRANCHES.map(b => ({ label:b.name, value:emps.filter(e => e.branch === b.code).length })).sort((a,b) => b.value - a.value)))}
    </div>`;
  return page('Workforce planning', 'Authorised headcount, current staffing and open vacancies.', '', body);
}

/* ---------------------------------------------------------------------------
   26. VIEW — REPORTS & ANALYTICS
   --------------------------------------------------------------------------- */
let reportTab = 'Headcount';
const REPORT_TABS = ['Headcount','Recruitment','Attendance','Turnover','Leave','Performance','Training','Compensation','Documents','Demographics','Movement','Compliance'];

function reportContent(){
  const emps = activeEmployees();
  const months = ['Mar','Apr','May','Jun','Jul','Aug','Sep'];
  switch (reportTab){
    case 'Headcount': return `
      ${metricStrip([
        { label:'Active headcount', value:emps.length, note:'as of today' },
        { label:'Hired this month', value:hiresIn(d2s(TODAY).slice(0,7)), note:`${MONTHS[TODAY.getMonth()]} ${TODAY.getFullYear()}` },
        { label:'Separated this month', value:exitsIn(d2s(TODAY).slice(0,7)), note:'left the company' },
        { label:'Net change', value:`${hiresIn(d2s(TODAY).slice(0,7)) - exitsIn(d2s(TODAY).slice(0,7)) >= 0 ? '+' : ''}${hiresIn(d2s(TODAY).slice(0,7)) - exitsIn(d2s(TODAY).slice(0,7))}`, note:'this month' },
      ])}
      <div class="grid g2" style="margin-top:14px;align-items:start">
        ${card('Headcount by department','Active employees','', hbars(deptCounts().map(d => ({ label:d.label, value:d.value }))))}
        ${card('Headcount by employment status','','', hbars(EMPLOYMENT_STATUSES.map(s => ({ label:s, value:AppState.employees.filter(e => e.status === s).length })).filter(r => r.value)))}
      </div>
      <div style="margin-top:14px">${card('Headcount trend','Active employees at each month end','',
        lineChart([{ values:recentMonths(7).map(m => headcountAsOf(m.end)) }], recentMonths(7).map(m => m.label), { h:190, zero:false }))}</div>
      <div style="margin-top:14px">${card('Hires and separations','By month','', `
        <div class="row" style="gap:14px;margin-bottom:6px">
          <span class="chip"><span class="dot" style="background:var(--accent)"></span>New hires</span>
          <span class="chip"><span class="dot" style="background:#b0b6b2"></span>Separations</span>
        </div>
        ${lineChart([
          { values:recentMonths(7).map(m => hiresIn(m.key)) },
          { values:recentMonths(7).map(m => exitsIn(m.key)) },
        ], recentMonths(7).map(m => m.label), { h:180 })}`)}</div>`;

    case 'Recruitment': return `
      <div class="grid g-2-1" style="align-items:start">
        ${card('Recruitment funnel','Year to date','', funnel(YTD_FUNNEL))}
        ${card('Source of applicants','How applicants heard about the opening','', hbars(
          [...new Set(AppState.applicants.map(a => a.answers.source))].filter(Boolean).map(s => ({
            label:s, value:AppState.applicants.filter(a => a.answers.source === s).length })).sort((a,b) => b.value - a.value)))}
      </div>
      <div class="grid g2" style="margin-top:14px;align-items:start">
        ${card('Applications by department','Current pipeline','', hbars(DEPARTMENTS.map(d => ({
          label:d.name, value:AppState.applicants.filter(a => a.dept === d.code).length })).filter(r => r.value).sort((a,b) => b.value - a.value)))}
        ${card('Time to hire by stage','Average days','', hbars([
          { label:'Invitation to submission', value:2 },{ label:'Submission to screening', value:1 },
          { label:'Screening to interview', value:4 },{ label:'Interview to assessment', value:3 },
          { label:'Assessment to offer', value:5 },{ label:'Offer to start date', value:12 },
        ], { fmt:r => `${r.value} days` }))}
      </div>`;

    case 'Attendance': {
      const last7 = Array.from({ length:7 }, (_,i) => d2s(addDays(TODAY, -6 + i)));
      const rates = last7.map(d => { const s = attendanceSummary(d); return pct(s.Present + s.Late, Math.max(1, s.total - s['Rest Day'] - s['On Leave'])); });
      const s = attendanceSummary(d2s(TODAY));
      return `
      <div class="grid g-2-1" style="align-items:start">
        ${card('Attendance rate','Last 7 days','', lineChart([{ values:rates }], last7.map(d => fmtDate(d,'md')), { h:190, zero:false }))}
        ${card('Today at a glance', fmtDate(d2s(TODAY),'dow'), '', hbars([
          { label:'Present', value:s.Present },{ label:'Late', value:s.Late },{ label:'Undertime', value:s.Undertime },
          { label:'Absent', value:s.Absent },
          { label:'On leave', value:s['On Leave'], mut:true },{ label:'Rest day', value:s['Rest Day'], mut:true },
        ]))}
      </div>
      <div style="margin-top:14px">${card('Tardiness by department','Late arrivals today','', hbars(DEPARTMENTS.map(d => ({
        label:d.name, value:onDutyRoster(d2s(TODAY)).filter(e => e.dept === d.code && attendanceFor(e, d2s(TODAY)).status === 'Late').length,
      })).sort((a,b) => b.value - a.value)))}</div>`;
    }

    case 'Turnover': {
      const sep = AppState.employees.filter(e => e.status === 'Separated');
      return `
      <div class="grid g2" style="align-items:start">
        ${card('Separations by type','Last 12 months','', hbars(['Resignation','End of Contract','Termination','Retirement'].map(t => ({
          label:t, value:AppState.employees.filter(e => e.separatedOn && (e.separationType || (AppState.offboarding.find(o => o.emp === e.id)||{}).type) === t).length }))))}
        ${card('Turnover rate','Separations against average headcount','', `
          <div class="row" style="gap:14px;align-items:center">
            ${ringChart(pct(sep.length, AppState.employees.length), 96, 'turnover')}
            <div style="flex:1 1 auto">${kv([
              ['Separations', String(sep.length)],
              ['Average headcount', String(activeEmployees().length)],
              ['Voluntary', String(sep.filter(e => ['Resignation','Retirement'].includes(e.separationType || '')).length)],
              ['Involuntary', String(sep.filter(e => e.separationType === 'Termination').length)],
            ])}</div>
          </div>`)}
      </div>
      <div style="margin-top:14px">${card('Retention by tenure','Active employees','', hbars([
        { label:'Under 6 months', value:activeEmployees().filter(e => Number(yearsSince(e.hired)) < .5).length },
        { label:'6 months to 1 year', value:activeEmployees().filter(e => Number(yearsSince(e.hired)) >= .5 && Number(yearsSince(e.hired)) < 1).length },
        { label:'1 to 3 years', value:activeEmployees().filter(e => Number(yearsSince(e.hired)) >= 1 && Number(yearsSince(e.hired)) < 3).length },
        { label:'3 to 5 years', value:activeEmployees().filter(e => Number(yearsSince(e.hired)) >= 3 && Number(yearsSince(e.hired)) < 5).length },
        { label:'Over 5 years', value:activeEmployees().filter(e => Number(yearsSince(e.hired)) >= 5).length },
      ]))}</div>`;
    }

    case 'Leave': return `
      <div class="grid g2" style="align-items:start">
        ${card('Leave days by type','Approved this year','', hbars(LEAVE_TYPES.map(t => ({
          label:t.name, value:AppState.leave.filter(l => l.type === t.code && l.status === 'Approved').reduce((s,l) => s + l.days, 0) }))))}
        ${card('Leave requests by status','','', hbars(['Approved','For Approval','Pending','Rejected'].map(s => ({
          label:s, value:AppState.leave.filter(l => l.status === s).length })).filter(r => r.value)))}
      </div>
      <div style="margin-top:14px">${card('Leave utilisation by department','Approved days','', hbars(DEPARTMENTS.map(d => ({
        label:d.name, value:AppState.leave.filter(l => { const e = empById(l.emp); return e && e.dept === d.code && l.status === 'Approved'; }).reduce((s,l) => s + l.days, 0),
      })).filter(r => r.value).sort((a,b) => b.value - a.value)))}</div>`;

    case 'Performance': {
      const done = AppState.performance.filter(p => p.status === 'Completed');
      return `<div class="grid g2" style="align-items:start">
        ${card('Rating distribution','Completed evaluations','', hbars([1,2,3,4,5].map(n => ({ label:`${n}.0 – ${n}.9`, value:done.filter(r => Math.floor(r.overall) === n).length }))))}
        ${card('Evaluation status','Current cycle','', hbars(['Completed','In Progress','Not Started'].map(s => ({ label:s, value:AppState.performance.filter(p => p.status === s).length }))))}
      </div>
      <div style="margin-top:14px">${card('Average rating by department','','', hbars(DEPARTMENTS.map(d => {
        const list = done.filter(p => { const e = empById(p.emp); return e && e.dept === d.code; });
        return { label:d.name, value:list.length ? Number((list.reduce((s,p) => s + p.overall, 0)/list.length).toFixed(2)) : 0 };
      }).filter(r => r.value).sort((a,b) => b.value - a.value), { fmt:r => r.value.toFixed(2) }))}</div>`;
    }

    case 'Training': return `
      <div class="grid g2" style="align-items:start">
        ${card('Training by type','Records this year','', hbars(TRAINING_TYPES.map(t => ({ label:t, value:AppState.trainings.filter(x => x.type === t).length })).sort((a,b) => b.value - a.value)))}
        ${card('Certification validity','All records','', hbars(['Valid','Expiring Soon','Expired'].map(s => ({ label:s, value:AppState.trainings.filter(t => t.status === s).length }))))}
      </div>
      <div style="margin-top:14px">${card('Training hours by department','Delivered this year','', hbars(DEPARTMENTS.map(d => ({
        label:d.name, value:AppState.trainings.filter(t => { const e = empById(t.emp); return e && e.dept === d.code; }).reduce((s,t) => s + t.hours, 0),
      })).filter(r => r.value).sort((a,b) => b.value - a.value), { fmt:r => `${r.value} hrs` }))}</div>`;

    case 'Compensation': {
      const emps2 = activeEmployees();
      return `<div class="grid g2" style="align-items:start">
        ${card('Average salary by level','','', hbars(['Rank & File','Supervisory','Managerial'].map(l => {
          const list = emps2.filter(e => e.level === l);
          return { label:l, value:list.length ? Math.round(list.reduce((s,e) => s + e.salary, 0)/list.length) : 0 };
        }), { fmt:r => peso(r.value) }))}
        ${card('Monthly cost by department','Basic plus allowances','', hbars(DEPARTMENTS.map(d => ({
          label:d.name, value:emps2.filter(e => e.dept === d.code).reduce((s,e) => s + e.salary + e.allowances.reduce((x,a) => x + a.amount, 0), 0),
        })).sort((a,b) => b.value - a.value), { fmt:r => peso(r.value) }))}
      </div>`;
    }

    case 'Documents': {
      const docs = allDocuments();
      return `<div class="grid g2" style="align-items:start">
        ${card('Document status','All tracked documents','', hbars(['Valid','Expiring Soon','Expired','Missing'].map(s => ({ label:s, value:docs.filter(d => d.status === s).length }))))}
        ${card('Compliance by department','Percentage of documents valid','', hbars(DEPARTMENTS.map(d => {
          const list = docs.filter(x => x.dept === d.code);
          return { label:d.name, value:list.length ? pct(list.filter(x => x.status === 'Valid').length, list.length) : 0 };
        }).sort((a,b) => b.value - a.value), { fmt:r => r.value + '%' }))}
      </div>`;
    }

    case 'Demographics': {
      const emps2 = activeEmployees();
      const ageBand = e => { const a = 2026 - Number(e.birth.slice(0,4)); return a < 25 ? 'Under 25' : a < 35 ? '25 – 34' : a < 45 ? '35 – 44' : a < 55 ? '45 – 54' : '55 and above'; };
      return `<div class="grid g2" style="align-items:start">
        ${card('Age distribution','Active employees','', hbars(['Under 25','25 – 34','35 – 44','45 – 54','55 and above'].map(b => ({ label:b, value:emps2.filter(e => ageBand(e) === b).length }))))}
        ${card('Educational attainment','','', hbars(ATTAINMENT.map(a => ({ label:a, value:emps2.filter(e => e.education.attainment === a).length })).filter(r => r.value).sort((a,b) => b.value - a.value)))}
      </div>
      <div class="grid g2" style="margin-top:14px;align-items:start">
        ${card('Employment type','','', hbars(EMPLOYMENT_TYPES.map(t => ({ label:t, value:emps2.filter(e => e.type === t).length })).filter(r => r.value)))}
        ${card('Length of service','','', hbars([
          { label:'Under 1 year', value:emps2.filter(e => Number(yearsSince(e.hired)) < 1).length },
          { label:'1 to 3 years', value:emps2.filter(e => Number(yearsSince(e.hired)) >= 1 && Number(yearsSince(e.hired)) < 3).length },
          { label:'3 to 5 years', value:emps2.filter(e => Number(yearsSince(e.hired)) >= 3 && Number(yearsSince(e.hired)) < 5).length },
          { label:'Over 5 years', value:emps2.filter(e => Number(yearsSince(e.hired)) >= 5).length },
        ]))}
      </div>`;
    }

    case 'Movement': return `
      <div class="grid g2" style="align-items:start">
        ${card('Movements by type','This year','', hbars([...new Set(AppState.movements.map(m => m.type))].map(t => ({
          label:t, value:AppState.movements.filter(m => m.type === t).length })).sort((a,b) => b.value - a.value)))}
        ${card('Internal fill rate','Positions filled from within','', `
          <div class="row" style="gap:14px;align-items:center">
            ${ringChart(pct(AppState.movements.filter(m => m.type === 'Promotion').length, Math.max(1, AppState.movements.filter(m => m.type === 'Promotion').length + stageCount('Hired'))), 96, 'internal')}
            <div style="flex:1 1 auto">${kv([
              ['Internal promotions', String(AppState.movements.filter(m => m.type === 'Promotion').length)],
              ['External hires', String(stageCount('Hired'))],
              ['Transfers', String(AppState.movements.filter(m => m.type === 'Transfer').length)],
            ])}</div>
          </div>`)}
      </div>`;

    case 'Compliance': {
      const docs = allDocuments();
      const trainValid = AppState.trainings.filter(t => t.status === 'Valid').length;
      return `<div class="grid g2" style="align-items:start">
        ${card('Document compliance','Valid documents against all tracked','', `
          <div class="row" style="gap:14px;align-items:center">
            ${ringChart(pct(docs.filter(d => d.status === 'Valid').length, docs.length), 96, 'valid')}
            <div style="flex:1 1 auto">${hbars([
              { label:'Valid', value:docs.filter(d => d.status === 'Valid').length },
              { label:'Expiring soon', value:docs.filter(d => d.status === 'Expiring Soon').length },
              { label:'Expired', value:docs.filter(d => d.status === 'Expired').length },
              { label:'Missing', value:docs.filter(d => d.status === 'Missing').length },
            ])}</div></div>`)}
        ${card('Mandatory training','Food safety and occupational safety','', `
          <div class="row" style="gap:14px;align-items:center">
            ${ringChart(pct(trainValid, AppState.trainings.length), 96, 'current')}
            <div style="flex:1 1 auto">${kv([
              ['Valid certifications', String(trainValid)],
              ['Expiring soon', String(AppState.trainings.filter(t => t.status === 'Expiring Soon').length)],
              ['Expired', String(AppState.trainings.filter(t => t.status === 'Expired').length)],
            ])}</div></div>`)}
      </div>
      <div style="margin-top:14px">${card('Open employee relations cases','Cases still requiring action','', hbars(
        ['Open','Under Investigation','Resolved','Closed'].map(s => ({ label:s, value:AppState.cases.filter(c => c.status === s).length }))))}</div>`;
    }
  }
}
function viewReports(){
  const body = `
    <div class="tabs" style="margin-bottom:14px">${REPORT_TABS.map(t => `<button class="tab ${t===reportTab?'on':''}" data-report="${t}">${t}</button>`).join('')}</div>
    <div id="reportBody">${reportContent()}</div>`;
  return page('Reports & analytics', 'Twelve standard HR reports, all computed from live records.', `
    <button class="btn" data-action="export">${icon('download',15)} Export report</button>`, body);
}

/* ---------------------------------------------------------------------------
   27. VIEWS — ADMINISTRATION
   --------------------------------------------------------------------------- */
let masterTab = 'Departments';
const MASTER_TABS = ['Departments','Positions','Branches','Employment Types','Shifts','Leave Types','Training Types','Employment Statuses'];
function masterContent(){
  const tbl = (head, rows) => `<div class="table-wrap"><div class="table-scroll short"><table class="data">
    <thead><tr>${head.map(h => `<th class="${h.r?'right':''}">${esc(h.l||h)}</th>`).join('')}</tr></thead>
    <tbody>${rows}</tbody></table></div></div>`;
  switch (masterTab){
    case 'Departments': return tbl(['Code','Department','Head','Employees',{ l:'Authorised', r:true }], DEPARTMENTS.map(d => `
      <tr><td class="mono">${d.code}</td><td class="primary">${esc(d.name)}</td><td class="muted">${esc(d.head)}</td>
      <td class="num">${activeEmployees().filter(e => e.dept === d.code).length}</td><td class="right num">${d.authorized}</td></tr>`).join(''));
    case 'Positions': return tbl(['Code','Position','Department','Level',{ l:'Salary range', r:true }], POSITIONS.map(p => `
      <tr><td class="mono">${p.code}</td><td class="primary">${esc(p.title)}</td><td class="muted">${esc(deptName(p.dept))}</td>
      <td class="muted">${esc(p.level)}</td><td class="right num">${peso(p.min)} – ${peso(p.max)}</td></tr>`).join(''));
    case 'Branches': return tbl(['Code','Branch','Location','Type',{ l:'Employees', r:true }], BRANCHES.map(b => `
      <tr><td class="mono">${b.code}</td><td class="primary">${esc(b.name)}</td><td class="muted">${esc(b.city)}</td>
      <td class="muted">${esc(b.type)}</td><td class="right num">${activeEmployees().filter(e => e.branch === b.code).length}</td></tr>`).join(''));
    case 'Employment Types': return tbl(['Employment type',{ l:'Employees', r:true }], EMPLOYMENT_TYPES.map(t => `
      <tr><td class="primary">${esc(t)}</td><td class="right num">${activeEmployees().filter(e => e.type === t).length}</td></tr>`).join(''));
    case 'Shifts': return tbl(['Code','Shift','Start','End',{ l:'Hours', r:true },{ l:'Assigned', r:true }], SHIFTS.map(s => `
      <tr><td class="mono">${s.code}</td><td class="primary">${esc(s.name)}</td><td class="num">${s.start}</td><td class="num">${s.end}</td>
      <td class="right num">${s.hours || '—'}</td><td class="right num">${activeEmployees().filter(e => e.shift === s.code).length}</td></tr>`).join(''));
    case 'Leave Types': return tbl(['Code','Leave type',{ l:'Annual credits', r:true },{ l:'Filed this year', r:true }], LEAVE_TYPES.map(t => `
      <tr><td class="mono">${t.code}</td><td class="primary">${esc(t.name)}</td><td class="right num">${t.credits}</td>
      <td class="right num">${AppState.leave.filter(l => l.type === t.code).length}</td></tr>`).join(''));
    case 'Training Types': return tbl(['Training type',{ l:'Records', r:true }], TRAINING_TYPES.map(t => `
      <tr><td class="primary">${esc(t)}</td><td class="right num">${AppState.trainings.filter(x => x.type === t).length}</td></tr>`).join(''));
    case 'Employment Statuses': return tbl(['Status',{ l:'Employees', r:true }], EMPLOYMENT_STATUSES.map(s => `
      <tr><td class="primary">${badge(s)}</td><td class="right num">${AppState.employees.filter(e => e.status === s).length}</td></tr>`).join(''));
  }
}
function viewAdminMaster(){
  const body = `
    <div class="tabs" style="margin-bottom:14px">${MASTER_TABS.map(t => `<button class="tab ${t===masterTab?'on':''}" data-master="${t}">${t}</button>`).join('')}</div>
    <div id="masterBody">${masterContent()}</div>
    <div class="notice info" style="margin-top:14px">${icon('info',15)}
      <div>Master data drives every dropdown in the system. In production these lists are editable here and versioned, so historical records keep the value that applied at the time.</div></div>`;
  return page('Master data', 'The reference lists behind every form in the system.', `
    <button class="btn" data-action="export">${icon('download',15)} Export</button>`, body);
}

function viewAdminRoles(){
  const users = [
    { name:'Maria Reyes', role:'HRMGR', dept:'HRD', last:'Today, 08:02' },
    { name:'Angeline Cabrera', role:'RECR', dept:'HRD', last:'Today, 09:20' },
    { name:'Rico Bernardo', role:'RECR', dept:'HRD', last:'Yesterday, 16:44' },
    { name:'Katrina Espino', role:'HROFF', dept:'HRD', last:'Today, 07:51' },
    { name:'Jocelyn Navarro', role:'ADMIN', dept:'ADM', last:'Today, 08:30' },
    { name:'Cristina Aquino', role:'PAYRL', dept:'FIN', last:'Yesterday, 17:12' },
    { name:'Rolando Ocampo', role:'SUPV', dept:'PRD', last:'Today, 06:15' },
    { name:'Vicente Yatco', role:'MGMT', dept:'MGT', last:'Sep 4, 2026' },
  ];
  const body = `
    <div class="grid g-2-1" style="align-items:start">
      ${card('System users', `${users.length} accounts`, '', `
        <table class="data"><thead><tr><th>User</th><th>Role</th><th>Department</th><th>Last active</th></tr></thead>
        <tbody>${users.map(u => `<tr><td>${personCell(u.name, '')}</td>
          <td><b style="font-weight:550;color:var(--ink)">${esc((ROLES.find(r => r.code === u.role)||{}).name)}</b></td>
          <td class="muted">${esc(deptName(u.dept))}</td><td class="muted">${esc(u.last)}</td></tr>`).join('')}</tbody></table>`)}
      ${card('Roles','Nine defined roles','', `
        <div>${ROLES.map(r => `
          <div class="note-item"><div class="note-head"><b style="color:var(--ink);font-weight:600">${esc(r.name)}</b>
            <span class="chip" style="margin-left:auto">${AppState.currentUser.role === r.code ? 'Current' : r.code}</span></div>
          <div class="note-body" style="font-size:12.5px">${esc(r.desc)}</div></div>`).join('')}</div>`)}
    </div>
    <div style="margin-top:14px">${card('Permission matrix','What each role may do','', `
      <div class="table-scroll short"><table class="data role-matrix">
        <thead><tr><th style="width:200px">Role</th>${PERMISSIONS.map(p => `<th style="text-align:center">${esc(p)}</th>`).join('')}</tr></thead>
        <tbody>${ROLES.map(r => `<tr><td class="primary">${esc(r.name)}</td>
          ${PERMISSIONS.map(p => `<td class="perm">${ROLE_MATRIX[r.code].includes(p)
            ? `<span class="tick">${icon('check',14)}</span>` : `<span class="tick no">${icon('minus',14)}</span>`}</td>`).join('')}
        </tr>`).join('')}</tbody>
      </table></div>`)}</div>`;
  return page('Users & roles', 'Role-based access across all HR modules.', '', body);
}

function viewAdminAudit(){
  const t = DataTable({
    rows:AppState.audit.slice(), rowId:r => r.record, per:16,
    searchPlaceholder:'Search user, record, action',
    search:r => `${r.user} ${r.module} ${r.action} ${r.record} ${r.detail}`,
    filters:[
      { key:'module', label:'All modules', options:[...new Set(AppState.audit.map(a => a.module))] },
      { key:'user', label:'All users', options:[...new Set(AppState.audit.map(a => a.user))] },
    ],
    cols:[
      { key:'at', label:'Timestamp', w:'160px', render:r => `<span class="num muted">${esc(r.at)}</span>` },
      { key:'user', label:'User', w:'170px', render:r => personCell(r.user, '') },
      { key:'module', label:'Module', w:'150px', render:r => `<span class="muted">${esc(r.module)}</span>` },
      { key:'action', label:'Action', w:'190px', render:r => `<b style="font-weight:550;color:var(--ink)">${esc(r.action)}</b>` },
      { key:'record', label:'Record', w:'156px', cls:'mono', render:r => esc(r.record) },
      { key:'detail', label:'Details', render:r => `<span class="muted">${esc(r.detail)}</span>` },
    ],
    emptyTitle:'No audit entries', emptyText:'Actions taken in the system will be logged here.',
  });
  pendingTables.push(t);
  const body = `
    ${metricStrip([
      { label:'Entries logged', value:AppState.audit.length, note:'this session and seeded history' },
      { label:'Today', value:AppState.audit.filter(a => a.at.startsWith(d2s(TODAY))).length, note:fmtDate(d2s(TODAY),'long') },
      { label:'Recruitment actions', value:AppState.audit.filter(a => a.module === 'Recruitment').length, note:'invitations and applications' },
      { label:'Distinct users', value:[...new Set(AppState.audit.map(a => a.user))].length, note:'acting in the system' },
    ])}
    <div style="margin-top:14px">${t.html()}</div>`;
  return page('Audit trail', 'Who did what, to which record, and when.', `
    <button class="btn" data-action="export">${icon('download',15)} Export log</button>`, body);
}

/* ---------------------------------------------------------------------------
   28. REMAINING FORMS
   --------------------------------------------------------------------------- */
function formFileLeave(){
  const emps = activeEmployees();
  openModal(`
    <div class="modal-head"><div style="flex:1 1 auto">
      <div class="card-title">File a leave request</div>
      <div class="card-sub">Routed to the immediate supervisor, then to HR.</div></div>
      <button class="icon-btn" data-close-modal>${icon('close',16)}</button></div>
    <div class="modal-body"><div class="fgrid fg2">
      <label class="field span2"><span class="flabel">Employee</span>
        <select class="input" id="lvEmp">${emps.slice(0,60).map(e => `<option value="${e.id}">${esc(e.name)} — ${esc(e.position)}</option>`).join('')}</select></label>
      <label class="field"><span class="flabel">Leave type</span>
        <select class="input" id="lvType">${LEAVE_TYPES.map(t => `<option value="${t.code}">${esc(t.name)}</option>`).join('')}</select></label>
      <label class="field"><span class="flabel">Number of days</span><input class="input" type="number" id="lvDays" value="1" min="1" max="15"></label>
      <label class="field"><span class="flabel">Start date</span><input class="input" type="date" id="lvStart" value="${d2s(addDays(TODAY,3))}"></label>
      <label class="field"><span class="flabel">End date</span><input class="input" type="date" id="lvEnd" value="${d2s(addDays(TODAY,3))}"></label>
      <label class="field span2"><span class="flabel">Reason</span><input class="input" id="lvReason" placeholder="Brief reason for the leave"></label>
    </div></div>
    <div class="modal-foot"><button class="btn" data-close-modal>Cancel</button>
      <button class="btn primary" id="lvSave">Submit request</button></div>`);
  $('#lvDays').oninput = () => {
    const d = Number($('#lvDays').value) || 1;
    $('#lvEnd').value = d2s(addDays(s2d($('#lvStart').value), d - 1));
  };
  $('#lvSave').onclick = () => {
    const e = empById($('#lvEmp').value);
    MockAPI.fileLeave({
      emp:e.id, type:$('#lvType').value, days:Number($('#lvDays').value),
      start:$('#lvStart').value, end:$('#lvEnd').value,
      reason:$('#lvReason').value.trim() || 'Personal', approver:e.supervisor,
    });
    closeModal(); toast('Leave request filed', `${e.name} · ${$('#lvDays').value} day(s)`); refresh();
  };
}

function formCase(){
  const emps = activeEmployees();
  openModal(`
    <div class="modal-head"><div style="flex:1 1 auto">
      <div class="card-title">Log an employee relations case</div>
      <div class="card-sub">Handled confidentially and kept in the employee record.</div></div>
      <button class="icon-btn" data-close-modal>${icon('close',16)}</button></div>
    <div class="modal-body"><div class="fgrid fg2">
      <label class="field span2"><span class="flabel">Employee</span>
        <select class="input" id="csEmp">${emps.slice(0,60).map(e => `<option value="${e.id}">${esc(e.name)} — ${esc(deptName(e.dept))}</option>`).join('')}</select></label>
      <label class="field"><span class="flabel">Case type</span>
        <select class="input" id="csType"><option>Disciplinary Action</option><option>Grievance</option><option>Incident</option><option>Concern</option><option>Investigation</option></select></label>
      <label class="field"><span class="flabel">Confidentiality</span>
        <select class="input" id="csConf"><option value="yes">Confidential — HR Manager and above</option><option value="no">Standard HR access</option></select></label>
      <label class="field span2"><span class="flabel">Description</span>
        <textarea class="textarea" id="csDesc" placeholder="Factual description of what happened, with dates."></textarea></label>
    </div></div>
    <div class="modal-foot"><button class="btn" data-close-modal>Cancel</button>
      <button class="btn primary" id="csSave">Log case</button></div>`);
  $('#csSave').onclick = () => {
    const e = empById($('#csEmp').value);
    MockAPI.addCase({ emp:e.id, type:$('#csType').value, description:$('#csDesc').value.trim() || 'No description provided.', confidential:$('#csConf').value === 'yes' });
    closeModal(); toast('Case logged', `${e.name} · ${$('#csType').value}`); refresh();
  };
}

function formMovement(empId){
  const e = empById(empId); if (!e) return;
  openModal(`
    <div class="modal-head"><div style="flex:1 1 auto">
      <div class="card-title">Record employee movement</div><div class="card-sub">${esc(e.name)} · ${esc(e.position)}</div></div>
      <button class="icon-btn" data-close-modal>${icon('close',16)}</button></div>
    <div class="modal-body"><div class="fgrid fg2">
      <label class="field"><span class="flabel">Movement type</span>
        <select class="input" id="mvType"><option>Promotion</option><option>Transfer</option><option>Department Change</option><option>Position Change</option><option>Salary Adjustment</option><option>Probationary → Regular</option></select></label>
      <label class="field"><span class="flabel">Effective date</span><input class="input" type="date" id="mvDate" value="${d2s(addDays(TODAY,14))}"></label>
      <label class="field"><span class="flabel">New position</span>
        <select class="input" id="mvTo">${POSITIONS.map(p => `<option ${p.title===e.position?'selected':''}>${esc(p.title)}</option>`).join('')}</select></label>
      <label class="field"><span class="flabel">New basic salary</span><input class="input" type="number" id="mvSalary" value="${e.salary}"></label>
      <label class="field span2"><span class="flabel">Reason</span><input class="input" id="mvReason" placeholder="Basis for the movement"></label>
    </div></div>
    <div class="modal-foot"><button class="btn" data-close-modal>Cancel</button>
      <button class="btn primary" id="mvSave">Record movement</button></div>`);
  $('#mvSave').onclick = () => {
    const newSalary = Number($('#mvSalary').value);
    AppState.movements.unshift({
      id:`MV-2026-${String(800 + AppState.movements.length)}`, emp:e.id, type:$('#mvType').value,
      effective:$('#mvDate').value, from:e.position, to:$('#mvTo').value,
      prevSalary:e.salary, newSalary, reason:$('#mvReason').value.trim() || 'Approved by management',
      status: s2d($('#mvDate').value) > TODAY ? 'Pending Approval' : 'Approved',
      approvedBy: s2d($('#mvDate').value) > TODAY ? null : AppState.currentUser.name,
    });
    if (s2d($('#mvDate').value) <= TODAY){ e.position = $('#mvTo').value; e.salary = newSalary; }
    MockAPI._audit('Employees','Movement Recorded', e.id, `${$('#mvType').value} effective ${fmtDate($('#mvDate').value)}`);
    closeModal(); toast('Movement recorded', `${e.name} · ${$('#mvType').value}`); refresh();
  };
}

function formOffboard(empId){
  const e = empById(empId); if (!e) return;
  openModal(`
    <div class="modal-head"><div style="flex:1 1 auto">
      <div class="card-title">Start offboarding</div><div class="card-sub">${esc(e.name)} · ${esc(e.position)}</div></div>
      <button class="icon-btn" data-close-modal>${icon('close',16)}</button></div>
    <div class="modal-body"><div class="fgrid fg2">
      <label class="field"><span class="flabel">Separation type</span>
        <select class="input" id="obType"><option>Resignation</option><option>End of Contract</option><option>Termination</option><option>Retirement</option><option>Redundancy</option></select></label>
      <label class="field"><span class="flabel">Last working day</span><input class="input" type="date" id="obLast" value="${d2s(addDays(TODAY,30))}"></label>
      <label class="field span2"><span class="flabel">Reason</span><input class="input" id="obReason" placeholder="Stated reason for separation"></label>
    </div>
    <div class="notice info">${icon('info',15)}<div>A clearance checklist is created for HR, Finance, IT, Warehouse and Assets, Administration and the immediate supervisor.</div></div></div>
    <div class="modal-foot"><button class="btn" data-close-modal>Cancel</button>
      <button class="btn primary" id="obSave">Start offboarding</button></div>`);
  $('#obSave').onclick = () => {
    MockAPI.startOffboarding(e.id, $('#obType').value, $('#obReason').value.trim() || 'Not specified', $('#obLast').value);
    closeModal(); toast('Offboarding started', `${e.name} · ${$('#obType').value}`); refresh();
  };
}

function formCorrection(empId, date){
  const e = empById(empId); if (!e) return;
  const cur = attendanceFor(e, date);
  openModal(`
    <div class="modal-head"><div style="flex:1 1 auto">
      <div class="card-title">Attendance correction</div><div class="card-sub">${esc(e.name)} · ${fmtDate(date,'long')}</div></div>
      <button class="icon-btn" data-close-modal>${icon('close',16)}</button></div>
    <div class="modal-body">
      ${kv([['Current record', `In <b class="num">${esc(cur.in)}</b> · Out <b class="num">${esc(cur.out)}</b> · ${badge(cur.status)}`]])}
      <div class="divider"></div>
      <div class="fgrid fg2">
        <label class="field"><span class="flabel">Corrected time in</span><input class="input" type="time" id="cnIn" value="${cur.in === '—' ? '06:00' : cur.in}"></label>
        <label class="field"><span class="flabel">Corrected time out</span><input class="input" type="time" id="cnOut" value="${cur.out === '—' ? '15:00' : cur.out}"></label>
        <label class="field span2"><span class="flabel">Reason for correction</span>
          <select class="input" id="cnReason"><option>Biometric device failure</option><option>Forgot to log in</option><option>Forgot to log out</option><option>Official business</option><option>Approved offsite work</option></select></label>
      </div>
    </div>
    <div class="modal-foot"><button class="btn" data-close-modal>Cancel</button>
      <button class="btn primary" id="cnSave">Submit correction</button></div>`);
  $('#cnSave').onclick = () => {
    MockAPI.fileCorrection({ emp:e.id, date, newIn:$('#cnIn').value, newOut:$('#cnOut').value, reason:$('#cnReason').value });
    closeModal(); toast('Correction filed', `${e.name} · ${fmtDate(date)}`); go('#/attendance/corrections');
  };
}

/* ---------------------------------------------------------------------------
   29. ROUTER
   --------------------------------------------------------------------------- */
const ROUTES = {
  '#/dashboard':viewDashboard,
  '#/recruitment':viewRecruitment,
  '#/recruitment/invitations':viewInvitations,
  '#/recruitment/ats':viewATS,
  '#/recruitment/screening':viewScreening,
  '#/recruitment/interviews':viewInterviews,
  '#/recruitment/assessments':viewAssessments,
  '#/recruitment/evaluation':viewEvaluation,
  '#/recruitment/offers':viewOffers,
  '#/recruitment/preemployment':viewPreEmployment,
  '#/employees':viewEmployees,
  '#/onboarding':viewOnboarding,
  '#/movement':viewMovement,
  '#/offboarding':viewOffboarding,
  '#/attendance':viewAttendance,
  '#/shifts':viewShifts,
  '#/attendance/corrections':viewCorrections,
  '#/leave':viewLeave,
  '#/performance':viewPerformance,
  '#/training':viewTraining,
  '#/relations':viewRelations,
  '#/compensation':viewCompensation,
  '#/documents':viewDocuments,
  '#/workforce':viewWorkforce,
  '#/reports':viewReports,
  '#/admin/master':viewAdminMaster,
  '#/admin/roles':viewAdminRoles,
  '#/admin/audit':viewAdminAudit,
};

function router(){
  const hash = location.hash || '#/dashboard';
  pendingTables = [];

  if (hash.startsWith('#/apply/')){
    closeDrawer(); closeModal();
    renderPortal(hash.replace('#/apply/',''));
    return;
  }
  leavePortal();

  let html;
  if (hash.startsWith('#/employees/')){
    html = viewEmployeeProfile(hash.replace('#/employees/',''));
  } else {
    const view = ROUTES[hash] || viewDashboard;
    html = view();
    renderCrumbs();
  }
  const v = $('#view');
  v.innerHTML = renderGuide(hash) + html;
  v.scrollTop = 0;
  window.scrollTo(0,0);
  pendingTables.forEach(t => t.mount());
  renderNav();
  renderNotifBadge();
  bindViewControls();
  // clear the "new record" highlight after it has been shown once
  setTimeout(() => { AppState.applicants.forEach(a => delete a.isNew); AppState.employees.forEach(e => delete e.isNew); }, 2000);
}
function refresh(){ router(); }

function initMoonCloud(){
  const moon = $('#greetMoon'), cloud = $('#moonCloud'), text = $('#moonCloudText');
  if (!moon || !cloud || !text) return;
  let timers = [];
  const show = () => {
    timers.forEach(clearTimeout); timers = [];
    const first = ((AppState.currentUser && AppState.currentUser.name) || '').trim().split(' ')[0] || 'there';
    const steps = [`Hi ${first}`, 'Remember you are beautiful', 'and wonderfully made', '🌸 🌷 🌼'];
    text.textContent = steps[0];
    cloud.classList.add('show');
    steps.slice(1).forEach((msg, i) => {
      timers.push(setTimeout(() => { text.textContent = msg; }, (i + 1) * 2000));
    });
    timers.push(setTimeout(() => cloud.classList.remove('show'), steps.length * 2000 + 2500));
  };
  moon.onclick = show;
  moon.onkeydown = e => { if (e.key === 'Enter' || e.key === ' '){ e.preventDefault(); show(); } };
}
function bindViewControls(){
  initMoonCloud();
  const attDate = $('#attDate');
  if (attDate) attDate.onchange = e => { attendanceDate = e.target.value; refresh(); };
  const shiftDept = $('#shiftDept');
  if (shiftDept) shiftDept.onchange = e => { AppState.filters.shiftDept = e.target.value; refresh(); };
  $$('[data-report]').forEach(b => b.onclick = () => {
    reportTab = b.dataset.report;
    $$('[data-report]').forEach(x => x.classList.toggle('on', x === b));
    $('#reportBody').innerHTML = reportContent();
  });
  $$('[data-master]').forEach(b => b.onclick = () => {
    masterTab = b.dataset.master;
    $$('[data-master]').forEach(x => x.classList.toggle('on', x === b));
    $('#masterBody').innerHTML = masterContent();
  });
  $$('[data-emptab]').forEach(b => b.onclick = () => {
    currentEmpTab = b.dataset.emptab;
    $$('[data-emptab]').forEach(x => x.classList.toggle('on', x === b));
    const id = location.hash.replace('#/employees/','');
    $('#empTabBody').innerHTML = empTabContent(empById(id));
  });
}

/* ---------------------------------------------------------------------------
   30. GLOBAL EVENT WIRING
   --------------------------------------------------------------------------- */
function copyText(text){
  const done = () => toast('Copied to clipboard', text.length > 46 ? text.slice(0,46) + '…' : text);
  if (navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(done).catch(() => fallback());
  } else fallback();
  function fallback(){
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); done(); } catch(e){ toast('Copy failed', 'Select the link and copy it manually', 'warn'); }
    ta.remove();
  }
}
function downloadQR(invId){
  const svg = QR.svg(applyURL(invId), 512, 4);
  const blob = new Blob([svg], { type:'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = `${invId}-qr.svg`;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
  toast('QR code downloaded', `${invId}-qr.svg`);
}

document.addEventListener('click', e => {
  const t = e.target;

  const goto = t.closest('[data-goto]');
  if (goto){ if (goto.hasAttribute('data-close-modal')) closeModal(); closeDrawer(); go(goto.dataset.goto); return; }

  const guideHide = t.closest('[data-guide-hide]');
  if (guideHide){ setGuideShown(false); $('#guideBtn').classList.remove('on'); refresh(); return; }

  if (t.closest('[data-tour-start]')){ startTour(); return; }
  if (t.closest('[data-tour-next]')){ tourIdx++; paintTour(); return; }
  if (t.closest('[data-tour-back]')){ tourIdx--; paintTour(); return; }
  if (t.closest('[data-tour-end]')){ endTour(); return; }

  const closeM = t.closest('[data-close-modal]'); if (closeM){ closeModal(); return; }
  const closeD = t.closest('[data-close-drawer]'); if (closeD){ closeDrawer(); return; }

  const copy = t.closest('[data-copy]'); if (copy){ copyText(copy.dataset.copy); return; }
  const dl = t.closest('[data-qr-download]'); if (dl){ downloadQR(dl.dataset.qrDownload); return; }

  const apply = t.closest('[data-open-apply]');
  if (apply){ closeModal(); closeDrawer(); go(`#/apply/${apply.dataset.openApply.toLowerCase()}`); return; }

  const openApp = t.closest('[data-open-app]');
  if (openApp){ closeModal(); closeDrawer(); setTimeout(() => openApplicant(openApp.dataset.openApp), 60); return; }

  const openEmp = t.closest('[data-open-emp]');
  if (openEmp){ closeModal(); closeDrawer(); go(`#/employees/${openEmp.dataset.openEmp}`); return; }

  const invQR = t.closest('[data-inv-qr]');
  if (invQR){ const inv = invById(invQR.dataset.invQr); if (inv) showInvitationQR(inv); return; }

  const invMenu = t.closest('[data-inv-menu]');
  if (invMenu){
    const inv = invById(invMenu.dataset.invMenu);
    openPop(invMenu, `
      <button class="menu-item" data-inv-qr="${esc(inv.id)}">${icon('qr',15)} Show QR code</button>
      <button class="menu-item" data-copy="${esc(applyURL(inv.id))}">${icon('copy',15)} Copy application link</button>
      <button class="menu-item" data-qr-download="${esc(inv.id)}">${icon('download',15)} Download QR</button>
      ${inv.status !== 'Submitted' ? `<button class="menu-item" data-open-apply="${esc(inv.id)}">${icon('eye',15)} Open as applicant</button>` : ''}
      ${inv.applicationId ? `<button class="menu-item" data-open-app="${esc(inv.applicationId)}">${icon('file',15)} View application</button>` : ''}
      <div class="menu-sep"></div>
      ${['Unused','Opened'].includes(inv.status) ? `<button class="menu-item danger" data-revoke="${esc(inv.id)}">${icon('xcircle',15)} Revoke invitation</button>`
        : `<button class="menu-item" disabled style="opacity:.45">${icon('lock',15)} Token already closed</button>`}`, 250);
    return;
  }
  const revoke = t.closest('[data-revoke]');
  if (revoke){
    closePop();
    const id = revoke.dataset.revoke;
    confirmDialog('Revoke this invitation?',
      `Invitation <b class="num">${esc(id)}</b> will no longer accept an application. This cannot be undone.`,
      'Revoke invitation', () => { MockAPI.revokeInvitation(id, 'Revoked by HR'); closeDrawer(); toast('Invitation revoked', id, 'warn'); refresh(); }, true);
    return;
  }

  const shift = t.closest('[data-shift]');
  if (shift){
    const [empId, date] = shift.dataset.shift.split(':');
    openPop(shift, SHIFTS.map(s => `<button class="menu-item" data-setshift="${empId}:${date}:${s.code}">
      <span class="dot" style="background:${s.cls==='m'?'#2b5f8f':s.cls==='d'?'var(--accent)':s.cls==='n'?'var(--purple)':'var(--ink-4)'}"></span>
      ${esc(s.name)} <span class="dim" style="margin-left:auto">${s.start}${s.code!=='RST'?`–${s.end}`:''}</span></button>`).join(''), 260);
    return;
  }
  const setShift = t.closest('[data-setshift]');
  if (setShift){
    const [empId, date, code] = setShift.dataset.setshift.split(':');
    MockAPI.assignShift(empId, date, code);
    closePop(); toast('Shift updated', `${(empById(empId)||{}).name} · ${shiftBy(code).name}`); refresh();
    return;
  }

  const req = t.closest('[data-req]');
  if (req) return; // handled by change event

  const action = t.closest('[data-action]');
  if (action){
    closePop();
    switch (action.dataset.action){
      case 'new-invitation': openGenerateInvitation(); return;
      case 'file-leave': formFileLeave(); return;
      case 'new-case': formCase(); return;
      case 'export': toast('Export queued', 'In production this generates an Excel or PDF file.'); return;
    }
  }

  const act = t.closest('[data-act]');
  if (act){
    const [kind, a, b] = act.dataset.act.split(':');
    switch (kind){
      case 'screen': formScreening(a); return;
      case 'interview': formInterview(a); return;
      case 'ivresult': formInterviewResult(a, b); return;
      case 'assess': formAssessment(a); return;
      case 'evaluate': formEvaluation(a); return;
      case 'offer': formOffer(a); return;
      case 'offerresp': formOfferResponse(a); return;
      case 'convert': formConvert(a); return;
      case 'emp': if (a) go(`#/employees/${a}`); return;
      case 'reject': {
        const app = appById(a);
        confirmDialog('Reject this application?',
          `${esc(app.name)} will be moved to <b>Rejected</b> and removed from the active pipeline.`,
          'Reject application', () => { MockAPI.setStage(a, 'Rejected', 'Application rejected by HR.'); closeDrawer(); toast('Application rejected', app.name, 'warn'); refresh(); }, true);
        return;
      }
      case 'note': {
        const text = ($('#noteInput') || {}).value;
        if (!text || !text.trim()){ toast('Nothing to save', 'Type a note first', 'warn'); return; }
        const app = appById(a);
        const now = new Date();
        app.notes.unshift({ by:AppState.currentUser.name, date:d2s(TODAY), time:`${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`, text:text.trim() });
        MockAPI._audit('Recruitment','Note Added', a, text.trim().slice(0,60));
        openApplicant(a, 'Notes'); toast('Note added');
        return;
      }
      case 'upload': {
        const app = appById(a);
        app.documents.push({ name:`Supporting document ${app.documents.length}`, type:'Application', date:d2s(TODAY), status:'Valid' });
        openApplicant(a, 'Documents'); toast('Document uploaded', 'Simulated upload');
        return;
      }
      case 'leaveapprove': MockAPI.setLeaveStatus(a, 'Approved'); closeDrawer(); toast('Leave approved', a); refresh(); return;
      case 'leavereject': MockAPI.setLeaveStatus(a, 'Rejected', 'Rejected by HR.'); closeDrawer(); toast('Leave rejected', a, 'warn'); refresh(); return;
      case 'review': formReview(a); return;
      case 'onbstep': MockAPI.advanceOnboarding(a); toast('Onboarding step completed'); refresh(); return;
      case 'offstep': MockAPI.advanceOffboarding(a); closeDrawer(); toast('Offboarding step completed'); refresh(); return;
      case 'caseupdate': {
        const note = ($('#caseNote') || {}).value || '';
        MockAPI.updateCase(a, act.dataset.act.split(':').slice(2).join(':'), note.trim());
        closeDrawer(); toast('Case updated'); refresh(); return;
      }
      case 'correct': formCorrection(a, b); return;
      case 'corrapprove': MockAPI.setCorrectionStatus(a, 'Approved'); toast('Correction approved'); refresh(); return;
      case 'corrreject': MockAPI.setCorrectionStatus(a, 'Rejected'); toast('Correction rejected', '', 'warn'); refresh(); return;
      case 'movement': formMovement(a); return;
      case 'offboard': formOffboard(a); return;
    }
  }
});

document.addEventListener('change', e => {
  const req = e.target.closest('[data-req]');
  if (req){
    const [appId, idx] = req.dataset.req.split(':');
    MockAPI.setRequirement(appId, Number(idx), e.target.value);
    openApplicant(appId, 'Requirements');
    toast('Requirement updated', e.target.value);
  }
});

/* ---------- top bar ---------- */
function showInvitationQR(inv){
  openModal(`
    <div class="modal-head"><div style="flex:1 1 auto">
      <div class="card-title">${esc(inv.applicant)}</div>
      <div class="card-sub">${esc(inv.position)} · ${esc(inv.id)}</div></div>
      <button class="icon-btn" data-close-modal>${icon('close',16)}</button></div>
    <div class="modal-body">${invitationQRPanel(inv)}</div>
    <div class="modal-foot"><button class="btn" data-close-modal>Close</button></div>`);
}
function openNotifications(){
  const list = AppState.notifications;
  openPop($('#notifBtn'), `
    <div class="pop-head"><b style="font-size:12.5px">Notifications</b>
      <div style="flex:1 1 auto"></div>
      <button class="btn ghost sm" id="markRead">Mark all read</button></div>
    <div class="pop-list">${list.length ? list.map(n => `
      <button class="notif ${n.read?'':'unread'}" data-goto="${esc(n.route)}">
        <span class="nico ${n.kind}">${icon(n.kind === 'ok' ? 'checkcircle' : n.kind === 'warn' ? 'alert' : 'info', 14)}</span>
        <span style="flex:1 1 auto"><span class="ntitle">${esc(n.text)}</span><span class="ntime">${esc(n.time)}</span></span>
      </button>`).join('') : '<div class="empty"><b>You are all caught up</b><p>New activity will show here.</p></div>'}</div>`, 366);
  const mark = $('#markRead');
  if (mark) mark.onclick = ev => { ev.stopPropagation(); AppState.notifications.forEach(n => n.read = true); renderNotifBadge(); closePop(); toast('Notifications marked as read'); };
}
function openQuickActions(){
  openPop($('#quickBtn'), `
    <div class="pop-head"><b style="font-size:12.5px">Quick actions</b></div>
    <button class="menu-item" data-action="new-invitation">${icon('qr',15)} Generate application invitation</button>
    <button class="menu-item" data-goto="#/recruitment/ats">${icon('users',15)} Open applicant tracking</button>
    <button class="menu-item" data-action="file-leave">${icon('calendar',15)} File a leave request</button>
    <button class="menu-item" data-action="new-case">${icon('shield',15)} Log an employee relations case</button>
    <div class="menu-sep"></div>
    <button class="menu-item" data-goto="#/reports">${icon('chart',15)} Reports and analytics</button>
    <button class="menu-item" data-goto="#/admin/audit">${icon('history',15)} Audit trail</button>`, 300);
}
function openUserMenu(){
  const u = AppState.currentUser;
  openPop($('#userBtn'), `
    <div class="pop-head">
      <span class="avatar" style="background:#3f5a4c">${esc(u.initials||'')}</span>
      <div><div style="font-size:12.5px;font-weight:600">${esc(u.name||'')}</div>
        <div style="font-size:11px;color:var(--ink-4)">${esc(u.roleName||'')}</div></div></div>
    <div class="pop-list">
      <button class="menu-item" id="signOutBtn">Sign out</button>
    </div>`, 220);
  const signOut = $('#signOutBtn');
  if (signOut) signOut.onclick = async () => { closePop(); await Auth.signOut(); location.reload(); };
}

/* ---------- command palette ---------- */
function paletteItems(q){
  const out = [];
  const query = q.toLowerCase().trim();
  const add = (group, label, meta, route, fn) => out.push({ group, label, meta, route, fn });
  Object.entries(CRUMB_MAP).forEach(([route, crumbs]) => {
    const label = crumbs[crumbs.length - 1];
    if (!query || label.toLowerCase().includes(query) || crumbs.join(' ').toLowerCase().includes(query))
      add('Go to', label, crumbs.length > 1 ? crumbs[0] : '', route);
  });
  if (query.length >= 2){
    AppState.applicants.filter(a => `${a.name} ${a.id} ${a.position}`.toLowerCase().includes(query)).slice(0,6)
      .forEach(a => add('Applicants', a.name, `${a.id} · ${a.stage}`, null, () => openApplicant(a.id)));
    AppState.employees.filter(e => `${e.name} ${e.id} ${e.position}`.toLowerCase().includes(query)).slice(0,6)
      .forEach(e => add('Employees', e.name, `${e.id} · ${e.position}`, `#/employees/${e.id}`));
    AppState.invitations.filter(i => `${i.id} ${i.applicant}`.toLowerCase().includes(query)).slice(0,4)
      .forEach(i => add('Invitations', i.id, `${i.applicant} · ${i.status === 'Submitted' ? 'Used' : i.status}`, null, () => openInvitationDrawer(i.id)));
  }
  if (!query || 'generate invitation'.includes(query)) out.unshift({ group:'Actions', label:'Generate application invitation', meta:'New', fn:() => openGenerateInvitation() });
  return out.slice(0, 24);
}
let paletteIdx = 0;
function renderPalette(q){
  const items = paletteItems(q || '');
  paletteIdx = Math.min(paletteIdx, Math.max(0, items.length - 1));
  let html = '', lastGroup = null;
  items.forEach((it, i) => {
    if (it.group !== lastGroup){ html += `<div class="palette-group">${esc(it.group)}</div>`; lastGroup = it.group; }
    html += `<button class="palette-item ${i===paletteIdx?'on':''}" data-pi="${i}">
      ${icon(it.group === 'Actions' ? 'bolt' : it.group === 'Employees' ? 'users' : it.group === 'Applicants' ? 'userplus' : it.group === 'Invitations' ? 'qr' : 'arrowright', 15)}
      <span>${esc(it.label)}</span>${it.meta ? `<span class="pmeta">${esc(it.meta)}</span>` : ''}</button>`;
  });
  $('#palette .palette-list').innerHTML = html || `<div class="empty"><b>No matches</b><p>Try a name, an ID or a screen name.</p></div>`;
  $$('#palette [data-pi]').forEach(b => b.onclick = () => runPalette(items[Number(b.dataset.pi)]));
  return items;
}
function runPalette(item){
  if (!item) return;
  closePalette();
  if (item.fn) setTimeout(item.fn, 60);
  else if (item.route) go(item.route);
}
function openPalette(){
  const p = $('#palette');
  p.innerHTML = `
    <div class="palette-input">${icon('search',17,'dim')}
      <input type="text" id="palInput" placeholder="Search applicants, employees, invitations or screens…" autocomplete="off"></div>
    <div class="palette-list"></div>
    <div class="palette-foot"><span>↑↓ to navigate</span><span>↵ to open</span><span>esc to close</span></div>`;
  p.classList.add('show');
  $('#scrim').classList.add('show');
  paletteIdx = 0;
  let items = renderPalette('');
  const input = $('#palInput');
  input.focus();
  input.oninput = () => { paletteIdx = 0; items = renderPalette(input.value); };
  input.onkeydown = e => {
    if (e.key === 'ArrowDown'){ e.preventDefault(); paletteIdx = Math.min(paletteIdx + 1, items.length - 1); items = renderPalette(input.value); }
    else if (e.key === 'ArrowUp'){ e.preventDefault(); paletteIdx = Math.max(paletteIdx - 1, 0); items = renderPalette(input.value); }
    else if (e.key === 'Enter'){ e.preventDefault(); runPalette(items[paletteIdx]); }
  };
}
function closePalette(){
  $('#palette').classList.remove('show');
  if (!$('#drawer').classList.contains('show') && !$('#modal').classList.contains('show')) $('#scrim').classList.remove('show');
}

/* ---------------------------------------------------------------------------
   31. INITIALISE
   --------------------------------------------------------------------------- */
/* ---- live clock: real system date/time, ticking every second ---- */
let _clockTimer = null;
function tickClock(){
  const dEl = $('#liveClockDate'), tEl = $('#liveClockTime');
  if (!dEl || !tEl) return;
  const now = new Date();
  dEl.textContent = now.toLocaleDateString('en-US', { weekday:'short', month:'short', day:'numeric', year:'numeric' });
  tEl.textContent = now.toLocaleTimeString('en-US', { hour:'numeric', minute:'2-digit', second:'2-digit', hour12:true });
}
function startClock(){
  tickClock();
  if (_clockTimer) clearInterval(_clockTimer);
  _clockTimer = setInterval(tickClock, 1000);
}

/* ---- dark / light appearance toggle ---- */
const THEME_KEY = 'hrms-theme';
function applyTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  const btn = $('#themeToggle');
  if (btn) btn.innerHTML = icon(theme === 'dark' ? 'sun' : 'moon', 15);
  try{ localStorage.setItem(THEME_KEY, theme); }catch(e){}
}
function initTheme(){
  let theme = 'light';
  try{ theme = localStorage.getItem(THEME_KEY) || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); }catch(e){}
  applyTheme(theme);
}
function toggleTheme(){
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

/* ---------- on-screen guide ---------- */
const GUIDE_KEY = 'hrms-guide-shown';
function isGuideShown(){
  try{ const v = localStorage.getItem(GUIDE_KEY); return v === null ? true : v === '1'; }catch(e){ return true; }
}
function setGuideShown(v){ try{ localStorage.setItem(GUIDE_KEY, v ? '1' : '0'); }catch(e){} }

const GUIDES = {
  '#/dashboard': {
    line: `Your daily snapshot. This screen owns no data of its own — it <b>summarizes</b> recruitment, workforce, and attendance from every other module.`,
    cols: [
      { label:'What you do here', items:['Check headcount, open positions, and today’s attendance at a glance','Jump straight into a module from any number on this screen','Watch for expiring documents and pending approvals'] },
      { label:'Where its numbers come from', items:['Employee records and today’s attendance log','Active applications, invitations, and interviews in the next 7 days'] },
      { label:'What it feeds', items:['Nothing — this is a mirror, not a source'] },
    ],
    chips: [{ label:'New invitation', route:'#/recruitment/invitations' }, { label:'Applicant tracking', route:'#/recruitment/ats' }],
  },
  '#/recruitment/ats': {
    line: `The hiring pipeline. Every applicant moves left to right through these stages as HR reviews them.`,
    cols: [
      { label:'What you do here', items:['Screen, shortlist, and move applicants through each stage','Open a card to see the full application, timeline, and notes'] },
      { label:'Where its numbers come from', items:['Applications submitted through invitation links','Screening scores and interview results entered by HR'] },
      { label:'What it feeds', items:['Pre-employment requirements once an offer is accepted','The employee master once someone is hired'] },
    ],
    watch: `An applicant only reaches Hired after every pre-employment requirement is marked complete.`,
  },
  '#/leave': {
    line: `Leave requests and approvals for every active employee.`,
    cols: [
      { label:'What you do here', items:['Review and approve or reject leave requests','File a leave request on behalf of an employee'] },
      { label:'Where its numbers come from', items:['Leave filed by or for employees, with type and date range'] },
      { label:'What it feeds', items:['Attendance — approved leave shows as On Leave for those dates'] },
    ],
    watch: `Rejecting a request does not notify the employee automatically — let their supervisor know.`,
  },
  '#/employees': {
    line: `The master list of everyone who has ever worked here — active and separated.`,
    cols: [
      { label:'What you do here', items:['Search, filter, and open any employee’s full profile','Track status: Probationary, Regular, On Leave, Separated'] },
      { label:'Where its numbers come from', items:['Hired applicants converted from the recruitment pipeline','Movements, evaluations, and offboarding entered against each record'] },
      { label:'What it feeds', items:['Attendance, leave, performance, training, and compensation reports'] },
    ],
  },
  '#/attendance': {
    line: `Today’s roster — who’s on duty, late, absent, or on leave.`,
    cols: [
      { label:'What you do here', items:['Check who’s present right now and by how much they’re late','File or approve a time correction'] },
      { label:'Where its numbers come from', items:['Each employee’s shift and recorded time in / out'] },
      { label:'What it feeds', items:['The dashboard’s daily summary'] },
    ],
  },
  '#/performance': {
    line: `Evaluations for probationary and regular employees.`,
    cols: [
      { label:'What you do here', items:['Complete a due evaluation and record the KPI ratings','Decide: regularize, extend probation, or flag for development'] },
      { label:'Where its numbers come from', items:['KPI scores entered against each employee’s review'] },
      { label:'What it feeds', items:['Employee status — a Regularize decision moves someone from Probationary to Regular'] },
    ],
    watch: `A probationary employee whose review is overdue may exceed the legal probation period — check the due date first.`,
  },
};
function renderGuide(hash){
  if (!isGuideShown()) return '';
  const key = Object.keys(GUIDES).find(k => hash === k || hash.startsWith(k + '/'));
  const g = key && GUIDES[key];
  if (!g) return '';
  return `<div class="guide">
    <div class="guide-off">
      <button class="guide-x" data-tour-start>Take the tour</button>
      <button class="guide-x" data-guide-hide>Hide guide</button>
    </div>
    <div class="guide-line">${g.line}</div>
    <div class="guide-grid">
      ${g.cols.map(c => `<div class="guide-col">
        <div class="label">${esc(c.label)}</div>
        <ul>${c.items.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>`).join('')}
    </div>
    ${g.chips ? `<div class="guide-chips">${g.chips.map(c => `<button class="guide-chip" data-goto="${c.route}">${esc(c.label)}</button>`).join('')}</div>` : ''}
    ${g.watch ? `<div class="guide-watch">${icon('alert',14)}<span>${g.watch}</span></div>` : ''}
  </div>`;
}

/* ---------- guided tour: walks the whole system, one module at a time ---------- */
const TOUR = [
  { view:'#/dashboard', label:'Dashboard', title:'Start with the question, not the data',
    text:'This is the only screen that tells you what to think. It reads every other module and rolls it up into a handful of numbers. Everything else in this system exists to make this screen worth a glance each morning.' },
  { view:'#/recruitment/invitations', label:'Invitations', title:'Every hire starts as an invitation',
    text:'HR generates a one-time link for a specific position and branch. Nothing else in the pipeline exists until an applicant opens it — the invitation is where an applicant record is born.' },
  { view:'#/recruitment/ats', label:'Applicant tracking', title:'The pipeline, in motion',
    text:'An applicant moves left to right through screening, interviews, and evaluation. The stage on this board is the single source of truth — nothing downstream trusts a stage it read anywhere else.' },
  { view:'#/recruitment/preemployment', label:'Pre-employment', title:'The last gate before Hired',
    text:'Every requirement here has to be checked off before an applicant can be converted to an employee. Skip one and you are hiring on an exception, not a rule.' },
  { view:'#/employees', label:'Employees', title:'The record everything else attaches to',
    text:'The moment someone is hired, they get an employee ID — and every attendance log, leave request, and evaluation from here on is filed against that one ID.' },
  { view:'#/attendance', label:'Attendance', title:'Every working day, logged against that ID',
    text:'Shift, time in, time out, late minutes — all read from the same roster this screen shows for today. This is what the dashboard’s attendance summary is built from.' },
  { view:'#/leave', label:'Leave', title:'Time away, tracked the same way',
    text:'A leave request is filed against an employee ID and, once approved, changes what attendance shows for those dates automatically — no separate step required.' },
  { view:'#/performance', label:'Performance', title:'The decision that changes someone’s status',
    text:'A completed evaluation can move a probationary employee to Regular. Nothing else in the system can do that — this is the one screen with the authority to change someone’s employment status.' },
];
let tourIdx = 0;
function startTour(){ tourIdx = 0; setGuideShown(true); paintTour(); }
function endTour(){ $('#layers').innerHTML = ''; }
function paintTour(){
  const t = TOUR[tourIdx];
  if (!t){ endTour(); toast('That’s the whole system, end to end'); return; }
  go(t.view);
  $('#layers').innerHTML = `<div class="tour" role="dialog" aria-label="Guided tour">
    <div class="tour-top">
      <span class="tour-step">Step ${tourIdx + 1} of ${TOUR.length}</span>
      <span class="badge plain" style="margin-left:auto">${esc(t.label)}</span>
    </div>
    <div class="tour-title">${esc(t.title)}</div>
    <div class="tour-text">${esc(t.text)}</div>
    <div class="tour-foot">
      <div class="tour-dots">${TOUR.map((_, i) => `<i class="tour-dot ${i === tourIdx ? 'on' : ''}"></i>`).join('')}</div>
      <button class="btn sm" data-tour-end>Close</button>
      ${tourIdx > 0 ? `<button class="btn sm" data-tour-back>Back</button>` : ''}
      <button class="btn sm primary" data-tour-next>${tourIdx === TOUR.length - 1 ? 'Finish' : 'Next'}</button>
    </div>
  </div>`;
}

function bindAppChrome(){
  startClock();
  initTheme();
  $('#themeToggle').onclick = toggleTheme;
  $('#menuToggle').innerHTML = icon('menu',17);
  $('#quickBtn').innerHTML = icon('bolt',17);
  $('#guideBtn').innerHTML = icon('star',16);
  $('#guideBtn').classList.toggle('on', isGuideShown());
  $('#guideBtn').onclick = () => { setGuideShown(!isGuideShown()); $('#guideBtn').classList.toggle('on', isGuideShown()); refresh(); };
  renderNotifBadge();
  $('#searchTrigger').querySelector('.ico').outerHTML = icon('search',15,'dim');

  $('#menuToggle').onclick = () => $('#sidebar').classList.toggle(window.innerWidth > 900 ? 'collapsed' : 'open');
  $('#searchTrigger').onclick = openPalette;
  $('#notifBtn').onclick = e => { e.stopPropagation(); openNotifications(); };
  $('#quickBtn').onclick = e => { e.stopPropagation(); openQuickActions(); };
  $('#userBtn').onclick = e => { e.stopPropagation(); openUserMenu(); };
  $('#scrim').onclick = () => { closeDrawer(); closeModal(); closePalette(); closePop(); $('#sidebar').classList.remove('open'); };

  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'){ e.preventDefault(); openPalette(); }
    if (e.key === 'Escape'){ closePalette(); closePop(); if ($('#modal').classList.contains('show')) closeModal(); else closeDrawer(); }
  });
  window.addEventListener('hashchange', router);
}

function applyCurrentUserToChrome(){
  const u = AppState.currentUser; const btn = $('#userBtn');
  if (!btn || !u) return;
  const av = btn.querySelector('.avatar'); if (av) av.textContent = u.initials;
  const nameEl = btn.querySelector('.user-meta b'); if (nameEl) nameEl.textContent = u.name;
  const roleEl = $('#roleLabel'); if (roleEl) roleEl.textContent = u.roleName;
}

/* ---- admin shell: requires a signed-in HR account, backed by Supabase ---- */
async function bootAdmin(){
  $('#bootLoading').classList.remove('hidden');
  $('#authScreen').classList.add('hidden');
  try{
    await seedDatabaseIfEmpty();
    await loadAppStateFromDB();
  }catch(e){ console.error('[Supabase] failed to load HR data', e); }

  $('#bootLoading').classList.add('hidden');
  $('#app').classList.remove('hidden');

  bindAppChrome();
  applyCurrentUserToChrome();
  if (!location.hash || location.hash.startsWith('#/apply/')) location.hash = '#/dashboard';
  router();
}

function wireAuthForm(){
  const form = $('#authForm'), submitBtn = $('#authSubmit'), errBox = $('#authError');
  form.onsubmit = async e => {
    e.preventDefault();
    errBox.classList.add('hidden');
    submitBtn.disabled = true;
    const email = $('#authEmail').value.trim();
    const password = $('#authPassword').value;
    try{
      const { error } = await Auth.signIn(email, password);
      if (error) throw error;
      const session = await Auth.getSession();
      if (!session) throw new Error('Sign in failed. Please try again.');
      const profile = await Auth.getProfile(session.user.id);
      applyProfile(profile, session.user.email);
      await bootAdmin();
    }catch(err){
      errBox.textContent = err.message || 'Invalid email or password.';
      errBox.classList.remove('hidden');
    }finally{
      submitBtn.disabled = false;
    }
  };
}

/* ---- public applicant portal: no login, narrow anon access to invitations */
async function bootPortal(){
  try{
    const rows = await Store.fetchAll('invitations');
    AppState.invitations = rows.map(r => r.data);
  }catch(e){ console.error('[Supabase] failed to load invitation', e); }
  $('#bootLoading').classList.add('hidden');
  window.addEventListener('hashchange', router);
  router();
}

let _booted = false;
async function boot(){
  if (_booted) return; _booted = true;
  initTheme();

  if (location.hash.startsWith('#/apply/')){
    await bootPortal();
    return;
  }

  wireAuthForm();
  let session = null;
  try{ session = await Auth.getSession(); }catch(e){ console.error('[Supabase] session check failed', e); }
  if (!session){
    $('#bootLoading').classList.add('hidden');
    $('#authScreen').classList.remove('hidden');
    return;
  }
  const profile = await Auth.getProfile(session.user.id);
  applyProfile(profile, session.user.email);
  await bootAdmin();
}
document.addEventListener('DOMContentLoaded', boot);
if (document.readyState !== 'loading') boot();
