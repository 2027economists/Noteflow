const courseFolders = [
  {
    "year": 1,
    "title": "COM 101",
    "code": "COM 101",
    "topic": "Semester 1",
    "folder": "https://drive.google.com/drive/folders/1QTkt63xBkQqHo8ucJkSx-7sVX7n6tFCH"
  },
  {
    "year": 1,
    "title": "CS 113",
    "code": "CS 113",
    "topic": "Semester 1",
    "folder": "https://drive.google.com/drive/folders/1Dh3Tg3XHywRzygqWQgsnowhcgLWvX2jO"
  },
  {
    "year": 1,
    "title": "ECO 111 Microeconomics",
    "code": "ECO 111",
    "topic": "Semester 1",
    "folder": "https://drive.google.com/drive/folders/1_HpAICv2_i8uUHIWpnaA9D7AixMqsqdJ"
  },
  {
    "year": 1,
    "title": "EIM 112",
    "code": "EIM 112",
    "topic": "Semester 1",
    "folder": "https://drive.google.com/drive/folders/1vctcZ8rdn-DwIkR8HyTJxlzvL2MD07CJ"
  },
  {
    "year": 1,
    "title": "LAW 100",
    "code": "LAW 100",
    "topic": "Semester 1",
    "folder": "https://drive.google.com/drive/folders/1IjZ-kyfmkCstx7WawlS-jJrsYJetcT7n"
  },
  {
    "year": 1,
    "title": "LAW 109",
    "code": "LAW 109",
    "topic": "Semester 1",
    "folder": "https://drive.google.com/drive/folders/1daKzC-lK47lIQUif6IAK8Q3oqQPrzxcX"
  },
  {
    "year": 1,
    "title": "Past papers",
    "code": "Shared materials",
    "topic": "Semester 1",
    "folder": "https://drive.google.com/drive/folders/1CF9T2jojYYTF_ghzWLxnaUUGGPxAqcti"
  },
  {
    "year": 1,
    "title": "QMS 101 Descriptive statistics",
    "code": "QMS 101",
    "topic": "Semester 1",
    "folder": "https://drive.google.com/drive/folders/1XEjamOFvWHsntYsg4FPcs8J4xZDn76jD"
  },
  {
    "year": 1,
    "title": "QMS 103 Math for business",
    "code": "QMS 103",
    "topic": "Semester 1",
    "folder": "https://drive.google.com/drive/folders/1FFCEH0xeFk-K0Ctx86SgdLWc3_ECm8RO"
  },
  {
    "year": 1,
    "title": "QMS 104",
    "code": "QMS 104",
    "topic": "Semester 1",
    "folder": "https://drive.google.com/drive/folders/1ww-phKvK_Pg0stebWJd0qqUVJKyL44j9"
  },
  {
    "year": 1,
    "title": "ACC 188",
    "code": "ACC 188",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/1OMXIQEI6DCC4Ua_0qKRJ_14jfgFQEwdY"
  },
  {
    "year": 1,
    "title": "DST 100",
    "code": "DST 100",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/1AarEk0Mc5w-znQSy2Ww4Aq4ggTYJYz2T"
  },
  {
    "year": 1,
    "title": "ECO 121",
    "code": "ECO 121",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/1SRPLGqMXV7jEFqVmxB0vIV7hvjdY9ZiZ"
  },
  {
    "year": 1,
    "title": "Papers",
    "code": "Shared materials",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/1TEnqPfwe6hZPZDRKM0u0nNj9TUWyCarH"
  },
  {
    "year": 1,
    "title": "PUB 125",
    "code": "PUB 125",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/1g6FGrt3oQt2omN5BiaTiqCyqigr0uYl1"
  },
  {
    "year": 1,
    "title": "QMS 102",
    "code": "QMS 102",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/1uxpItr25ArFlOuvw8YW8OAupMRTYr-g6"
  },
  {
    "year": 2,
    "title": "ECO 211 Intermediate Microeconomics",
    "code": "ECO 211",
    "topic": "Semester 1",
    "folder": "https://drive.google.com/drive/folders/1c9YaPJhtZAp96yg78Mr-zG1cE80EcquF"
  },
  {
    "year": 2,
    "title": "ECO 212 Econometrics 1",
    "code": "ECO 212",
    "topic": "Semester 1",
    "folder": "https://drive.google.com/drive/folders/14dvQBz7Ogq8lJCqzkzReSDiub5FW1OyJ"
  },
  {
    "year": 2,
    "title": "ECO 213 Public Finance",
    "code": "ECO 213",
    "topic": "Semester 1",
    "folder": "https://drive.google.com/drive/folders/1h5rm7OltSU_S838NQwY9IFOOTqRE0hIM"
  },
  {
    "year": 2,
    "title": "ECO 214 Economic Policy",
    "code": "ECO 214",
    "topic": "Semester 1",
    "folder": "https://drive.google.com/drive/folders/110ifMb_sBeNV_Xc-86NfTYh7OjH4fv_9"
  },
  {
    "year": 2,
    "title": "ECO 215 Project Planning and Financial Analysis",
    "code": "ECO 215",
    "topic": "Semester 1",
    "folder": "https://drive.google.com/drive/folders/1u3yFYRopAqMEr13zuHcddbLH-xVIwB59"
  },
  {
    "year": 2,
    "title": "ECO 216 Industrial Economics",
    "code": "ECO 216",
    "topic": "Semester 1",
    "folder": "https://drive.google.com/drive/folders/1_3ah4TfsYVerN8m45Dj3g0Ll-m-g1poJ"
  },
  {
    "year": 2,
    "title": "ECO 217",
    "code": "ECO 217",
    "topic": "Semester 1",
    "folder": "https://drive.google.com/drive/folders/1MTo9oxefe-H01F9qvnGcxh8I0d6Xa2O2"
  },
  {
    "year": 2,
    "title": "Papers",
    "code": "Shared materials",
    "topic": "Semester 1",
    "folder": "https://drive.google.com/drive/folders/1CND5o94MFyW7sp6Fkg2XByD-GxzGN15t"
  },
  {
    "year": 2,
    "title": "POP 200",
    "code": "POP 200",
    "topic": "Semester 1",
    "folder": "https://drive.google.com/drive/folders/1pqDgJ616c5RbD01y6EH8uKMspRDobf0t"
  },
  {
    "year": 2,
    "title": "ECO 221",
    "code": "ECO 221",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/1OyTDxFhaBaL4vSBhYBNfVDWg7uw8ttTP"
  },
  {
    "year": 2,
    "title": "ECO 222",
    "code": "ECO 222",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/14dE0X1w8IRByqybKtq-1oLWq_k1CTQAa"
  },
  {
    "year": 2,
    "title": "ECO 223",
    "code": "ECO 223",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/1CXzi5JN0s5M-vEYb3vSt3wJ169EmJrlK"
  },
  {
    "year": 2,
    "title": "ECO 224",
    "code": "ECO 224",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/1JCsBlopu3JqpqZpWN4rrnYTuU-w-zRZD"
  },
  {
    "year": 2,
    "title": "ECO 225",
    "code": "ECO 225",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/1LzmKldU2TyhNjeBS6gjWdinSBx6q5pF5"
  },
  {
    "year": 2,
    "title": "ECO 226",
    "code": "ECO 226",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/1DoFykiZA98HVOVEqHclX84ELplKRm64L"
  },
  {
    "year": 2,
    "title": "POP 201",
    "code": "POP 201",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/15XMEM9s5nFtVtZetf1iNfNJNCo33fDjY"
  },
  {
    "year": 2,
    "title": "POP 202",
    "code": "POP 202",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/1lqgTuJz4Jp1I8AXXZRuujSpXfJ612nNr"
  },
  {
    "year": 3,
    "title": "ECO 321 Monetary Economics",
    "code": "ECO 321",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/126yAeZ7DnZW1VnvgxmFXdDQID3nS9Bkv"
  },
  {
    "year": 3,
    "title": "ECO 322 International Economics",
    "code": "ECO 322",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/1JG_7daLvmm-buOPisje1TsYVCyDUNuaS"
  },
  {
    "year": 3,
    "title": "ECO 323 Quantitative Economics",
    "code": "ECO 323",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/1kr4T8kWSS0FA7J7T2xQZ5yftsDJ4235M"
  },
  {
    "year": 3,
    "title": "ECO 324 Investment Analysis",
    "code": "ECO 324",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/1SbFQR2dNYvKO_iy92GFnVDS52GmMsbQQ"
  },
  {
    "year": 3,
    "title": "ECO 325 Project Planning Management",
    "code": "ECO 325",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/1VFuArBb68cXvT3F2j6RRDi61AmjSlWVi"
  },
  {
    "year": 3,
    "title": "ECO 326 Urban Economics",
    "code": "ECO 326",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/14SFvCvIE4jOxS4zuaSpGaHkbcvNHEPO5"
  },
  {
    "year": 3,
    "title": "ECO 327 Environmental and Resource Economics",
    "code": "ECO 327",
    "topic": "Semester 2",
    "folder": "https://drive.google.com/drive/folders/1p-dlrZsHN9mhCQzzG3f1pyXqXbZoWCTw"
  }
];
const notes=[
...courseFolders,
{title:'Microeconomics — 2025 University Examination',code:'ECO 111',year:1,semester:1,topic:'Economics · Past papers',pdf:'notes/year-1/eco-111/eco-111-ue-2025.pdf'},
];
const params = new URLSearchParams(location.search);
const year = Number(document.body.dataset.year || params.get('year')) || 0;
const semester = Number(document.body.dataset.semester) || 0;
let filter = year;
let currentNote;
const $ = selector => document.querySelector(selector);
const selectedPage = (y, term) => year === y && semester === term ? ' aria-current="page"' : '';
$('#years').innerHTML = [1, 2, 3].map(y => `<details class="year-menu" ${year === y ? 'open' : ''}>
  <summary>Year ${y}</summary>
  <div class="year-options">
    <a href="year-${y}.html"${selectedPage(y, 0)}>All materials</a>
    <a href="year-${y}-semester-1.html"${selectedPage(y, 1)}>Semester 1</a>
    <a href="year-${y}-semester-2.html"${selectedPage(y, 2)}>Semester 2</a>
  </div>
</details>`).join('');
for (const menu of document.querySelectorAll('.year-menu')) {
  menu.addEventListener('toggle', () => {
    if (!menu.open) return;
    for (const other of document.querySelectorAll('.year-menu[open]')) {
      if (other !== menu) other.open = false;
    }
  });
}
if (year) {
  const label = semester ? `Year ${year} · Semester ${semester}` : `Year ${year}`;
  $('#crumb').textContent = label;
  $('#headline').textContent = label;
  $('#intro').textContent = 'Browse and search your study materials.';
  $('#section-title').textContent = 'Learning materials';
  document.title = `${label} | NoteFlow`;
  $('.overview').style.background = 'transparent';
}
if (semester) {
  $('#empty h3').textContent = 'No materials found for this semester';
  $('#empty p').textContent = 'Try another search or open All materials in the year menu.';
}
if (year === 3 && semester === 1) {
  $('#intro').textContent = 'Field Training';
  $('#section-title').textContent = 'Field Training';
  $('#empty h3').hidden = true;
  $('#empty p').textContent = 'Field Training materials will appear here when added.';
  $('#reset').hidden = true;
  $('.search-wrap').hidden = true;
  $('.filters').hidden = true;
}
function noteSemester(note) {
  return note.semester ?? ({'Semester 1': 1, 'Semester 2': 2}[note.topic] || 0);
}
$('#chips').innerHTML=(year?[year]:[0,1,2,3]).map(y=>`<button class="chip ${y===(year||0)?'active':''}" data-year="${y}">${y?'Year '+y:'All notes'}</button>`).join('');filter=year;
function render(){const q=$('#search').value.toLowerCase().trim();document.querySelector('main').classList.toggle('searching', Boolean(q));const found=notes.filter(n=>(!filter||n.year===filter)&&(!semester||noteSemester(n)===semester)&&`${n.title} ${n.code} ${n.topic}`.toLowerCase().replace(/\s+/g,'').includes(q.replace(/\s+/g,'')));$('#count').textContent=`${found.length} ${found.length===1?'result':'results'} available`;$('#empty').hidden=found.length>0;$('#results').innerHTML=found.map(n=>`<button class="card" data-id="${notes.indexOf(n)}" aria-label="Read ${n.title}"><div class="card-top"><span class="file-icon">▤</span><span class="tag">YEAR ${n.year}</span></div><h3>${n.title}</h3><span class="course">${n.code} &nbsp;·&nbsp; ${n.topic}</span><div class="card-bottom"><span>${n.folder?'Open folder in Drive':'Past exam paper · PDF'}</span><b>↗</b></div></button>`).join('');document.querySelectorAll('.card').forEach(c=>c.onclick=()=>openNote(Number(c.dataset.id)))}
document.querySelectorAll('.chip').forEach(c=>c.onclick=()=>{filter=Number(c.dataset.year);document.querySelectorAll('.chip').forEach(b=>b.classList.toggle('active',b===c));render()});$('#search').addEventListener('input',render);$('#reset').onclick=()=>{$('#search').value='';render();$('#search').focus()};document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)&&!$('#reader').open){e.preventDefault();$('#search').focus()}});
function openNote(i){currentNote=notes[i];if(currentNote.folder){window.open(currentNote.folder,'_blank','noopener');return;}if(currentNote.pdf){window.open(currentNote.pdf,'_blank','noopener');return;}$('#note-meta').textContent=`YEAR ${currentNote.year} · ${currentNote.code} · SAMPLE NOTE`;$('#note-title').textContent=currentNote.title;$('#note-body').innerHTML=`<p>${currentNote.body}</p>`+currentNote.sections.map(([h,p])=>`<h3>${h}</h3><p>${p}</p>`).join('');$('#reader').showModal()}$('.close').onclick=()=>$('#reader').close();$('#reader').addEventListener('click',e=>{if(e.target===$('#reader')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close()}});$('#download').onclick=()=>{const n=currentNote;const text=`${n.title}\n${n.code} | Year ${n.year}\nSample study note — NoteFlow\n\n${n.body}\n\n`+n.sections.map(([h,p])=>`${h}\n${p}`).join('\n\n');const url=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=n.title.replaceAll(' ','-')+'.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};render();


const themeToggle = document.querySelector('#theme-toggle');
function updateThemeControl() {
  const isLight = document.documentElement.dataset.theme === 'light';
  const nextTheme = isLight ? 'Dark mode' : 'Light mode';
  themeToggle.innerHTML = (isLight ? '☾' : '☀') + ' <span>' + nextTheme + '</span>';
  themeToggle.setAttribute('aria-label', 'Switch to ' + nextTheme.toLowerCase());
}
themeToggle.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('noteflow-theme', theme); } catch {}
  updateThemeControl();
});
updateThemeControl();
