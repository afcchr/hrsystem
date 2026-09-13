/* =============================================================================
   ART FRESH CHICKEN CORP. — HRMS  ·  data.js
   Sample data, master lists, at MockAPI (dito dumadaan lahat ng pagbabago sa data).
   ============================================================================= */
"use strict";

/* ---------------------------------------------------------------------------
   3. MASTER DATA + SAMPLE RECORDS  (all fictional)
   --------------------------------------------------------------------------- */
const TODAY = new Date(2026, 8, 7);            // Sep 7, 2026 — the prototype "today"
const COMPANY = { name:'Art Fresh Chicken Corp.', short:'AFCC', domain:'hr.artfreshchicken.ph' };

/* deterministic pseudo-random so the prototype looks the same on every load */
let _seed = 20260907;
function rnd(){ _seed = (_seed * 1664525 + 1013904223) % 4294967296; return _seed / 4294967296; }
const pick = arr => arr[Math.floor(rnd() * arr.length)];
const rint = (a,b) => a + Math.floor(rnd() * (b - a + 1));

const DEPARTMENTS = [
  { code:'BRL', name:'Broiler',                      authorized:0, head:'', icon:'layers' },
  { code:'DIS', name:'Distribution',                 authorized:0, head:'', icon:'truck' },
  { code:'DOC', name:'Documentation & Compliance',   authorized:0, head:'', icon:'file' },
  { code:'DRP', name:'Dressing Plant',                authorized:0, head:'', icon:'layers' },
  { code:'EXE', name:'Executive Dept',                authorized:0, head:'', icon:'shield' },
  { code:'FRM', name:'Farms',                         authorized:0, head:'', icon:'layers' },
  { code:'FIN', name:'Finance',                       authorized:0, head:'', icon:'wallet' },
  { code:'FUR', name:'Further',                       authorized:0, head:'', icon:'building' },
  { code:'GAD', name:'General & Admin',                authorized:0, head:'', icon:'building' },
  { code:'HRA', name:'Hr Admin',                       authorized:0, head:'', icon:'users' },
  { code:'ITD', name:'It',                             authorized:0, head:'', icon:'settings' },
  { code:'LOG', name:'Logistics',                      authorized:0, head:'', icon:'truck' },
  { code:'MGT', name:'Manager/Head',                   authorized:0, head:'', icon:'shield' },
  { code:'MEC', name:'Mechanic',                       authorized:0, head:'', icon:'settings' },
  { code:'MTR', name:'Modern Trade',                   authorized:0, head:'', icon:'chart' },
  { code:'PNF', name:'P&F',                            authorized:0, head:'', icon:'briefcase' },
  { code:'PLN', name:'Planning',                       authorized:0, head:'', icon:'chart' },
  { code:'PCM', name:'Procurement',                    authorized:0, head:'', icon:'briefcase' },
  { code:'QAS', name:'Qa',                             authorized:0, head:'', icon:'checkcircle' },
  { code:'QCS', name:'Qc',                             authorized:0, head:'', icon:'checkcircle' },
  { code:'RST', name:'Restaurant',                     authorized:0, head:'', icon:'building' },
  { code:'RND', name:'Research & Devt',                 authorized:0, head:'', icon:'book' },
  { code:'SLS', name:'Sales',                          authorized:0, head:'', icon:'chart' },
  { code:'SAN', name:'Sanitation',                     authorized:0, head:'', icon:'inbox' },
  { code:'SEC', name:'Security',                       authorized:0, head:'', icon:'lock' },
  { code:'SWN', name:'Swine',                          authorized:0, head:'', icon:'layers' },
  { code:'TRN', name:'Transport',                      authorized:0, head:'', icon:'truck' },
  { code:'WHS', name:'Warehouse',                      authorized:0, head:'', icon:'inbox' },
];
const deptName = code => (DEPARTMENTS.find(d => d.code === code) || {}).name || code;

const BRANCHES = [
  { code:'BUL', name:'Bulacan Dressing Plant',  city:'San Rafael, Bulacan',  type:'Plant' },
  { code:'CAV', name:'Cavite Processing Center',city:'Silang, Cavite',       type:'Plant' },
  { code:'PRQ', name:'Parañaque Head Office',   city:'Parañaque City',       type:'Office' },
  { code:'LAG', name:'Laguna Distribution Hub', city:'Calamba, Laguna',      type:'Hub' },
  { code:'BAT', name:'Batangas Farm Site',      city:'Lipa, Batangas',       type:'Farm' },
];
const branchName = code => (BRANCHES.find(b => b.code === code) || {}).name || code;

const POSITIONS = [
  { code:'P-PRD-01', title:'Production Worker',        dept:'PRD', level:'Rank & File', min:16000, max:19500 },
  { code:'P-PRD-02', title:'Production Line Leader',   dept:'PRD', level:'Supervisory', min:24000, max:29000 },
  { code:'P-PRD-03', title:'Production Supervisor',    dept:'PRD', level:'Supervisory', min:32000, max:39000 },
  { code:'P-PRD-04', title:'Quality Control Inspector',dept:'PRD', level:'Rank & File', min:19000, max:23000 },
  { code:'P-PRC-01', title:'Dressing Line Operator',   dept:'PRC', level:'Rank & File', min:16500, max:20000 },
  { code:'P-PRC-02', title:'Chiller Attendant',        dept:'PRC', level:'Rank & File', min:16000, max:19000 },
  { code:'P-PRC-03', title:'Processing Supervisor',    dept:'PRC', level:'Supervisory', min:31000, max:38000 },
  { code:'P-WHS-01', title:'Warehouse Staff',          dept:'WHS', level:'Rank & File', min:16000, max:19000 },
  { code:'P-WHS-02', title:'Inventory Clerk',          dept:'WHS', level:'Rank & File', min:18000, max:22000 },
  { code:'P-WHS-03', title:'Warehouse Supervisor',     dept:'WHS', level:'Supervisory', min:30000, max:36000 },
  { code:'P-LOG-01', title:'Logistics Coordinator',    dept:'LOG', level:'Rank & File', min:21000, max:26000 },
  { code:'P-LOG-02', title:'Fleet Maintenance Staff',  dept:'LOG', level:'Rank & File', min:18000, max:22000 },
  { code:'P-DLV-01', title:'Delivery Driver',          dept:'DLV', level:'Rank & File', min:17500, max:21000 },
  { code:'P-DLV-02', title:'Delivery Helper',          dept:'DLV', level:'Rank & File', min:15000, max:17500 },
  { code:'P-SLS-01', title:'Sales Representative',     dept:'SLS', level:'Rank & File', min:20000, max:26000 },
  { code:'P-SLS-02', title:'Key Accounts Officer',     dept:'SLS', level:'Supervisory', min:34000, max:42000 },
  { code:'P-PUR-01', title:'Purchasing Assistant',     dept:'PUR', level:'Rank & File', min:19000, max:23000 },
  { code:'P-FIN-01', title:'Accounting Assistant',     dept:'FIN', level:'Rank & File', min:20000, max:25000 },
  { code:'P-FIN-02', title:'Finance Officer',          dept:'FIN', level:'Supervisory', min:36000, max:45000 },
  { code:'P-HRD-01', title:'HR Assistant',             dept:'HRD', level:'Rank & File', min:19000, max:24000 },
  { code:'P-HRD-02', title:'HR Officer',               dept:'HRD', level:'Supervisory', min:28000, max:35000 },
  { code:'P-HRD-03', title:'Recruitment Officer',      dept:'HRD', level:'Supervisory', min:28000, max:34000 },
  { code:'P-ADM-01', title:'Administrative Assistant', dept:'ADM', level:'Rank & File', min:18000, max:22000 },
  { code:'P-ADM-02', title:'Security Coordinator',     dept:'ADM', level:'Rank & File', min:19000, max:23000 },
  { code:'P-MGT-01', title:'Department Manager',       dept:'MGT', level:'Managerial',  min:60000, max:85000 },
];
const posByTitle = t => POSITIONS.find(p => p.title === t) || POSITIONS[0];

const EMPLOYMENT_TYPES = ['Regular','Probationary','Project-Based','Contractual','Seasonal'];
const EMPLOYMENT_STATUSES = ['Probationary','Regular','Project-Based','Contractual','On Leave','Suspended','Separated','Retired'];

const SHIFTS = [
  { code:'MRN', name:'Morning Shift', start:'06:00', end:'15:00', hours:8, cls:'m' },
  { code:'MID', name:'Mid Shift',     start:'14:00', end:'23:00', hours:8, cls:'d' },
  { code:'NGT', name:'Night Shift',   start:'22:00', end:'07:00', hours:8, cls:'n' },
  { code:'OFC', name:'Office Hours',  start:'08:00', end:'17:00', hours:8, cls:'d' },
  { code:'RST', name:'Rest Day',      start:'—',     end:'—',     hours:0, cls:'r' },
];
const shiftBy = code => SHIFTS.find(s => s.code === code) || SHIFTS[3];

const LEAVE_TYPES = [
  { code:'VL', name:'Vacation Leave',  credits:15, cls:'vl' },
  { code:'SL', name:'Sick Leave',      credits:15, cls:'sl' },
  { code:'EL', name:'Emergency Leave', credits:3,  cls:'el' },
  { code:'SPL',name:'Special Leave',   credits:5,  cls:'ol' },
];
const TRAINING_TYPES = ['Food Safety','Occupational Safety','Technical Skills','Leadership','Compliance','Systems & Tools'];

const ROLES = [
  { code:'ADMIN', name:'Administrator',   desc:'Full system access including master data and user management.' },
  { code:'HRMGR', name:'HR Manager',      desc:'Approves across all HR modules and sees confidential cases.' },
  { code:'RECR',  name:'Recruiter',       desc:'Owns invitations, applicant tracking, interviews and offers.' },
  { code:'HROFF', name:'HR Officer',      desc:'Day-to-day processing: records, attendance, leave, documents.' },
  { code:'PAYRL', name:'Compensation Staff', desc:'Compensation profiles and benefit enrolment. No case access.' },
  { code:'TRAIN', name:'Training Officer',desc:'Training calendar, attendance and certification records.' },
  { code:'SUPV',  name:'Department Supervisor', desc:'Own team only: attendance, leave endorsement, evaluations.' },
  { code:'EMP',   name:'Employee',        desc:'Self-service: own profile, payslip summary, leave filing.' },
  { code:'MGMT',  name:'Management',      desc:'Read-only dashboards, analytics and headcount reports.' },
];
const PERMISSIONS = ['View','Create','Edit','Approve','Reject','Archive','Export'];
const ROLE_MATRIX = {
  ADMIN:['View','Create','Edit','Approve','Reject','Archive','Export'],
  HRMGR:['View','Create','Edit','Approve','Reject','Export'],
  RECR: ['View','Create','Edit','Export'],
  HROFF:['View','Create','Edit'],
  PAYRL:['View','Edit','Export'],
  TRAIN:['View','Create','Edit'],
  SUPV: ['View','Approve','Reject'],
  EMP:  ['View','Create'],
  MGMT: ['View','Export'],
};

const RECRUITERS = ['Angeline Cabrera','Rico Bernardo','Katrina Espino','Maria Reyes'];
const HR_USERS   = ['Maria Reyes','Angeline Cabrera','Rico Bernardo','Katrina Espino','Jocelyn Navarro'];

/* ---------- name pools ---------- */
const FIRST_M = ['Juan','Jose','Mark','Ryan','Michael','Carlo','Dennis','Emmanuel','Rolando','Arnel','Jayson','Kevin','Nestor','Rodel','Allan','Christian','Joel','Edwin','Reymar','Vicente','Noel','Bryan','Gerald','Alvin','Danilo','Marlon','Rico','Efren','Ferdinand','Julius'];
const FIRST_F = ['Maria','Ana','Grace','Jennifer','Rowena','Liezl','Cristina','Michelle','Angeline','Jocelyn','Divina','Katrina','Sheila','Melody','Rachelle','Aileen','Erika','Charmaine','Josephine','Lorna','Rhea','Trisha','Marilou','Bernadette','Kristine','Jenalyn'];
const LAST = ['Dela Cruz','Santos','Reyes','Bautista','Ocampo','Villanueva','Ramos','Aquino','Mercado','Salazar','Domingo','Navarro','Castillo','Gutierrez','Fernandez','Cabrera','Dimaano','Alvarez','Manalo','Pascual','Rivera','Tolentino','Lazaro','Espino','Marquez','Bernardo','Sarmiento','Padilla','Yatco','Andrada','Villareal','Cortez'];
const SCHOOLS = ['Bulacan State University','Polytechnic University of the Philippines','Cavite State University','Technological University of the Philippines','STI College Malolos','University of Rizal System','Laguna State Polytechnic University','AMA Computer College','San Rafael National High School','Silang Senior High School'];
const COURSES = ['BS Industrial Engineering','BS Business Administration','BS Accountancy','BS Food Technology','BS Information Technology','TESDA NC II — Food Processing','Automotive Servicing NC II','Senior High School — TVL Strand','BS Psychology','BS Agriculture'];
const ATTAINMENT = ['High School Graduate','Senior High School Graduate','Vocational / TESDA','College Level','College Graduate'];
const AVATAR_BG = ['#3f5a4c','#5b6b7d','#7a6a55','#6b5a72','#4f6b6b','#7d5f5f','#586b4a','#605f7a'];

/* keeps attainment, school and course consistent with each other */
function educationFor(attainment, birthYear){
  const college = ['College Graduate','College Level'].includes(attainment);
  const vocational = attainment === 'Vocational / TESDA';
  const hs = !college && !vocational;
  return {
    attainment,
    school: hs ? pick(SCHOOLS.filter(s => /High School/.test(s))) : pick(SCHOOLS.filter(s => !/High School/.test(s))),
    course: college ? pick(COURSES.filter(c => /^BS/.test(c)))
      : vocational ? pick(COURSES.filter(c => /NC II/.test(c)))
      : pick(['General Academic Strand','TVL — Food Processing','TVL — Automotive','TVL — Home Economics','Not applicable']),
    year: String(Math.min(2025, birthYear + (college ? rint(21,24) : rint(17,19)))),
  };
}
const initials = n => n.split(' ').filter(Boolean).map(w => w[0]).slice(0,2).join('').toUpperCase();
const avatarColor = key => AVATAR_BG[Math.abs([...key].reduce((a,c)=>a+c.charCodeAt(0),0)) % AVATAR_BG.length];

/* ---------------------------------------------------------------------------
   4. DATE HELPERS
   --------------------------------------------------------------------------- */
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const DOW = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
function d2s(d){ return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
function s2d(s){ const [y,m,d] = s.split('-').map(Number); return new Date(y, m-1, d); }
function fmtDate(s, style){
  if (!s) return '—';
  const d = typeof s === 'string' ? s2d(s) : s;
  if (style === 'long') return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  if (style === 'dow')  return `${DOW[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}`;
  if (style === 'md')   return `${MONTHS[d.getMonth()]} ${d.getDate()}`;
  return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}
function fmtDateTime(s, t){ return `${fmtDate(s)} · ${t}`; }
function fmtTime(t){
  if (!t || t === '—') return '—';
  const [h, m] = t.split(':').map(Number);
  const ampm = h >= 12 ? 'PM' : 'AM';
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2,'0')} ${ampm}`;
}
function addDays(d, n){ const x = new Date(d); x.setDate(x.getDate() + n); return x; }
function daysBetween(a, b){ return Math.round((s2d(b) - s2d(a)) / 86400000); }
function relTime(s, t){
  const days = daysBetween(s, d2s(TODAY));
  if (days === 0) return t ? `Today, ${t}` : 'Today';
  if (days === 1) return t ? `Yesterday, ${t}` : 'Yesterday';
  if (days < 7) return `${days} days ago`;
  return fmtDate(s);
}
function peso(n){ return '₱' + Number(n).toLocaleString('en-PH', { maximumFractionDigits:0 }); }
function pct(a, b){ return b ? Math.round(a / b * 100) : 0; }
function yearsSince(s){ return Math.max(0, ((s2d(d2s(TODAY)) - s2d(s)) / 31557600000)).toFixed(1); }

/* ---------------------------------------------------------------------------
   5. EMPLOYEE GENERATION
   --------------------------------------------------------------------------- */
function makeEmployee(seqYear, seq, dept, position, branch, opts){
  opts = opts || {};
  const sex = opts.sex || (rnd() > .42 ? 'Male' : 'Female');
  const first = opts.first || pick(sex === 'Male' ? FIRST_M : FIRST_F);
  const last  = opts.last  || pick(LAST);
  const middle = opts.middle || pick(LAST);
  const name = `${first} ${last}`;
  const hired = opts.hired || d2s(addDays(TODAY, -rint(40, 2400)));
  const tenure = daysBetween(hired, d2s(TODAY));
  const status = opts.status || (tenure < 180 ? 'Probationary' : 'Regular');
  const p = posByTitle(position);
  const salary = opts.salary || Math.round((p.min + rnd() * (p.max - p.min)) / 500) * 500;
  const branchCode = branch || pick(BRANCHES).code;
  const shift = opts.shift || (['PRD','PRC','WHS'].includes(dept) ? pick(['MRN','MID','NGT']) : (['DLV','LOG'].includes(dept) ? pick(['MRN','MID']) : 'OFC'));
  const birthYear = 2026 - rint(21, 54);
  return {
    id: `EMP-${seqYear}-${String(seq).padStart(5,'0')}`,
    name, first, middle, last,
    sex, civil: pick(['Single','Married','Married','Single','Widowed']), nationality:'Filipino',
    birth: `${birthYear}-${String(rint(1,12)).padStart(2,'0')}-${String(rint(1,28)).padStart(2,'0')}`,
    position, dept, branch: branchCode,
    type: opts.type || (status === 'Probationary' ? 'Probationary' : pick(['Regular','Regular','Regular','Contractual','Project-Based'])),
    hired, status,
    supervisor: opts.supervisor || null,
    level: p.level,
    email: `${first.toLowerCase()}.${last.toLowerCase().replace(/\s/g,'')}@artfreshchicken.ph`,
    mobile: `0917 ${rint(200,999)} ${rint(1000,9999)}`,
    address: `${rint(1,240)} ${pick(['Purok','Blk','Lot'])} ${rint(1,12)}, Brgy. ${pick(['San Roque','Sto. Niño','Poblacion','San Isidro','Bagong Silang','Malanday'])}, ${pick(BRANCHES).city}`,
    emergency: { name:`${pick(FIRST_F)} ${last}`, rel: pick(['Spouse','Mother','Father','Sibling']), phone:`0918 ${rint(200,999)} ${rint(1000,9999)}` },
    education: educationFor(pick(ATTAINMENT), birthYear),
    salary,
    allowances: [
      { name:'Meal allowance', amount: 2000 },
      { name:'Transportation', amount: dept === 'DLV' || dept === 'LOG' ? 2500 : 1500 },
      ...(p.level !== 'Rank & File' ? [{ name:'Communication', amount: 1200 }] : []),
    ],
    shift, restDay: pick(['Sunday','Sunday','Saturday','Monday','Wednesday']),
    probationEnd: status === 'Probationary' ? d2s(addDays(s2d(hired), 180)) : null,
    fromApplication: opts.fromApplication || null,
    avatar: avatarColor(name + seq),
  };
}

function generateEmployees(){
  const out = [];
  let counters = {};
  const nextId = (year) => { counters[year] = (counters[year] || 0) + 1; return counters[year]; };
  const roster = [
    // dept, [position, count] ...
    ['PRD', [['Production Worker',96],['Production Line Leader',9],['Quality Control Inspector',11],['Production Supervisor',5]]],
    ['PRC', [['Dressing Line Operator',48],['Chiller Attendant',14],['Processing Supervisor',4]]],
    ['WHS', [['Warehouse Staff',26],['Inventory Clerk',9],['Warehouse Supervisor',3]]],
    ['LOG', [['Logistics Coordinator',12],['Fleet Maintenance Staff',9]]],
    ['DLV', [['Delivery Driver',20],['Delivery Helper',18]]],
    ['SLS', [['Sales Representative',22],['Key Accounts Officer',6]]],
    ['PUR', [['Purchasing Assistant',9]]],
    ['FIN', [['Accounting Assistant',9],['Finance Officer',4]]],
    ['HRD', [['HR Assistant',4],['HR Officer',3],['Recruitment Officer',2]]],
    ['ADM', [['Administrative Assistant',8],['Security Coordinator',4]]],
    ['MGT', [['Department Manager',8]]],
  ];
  roster.forEach(([dept, groups]) => {
    groups.forEach(([title, count]) => {
      for (let i = 0; i < count; i++){
        const hired = d2s(addDays(TODAY, -(rnd() < .04 ? rint(2, 29) : rint(30, 2600))));
        const year = hired.slice(0,4);
        out.push(makeEmployee(year, nextId(year), dept, title, null, { hired }));
      }
    });
  });
  // assign supervisors: first supervisory-level employee per department
  DEPARTMENTS.forEach(d => {
    const sup = out.find(e => e.dept === d.code && e.level !== 'Rank & File');
    out.filter(e => e.dept === d.code && e !== sup).forEach(e => { e.supervisor = sup ? sup.name : d.head; });
    if (sup) sup.supervisor = d.head;
  });
  // a handful of non-active statuses for realism
  out[7].status = 'On Leave'; out[7].statusNote = 'Maternity leave until Oct 12, 2026';
  out[31].status = 'Suspended'; out[31].statusNote = '3-day suspension — attendance policy';
  out[54].status = 'On Leave'; out[54].statusNote = 'Extended sick leave';
  // past separations, spread over the last eight months
  const sepTypes = ['Resignation','Resignation','Resignation','End of Contract','End of Contract','Termination','Retirement'];
  for (let i = 0, guard = 0; i < 14 && guard < 200; guard++){
    const e = out[hashCode('sep' + guard) % out.length];
    if (e.status !== 'Regular' || e.separatedOn) continue;
    e.status = 'Separated';
    e.separatedOn = d2s(addDays(TODAY, -rint(12, 240)));
    e.separationType = sepTypes[i % sepTypes.length];
    i++;
  }
  return out;
}

/* ---------------------------------------------------------------------------
   6. RECRUITMENT SAMPLE DATA
   --------------------------------------------------------------------------- */
const PRE_EMP_REQUIREMENTS = [
  'PSA Birth Certificate','Valid Government ID','NBI Clearance','Police Clearance',
  'Pre-employment Medical Certificate','SSS Number','PhilHealth Number','Pag-IBIG Number',
  'TIN','Bank Account Details','2x2 ID Photos','Certificate of Employment (previous)'
];
const SCREENING_CRITERIA = [
  { key:'quals',   label:'Meets minimum qualifications', weight:20 },
  { key:'educ',    label:'Education',                    weight:15 },
  { key:'exp',     label:'Relevant experience',          weight:20 },
  { key:'skills',  label:'Skills and certifications',    weight:15 },
  { key:'avail',   label:'Availability to start',        weight:10 },
  { key:'loc',     label:'Location and commute',         weight:10 },
  { key:'salary',  label:'Salary expectation vs range',  weight:10 },
];
const INTERVIEW_CRITERIA = [
  { key:'comm',  label:'Communication' },
  { key:'tech',  label:'Technical knowledge' },
  { key:'att',   label:'Work attitude' },
  { key:'exp',   label:'Relevant experience' },
  { key:'fit',   label:'Culture fit' },
];
const APPLICATION_QUESTIONS = [
  { key:'start',   label:'How soon can you start?', type:'select', options:['Immediately','Within 1 week','Within 2 weeks','Within 1 month','More than 1 month'] },
  { key:'salary',  label:'Expected monthly salary (₱)', type:'number', placeholder:'e.g. 18000' },
  { key:'shift',   label:'Are you willing to work shifting schedules, including night shift?', type:'select', options:['Yes','No','Depends on the schedule'] },
  { key:'relocate',label:'Are you willing to be assigned to another branch?', type:'select', options:['Yes','No'] },
  { key:'relative',label:'Do you have a relative working at Art Fresh Chicken Corp.?', type:'select', options:['No','Yes'] },
  { key:'source',  label:'How did you hear about this opening?', type:'select', options:['Referral from an employee','Barangay job posting','Facebook page','Walk-in inquiry','Job fair','Others'] },
];
const STAGES = ['Invited','Started','Submitted','Screening','Shortlisted','Interview','Assessment','Final Evaluation','Selected','Job Offer','Pre-Employment','Hired'];
const TERMINAL = ['Rejected','Withdrawn','On Hold'];
const STAGE_ORDER = s => STAGES.indexOf(s);

const STATUS_STYLE = {
  // Recruitment pipeline — Blue: general/informational stage · Cyan: secondary
  // stage · Amber: needs attention/waiting · Green: positive outcome · Red: negative
  'Invited':'neutral','Started':'info','Submitted':'info','Screening':'info','Shortlisted':'cyan',
  'Interview':'warn','Assessment':'warn','Final Evaluation':'info','Selected':'ok','Job Offer':'ok',
  'Pre-Employment':'cyan','Hired':'ok','Rejected':'bad','Withdrawn':'neutral','On Hold':'warn',
  // Employee status
  'Regular':'ok','Probationary':'info','Project-Based':'neutral','Contractual':'neutral','On Leave':'info',
  'Suspended':'warn','Separated':'neutral','Retired':'neutral',
  // Attendance
  'Present':'ok','Late':'warn','Absent':'bad','Undertime':'warn','Overtime':'info','Rest Day':'neutral','Not Started':'neutral',
  // Approval / workflow
  'Approved':'ok','Pending':'warn','Rejected ':'bad','Cancelled':'neutral','For Approval':'warn',
  'Open':'warn','Under Investigation':'info','Resolved':'ok','Closed':'neutral',
  'Unused':'info','Opened':'warn','Expired':'neutral','Revoked':'bad','Used':'ok',
  'Draft':'neutral','Pending Approval':'warn','Sent':'info','Accepted':'ok','Declined':'bad',
  'Valid':'ok','Expiring Soon':'warn','Missing':'bad','Verified':'ok','Complete':'ok',
  'Pass':'ok','Fail':'bad','Hold':'warn','Passed':'ok','Failed':'bad',
  'Completed':'ok','Scheduled':'info','In Progress':'info',
};
function badge(text, extraCls){
  const cls = STATUS_STYLE[text] !== undefined ? STATUS_STYLE[text] : 'plain';
  return `<span class="badge ${cls} ${extraCls||''}"><span class="bdot"></span>${text}</span>`;
}

/* ---------------------------------------------------------------------------
   7. APPLICANT + INVITATION BUILDERS
   Each applicant carries only the sub-records that its stage would realistically
   have produced, so the pipeline reads like a real ATS.
   --------------------------------------------------------------------------- */
const REASONS_LEAVING = ['End of contract','Career growth','Company closed operations','Relocation','Low salary','Better opportunity','Personal reasons'];
const PREV_COMPANIES = ['Golden Harvest Poultry','San Miguel Foods','Bounty Fresh Food','Magnolia Distribution','Metro Cold Storage','JV Trading','Pilmico Foods','LM Poultry Supply','FreshMart Grocery','RDL Logistics'];
const SKILL_POOL = {
  PRD:['Deboning','Line assembly','Meat handling','GMP compliance','Machine operation','Weighing and packing'],
  PRC:['Cold chain handling','Dressing line operation','Sanitation','HACCP basics','Chiller monitoring'],
  WHS:['Inventory counting','Forklift operation','FIFO stock rotation','Receiving and dispatch','Warehouse safety'],
  LOG:['Route planning','Fleet coordination','Dispatch monitoring','Basic vehicle maintenance'],
  DLV:['Professional driving','Route familiarity — Metro Manila','Cargo handling','Customer coordination'],
  SLS:['Account servicing','Order taking','Merchandising','Collection follow-up','MS Excel'],
  PUR:['Canvassing','Purchase order processing','Supplier coordination','MS Excel'],
  FIN:['Bookkeeping','Accounts payable','QuickBooks','MS Excel','Bank reconciliation'],
  HRD:['201 file handling','Timekeeping','Recruitment support','MS Office'],
  ADM:['Records management','Front desk','Scheduling','MS Office'],
  MGT:['Team leadership','Operations planning','Budget management'],
};
const CERTS = {
  DLV:['Professional Driver’s License (Restriction 1-2-3)','Defensive Driving Certificate'],
  PRC:['Food Handler’s Certificate','Basic Occupational Safety and Health'],
  PRD:['Food Handler’s Certificate','TESDA NC II — Food Processing'],
  WHS:['Forklift Operator Certificate'],
  FIN:['Civil Service Eligibility'],
  HRD:['Basic HR Certification'],
};

function buildApplicant(spec){
  const [id, name, sex, position, dept, branch, stage, appliedAgo, recruiterIdx, score, invId] = spec;
  const applied = d2s(addDays(TODAY, -appliedAgo));
  const p = posByTitle(position);
  const parts = name.split(' ');
  const first = parts[0];
  const last = parts.slice(1).join(' ') || parts[0];
  const birthYear = 2026 - rint(20, 44);
  const expCount = rint(1, 3);
  const experience = [];
  for (let i = 0; i < expCount; i++){
    const endYear = 2026 - i * 2 - rint(0,1);
    experience.push({
      company: pick(PREV_COMPANIES),
      position: i === 0 ? position : pick([position,'Production Helper','Warehouse Helper','Service Crew','Machine Operator']),
      start: `${endYear - rint(1,3)}-${String(rint(1,12)).padStart(2,'0')}-01`,
      end: i === 0 && rnd() > .6 ? 'Present' : `${endYear}-${String(rint(1,12)).padStart(2,'0')}-28`,
      reason: pick(REASONS_LEAVING),
    });
  }
  const pool = SKILL_POOL[dept] || SKILL_POOL.PRD;
  const skills = [...new Set([pick(pool), pick(pool), pick(pool)])];
  const stageIdx = STAGE_ORDER(stage);
  const reached = s => stageIdx >= STAGE_ORDER(s) || (TERMINAL.includes(stage) && STAGE_ORDER(s) <= (spec.reachedIdx || 4));
  const a = {
    id, invitationId: invId, name, first, middle: pick(LAST), last, suffix:'',
    sex, birth:`${birthYear}-${String(rint(1,12)).padStart(2,'0')}-${String(rint(1,28)).padStart(2,'0')}`,
    civil: pick(['Single','Single','Married']), nationality:'Filipino',
    mobile:`09${rint(15,99)} ${rint(200,999)} ${rint(1000,9999)}`,
    email:`${first.toLowerCase()}.${last.toLowerCase().replace(/\s/g,'')}@email.com`,
    address:`${rint(1,240)} Purok ${rint(1,9)}, Brgy. ${pick(['San Roque','Sto. Niño','Poblacion','San Isidro','Bagong Silang'])}, ${pick(BRANCHES).city}`,
    permAddress:'Same as current address',
    emergency:{ name:`${pick(FIRST_F)} ${last}`, rel: pick(['Mother','Spouse','Sibling','Father']), phone:`0918 ${rint(200,999)} ${rint(1000,9999)}` },
    position, dept, branch, empType: pick(['Full-time','Full-time','Full-time','Project-Based']),
    education: educationFor(pick(ATTAINMENT), birthYear),
    experience, skills,
    certifications: (CERTS[dept] || []).slice(0, rnd() > .5 ? 2 : 1),
    licenses: dept === 'DLV' ? ['Driver’s License — Professional, exp. 2029-03-14'] : [],
    answers:{
      start: pick(['Immediately','Within 1 week','Within 2 weeks','Within 1 month']),
      salary: String(Math.round((p.min + rnd()*(p.max-p.min))/500)*500),
      shift: dept === 'PRD' || dept === 'PRC' ? pick(['Yes','Yes','Depends on the schedule']) : 'Yes',
      relocate: pick(['Yes','Yes','No']),
      relative: pick(['No','No','No','Yes']),
      source: pick(['Referral from an employee','Barangay job posting','Facebook page','Walk-in inquiry','Job fair']),
    },
    applied, submittedTime: `${rint(8,16)}:${String(rint(0,59)).padStart(2,'0')}`,
    stage, status: stage,
    recruiter: RECRUITERS[recruiterIdx], score,
    updated: d2s(addDays(TODAY, -Math.max(0, appliedAgo - rint(0, Math.min(appliedAgo, 5))))),
    screening: null, interviews: [], assessments: [], evaluation: null, offer: null,
    preEmployment: null, notes: [], timeline: [], documents: [],
    avatar: avatarColor(name + id),
  };

  /* ---- screening ---- */
  if (reached('Screening') && stage !== 'Started'){
    const results = {}; SCREENING_CRITERIA.forEach(c => results[c.key] = rnd() > .18 ? 'Pass' : 'Hold');
    const passCount = Object.values(results).filter(v => v === 'Pass').length;
    a.screening = {
      by: RECRUITERS[recruiterIdx], date: d2s(addDays(s2d(applied), 1)), results,
      score: Math.round(passCount / SCREENING_CRITERIA.length * 100),
      result: stage === 'Rejected' && stageIdx < 0 ? 'Fail' : (passCount >= 5 ? 'Pass' : 'Hold'),
      notes: pick([
        'Meets the minimum requirement for the role. Lives within 30 minutes of the plant.',
        'Relevant line experience. Salary expectation is within the approved range.',
        'Willing to work shifting schedules. Endorsed for initial interview.',
        'Complete requirements on hand. No conflict with the shift schedule.',
      ]),
    };
  }
  /* ---- interviews ---- */
  if (reached('Interview')){
    const scores = {}; INTERVIEW_CRITERIA.forEach(c => scores[c.key] = rint(3,5));
    const avg = Object.values(scores).reduce((x,y)=>x+y,0) / INTERVIEW_CRITERIA.length;
    a.interviews.push({
      id:`INT-${id.slice(-5)}-1`, round:'Initial interview',
      interviewer: pick(['Angeline Cabrera — HR','Rico Bernardo — HR','Rolando Ocampo — Production','Arnel Salazar — Warehouse']),
      date: d2s(addDays(s2d(applied), 3)), time:`${rint(9,15)}:00`,
      type: pick(['Face-to-face','Face-to-face','Video call']),
      location: branch === 'PRQ' ? 'Parañaque Head Office — HR Room 2' : `${branchName(branch)} — HR Office`,
      status: stageIdx > STAGE_ORDER('Interview') ? 'Completed' : (stage === 'Interview' ? 'Scheduled' : 'Completed'),
      scores, overall: Number(avg.toFixed(1)),
      decision: avg >= 4 ? 'Pass' : (avg >= 3.2 ? 'Further Interview' : 'Hold'),
      remarks: pick([
        'Clear and direct in answering. Understands the pace of line work.',
        'Good work attitude. Previous supervisor may be contacted as reference.',
        'Some hesitation about night shift but is open to a fixed rotation.',
        'Strong hands-on experience. Recommended to proceed to assessment.',
      ]),
    });
    if (stageIdx >= STAGE_ORDER('Final Evaluation') && rnd() > .55){
      const s2 = {}; INTERVIEW_CRITERIA.forEach(c => s2[c.key] = rint(3,5));
      const avg2 = Object.values(s2).reduce((x,y)=>x+y,0)/INTERVIEW_CRITERIA.length;
      a.interviews.push({
        id:`INT-${id.slice(-5)}-2`, round:'Final interview',
        interviewer:`${(DEPARTMENTS.find(d=>d.code===dept)||{}).head} — ${deptName(dept)}`,
        date: d2s(addDays(s2d(applied), 6)), time:`${rint(9,15)}:30`, type:'Face-to-face',
        location:`${branchName(branch)} — Department Office`, status:'Completed',
        scores:s2, overall:Number(avg2.toFixed(1)), decision: avg2 >= 3.8 ? 'Pass':'Hold',
        remarks:'Department head confirms fit for the assigned line and schedule.',
      });
    }
  }
  /* ---- assessments ---- */
  if (reached('Assessment')){
    const types = dept === 'FIN' || dept === 'PUR'
      ? [['Numerical Aptitude Test',85],['Basic Accounting Test',80]]
      : dept === 'DLV' ? [['Practical Driving Test',80],['Road Safety Test',75]]
      : [['Skills Demonstration',75],['Basic Aptitude Test',70]];
    types.forEach(([nameT, passing], i) => {
      const sc = rint(passing - 8, 98);
      a.assessments.push({
        name:nameT, type: i === 0 ? 'Skills Test' : 'Aptitude Test',
        date: d2s(addDays(s2d(applied), 4 + i)), score: sc, passing,
        result: sc >= passing ? 'Passed' : 'Failed',
        administrator: pick(RECRUITERS),
      });
    });
  }
  /* ---- final evaluation ---- */
  if (reached('Final Evaluation')){
    const iv = a.interviews.length ? a.interviews.reduce((s,i)=>s+i.overall,0)/a.interviews.length*20 : 70;
    const asm = a.assessments.length ? a.assessments.reduce((s,x)=>s+x.score,0)/a.assessments.length : 70;
    const scr = a.screening ? a.screening.score : 70;
    const overall = Math.round(scr*.25 + iv*.4 + asm*.35);
    a.evaluation = {
      screening:scr, interview:Math.round(iv), assessment:Math.round(asm), overall,
      recommendation: overall >= 88 ? 'Highly Recommended' : overall >= 78 ? 'Recommended' : overall >= 70 ? 'For Further Review' : 'Not Recommended',
      decision: stage === 'Rejected' ? 'Rejected' : stage === 'On Hold' ? 'On Hold' : (stageIdx >= STAGE_ORDER('Selected') ? 'Selected' : 'Pending'),
      by:'Maria Reyes', date: d2s(addDays(s2d(applied), 8)),
      remarks:'Endorsed to management for approval of the job offer.',
    };
  }
  /* ---- job offer ---- */
  if (reached('Job Offer')){
    const salary = Math.round((p.min + rnd()*(p.max-p.min))/500)*500;
    const startDate = d2s(addDays(s2d(applied), 21));
    a.offer = {
      id:`OFR-2026-${id.slice(-5)}`, position, dept, branch,
      empType:'Probationary (6 months)', start:startDate, salary,
      allowances:[{name:'Meal allowance',amount:2000},{name:'Transportation',amount:1500}],
      schedule: dept === 'PRD' || dept === 'PRC' ? 'Shifting, 6 days/week' : 'Monday to Friday, 8:00 AM – 5:00 PM',
      probation:'6 months', expiry: d2s(addDays(s2d(applied), 14)),
      status: stageIdx >= STAGE_ORDER('Pre-Employment') ? 'Accepted' : (stage === 'Job Offer' ? 'Sent' : 'Accepted'),
      preparedBy:'Angeline Cabrera', approvedBy:'Maria Reyes',
      sentOn: d2s(addDays(s2d(applied), 9)),
      respondedOn: stageIdx >= STAGE_ORDER('Pre-Employment') ? d2s(addDays(s2d(applied), 10)) : null,
    };
  }
  /* ---- pre-employment ---- */
  if (reached('Pre-Employment')){
    const done = stage === 'Hired' ? PRE_EMP_REQUIREMENTS.length : rint(6, 10);
    a.preEmployment = PRE_EMP_REQUIREMENTS.map((r, i) => ({
      name:r,
      status: i < done ? (i < done - 1 ? 'Verified' : 'Submitted') : 'Pending',
      submitted: i < done ? d2s(addDays(s2d(applied), 11 + Math.floor(i/3))) : null,
      by: i < done ? 'Applicant' : null,
    }));
  }
  /* ---- notes ---- */
  if (a.screening) a.notes.push({ by:a.recruiter, date:a.screening.date, time:'11:05', text:a.screening.notes });
  if (a.interviews.length) a.notes.push({ by:a.interviews[0].interviewer.split(' — ')[0], date:a.interviews[0].date, time:'15:20', text:a.interviews[0].remarks });

  /* ---- documents ---- */
  a.documents = [
    { name:'Resume / Bio-data', type:'Application', date:applied, status:'Valid' },
    ...(reached('Interview') ? [{ name:'Valid ID (photo)', type:'Application', date:d2s(addDays(s2d(applied),2)), status:'Valid' }] : []),
    ...(reached('Assessment') ? [{ name:'Assessment answer sheet', type:'Assessment', date:d2s(addDays(s2d(applied),4)), status:'Valid' }] : []),
  ];
  return a;
}

function buildTimeline(a){
  const t = [];
  const at = (d, time, action, user, note, state) => t.push({ date:d, time, action, user, note, state });
  const base = s2d(a.applied);
  at(d2s(addDays(base,-1)),'09:12','Invitation generated', a.recruiter, `Invitation ${a.invitationId} created for ${a.position}.`,'done');
  at(a.applied,'10:05','Application started','Applicant','Applicant opened the invitation link.','done');
  if (a.stage === 'Started' || a.stage === 'Invited'){ a.timeline = t; if (a.stage === 'Invited') t.splice(1); return; }
  at(a.applied, a.submittedTime,'Application submitted','Applicant',`Application ${a.id} received. Invitation marked as used.`,'done');
  if (a.screening) at(a.screening.date,'11:03','Initial screening', a.screening.by, `Screening result: ${a.screening.result}. ${a.screening.notes}`,'done');
  if (STAGE_ORDER(a.stage) >= STAGE_ORDER('Shortlisted') || a.stage === 'Rejected')
    at(a.screening ? d2s(addDays(s2d(a.screening.date),0)) : a.applied,'14:15', STAGE_ORDER(a.stage) >= STAGE_ORDER('Shortlisted') ? 'Shortlisted' : 'Screening completed', a.recruiter,'Endorsed for initial interview.','done');
  a.interviews.forEach(iv => at(iv.date, iv.time, `${iv.round} — ${iv.status}`, iv.interviewer.split(' — ')[0], iv.status === 'Completed' ? `Overall ${iv.overall}/5 · ${iv.decision}` : 'Scheduled and confirmed with the applicant.', iv.status === 'Completed' ? 'done':'current'));
  a.assessments.forEach(x => at(x.date,'13:30',`${x.name}`, x.administrator, `Score ${x.score} vs passing ${x.passing} · ${x.result}`,'done'));
  if (a.evaluation) at(a.evaluation.date,'16:40','Final evaluation', a.evaluation.by, `Overall ${a.evaluation.overall}% · ${a.evaluation.recommendation}`,'done');
  if (a.evaluation && a.evaluation.decision === 'Selected') at(d2s(addDays(s2d(a.evaluation.date),1)),'09:30','Selected','Maria Reyes','Approved for job offer preparation.','done');
  if (a.offer){
    at(a.offer.sentOn,'10:15','Job offer sent', a.offer.preparedBy, `${peso(a.offer.salary)} monthly · start ${fmtDate(a.offer.start)}`,'done');
    if (a.offer.respondedOn) at(a.offer.respondedOn,'08:45','Job offer accepted','Applicant','Applicant confirmed acceptance by phone and email.','done');
  }
  if (a.preEmployment){
    const done = a.preEmployment.filter(r => r.status !== 'Pending').length;
    at(d2s(addDays(s2d(a.applied),11)),'11:00','Pre-employment requirements', a.recruiter, `${done} of ${a.preEmployment.length} requirements received.`, done === a.preEmployment.length ? 'done':'current');
  }
  if (a.stage === 'Hired') at(d2s(addDays(s2d(a.applied),16)),'09:00','Hired — employee record created','Maria Reyes','Converted to employee master.','done');
  if (a.stage === 'Rejected') at(a.updated,'17:10','Rejected', a.recruiter,'Did not meet the requirement for the position.','blocked');
  if (a.stage === 'Withdrawn') at(a.updated,'12:00','Withdrawn','Applicant','Applicant accepted another offer.','blocked');
  if (a.stage === 'On Hold') at(a.updated,'15:00','Placed on hold', a.recruiter,'No available slot for the requested branch this month.','blocked');
  a.timeline = t;
}

/* ---------------------------------------------------------------------------
   8. APPLICATION STATE
   Everything below is in-memory mock state. In production each mutation in
   MockAPI becomes a server call; nothing here should be trusted as security.
   --------------------------------------------------------------------------- */
const AppState = {
  currentUser:{ name:'Maria Reyes', role:'HRMGR', roleName:'HR Manager', initials:'MR' },
  employees:[], applicants:[], invitations:[], leave:[], performance:[], trainings:[],
  trainingSessions:[], cases:[], movements:[], offboarding:[], onboarding:[],
  attendanceOverrides:{}, corrections:[], notifications:[], audit:[], tasks:[],
  shiftOverrides:{}, docOverrides:{}, seq:{ app:489, emp:210, inv:1253, case:38, ofr:120 },
  filters:{}, route:'#/dashboard',
};

/* ---- applicants ---------------------------------------------------------- */
const APPLICANT_SPECS = [
  // id, name, sex, position, dept, branch, stage, daysAgo, recruiterIdx, score, invitationId
  ['APP-2026-00481','Juan Dela Cruz','Male','Production Worker','PRD','BUL','Shortlisted',0,0,84,'INV-2026-001245'],
  ['APP-2026-00482','Rowena Marquez','Female','Dressing Line Operator','PRC','CAV','Interview',4,1,79,'INV-2026-001246'],
  ['APP-2026-00483','Kevin Sarmiento','Male','Delivery Driver','DLV','LAG','Assessment',6,2,81,'INV-2026-001247'],
  ['APP-2026-00484','Rodel Andrada','Male','Production Worker','PRD','BUL','Submitted',1,0,0,'INV-2026-001248'],
  ['APP-2026-00485','Melody Cortez','Female','Chiller Attendant','PRC','CAV','Submitted',2,1,0,'INV-2026-001250'],
  ['APP-2026-00486','Bryan Lazaro','Male','Delivery Helper','DLV','LAG','Screening',3,2,0,'INV-2026-001244'],
  ['APP-2026-00487','Trisha Gutierrez','Female','Administrative Assistant','ADM','PRQ','Started',1,3,0,'INV-2026-001249'],
  ['APP-2026-00488','Joel Mercado','Male','Production Worker','PRD','BUL','Submitted',2,0,0,'INV-2026-001243'],
  ['APP-2026-00480','Aileen Navarro','Female','Production Line Leader','PRD','BUL','Interview',8,0,86,'INV-2026-001242'],
  ['APP-2026-00479','Jenalyn Villareal','Female','Quality Control Inspector','PRD','CAV','Rejected',12,1,58,'INV-2026-001241'],
  ['APP-2026-00478','Michelle Ramos','Female','Accounting Assistant','FIN','PRQ','Final Evaluation',14,3,88,'INV-2026-001239'],
  ['APP-2026-00477','Gerald Castillo','Male','Warehouse Staff','WHS','LAG','Assessment',11,2,77,'INV-2026-001237'],
  ['APP-2026-00476','Nestor Alvarez','Male','Fleet Maintenance Staff','LOG','LAG','On Hold',16,2,71,'INV-2026-001236'],
  ['APP-2026-00475','Allan Tolentino','Male','Warehouse Staff','WHS','BUL','Selected',18,1,90,'INV-2026-001235'],
  ['APP-2026-00473','Marlon Dimaano','Male','Logistics Coordinator','LOG','LAG','Withdrawn',22,2,74,'INV-2026-001233'],
  ['APP-2026-00470','Erika Fernandez','Female','HR Assistant','HRD','PRQ','Job Offer',24,3,89,'INV-2026-001230'],
  ['APP-2026-00468','Danilo Rivera','Male','Production Worker','PRD','BUL','Pre-Employment',27,0,83,'INV-2026-001228'],
  ['APP-2026-00466','Rachelle Bernardo','Female','Purchasing Assistant','PUR','PRQ','Hired',34,3,91,'INV-2026-001226'],
  ['APP-2026-00463','Divina Salazar','Female','Sales Representative','SLS','LAG','Rejected',38,1,62,'INV-2026-001223'],
  ['APP-2026-00461','Charmaine Padilla','Female','Sales Representative','SLS','PRQ','Hired',41,1,87,'INV-2026-001221'],
];

/* ---- invitations without an application yet ------------------------------ */
const EXTRA_INVITATIONS = [
  { id:'INV-2026-001251', applicant:'Reymar Bautista', mobile:'0917 552 3390', position:'Production Worker', dept:'PRD', branch:'BUL', campaign:'Production Hiring — September 2026', status:'Unused', created:d2s(TODAY), expires:d2s(addDays(TODAY,7)), createdBy:'Angeline Cabrera' },
  { id:'INV-2026-001252', applicant:'Lorna Espino', mobile:'0918 224 7781', position:'Delivery Helper', dept:'DLV', branch:'LAG', campaign:'Delivery Fleet Expansion — Q4 2026', status:'Unused', created:d2s(TODAY), expires:d2s(addDays(TODAY,7)), createdBy:'Katrina Espino' },
  { id:'INV-2026-001240', applicant:'Efren Padilla', mobile:'0916 771 2210', position:'Warehouse Staff', dept:'WHS', branch:'BUL', campaign:'Warehouse Backfill — August 2026', status:'Expired', created:d2s(addDays(TODAY,-21)), expires:d2s(addDays(TODAY,-14)), createdBy:'Rico Bernardo' },
  { id:'INV-2026-001238', applicant:'Julius Rivera', mobile:'0917 330 9982', position:'Sales Representative', dept:'SLS', branch:'PRQ', campaign:'Sales Team — Q3 2026', status:'Revoked', created:d2s(addDays(TODAY,-18)), expires:d2s(addDays(TODAY,-11)), createdBy:'Rico Bernardo', revokedOn:d2s(addDays(TODAY,-15)), revokeReason:'Applicant withdrew before submitting.' },
];

const CAMPAIGNS = [
  'Production Hiring — September 2026',
  'Processing Line Expansion — September 2026',
  'Delivery Fleet Expansion — Q4 2026',
  'Warehouse Backfill — August 2026',
  'Head Office Support Roles — 2026',
  'Sales Team — Q3 2026',
];

function seedRecruitment(){
  AppState.applicants = APPLICANT_SPECS.map(buildApplicant);
  AppState.applicants.forEach(buildTimeline);

  AppState.invitations = AppState.applicants.map(a => {
    const created = d2s(addDays(s2d(a.applied), -1));
    const started = a.stage !== 'Invited';
    const submitted = a.stage !== 'Started' && a.stage !== 'Invited';
    return {
      id:a.invitationId, applicant:a.name, mobile:a.mobile, position:a.position, dept:a.dept, branch:a.branch,
      campaign: CAMPAIGNS[Math.abs(a.dept.charCodeAt(0)) % CAMPAIGNS.length],
      status: submitted ? 'Submitted' : (started ? 'Opened' : 'Unused'),
      created, expires: d2s(addDays(s2d(created), 7)),
      createdBy: a.recruiter, openedOn: started ? a.applied : null,
      submittedOn: submitted ? a.applied : null, submittedTime: submitted ? a.submittedTime : null,
      applicationId: submitted ? a.id : null,
    };
  }).concat(EXTRA_INVITATIONS.map(i => ({ ...i, applicationId:null, openedOn:null, submittedOn:null })));
}

/* ---- attendance ---------------------------------------------------------- */
function hashCode(str){ let h = 0; for (let i = 0; i < str.length; i++){ h = (h * 31 + str.charCodeAt(i)) | 0; } return Math.abs(h); }
function attendanceFor(emp, dateStr){
  const key = emp.id + dateStr;
  if (AppState.attendanceOverrides[key]) return AppState.attendanceOverrides[key];
  const d = s2d(dateStr), h = hashCode(key);
  if (s2d(emp.hired) > d) return { emp:emp.id, date:dateStr, shift:emp.shift, in:'—', out:'—', late:0, under:0, ot:0, status:'Not Started' };
  const restDayIdx = DOW.indexOf(emp.restDay.slice(0,3));
  const sh = shiftBy(emp.shift);
  if (emp.status === 'On Leave') return { emp:emp.id, date:dateStr, shift:emp.shift, in:'—', out:'—', late:0, under:0, ot:0, status:'On Leave' };
  if (d.getDay() === restDayIdx) return { emp:emp.id, date:dateStr, shift:'RST', in:'—', out:'—', late:0, under:0, ot:0, status:'Rest Day' };
  const r = h % 100;
  if (r < 4) return { emp:emp.id, date:dateStr, shift:emp.shift, in:'—', out:'—', late:0, under:0, ot:0, status:'Absent' };
  const [sh_h, sh_m] = sh.start.split(':').map(Number);
  let lateMin = r < 16 ? (h % 34) + 3 : 0;
  const inMin = sh_h * 60 + sh_m + (lateMin || -(h % 12));
  const under = r >= 92 ? (h % 40) + 5 : 0;
  const ot = r >= 70 && r < 86 ? Math.round(((h % 5) + 1) * 30) : 0;
  const outMin = sh_h * 60 + sh_m + sh.hours * 60 + 60 - under + ot;
  const t = m => `${String(Math.floor((m % 1440) / 60)).padStart(2,'0')}:${String(m % 60).padStart(2,'0')}`;
  return {
    emp:emp.id, date:dateStr, shift:emp.shift, in:t(inMin), out:t(outMin),
    late:lateMin, under, ot,
    status: lateMin ? 'Late' : (under ? 'Undertime' : 'Present'),
  };
}
function onDutyRoster(dateStr){ return activeEmployees().filter(e => s2d(e.hired) <= s2d(dateStr)); }
function attendanceSummary(dateStr){
  const s = { Present:0, Late:0, Absent:0, Undertime:0, 'Rest Day':0, 'On Leave':0, ot:0, total:0 };
  onDutyRoster(dateStr).forEach(e => {
    const r = attendanceFor(e, dateStr);
    s[r.status] = (s[r.status] || 0) + 1; s.ot += r.ot; s.total++;
  });
  return s;
}
const activeEmployees = () => AppState.employees.filter(e => !['Separated','Retired'].includes(e.status));
const empById = id => AppState.employees.find(e => e.id === id);
const appById = id => AppState.applicants.find(a => a.id === id);
const invById = id => AppState.invitations.find(i => i.id === id);

const ONB_STEPS = ['Employee Created','Documents','Orientation','Policy Acknowledgment','Department Assignment','Equipment / Uniform','System Access','Supervisor Handover','Onboarding Complete'];

/* ---- leave, performance, training, cases, movement, offboarding ----------- */
function seedHR(){
  const emps = activeEmployees();
  const sample = n => { const out = []; for (let i = 0; i < n; i++) out.push(emps[(hashCode('s'+i+n) % emps.length)]); return out; };

  /* leave requests */
  const reasons = {
    VL:['Family vacation','Personal errand','Out-of-town trip','Rest day extension'],
    SL:['Fever and cough','Medical check-up','Stomach flu','Recovery after minor procedure'],
    EL:['Family emergency','House repair after typhoon','Immediate family concern'],
    SPL:['Wedding of immediate family','Graduation of child','Bereavement'],
  };
  AppState.leave = sample(22).map((e, i) => {
    const type = ['VL','SL','EL','SPL'][i % 4];
    const start = addDays(TODAY, i % 3 === 0 ? rint(1, 20) : -rint(1, 40));
    const days = rint(1, 3);
    const filed = d2s(addDays(start, -rint(2, 9)));
    const isFuture = start > TODAY;
    const status = i % 7 === 0 ? 'Pending' : i % 9 === 0 ? 'Rejected' : (isFuture && i % 3 === 0 ? 'For Approval' : 'Approved');
    return {
      id:`LV-2026-${String(1200 + i).padStart(5,'0')}`, emp:e.id, type, days,
      start:d2s(start), end:d2s(addDays(start, days - 1)), filed,
      reason: pick(reasons[type]), status,
      approver: e.supervisor, hrReviewer: status === 'Approved' ? 'Katrina Espino' : null,
      stage: status === 'Approved' ? 'HR reviewed' : status === 'For Approval' ? 'With supervisor' : status === 'Pending' ? 'With supervisor' : 'Closed',
      remarks: status === 'Rejected' ? 'Peak production week — advised to refile for a later date.' : '',
    };
  });

  /* performance reviews */
  const KPI_SETS = {
    PRD:[['Output vs line target',30],['Product quality / rejects',25],['Attendance and punctuality',20],['Safety and GMP compliance',15],['Teamwork',10]],
    DLV:[['On-time delivery rate',30],['Vehicle care and safety',25],['Attendance and punctuality',20],['Customer feedback',15],['Documentation accuracy',10]],
    DEFAULT:[['Work quality',30],['Productivity',25],['Attendance and punctuality',20],['Teamwork',15],['Initiative',10]],
  };
  // every probationary employee gets an evaluation dated against the end of their probation
  const probationary = emps.filter(e => e.status === 'Probationary')
    .sort((a,b) => (a.probationEnd || '') < (b.probationEnd || '') ? -1 : 1).slice(0, 9);
  const reviewees = probationary.concat(sample(14).filter(e => e.status !== 'Probationary'));
  AppState.performance = reviewees.map((e, i) => {
    const kpis = (KPI_SETS[e.dept] || KPI_SETS.DEFAULT).map(([name, w]) => ({ name, weight:w, rating: rint(3,5) }));
    const overall = Number((kpis.reduce((s,k) => s + k.rating * k.weight, 0) / 100).toFixed(2));
    const isProb = e.status === 'Probationary';
    // probationary reviews fall due about a month before the probation period ends
    const due = isProb
      ? d2s(addDays(s2d(e.probationEnd || d2s(addDays(TODAY, 30))), -30))
      : d2s(addDays(TODAY, i % 4 === 0 ? rint(2, 30) : -rint(2, 60)));
    const done = s2d(due) < TODAY && !isProb;
    return {
      id:`PR-2026-${String(400 + i).padStart(4,'0')}`, emp:e.id,
      period: isProb ? 'Probationary review' : `Semi-annual · ${i % 2 ? 'Jan–Jun' : 'Jul–Dec'} 2026`,
      type: isProb ? 'Probationary Evaluation' : 'Regular Evaluation',
      due, status: done ? 'Completed' : (s2d(due) <= addDays(TODAY,14) ? 'In Progress' : 'Not Started'),
      evaluator: e.supervisor, kpis, overall,
      goals:['Meet the assigned line output for the quarter','Zero safety incidents','Complete required food safety refresher'],
      decision: !done ? null : (isProb ? (overall >= 3.5 ? 'Regularize' : 'Extend Probation') : (overall >= 4.5 ? 'Promotion Recommendation' : overall >= 3.2 ? 'Regularize' : 'Development Required')),
      remarks: done ? pick(['Consistent output and good attitude toward the team.','Needs closer supervision on documentation.','Reliable during peak season. Recommended for line leader pooling.']) : '',
    };
  });

  /* training */
  const COURSES_T = [
    ['Food Safety and GMP Refresher','Food Safety','AFCC Quality Assurance',8,12],
    ['Basic Occupational Safety and Health','Occupational Safety','DOLE-accredited provider',40,24],
    ['Cold Chain Handling','Technical Skills','AFCC Processing',8,12],
    ['Defensive Driving','Technical Skills','Safety Organization of the Philippines',8,24],
    ['Forklift Operation and Safety','Technical Skills','TESDA Partner Center',16,24],
    ['Supervisory Skills Program','Leadership','People Dynamics Consulting',24,null],
    ['Data Privacy Awareness','Compliance','AFCC Legal',4,null],
    ['HRMS Orientation','Systems & Tools','AFCC HR',4,null],
  ];
  AppState.trainings = sample(26).map((e, i) => {
    const [name, type, provider, hours, validity] = COURSES_T[i % COURSES_T.length];
    const date = d2s(addDays(TODAY, -rint(20, 500)));
    const expiry = validity ? d2s(addDays(s2d(date), validity * 30)) : null;
    const daysToExpiry = expiry ? daysBetween(d2s(TODAY), expiry) : 9999;
    return {
      id:`TR-${String(2200 + i)}`, emp:e.id, name, type, provider, date, hours,
      result: rnd() > .08 ? 'Passed' : 'Failed',
      certificate: `CERT-${String(9000 + i)}`, expiry,
      status: daysToExpiry < 0 ? 'Expired' : daysToExpiry < 60 ? 'Expiring Soon' : 'Valid',
    };
  });
  AppState.trainingSessions = [
    { id:'TS-2026-041', name:'Food Safety and GMP Refresher', type:'Food Safety', date:d2s(addDays(TODAY,3)), time:'08:00 – 12:00', venue:'Bulacan Plant — Training Room', provider:'AFCC Quality Assurance', seats:30, enrolled:26, status:'Scheduled' },
    { id:'TS-2026-042', name:'Basic Occupational Safety and Health', type:'Occupational Safety', date:d2s(addDays(TODAY,9)), time:'08:00 – 17:00', venue:'Cavite Processing — Multi-purpose Hall', provider:'DOLE-accredited provider', seats:25, enrolled:25, status:'Scheduled' },
    { id:'TS-2026-043', name:'Supervisory Skills Program', type:'Leadership', date:d2s(addDays(TODAY,17)), time:'09:00 – 16:00', venue:'Parañaque Head Office — Boardroom', provider:'People Dynamics Consulting', seats:18, enrolled:11, status:'Scheduled' },
    { id:'TS-2026-040', name:'Defensive Driving', type:'Technical Skills', date:d2s(addDays(TODAY,-6)), time:'08:00 – 17:00', venue:'Laguna Hub — Yard', provider:'Safety Organization of the Philippines', seats:20, enrolled:20, status:'Completed' },
  ];

  /* employee relations cases */
  const caseSpecs = [
    ['Disciplinary Action','Attendance — 4 unexcused absences within the month','Under Investigation','Katrina Espino',-8,true],
    ['Grievance','Concern raised on rest day scheduling in the dressing line','Open','Maria Reyes',-4,true],
    ['Incident','Minor slip near the chiller area, no injury reported','Resolved','Angeline Cabrera',-16,false],
    ['Concern','Request for shift transfer due to family situation','Resolved','Katrina Espino',-22,false],
    ['Investigation','Missing stock reported during warehouse count','Under Investigation','Maria Reyes',-11,true],
    ['Disciplinary Action','Violation of personal protective equipment policy','Closed','Angeline Cabrera',-40,false],
  ];
  AppState.cases = caseSpecs.map(([type, desc, status, officer, ago, conf], i) => {
    const e = emps[hashCode('c'+i) % emps.length];
    return {
      id:`ER-2026-${String(30 + i).padStart(4,'0')}`, emp:e.id, type, description:desc, status,
      date:d2s(addDays(TODAY, ago)), officer, confidential:conf,
      resolution: status === 'Resolved' || status === 'Closed' ? pick(['Written warning issued and acknowledged.','Settled through a documented agreement between both parties.','Corrective action completed. Case closed with no further action.']) : '',
      notes:[
        { by:officer, date:d2s(addDays(TODAY, ago)), text:'Case logged and acknowledged by the employee.' },
        ...(status !== 'Open' ? [{ by:officer, date:d2s(addDays(TODAY, ago + 3)), text:'Notice to explain served. Written explanation received within the 5-day period.' }] : []),
      ],
      dueDate: d2s(addDays(TODAY, ago + 30)),
    };
  });

  /* movements */
  const MOVE_TYPES = ['Promotion','Transfer','Department Change','Position Change','Salary Adjustment','Probationary → Regular','Supervisor Change'];
  AppState.movements = sample(14).map((e, i) => {
    const type = MOVE_TYPES[i % MOVE_TYPES.length];
    const eff = d2s(addDays(TODAY, i % 5 === 0 ? rint(3, 25) : -rint(10, 400)));
    const inc = type === 'Promotion' ? rint(4000, 9000) : type === 'Salary Adjustment' ? rint(1000, 2500) : 0;
    return {
      id:`MV-2026-${String(700 + i)}`, emp:e.id, type, effective:eff,
      from: type === 'Transfer' ? branchName(e.branch) : type === 'Probationary → Regular' ? 'Probationary' : e.position,
      to: type === 'Transfer' ? branchName(pick(BRANCHES).code) : type === 'Probationary → Regular' ? 'Regular' : (type === 'Promotion' ? 'Production Line Leader' : e.position),
      prevSalary: e.salary - inc, newSalary: e.salary,
      reason: pick(['Approved based on performance evaluation','Operational requirement','Regularization after probationary period','Annual merit review']),
      status: s2d(eff) > TODAY ? 'Pending Approval' : 'Approved',
      approvedBy: s2d(eff) > TODAY ? null : 'Maria Reyes',
    };
  });

  /* offboarding + separated employees */
  const sepSpecs = [
    ['Resignation','Accepted a position closer to home',-12,'Clearance'],
    ['End of Contract','Project-based contract ended',-25,'Final HR Processing'],
    ['Termination','Just cause — attendance and policy violations',-40,'Completed'],
  ];
  AppState.offboarding = sepSpecs.map(([type, reason, ago, stage], i) => {
    const e = emps[hashCode('o'+i) % emps.length];
    const steps = ['Separation Request','Approval','Exit Interview','Clearance','Asset Return','Final HR Processing'];
    const stageIdx = steps.indexOf(stage) < 0 ? steps.length : steps.indexOf(stage);
    return {
      id:`SEP-2026-${String(50 + i)}`, emp:e.id, type, reason,
      filed:d2s(addDays(TODAY, ago)), lastDay:d2s(addDays(TODAY, ago + 30)),
      stage, stageIdx,
      clearance:[
        { unit:'Human Resources', owner:'Katrina Espino', status: stageIdx >= 3 ? 'Complete':'Pending' },
        { unit:'Finance', owner:'Cristina Aquino', status: stageIdx >= 4 ? 'Complete':'Pending' },
        { unit:'IT / Systems', owner:'Jocelyn Navarro', status: stageIdx >= 3 ? 'Complete':'Pending' },
        { unit:'Warehouse / Assets', owner:'Arnel Salazar', status: stageIdx >= 4 ? 'Complete':'Pending' },
        { unit:'Administration', owner:'Jocelyn Navarro', status: stageIdx >= 5 ? 'Complete':'Pending' },
        { unit:'Immediate Supervisor', owner:e.supervisor, status: stageIdx >= 2 ? 'Complete':'Pending' },
      ],
      exitInterview: stageIdx >= 3 ? { by:'Maria Reyes', date:d2s(addDays(TODAY, ago + 7)), rating:rint(3,5), wouldRehire: type !== 'Termination', notes:'Cited commute distance and shift schedule as the main factors.' } : null,
      assets:[{ name:'Company ID', status: stageIdx >= 4 ? 'Returned':'Pending' }, { name:'Uniform (3 sets)', status: stageIdx >= 4 ? 'Returned':'Pending' }, { name:'Safety shoes', status:'Returned' }],
      status: stage === 'Completed' ? 'Completed' : 'In Progress',
    };
  });
  AppState.offboarding.forEach(o => { if (o.status === 'Completed'){ const e = empById(o.emp); if (e){ e.status = 'Separated'; e.separatedOn = o.lastDay; } } });

  /* onboarding for recent hires */
  AppState.onboarding = AppState.applicants.filter(a => a.stage === 'Hired').map((a, i) => {
    const e = emps[hashCode('n'+i) % emps.length];
    return { id:`ONB-2026-${String(90+i)}`, emp:e.id, applicationId:a.id, started:d2s(addDays(TODAY,-rint(4,20))), steps:ONB_STEPS, stepIdx: i === 0 ? 6 : 8, owner:'Katrina Espino' };
  });
  AppState.onboardingSteps = ONB_STEPS;

  /* notifications, tasks, audit */
  AppState.notifications = [
    { id:1, kind:'ok',   text:'3 applicants completed their applications today.', time:'10:42 AM', date:d2s(TODAY), route:'#/recruitment/ats', read:false },
    { id:2, kind:'info', text:'Interview scheduled for Rowena Marquez at 2:00 PM.', time:'09:15 AM', date:d2s(TODAY), route:'#/recruitment/interviews', read:false },
    { id:3, kind:'warn', text:'14 employee documents expire this month.', time:'08:30 AM', date:d2s(TODAY), route:'#/documents', read:false },
    { id:4, kind:'info', text:'6 probationary employees are due for evaluation.', time:'08:02 AM', date:d2s(TODAY), route:'#/performance', read:true },
    { id:5, kind:'warn', text:'8 leave requests are waiting for approval.', time:'Yesterday', date:d2s(addDays(TODAY,-1)), route:'#/leave', read:true },
    { id:6, kind:'ok',   text:'Job offer accepted by Danilo Rivera (APP-2026-00468).', time:'Yesterday', date:d2s(addDays(TODAY,-1)), route:'#/recruitment/offers', read:true },
  ];
  AppState.audit = [
    { at:`${d2s(TODAY)} 10:42`, user:'Applicant', module:'Recruitment', action:'Application Submitted', record:'APP-2026-00481', detail:'Invitation INV-2026-001245 marked as used' },
    { at:`${d2s(TODAY)} 11:03`, user:'Maria Reyes', module:'Recruitment', action:'Status Updated', record:'APP-2026-00481', detail:'Submitted → Screening' },
    { at:`${d2s(TODAY)} 14:15`, user:'Angeline Cabrera', module:'Recruitment', action:'Status Updated', record:'APP-2026-00481', detail:'Screening → Shortlisted' },
    { at:`${d2s(TODAY)} 09:20`, user:'Angeline Cabrera', module:'Recruitment', action:'Invitation Created', record:'INV-2026-001251', detail:'Production Worker · Reymar Bautista' },
    { at:`${d2s(addDays(TODAY,-1))} 16:40`, user:'Katrina Espino', module:'Leave', action:'Approved', record:'LV-2026-01207', detail:'Vacation Leave · 2 days' },
    { at:`${d2s(addDays(TODAY,-1))} 15:02`, user:'Maria Reyes', module:'Employee Relations', action:'Case Updated', record:'ER-2026-0031', detail:'Open → Under Investigation' },
    { at:`${d2s(addDays(TODAY,-2))} 11:11`, user:'Rico Bernardo', module:'Recruitment', action:'Invitation Revoked', record:'INV-2026-001238', detail:'Applicant withdrew before submitting' },
    { at:`${d2s(addDays(TODAY,-2))} 09:45`, user:'Jocelyn Navarro', module:'Employees', action:'Record Edited', record:'EMP-2024-00061', detail:'Contact number updated' },
  ];
}

/* ---- documents (derived per employee, with overrides) -------------------- */
const DOC_TEMPLATE = [
  ['PSA Birth Certificate','Personal',null],
  ['Valid Government ID','Personal',24],
  ['Signed Employment Contract','Employment',null],
  ['SSS / PhilHealth / Pag-IBIG','Government',null],
  ['Medical Certificate','Medical',12],
  ['Food Handler’s Certificate','Medical',12],
  ['NBI Clearance','Personal',12],
  ['Training Certificates','Training',null],
  ['Latest Performance Evaluation','Performance',null],
];
function docsFor(emp){
  if (AppState.docOverrides[emp.id]) return AppState.docOverrides[emp.id];
  const h = hashCode(emp.id);
  return DOC_TEMPLATE.map(([name, cat, validity], i) => {
    const missing = (h + i * 7) % 23 === 0;
    const uploaded = d2s(addDays(s2d(emp.hired), (h + i) % 40));
    const expiry = validity ? d2s(addDays(s2d(uploaded), validity * 30 + ((h + i) % 200))) : null;
    const dte = expiry ? daysBetween(d2s(TODAY), expiry) : 9999;
    return {
      name, category:cat, uploaded: missing ? null : uploaded, expiry,
      status: missing ? 'Missing' : dte < 0 ? 'Expired' : dte < 45 ? 'Expiring Soon' : 'Valid',
    };
  });
}
function allDocuments(){
  const out = [];
  activeEmployees().forEach(e => docsFor(e).forEach(d => out.push({ ...d, emp:e.id, empName:e.name, dept:e.dept })));
  return out;
}

/* ---------------------------------------------------------------------------
   9. MOCK API  — every function here maps to one future server endpoint.
   Replace the body with a fetch() call; keep the signature and the events.
   --------------------------------------------------------------------------- */
const MockAPI = {
  _audit(module, action, record, detail){
    const now = new Date();
    AppState.audit.unshift({
      id:(crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`),
      at:`${d2s(TODAY)} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`,
      user:AppState.currentUser.name, module, action, record, detail,
    });
  },
  _notify(kind, text, route){
    AppState.notifications.unshift({ id:Date.now(), kind, text, time:'Just now', date:d2s(TODAY), route, read:false });
    renderNotifBadge();
  },

  /* --- recruitment --- */
  createInvitation({ position, dept, branch, campaign, applicant, mobile, days }){
    const id = `INV-2026-${String(AppState.seq.inv++).padStart(6,'0')}`;
    const inv = {
      id, applicant, mobile, position, dept, branch, campaign,
      status:'Unused', created:d2s(TODAY), expires:d2s(addDays(TODAY, days || 7)),
      createdBy:AppState.currentUser.name, openedOn:null, submittedOn:null, applicationId:null,
    };
    AppState.invitations.unshift(inv);
    this._audit('Recruitment','Invitation Created', id, `${position} · ${applicant}`);
    return inv;
  },
  openInvitation(id){
    const inv = invById(id);
    if (inv && inv.status === 'Unused'){ inv.status = 'Opened'; inv.openedOn = d2s(TODAY); this._audit('Recruitment','Invitation Opened', id, 'Applicant opened the application link'); }
    return inv;
  },
  revokeInvitation(id, reason){
    const inv = invById(id);
    if (!inv || inv.status === 'Submitted') return false;
    inv.status = 'Revoked'; inv.revokedOn = d2s(TODAY); inv.revokeReason = reason || 'Revoked by HR';
    this._audit('Recruitment','Invitation Revoked', id, reason || '');
    return true;
  },
  /** One-time use is enforced here. In production this check MUST live on the server. */
  submitApplication(invId, form){
    const inv = invById(invId);
    if (!inv) return { ok:false, error:'Invitation not found.' };
    if (inv.status === 'Submitted') return { ok:false, error:'already-used' };
    if (inv.status === 'Revoked') return { ok:false, error:'revoked' };
    if (s2d(inv.expires) < TODAY) return { ok:false, error:'expired' };

    // Applicants come in from the public portal (possibly anonymous, no read
    // access to existing applicant ids), so this can't rely on an in-memory
    // counter without risking two applicants colliding on the same id.
    const id = `APP-2026-${(crypto.randomUUID ? crypto.randomUUID().replace(/-/g,'').slice(0,8) : `${Date.now().toString(16)}${Math.floor(Math.random()*1e6).toString(16)}`)}`;
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
    const a = {
      id, invitationId:invId, name:`${form.first} ${form.last}`.trim(),
      first:form.first, middle:form.middle, last:form.last, suffix:form.suffix,
      sex:form.sex, birth:form.birth, civil:form.civil, nationality:form.nationality || 'Filipino',
      mobile:form.mobile, email:form.email, address:form.address, permAddress:form.permAddress,
      emergency:{ name:form.emgName, rel:form.emgRel, phone:form.emgPhone },
      position:form.position, dept:form.dept, branch:form.branch, empType:form.empType,
      education:{ attainment:form.attainment, school:form.school, course:form.course, year:form.gradYear },
      experience:form.experience || [], skills:(form.skills||'').split(',').map(s=>s.trim()).filter(Boolean),
      certifications:(form.certifications||'').split(',').map(s=>s.trim()).filter(Boolean),
      licenses:(form.licenses||'').split(',').map(s=>s.trim()).filter(Boolean),
      answers:form.answers || {},
      applied:d2s(TODAY), submittedTime:time,
      stage:'Submitted', status:'Submitted', recruiter:inv.createdBy, score:0, updated:d2s(TODAY),
      screening:null, interviews:[], assessments:[], evaluation:null, offer:null,
      preEmployment:null, notes:[], documents:[{ name:'Resume / Bio-data', type:'Application', date:d2s(TODAY), status:'Valid' }],
      timeline:[], avatar:avatarColor(form.first + id), isNew:true,
    };
    a.timeline = [
      { date:d2s(TODAY), time:'—', action:'Invitation generated', user:inv.createdBy, note:`Invitation ${invId} created for ${inv.position}.`, state:'done' },
      { date:d2s(TODAY), time:time, action:'Application started', user:'Applicant', note:'Applicant opened the invitation link.', state:'done' },
      { date:d2s(TODAY), time:time, action:'Application submitted', user:'Applicant', note:`Application ${id} received. Invitation marked as used.`, state:'done' },
    ];
    AppState.applicants.unshift(a);
    inv.status = 'Submitted'; inv.submittedOn = d2s(TODAY); inv.submittedTime = time; inv.applicationId = id;
    if (!inv.openedOn) inv.openedOn = d2s(TODAY);
    this._audit('Recruitment','Application Submitted', id, `Invitation ${invId} marked as used`);
    this._notify('ok', `New application received — ${a.name} (${a.position}).`, '#/recruitment/ats');
    return { ok:true, application:a };
  },
  setStage(appId, stage, note){
    const a = appById(appId); if (!a) return;
    const prev = a.stage;
    a.stage = stage; a.status = stage; a.updated = d2s(TODAY);
    const now = new Date();
    a.timeline.push({
      date:d2s(TODAY), time:`${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`,
      action:stage, user:AppState.currentUser.name, note:note || `Moved from ${prev} to ${stage}.`,
      state: TERMINAL.includes(stage) ? 'blocked' : 'done',
    });
    this._audit('Recruitment','Status Updated', appId, `${prev} → ${stage}`);
    return a;
  },
  saveScreening(appId, data){
    const a = appById(appId); if (!a) return;
    a.screening = { ...data, by:AppState.currentUser.name, date:d2s(TODAY) };
    a.score = data.score;
    this._audit('Recruitment','Screening Saved', appId, `Result: ${data.result} · ${data.score}%`);
    if (data.result === 'Pass') this.setStage(appId, 'Shortlisted', `Screening passed (${data.score}%). ${data.notes||''}`);
    else if (data.result === 'Fail') this.setStage(appId, 'Rejected', `Did not pass initial screening. ${data.notes||''}`);
    else this.setStage(appId, 'On Hold', data.notes || 'Screening placed on hold.');
    return a;
  },
  scheduleInterview(appId, data){
    const a = appById(appId); if (!a) return;
    const iv = { id:`INT-${appId.slice(-5)}-${a.interviews.length+1}`, ...data, status:'Scheduled', scores:{}, overall:0, decision:null, remarks:'' };
    a.interviews.push(iv);
    a.timeline.push({ date:d2s(TODAY), time:'—', action:`${data.round} scheduled`, user:AppState.currentUser.name, note:`${fmtDate(data.date)} ${data.time} · ${data.type} · ${data.interviewer}`, state:'current' });
    this._audit('Recruitment','Interview Scheduled', appId, `${fmtDate(data.date)} ${data.time} with ${data.interviewer}`);
    this._notify('info', `Interview scheduled for ${a.name} on ${fmtDate(data.date)} at ${data.time}.`, '#/recruitment/interviews');
    if (STAGE_ORDER(a.stage) < STAGE_ORDER('Interview')) this.setStage(appId, 'Interview', 'Interview scheduled.');
    return iv;
  },
  saveInterviewResult(appId, ivId, scores, decision, remarks){
    const a = appById(appId); const iv = a.interviews.find(i => i.id === ivId); if (!iv) return;
    iv.scores = scores; iv.remarks = remarks; iv.decision = decision; iv.status = 'Completed';
    iv.overall = Number((Object.values(scores).reduce((x,y)=>x+y,0) / Object.keys(scores).length).toFixed(1));
    a.score = Math.round(iv.overall * 20);
    a.timeline.push({ date:d2s(TODAY), time:'—', action:`${iv.round} completed`, user:AppState.currentUser.name, note:`Overall ${iv.overall}/5 · ${decision}. ${remarks}`, state:'done' });
    this._audit('Recruitment','Interview Result Saved', appId, `${iv.round}: ${iv.overall}/5 · ${decision}`);
    if (decision === 'Pass' && STAGE_ORDER(a.stage) < STAGE_ORDER('Assessment')) this.setStage(appId, 'Assessment', 'Interview passed. For assessment.');
    if (decision === 'Fail') this.setStage(appId, 'Rejected', `Did not pass the interview. ${remarks}`);
    return iv;
  },
  addAssessment(appId, data){
    const a = appById(appId); if (!a) return;
    a.assessments.push({ ...data, result: data.score >= data.passing ? 'Passed' : 'Failed', administrator:AppState.currentUser.name });
    a.timeline.push({ date:d2s(TODAY), time:'—', action:data.name, user:AppState.currentUser.name, note:`Score ${data.score} vs passing ${data.passing} · ${data.score >= data.passing ? 'Passed':'Failed'}`, state:'done' });
    this._audit('Recruitment','Assessment Recorded', appId, `${data.name}: ${data.score}/${data.passing}`);
    if (STAGE_ORDER(a.stage) < STAGE_ORDER('Final Evaluation') && data.score >= data.passing) this.setStage(appId, 'Final Evaluation', 'Assessment recorded. For final evaluation.');
    return a;
  },
  saveEvaluation(appId, decision, remarks){
    const a = appById(appId); if (!a) return;
    const iv = a.interviews.length ? a.interviews.reduce((s,i)=>s+i.overall,0)/a.interviews.length*20 : 70;
    const asm = a.assessments.length ? a.assessments.reduce((s,x)=>s+x.score,0)/a.assessments.length : 70;
    const scr = a.screening ? a.screening.score : 70;
    const overall = Math.round(scr*.25 + iv*.4 + asm*.35);
    a.evaluation = {
      screening:scr, interview:Math.round(iv), assessment:Math.round(asm), overall,
      recommendation: overall >= 88 ? 'Highly Recommended' : overall >= 78 ? 'Recommended' : overall >= 70 ? 'For Further Review' : 'Not Recommended',
      decision, by:AppState.currentUser.name, date:d2s(TODAY), remarks,
    };
    a.score = overall;
    this._audit('Recruitment','Final Evaluation', appId, `${overall}% · ${decision}`);
    if (decision === 'Selected') this.setStage(appId, 'Selected', `Final evaluation ${overall}%. ${remarks}`);
    if (decision === 'Rejected') this.setStage(appId, 'Rejected', remarks || 'Not selected.');
    if (decision === 'On Hold') this.setStage(appId, 'On Hold', remarks || 'Placed on hold.');
    return a.evaluation;
  },
  createOffer(appId, data){
    const a = appById(appId); if (!a) return;
    a.offer = { id:`OFR-2026-${String(AppState.seq.ofr++)}`, ...data, status:'Draft', preparedBy:AppState.currentUser.name, approvedBy:null, sentOn:null, respondedOn:null };
    this._audit('Recruitment','Job Offer Created', appId, `${peso(data.salary)} · start ${fmtDate(data.start)}`);
    return a.offer;
  },
  setOfferStatus(appId, status){
    const a = appById(appId); if (!a || !a.offer) return;
    a.offer.status = status;
    if (status === 'Sent'){ a.offer.sentOn = d2s(TODAY); this.setStage(appId, 'Job Offer', 'Job offer sent to the applicant.'); }
    if (status === 'Approved') a.offer.approvedBy = AppState.currentUser.name;
    if (status === 'Accepted'){
      a.offer.respondedOn = d2s(TODAY);
      a.preEmployment = PRE_EMP_REQUIREMENTS.map(r => ({ name:r, status:'Pending', submitted:null, by:null }));
      this.setStage(appId, 'Pre-Employment', 'Offer accepted. Pre-employment requirements started.');
      this._notify('ok', `Job offer accepted by ${a.name} (${a.id}).`, '#/recruitment/preemployment');
    }
    if (status === 'Declined') this.setStage(appId, 'Withdrawn', 'Applicant declined the job offer.');
    this._audit('Recruitment','Job Offer Updated', appId, `Offer status: ${status}`);
    return a.offer;
  },
  setRequirement(appId, index, status){
    const a = appById(appId); if (!a || !a.preEmployment) return;
    a.preEmployment[index].status = status;
    a.preEmployment[index].submitted = status === 'Pending' ? null : d2s(TODAY);
    a.preEmployment[index].by = status === 'Pending' ? null : 'Applicant';
    this._audit('Recruitment','Requirement Updated', appId, `${a.preEmployment[index].name}: ${status}`);
    return a.preEmployment;
  },
  /** Applicants only enter the employee master here — never before. */
  convertToEmployee(appId, opts){
    const a = appById(appId); if (!a) return { ok:false, error:'Application not found.' };
    if (a.stage !== 'Pre-Employment' && a.stage !== 'Selected') return { ok:false, error:'Only applicants with an accepted offer can be hired.' };
    const pending = (a.preEmployment || []).filter(r => r.status === 'Pending').length;
    if (pending > 0 && !opts.force) return { ok:false, error:`${pending} pre-employment requirement${pending>1?'s are':' is'} still pending.` };

    const id = `EMP-2026-${String(AppState.seq.emp++).padStart(5,'0')}`;
    const p = posByTitle(a.position);
    const dept = DEPARTMENTS.find(d => d.code === a.dept);
    const sup = opts.supervisor || (AppState.employees.find(e => e.dept === a.dept && e.level !== 'Rank & File') || {}).name || dept.head;
    const emp = {
      id, name:a.name, first:a.first, middle:a.middle, last:a.last, sex:a.sex, civil:a.civil,
      nationality:a.nationality, birth:a.birth, position:a.position, dept:a.dept,
      branch:opts.branch || a.branch, type:'Probationary', hired:opts.start || d2s(TODAY),
      status:'Probationary', supervisor:sup, level:p.level,
      email:`${a.first.toLowerCase()}.${a.last.toLowerCase().replace(/\s/g,'')}@artfreshchicken.ph`,
      mobile:a.mobile, address:a.address,
      emergency:a.emergency, education:a.education,
      salary:(a.offer ? a.offer.salary : p.min),
      allowances:(a.offer ? a.offer.allowances : [{ name:'Meal allowance', amount:2000 }]),
      shift:opts.shift || (['PRD','PRC','WHS'].includes(a.dept) ? 'MRN' : 'OFC'),
      restDay:opts.restDay || 'Sunday',
      probationEnd:d2s(addDays(s2d(opts.start || d2s(TODAY)), 180)),
      fromApplication:a.id, avatar:a.avatar, isNew:true,
    };
    AppState.employees.unshift(emp);
    this.setStage(appId, 'Hired', `Converted to employee record ${id}.`);
    a.employeeId = id;
    AppState.onboarding.unshift({
      id:`ONB-2026-${String(100 + AppState.onboarding.length)}`, emp:id, applicationId:a.id,
      started:d2s(TODAY), steps:AppState.onboardingSteps, stepIdx:1, owner:AppState.currentUser.name,
    });
    this._audit('Employees','Employee Created', id, `From application ${a.id}`);
    this._notify('ok', `${a.name} is now employee ${id}. Onboarding started.`, `#/employees/${id}`);
    return { ok:true, employee:emp };
  },
  /** Enter someone directly into the employee master — for staff already on
   *  the roster (any status), not going through the recruitment pipeline. */
  createEmployee(data){
    const id = `EMP-2026-${String(AppState.seq.emp++).padStart(5,'0')}`;
    const first = data.first.trim(), last = data.last.trim(), middle = (data.middle || '').trim();
    const name = `${first} ${last}`.trim();
    const level = data.level || 'Rank & File';
    const isSeparated = data.status === 'Separated' || data.status === 'Retired';
    const emp = {
      id, name, first, middle, last, suffix:data.suffix || '',
      sex:data.sex, civil:data.civil, nationality:data.nationality || 'Filipino', birth:data.birth || null,
      position:data.position, dept:data.dept, branch:data.branch,
      type:data.type, hired:data.hired, status:data.status,
      supervisor:data.supervisor || null, level,
      email:data.email || `${first.toLowerCase()}.${last.toLowerCase().replace(/\s/g,'')}@artfreshchicken.ph`,
      mobile:data.mobile || '', address:data.address || '',
      emergency:{ name:data.emgName || '', rel:data.emgRel || '', phone:data.emgPhone || '' },
      education:{ attainment:data.attainment || '', school:data.school || '', course:data.course || '', year:data.gradYear || '' },
      salary:Number(data.salary) || 0,
      allowances:[
        { name:'Meal allowance', amount:2000 },
        { name:'Transportation', amount:['LOG','DIS','TRN'].includes(data.dept) ? 2500 : 1500 },
        ...(level !== 'Rank & File' ? [{ name:'Communication', amount:1200 }] : []),
      ],
      shift:data.shift || 'OFC', restDay:data.restDay || 'Sunday',
      probationEnd:data.status === 'Probationary' ? (data.probationEnd || d2s(addDays(s2d(data.hired), 180))) : null,
      separatedOn:isSeparated ? (data.sepDate || null) : null,
      separationType:isSeparated ? (data.sepType || null) : null,
      fromApplication:null, avatar:avatarColor(name + id), isNew:true,
    };
    AppState.employees.unshift(emp);
    this._audit('Employees','Employee Added Manually', id, `${name} · ${data.position} · ${data.status}`);
    return { ok:true, employee:emp };
  },

  /* --- employee lifecycle --- */
  advanceOnboarding(onbId, toIdx){
    const o = AppState.onboarding.find(x => x.id === onbId); if (!o) return;
    o.stepIdx = toIdx !== undefined ? toIdx : Math.min(o.stepIdx + 1, o.steps.length);
    if (o.stepIdx >= o.steps.length){
      const e = empById(o.emp);
      this._audit('Onboarding','Onboarding Completed', o.emp, e ? e.name : '');
    } else this._audit('Onboarding','Step Completed', o.emp, o.steps[o.stepIdx - 1]);
    return o;
  },
  setLeaveStatus(id, status, remarks){
    const l = AppState.leave.find(x => x.id === id); if (!l) return;
    l.status = status; l.remarks = remarks || l.remarks;
    l.stage = status === 'Approved' ? 'HR reviewed' : status === 'Rejected' ? 'Closed' : l.stage;
    if (status === 'Approved') l.hrReviewer = AppState.currentUser.name;
    this._audit('Leave', status, id, `${l.type} · ${l.days} day(s)`);
    return l;
  },
  fileLeave(data){
    const l = { id:`LV-2026-${String(1300 + AppState.leave.length)}`, ...data, filed:d2s(TODAY), status:'For Approval', stage:'With supervisor', hrReviewer:null, remarks:'' };
    AppState.leave.unshift(l);
    this._audit('Leave','Leave Filed', l.id, `${data.type} · ${data.days} day(s)`);
    this._notify('info', `Leave request ${l.id} filed and waiting for approval.`, '#/leave');
    return l;
  },
  fileCorrection(data){
    const c = { id:`AC-2026-${String(500 + AppState.corrections.length)}`, ...data, filed:d2s(TODAY), status:'Pending', approver:'Katrina Espino' };
    AppState.corrections.unshift(c);
    this._audit('Attendance','Correction Requested', c.id, `${data.emp} · ${fmtDate(data.date)}`);
    return c;
  },
  setCorrectionStatus(id, status){
    const c = AppState.corrections.find(x => x.id === id); if (!c) return;
    c.status = status;
    if (status === 'Approved'){
      const e = empById(c.emp);
      const cur = attendanceFor(e, c.date);
      AppState.attendanceOverrides[c.emp + c.date] = { ...cur, in:c.newIn || cur.in, out:c.newOut || cur.out, late:0, under:0, status:'Present', corrected:true };
    }
    this._audit('Attendance', status, id, 'Attendance correction');
    return c;
  },
  assignShift(empId, dateStr, code){
    AppState.shiftOverrides[empId + dateStr] = code;
    this._audit('Attendance','Shift Assigned', empId, `${fmtDate(dateStr)} · ${shiftBy(code).name}`);
  },
  saveReview(id, kpis, decision, remarks){
    const r = AppState.performance.find(x => x.id === id); if (!r) return;
    r.kpis = kpis; r.decision = decision; r.remarks = remarks; r.status = 'Completed';
    r.overall = Number((kpis.reduce((s,k) => s + k.rating * k.weight, 0) / 100).toFixed(2));
    if (decision === 'Regularize'){
      const e = empById(r.emp);
      if (e && e.status === 'Probationary'){ e.status = 'Regular'; e.type = 'Regular'; e.probationEnd = null; }
    }
    this._audit('Performance','Evaluation Completed', r.id, `${r.overall}/5 · ${decision}`);
    return r;
  },
  addCase(data){
    const c = { id:`ER-2026-${String(AppState.seq.case++).padStart(4,'0')}`, ...data, status:'Open', officer:AppState.currentUser.name, date:d2s(TODAY), notes:[{ by:AppState.currentUser.name, date:d2s(TODAY), text:'Case logged.' }], resolution:'', dueDate:d2s(addDays(TODAY,30)) };
    AppState.cases.unshift(c);
    this._audit('Employee Relations','Case Created', c.id, data.type);
    return c;
  },
  updateCase(id, status, resolution){
    const c = AppState.cases.find(x => x.id === id); if (!c) return;
    const prev = c.status; c.status = status; if (resolution) c.resolution = resolution;
    c.notes.push({ by:AppState.currentUser.name, date:d2s(TODAY), text:resolution || `Status changed to ${status}.` });
    this._audit('Employee Relations','Case Updated', id, `${prev} → ${status}`);
    return c;
  },
  startOffboarding(empId, type, reason, lastDay){
    const e = empById(empId); if (!e) return;
    const o = {
      id:`SEP-2026-${String(60 + AppState.offboarding.length)}`, emp:empId, type, reason,
      filed:d2s(TODAY), lastDay, stage:'Separation Request', stageIdx:1,
      clearance:['Human Resources','Finance','IT / Systems','Warehouse / Assets','Administration','Immediate Supervisor'].map(u => ({ unit:u, owner:u === 'Immediate Supervisor' ? e.supervisor : pick(HR_USERS), status:'Pending' })),
      exitInterview:null,
      assets:[{ name:'Company ID', status:'Pending' },{ name:'Uniform (3 sets)', status:'Pending' },{ name:'Safety shoes', status:'Pending' }],
      status:'In Progress',
    };
    AppState.offboarding.unshift(o);
    this._audit('Offboarding','Separation Filed', o.id, `${e.name} · ${type}`);
    return o;
  },
  advanceOffboarding(id){
    const o = AppState.offboarding.find(x => x.id === id); if (!o) return;
    const steps = ['Separation Request','Approval','Exit Interview','Clearance','Asset Return','Final HR Processing'];
    o.stageIdx = Math.min(o.stageIdx + 1, steps.length);
    o.stage = o.stageIdx >= steps.length ? 'Completed' : steps[o.stageIdx];
    if (o.stageIdx >= 3) o.clearance.slice(0, o.stageIdx).forEach(c => c.status = 'Complete');
    if (o.stageIdx >= 4) o.assets.forEach(a => a.status = 'Returned');
    if (o.stage === 'Completed'){
      o.status = 'Completed';
      const e = empById(o.emp);
      if (e){ e.status = 'Separated'; e.separatedOn = o.lastDay; }
      this._audit('Offboarding','Separation Completed', o.id, 'Employee status set to Separated');
    } else this._audit('Offboarding','Step Completed', o.id, o.stage);
    return o;
  },
};

/* ---------------------------------------------------------------------------
   10. SUPABASE CONNECTION
   AppState stays the fast, synchronous read model every render() call already
   uses. Supabase is the persistence layer behind it: on boot we hydrate
   AppState from the database, and every MockAPI mutation is mirrored to
   Supabase in the background (fire-and-forget) right after it happens, so
   nothing about the existing UI code above has to change.
   --------------------------------------------------------------------------- */
const DOC_TABLES = {
  employees:'employees', applicants:'applicants', invitations:'invitations',
  leave:'leave_requests', performance:'performance_reviews', trainings:'trainings',
  trainingSessions:'training_sessions', cases:'cases', movements:'movements',
  offboarding:'offboarding', onboarding:'onboarding', notifications:'notifications',
  audit:'audit_log', corrections:'corrections',
};
const DICT_TABLES = { attendanceOverrides:'attendance_overrides', docOverrides:'doc_overrides', shiftOverrides:'shift_overrides' };

const Store = {
  async upsert(table, id, value){
    try{
      const { error } = await sb.from(table).upsert({ id:String(id), data:value, updated_at:new Date().toISOString() });
      if (error) console.error('[Supabase] upsert failed', table, id, error);
    }catch(e){ console.error('[Supabase] upsert threw', table, id, e); }
  },
  async remove(table, id){
    try{
      const { error } = await sb.from(table).delete().eq('id', String(id));
      if (error) console.error('[Supabase] delete failed', table, id, error);
    }catch(e){ console.error('[Supabase] delete threw', table, id, e); }
  },
  async fetchAll(table){
    const { data, error } = await sb.from(table).select('id,data');
    if (error){ console.error('[Supabase] fetch failed', table, error); return []; }
    return data || [];
  },
  async count(table){
    const { count, error } = await sb.from(table).select('id', { count:'exact', head:true });
    if (error){ console.error('[Supabase] count failed', table, error); return 0; }
    return count || 0;
  },
};

const Auth = {
  // No self-service sign-up: HR accounts are created by the administrator
  // in the Supabase dashboard (Authentication > Users), never from this app.
  async signIn(email, password){ return sb.auth.signInWithPassword({ email, password }); },
  async signOut(){ return sb.auth.signOut(); },
  async getSession(){ const { data } = await sb.auth.getSession(); return data.session; },
  async getProfile(userId){
    const { data, error } = await sb.from('profiles').select('*').eq('id', userId).maybeSingle();
    if (error){ console.error('[Supabase] profile fetch failed', error); return null; }
    return data;
  },
};

function applyProfile(profile, email){
  AppState.currentSession = { email };
  if (!profile){
    AppState.currentUser = { name:email, role:'HRMGR', roleName:'HR Manager', initials:email.slice(0,2).toUpperCase() };
    return;
  }
  AppState.currentUser = {
    name: profile.name || email, role: profile.role || 'HRMGR',
    roleName: profile.role_name || 'HR Manager', initials: profile.initials || (profile.name||email).slice(0,2).toUpperCase(),
  };
}

/** One-time: if the database is empty, generate the same demo dataset the
 *  prototype used to fabricate in memory, then push it into Supabase. */
async function seedDatabaseIfEmpty(){
  const existing = await Store.count('employees');
  if (existing > 0) return false;

  AppState.employees = generateEmployees();
  seedRecruitment();
  seedHR();

  await Promise.all(Object.entries(DOC_TABLES).map(async ([key, table]) => {
    const rows = (AppState[key] || []).map(item => ({ id:String(item.id), data:item }));
    for (let i = 0; i < rows.length; i += 400){
      const { error } = await sb.from(table).upsert(rows.slice(i, i + 400));
      if (error) console.error('[Supabase] seed insert failed', table, error);
    }
  }));
  await Promise.all(Object.entries(DICT_TABLES).map(async ([key, table]) => {
    const rows = Object.entries(AppState[key] || {}).map(([id, data]) => ({ id, data }));
    if (!rows.length) return;
    const { error } = await sb.from(table).upsert(rows);
    if (error) console.error('[Supabase] seed insert failed', table, error);
  }));
  return true;
}

/** Hydrate AppState from Supabase (normal boot path, after the first seed). */
async function loadAppStateFromDB(){
  const docEntries = Object.entries(DOC_TABLES);
  const docResults = await Promise.all(docEntries.map(([, table]) => Store.fetchAll(table)));
  docEntries.forEach(([key], i) => { AppState[key] = docResults[i].map(row => row.data); });

  const dictEntries = Object.entries(DICT_TABLES);
  const dictResults = await Promise.all(dictEntries.map(([, table]) => Store.fetchAll(table)));
  dictEntries.forEach(([key], i) => {
    const dict = {};
    dictResults[i].forEach(row => { dict[row.id] = row.data; });
    AppState[key] = dict;
  });

  AppState.onboardingSteps = ONB_STEPS;
  AppState.notifications.sort((a,b) => (b.id||0) - (a.id||0));
  AppState.audit.sort((a,b) => (b.at||'').localeCompare(a.at||''));

  const maxSuffix = list => {
    let max = 0;
    (list||[]).forEach(x => { const m = String((x||{}).id||'').match(/(\d+)$/); if (m) max = Math.max(max, parseInt(m[1],10)); });
    return max;
  };
  let maxOfr = 0;
  AppState.applicants.forEach(a => { if (a.offer && a.offer.id){ const m = String(a.offer.id).match(/(\d+)$/); if (m) maxOfr = Math.max(maxOfr, parseInt(m[1],10)); } });
  const seqOr = (found, dflt) => found > 0 ? found + 1 : dflt;
  AppState.seq = {
    app: seqOr(maxSuffix(AppState.applicants), 489),
    emp: seqOr(maxSuffix(AppState.employees), 210),
    inv: seqOr(maxSuffix(AppState.invitations), 1253),
    case: seqOr(maxSuffix(AppState.cases), 38),
    ofr: seqOr(maxOfr, 120),
  };
}

/* ---- mirror every MockAPI mutation to Supabase, without touching the
   methods above or any of their call sites in app.js ---------------------- */
const PERSIST_MAP = {
  _audit: () => { const r = AppState.audit[0]; if (r) Store.upsert('audit_log', r.id, r); },
  _notify: () => { const r = AppState.notifications[0]; if (r) Store.upsert('notifications', r.id, r); },
  createInvitation: r => r && Store.upsert('invitations', r.id, r),
  openInvitation: r => r && Store.upsert('invitations', r.id, r),
  revokeInvitation: (r, args) => { if (!r) return; const inv = invById(args[0]); if (inv) Store.upsert('invitations', inv.id, inv); },
  submitApplication: r => {
    if (!r || !r.ok) return;
    Store.upsert('applicants', r.application.id, r.application);
    const inv = invById(r.application.invitationId); if (inv) Store.upsert('invitations', inv.id, inv);
  },
  setStage: r => r && Store.upsert('applicants', r.id, r),
  saveScreening: r => r && Store.upsert('applicants', r.id, r),
  scheduleInterview: (r, args) => { const a = appById(args[0]); if (a) Store.upsert('applicants', a.id, a); },
  saveInterviewResult: (r, args) => { const a = appById(args[0]); if (a) Store.upsert('applicants', a.id, a); },
  addAssessment: r => r && Store.upsert('applicants', r.id, r),
  saveEvaluation: (r, args) => { const a = appById(args[0]); if (a) Store.upsert('applicants', a.id, a); },
  createOffer: (r, args) => { const a = appById(args[0]); if (a) Store.upsert('applicants', a.id, a); },
  setOfferStatus: (r, args) => { const a = appById(args[0]); if (a) Store.upsert('applicants', a.id, a); },
  setRequirement: (r, args) => { const a = appById(args[0]); if (a) Store.upsert('applicants', a.id, a); },
  convertToEmployee: (r, args) => {
    if (!r || !r.ok) return;
    Store.upsert('employees', r.employee.id, r.employee);
    const a = appById(args[0]); if (a) Store.upsert('applicants', a.id, a);
    const onb = AppState.onboarding[0]; if (onb) Store.upsert('onboarding', onb.id, onb);
  },
  createEmployee: r => { if (r && r.ok) Store.upsert('employees', r.employee.id, r.employee); },
  advanceOnboarding: r => r && Store.upsert('onboarding', r.id, r),
  setLeaveStatus: r => r && Store.upsert('leave_requests', r.id, r),
  fileLeave: r => r && Store.upsert('leave_requests', r.id, r),
  fileCorrection: r => r && Store.upsert('corrections', r.id, r),
  setCorrectionStatus: r => {
    if (!r) return;
    Store.upsert('corrections', r.id, r);
    if (r.status === 'Approved'){ const key = r.emp + r.date; Store.upsert('attendance_overrides', key, AppState.attendanceOverrides[key]); }
  },
  assignShift: (r, args) => { const key = args[0] + args[1]; Store.upsert('shift_overrides', key, AppState.shiftOverrides[key]); },
  saveReview: r => {
    if (!r) return;
    Store.upsert('performance_reviews', r.id, r);
    const e = empById(r.emp); if (e) Store.upsert('employees', e.id, e);
  },
  addCase: r => r && Store.upsert('cases', r.id, r),
  updateCase: r => r && Store.upsert('cases', r.id, r),
  startOffboarding: r => r && Store.upsert('offboarding', r.id, r),
  advanceOffboarding: r => {
    if (!r) return;
    Store.upsert('offboarding', r.id, r);
    if (r.status === 'Completed'){ const e = empById(r.emp); if (e) Store.upsert('employees', e.id, e); }
  },
};
Object.keys(PERSIST_MAP).forEach(name => {
  const original = MockAPI[name];
  MockAPI[name] = function(...args){
    const result = original.apply(MockAPI, args);
    try{ PERSIST_MAP[name](result, args); }catch(e){ console.error('[Supabase] persist mapping failed for', name, e); }
    return result;
  };
});
