// Generate complete English and Arabic HTML from the same components used in the browser.
// Run after editing app.js, data.js or seo.js: node scripts/prerender.mjs
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
const root=path.resolve(import.meta.dirname,'..');
const dist=root;
const source=['data.js','seo.js','app.js'].map(file=>fs.readFileSync(path.join(dist,file),'utf8')).join('\n');
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const json=value=>JSON.stringify(value).replace(/</g,'\\u003c');
const config=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(dist,'seo.js'),'utf8')+'\nglobalThis.config={origin:SEO_ORIGIN,routes:Object.keys(SEO_PAGES)};',config);
const {origin,routes}=config.config;
const entries=[];
for(const language of ['en','ar'])for(const route of routes){
 const pathname=(language==='ar'?'/ar':'')+(route==='/'?'/':route+'/');
 const site={innerHTML:''};
 const context=vm.createContext({URLSearchParams,Intl,Date,console,location:{pathname:'/alwan-salon'+pathname,search:'',hash:''},window:{addEventListener(){}},document:{documentElement:{},getElementById(id){if(id==='site')return site;return null},querySelector(){return null},addEventListener(){}}});
 vm.runInContext(source+'\nglobalThis.result={info:seoInfo(route,lang),maps,instagram};',context,{timeout:10000});
 const {info,maps,instagram}=context.result;
 const english=origin+(route==='/'?'/':route+'/');
 const arabic=origin+'/ar'+(route==='/'?'/':route+'/');
 const business={
  '@type':'HairSalon','@id':origin+'/#salon',name:'Alwan Alshaar Ladies Salon',alternateName:'صالون ألوان الشعر للسيدات',url:origin+'/',telephone:'+971505340488',
  image:origin+'/assets/alwan-about.jpg',logo:origin+'/assets/salon-original.jpg',
  address:{'@type':'PostalAddress',streetAddress:'22nd Street, Al Barsha 1',addressLocality:'Dubai',addressRegion:'Dubai',addressCountry:'AE'},
  geo:{'@type':'GeoCoordinates',latitude:25.1149715,longitude:55.1955507},
  openingHoursSpecification:[{'@type':'OpeningHoursSpecification',dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],opens:'10:00',closes:'22:00'}],
  hasMap:maps,sameAs:[instagram]
 };
 const graph=[business,{'@type':'WebSite','@id':origin+'/#website',url:origin+'/',name:'Alwan Alshaar Ladies Salon',inLanguage:['en','ar'],publisher:{'@id':origin+'/#salon'}},
 {'@type':route==='/about'?'AboutPage':route==='/contact'?'ContactPage':'WebPage','@id':info.url+'#webpage',url:info.url,name:info.title,description:info.description,inLanguage:language,isPartOf:{'@id':origin+'/#website'},about:{'@id':origin+'/#salon'}}];
 const crumbs=[{'@type':'ListItem',position:1,name:language==='ar'?'الرئيسية':'Home',item:language==='ar'?origin+'/ar/':origin+'/'}];
 if(route.startsWith('/services/'))crumbs.push({'@type':'ListItem',position:2,name:language==='ar'?'الخدمات':'Services',item:origin+(language==='ar'?'/ar':'')+'/services/'});
 if(route!=='/')crumbs.push({'@type':'ListItem',position:crumbs.length+1,name:info.title.split(' | ')[0],item:info.url});
 if(crumbs.length>1)graph.push({'@type':'BreadcrumbList',itemListElement:crumbs});
 const html=`<!doctype html>
<html lang="${language}" dir="${language==='ar'?'rtl':'ltr'}"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#fcfafb">
<title>${escape(info.title)}</title><meta name="description" content="${escape(info.description)}">
<link rel="canonical" href="${info.url}">
<link rel="alternate" hreflang="en" href="${english}"><link rel="alternate" hreflang="ar" href="${arabic}"><link rel="alternate" hreflang="x-default" href="${english}">
<meta property="og:type" content="website"><meta property="og:site_name" content="Alwan Alshaar Ladies Salon"><meta property="og:title" content="${escape(info.title)}"><meta property="og:description" content="${escape(info.description)}"><meta property="og:url" content="${info.url}"><meta property="og:locale" content="${language==='ar'?'ar_AE':'en_AE'}"><meta property="og:locale:alternate" content="${language==='ar'?'en_AE':'ar_AE'}"><meta property="og:image" content="${origin}/assets/alwan-about.jpg"><meta property="og:image:alt" content="Alwan Alshaar salon in Al Barsha, Dubai">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escape(info.title)}"><meta name="twitter:description" content="${escape(info.description)}"><meta name="twitter:image" content="${origin}/assets/alwan-about.jpg">
<link rel="icon" href="/assets/salon-original.jpg"><link rel="stylesheet" href="/fonts.css"><link rel="stylesheet" href="/style.css">
<script type="application/ld+json">${json({'@context':'https://schema.org','@graph':graph})}</script>
<script src="/data.js" defer></script><script src="/seo.js" defer></script><script src="/app.js" defer></script>
</head><body>
<div id="pageLoader" class="page-loader" role="status" aria-label="${language==='ar'?'جارٍ فتح ألوان الشعر':'Opening Alwan Alshaar'}"><div class="loader-brand"><div class="loader-emblem"><span class="loader-ring" aria-hidden="true"></span><img src="/assets/salon-original.jpg" alt="" width="72" height="72"></div><p class="loader-name">${language==='ar'?'ألوان الشعر':'Alwan Alshaar'}</p><span class="loader-caption">${language==='ar'?'صالون للسيدات · دبي':'LADIES SALON · DUBAI'}</span></div></div>
<script>(()=>{const loader=document.getElementById('pageLoader');let done=false;function finish(){if(done)return;done=true;loader.setAttribute('aria-hidden','true');loader.classList.add('is-ready');setTimeout(()=>loader.remove(),250)}document.addEventListener('DOMContentLoaded',finish,{once:true});setTimeout(finish,2500);window.addEventListener('pageshow',event=>{if(event.persisted)finish()})})();</script>
<div id="site">${site.innerHTML}</div><noscript><style>.page-loader{display:none!important}</style><p style="padding:20px;text-align:center">${language==='ar'?'لطلب موعد، اتصلي أو راسلينا عبر واتساب. نفتح يومياً من ١٠ صباحاً إلى ١٠ مساءً.':'For appointment requests, call or WhatsApp us. Open daily, 10 AM–10 PM.'} <a href="tel:+971505340488" dir="ltr">+971 50 534 0488</a> · <a href="https://wa.me/971505340488">WhatsApp</a></p></noscript></body></html>`;
 const output=path.join(dist,pathname,'index.html');
 fs.mkdirSync(path.dirname(output),{recursive:true});fs.writeFileSync(output,html.replace(/((?:src|href)=")\/(?!alwan-salon(?:\/|"))/g,'$1/alwan-salon/'));
 entries.push(`<url><loc>${info.url}</loc><xhtml:link rel="alternate" hreflang="en" href="${english}"/><xhtml:link rel="alternate" hreflang="ar" href="${arabic}"/><xhtml:link rel="alternate" hreflang="x-default" href="${english}"/></url>`);
}
fs.writeFileSync(path.join(dist,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'+entries.join('\n')+'\n</urlset>\n');
fs.writeFileSync(path.join(dist,'robots.txt'),`User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`);
console.log(`Generated ${entries.length} complete pages with metadata, structured data, language alternates and sitemap.`);
