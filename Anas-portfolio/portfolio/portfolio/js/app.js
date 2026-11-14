/* Generic renderer: all content comes from /data/*.json. Do not edit for content changes. */
const F=['personal','academic','activities','conferences','certificates','projects','training','experience','enterprise-projects','skills','soft-skills','languages','personal-statement','contact','site-settings','faq'];
const D={};let lang=localStorage.lang||'en';
const $=s=>document.querySelector(s);
const L=v=>v&&typeof v==='object'&&!Array.isArray(v)&&'en' in v?(v[lang]||v['de']||v['ar']||v.en):v;
const E=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const T=k=>L(D['site-settings'].ui[k])||k;
const IC={mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',link:'<path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',doc:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>',instagram:'<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',whatsapp:'<path d="M3 21l1.7-5A9 9 0 1 1 8 19.3z"/><path d="M9 9c0 3 3 6 6 6l1-2-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2z"/>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-4a3.4 3.4 0 0 0-1-2.6c3-.3 6.4-1.5 6.4-7a5.4 5.4 0 0 0-1.5-3.8a5 5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.5 2.8 5.3 3.2 5.3 3.2a5 5 0 0 0-.1 3.8A5.4 5.4 0 0 0 3.7 10.8c0 5.4 3.3 6.6 6.4 7a3.4 3.4 0 0 0-1 2.6V22"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',menu:'<path d="M3 6h18M3 12h18M3 18h18"/>',up:'<path d="m18 15-6-6-6 6"/>',chevron:'<path d="m6 9 6 6 6-6"/>',shieldCheck:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>'};
const ic=n=>`<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n]||IC.link}</svg>`;
const lk=a=>(a||[]).filter(x=>x.url).map(x=>`<a class="btn" href="${E(x.url)}" target="_blank" rel="noopener" aria-label="${E(L(x.label))}">${ic(x.icon)}<span>${E(L(x.label))}</span></a>`).join('');
const im=(src,alt,fit='cover',cls='',eager)=>`<div class="im ${fit} ${cls}"><img src="${E(src)}" alt="${E(L(alt))}" ${eager?'':'loading="lazy"'}></div>`;
const card=(o,fit='cover')=>`<article class="card reveal">${o.image?im(o.image,o.title,fit):''}<div class="cb"><h3>${E(L(o.title))}</h3><p class="meta">${['org','role','company','type','date','period','location','category'].filter(k=>o[k]).map(k=>E(L(o[k]))).join(' · ')}</p>${o.description?`<p>${E(L(o.description))}</p>`:''}${o.details?`<details><summary>${T('more')}</summary><ul>${o.details.map(x=>`<li>${E(L(x))}</li>`).join('')}</ul></details>`:''}${o.tags?`<div class="tags">${o.tags.map(x=>`<span>${E(L(x))}</span>`).join('')}</div>`:''}<div class="row">${lk(o.links)}</div></div></article>`;
const sec=(id,body)=>`<section id="${id}" class="sec"><div class="wrap"><h2 class="reveal">${T(id)}</h2>${body}</div></section>`;
const grid=(a,fit,c='')=>`<div class="grid ${c}">${a.map(x=>card(x,fit)).join('')}</div>`;
const sub=k=>`<h3 class="sub">${T(k)}</h3>`;
const soc=a=>a.map(x=>`<a class="ib" href="${E(x.url)}" target="_blank" rel="noopener" aria-label="${E(L(x.label))}">${ic(x.icon)}</a>`).join('');
const socContact=a=>a.map(x=>`<a class="ib" href="#contact" aria-label="${E(L(x.label))}">${ic(x.icon)}</a>`).join('');
function render(){
 const p=D.personal,s=D['site-settings'],c=D.certificates,st=D['personal-statement'],r=document.documentElement;
 r.lang=lang;r.dir='ltr';document.title=L(s.seo.title);
 $('#nav').innerHTML=`<div class="wrap"><a class="brand" href="#home">${E(L(p.name))}</a><ul id="menu">${s.nav.map(i=>`<li><a href="#${i}">${E(T(i))}</a></li>`).join('')}</ul><button class="ib" data-act="theme" aria-label="Theme">${ic('sun')}</button><a class="btn pri" href="#contact">${T('contact')}</a><button class="ib burger" data-act="menu" aria-label="Menu" aria-expanded="false">${ic('menu')}</button></div>`;
 $('#app').innerHTML=`<section id="home" class="sec hero"><div class="wrap hero-g"><div><p class="meta">${E(L(p.location))}</p><h1>${E(L(p.name))}</h1><p class="hl">${E(L(p.headline))}</p><p>${E(L(p.intro))}</p><div class="row"><a class="btn" href="#contact">${T('contact')}</a></div><div class="row">${socContact(p.socials)}</div></div><div style="display:flex;flex-direction:column;align-items:center;gap:1rem"><button class="ib" data-act="lang" aria-label="Language" style="align-self:flex-end">${lang=='en'?'English':'Deutsch'}</button>${im(p.image,p.name,'cover','frame',1)}</div></div></section>`
 +sec('about',`<p class="reveal" style="max-width:70ch">${E(L(p.about))}</p>`)
 +sec('academic',`${im(D.academic.image,'Academic journey','cover','big')}<div class="tl">${D.academic.items.map(o=>`<article class="card reveal"><div class="cb"><h3>${E(L(o.title))}</h3><p class="meta">${E(L(o.org))} · ${E(L(o.date))}</p><p>${E(L(o.description))}</p>${o.subjects?`<div class="subjects"><div class="subjects-header"><h4>${T('subjects')||'Subjects'}</h4><button class="btn sm" data-act="toggle-subjects" aria-expanded="false"><span class="btn-text">${T('show')}</span>${ic('chevron')}</button></div><div class="subject-grid" hidden>${o.subjects.map(s=>`<div class="subject-card"><h5>${E(L(s.name))}</h5><p>${E(L(s.description))}</p></div>`).join('')}</div></div>`:''}</div></article>`).join('')}</div>`)
 +sec('activities',sub('uni')+grid(D.activities.activities)+sub('events')+grid(D.activities.events,'cover','g2')+sub('confs')+grid(D.conferences.items))
 +sec('certs',`<div class="car"><button class="ib" data-dir="-1" aria-label="Previous">‹</button><div class="track" tabindex="0" aria-label="Certificates">${c.carousel.map(x=>`<figure class="slide im contain"><img src="${E(x.image)}" alt="${E(L(x.title))}" loading="lazy"></figure>`).join('')}</div><button class="ib" data-dir="1" aria-label="Next">›</button></div><div class="dots">${c.carousel.map((_,i)=>`<i class="${i?'':'on'}"></i>`).join('')}</div><p class="c"><a class="btn pri" href="${E(c.viewAll.url)}" target="_blank" rel="noopener">${ic('link')}${E(L(c.viewAll.label))}</a></p><details class="ex"><summary>${T('more')}</summary><div>${c.groups.map(g=>`<h3 class="sub">${E(L(g.title))}</h3><ul>${g.items.map(i=>`<li><a href="${E(i.url)}" target="_blank" rel="noopener">${E(L(i.title))}</a> — ${E(L(i.org))}, ${E(L(i.date))}</li>`).join('')}</ul>`).join('')}</div></details>`)
 +`<div class="authenticity-notice reveal"><div class="wrap">${ic('shieldCheck')}<p>${E(T('authenticity'))}</p></div></div>`
 +sec('projects',grid(D.projects.items))
 +sec('training',grid(D.training.items,'cover','g2'))
 +sec('experience',`<div class="tl">${D.experience.items.map(o=>card(o)).join('')}</div>${sub('enterprise')}${grid(D['enterprise-projects'].items,'cover','g2')}`)
 +sec('skills',`<div class="acc">${D.skills.categories.map((k,i)=>`<details class="reveal"><summary><b>${String(i+1).padStart(2,'0')}</b>${E(L(k.name))}</summary><ul>${k.skills.map(x=>`<li><strong>${E(L(x.name))}</strong>${x.tool?` <span class="meta">(${E(L(x.tool))})</span>`:''}${x.level?` <span class="tags"><span>${E(L(x.level))}</span></span>`:''}${x.description?`<p>${E(L(x.description))}</p>`:''}</li>`).join('')}</ul></details>`).join('')}</div>`)
 +sec('soft',`<div class="grid">${D['soft-skills'].items.map(o=>`<div class="card reveal"><div class="cb"><h3>${E(L(o.title))}</h3><p>${E(L(o.description))}</p></div></div>`).join('')}</div>`)
 +sec('languages',`<div class="grid">${D.languages.items.map(o=>`<div class="card reveal"><div class="cb"><h3>${E(L(o.name))}</h3><p class="tags"><span>${E(L(o.level))}</span></p><p>${E(L(o.description))}</p></div></div>`).join('')}</div>`)
 +sec('statement',`<div class="stm"><div class="reveal"><h3>${E(L(st.heading))}</h3><p>${E(L(st.text))}</p><blockquote class="quote">${E(L(st.quote))}</blockquote></div><div class="stm-img"><img src="${E(st.image)}" alt="${E(L(st.heading))}" loading="lazy"></div></div>`)
 +sec('faq',`<div class="acc">${D.faq.faqs.map((f,i)=>`<details class="reveal"><summary><b>${String(i+1).padStart(2,'0')}</b> ${E(L(f.question))}</summary><p>${E(L(f.answer))}</p></details>`).join('')}</div>`)
 +sec('contact',`<div class="cg">${D.contact.items.map(o=>`<a class="card cc reveal" href="${E(o.url)}" target="_blank" rel="noopener" aria-label="${E(L(o.title))}"><div class="cc-img"><img src="${E(o.image)}" alt="" loading="lazy"></div><div class="cb"><h3>${ic(o.icon)} ${E(L(o.title))}</h3><p>${E(L(o.description))}</p></div></a>`).join('')}</div>`);
 $('#foot').innerHTML=`<div class="wrap"><span>© ${new Date().getFullYear()} ${E(L(p.name))}</span><a class="btn" href="#home" style="margin-inline-start:auto">${ic('up')}${T('top')}</a></div>`;
 watch();
}
let io,so;
function watch(){io&&io.disconnect();so&&so.disconnect();
 io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&(x.target.classList.add('in'),io.unobserve(x.target))),{threshold:.1});
 document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
 so=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&document.querySelectorAll('#menu a').forEach(a=>a.classList.toggle('on',a.hash=='#'+x.target.id))),{rootMargin:'-45% 0px -50% 0px'});
 document.querySelectorAll('main section').forEach(x=>so.observe(x));}
document.addEventListener('click',e=>{
 const t=e.target.closest('[data-act],[data-dir],img,#menu a');if(!t)return;
 const a=t.dataset.act;
 if(a=='lang'){lang=lang=='en'?'de':'en';localStorage.lang=lang;render()}
 else if(a=='theme'){const n=document.documentElement.dataset.theme=='dark'?'light':'dark';document.documentElement.dataset.theme=n;localStorage.theme=n}
 else if(a=='menu'){const o=$('#menu').classList.toggle('open');t.setAttribute('aria-expanded',o)}
 else if(a=='toggle-subjects'){const grid=t.closest('.subjects').querySelector('.subject-grid');const btn=t.querySelector('.btn-text');const expanded=grid.hidden;grid.hidden=!expanded;t.setAttribute('aria-expanded',expanded);btn.textContent=expanded?T('hide'):T('show')}
 else if(a=='lb'){$('#lb').hidden=true}
 else if(t.dataset.dir){const k=t.closest('.car').querySelector('.track');k.scrollBy({left:t.dataset.dir*k.clientWidth,behavior:'smooth'})}
 else if(t.tagName=='A'){$('#menu').classList.remove('open')}
 else if(t.tagName=='IMG'&&!t.closest('.cc')&&!t.closest('.stm-img')){$('#lb img').src=t.src;$('#lb img').alt=t.alt;$('#lb').hidden=false}
});
document.addEventListener('mousemove',e=>{
 const cards=document.querySelectorAll('.card');
 cards.forEach(card=>{
  const rect=card.getBoundingClientRect();
  const x=e.clientX-rect.left;
  const y=e.clientY-rect.top;
  card.style.setProperty('--mouse-x',x+'px');
  card.style.setProperty('--mouse-y',y+'px');
 });
});
$('#lb').addEventListener('click',e=>{if(e.target.id=='lb')e.currentTarget.hidden=true});
document.addEventListener('keydown',e=>{
 if(e.key=='Escape')$('#lb').hidden=true;
 if(e.target.classList?.contains('track')&&/Arrow(Left|Right)/.test(e.key)){const d=e.key=='ArrowRight'?1:-1;e.target.scrollBy({left:d*e.target.clientWidth,behavior:'smooth'});e.preventDefault()}});
document.addEventListener('scroll',e=>{const k=e.target;if(!k.classList||!k.classList.contains('track'))return;
 const i=Math.round(Math.abs(k.scrollLeft)/k.clientWidth);k.closest('section').querySelectorAll('.dots i').forEach((d,j)=>d.classList.toggle('on',i==j))},true);
Promise.all(F.map(f=>fetch(`data/${f}.json`).then(r=>r.json()).then(j=>D[f]=j))).then(render).catch(e=>{$('#app').innerHTML='<p class="wrap">Could not load data/*.json. Serve the folder over HTTP (see README).</p>';console.error(e)});
