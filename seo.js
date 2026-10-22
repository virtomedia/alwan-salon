// Update this origin when the client connects their final domain, then run scripts/prerender.mjs.
const SEO_ORIGIN='https://virtomedia.github.io/alwan-salon';
const SEO_PAGES={
'/':[
 ['Hair Salon in Al Barsha, Dubai | Alwan Alshaar','Explore hair colour, treatments, cuts and extensions at Alwan Alshaar Ladies Salon in Al Barsha, Dubai. View prices and request a visit on WhatsApp.'],
 ['صالون شعر في البرشاء، دبي | ألوان الشعر','اكتشفي صبغات وعلاجات وقص ووصلات الشعر في صالون ألوان الشعر للسيدات في البرشاء، دبي. شاهدي الأسعار واطلبي موعداً عبر واتساب.']],
'/services':[
 ['Hair Services & Prices in Al Barsha | Alwan Alshaar','Browse hair services and prices in AED at Alwan Alshaar, Al Barsha, Dubai. Explore colouring, treatments, haircuts, blow-dry and extensions.'],
 ['خدمات الشعر والأسعار في البرشاء | ألوان الشعر','تصفحي خدمات الشعر وأسعارها بالدرهم في ألوان الشعر، البرشاء، دبي. اكتشفي الصبغات والعلاجات والقص والسشوار والوصلات.']],
'/services/colour':[
 ['Hair Colour & Highlights in Al Barsha | Alwan Alshaar','Explore root colour, highlights, toner and colour correction prices at Alwan Alshaar in Al Barsha, Dubai. Choose your service and request an appointment.'],
 ['صبغات وهايلايت الشعر في البرشاء | ألوان الشعر','اكتشفي أسعار صبغة الجذور والهايلايت والتونر وتصحيح اللون في ألوان الشعر، البرشاء، دبي. اختاري خدمتك واطلبي موعداً.']],
'/services/treatments':[
 ['Hair Treatments in Al Barsha, Dubai | Alwan Alshaar','View Olaplex, Nashi, Macadamia, keratin and protein treatment prices at Alwan Alshaar in Al Barsha. Ask the salon about care for your hair.'],
 ['علاجات الشعر في البرشاء، دبي | ألوان الشعر','شاهدي أسعار علاجات أولابلكس وناشي وماكاديميا والكيراتين والبروتين في ألوان الشعر بالبرشاء. اسألي الصالون عن العناية المناسبة لشعرك.']],
'/services/cuts':[
 ['Haircuts & Trims in Al Barsha, Dubai | Alwan Alshaar','Explore ladies’ haircuts and hair trim prices at Alwan Alshaar in Al Barsha, Dubai. View the menu and send your preferred appointment time on WhatsApp.'],
 ['قص الشعر والأطراف في البرشاء، دبي | ألوان الشعر','اكتشفي أسعار قص الشعر وقص الأطراف للسيدات في صالون ألوان الشعر بالبرشاء، دبي. تصفحي القائمة وأرسلي وقت موعدك المفضل عبر واتساب.']],
'/services/styling':[
 ['Blow-Dry & Hair Styling in Al Barsha | Alwan Alshaar','Find blow-dry prices for short, medium and long hair at Alwan Alshaar in Al Barsha, Dubai. Choose your service and request your salon visit.'],
 ['السشوار وتصفيف الشعر في البرشاء | ألوان الشعر','شاهدي أسعار السشوار للشعر القصير والمتوسط والطويل في ألوان الشعر بالبرشاء، دبي. اختاري خدمتك واطلبي موعد زيارتك.']],
'/services/extensions':[
 ['Hair Extensions in Al Barsha, Dubai | Alwan Alshaar','Explore hair extensions, clip-ons and extension removal prices at Alwan Alshaar in Al Barsha, Dubai. Contact the salon to confirm your service details.'],
 ['وصلات الشعر في البرشاء، دبي | ألوان الشعر','اكتشفي أسعار وصلات الشعر ووصلات الكليب وإزالة الوصلات في ألوان الشعر بالبرشاء، دبي. تواصلي مع الصالون لتأكيد تفاصيل الخدمة.']],
'/services/offers':[
 ['Special Hair Service Offers in Dubai | Alwan Alshaar','View the salon’s published special service offers and prices at Alwan Alshaar, Al Barsha. Ask the salon to confirm offer details before your visit.'],
 ['عروض خدمات الشعر في دبي | ألوان الشعر','شاهدي العروض الخاصة المنشورة وأسعارها في صالون ألوان الشعر بالبرشاء. تواصلي مع الصالون لتأكيد تفاصيل العرض قبل الزيارة.']],
'/packages':[
 ['Hair Offers & Packages in Al Barsha | Alwan Alshaar','Browse published hair packages at Alwan Alshaar in Al Barsha, Dubai. Explore package prices and request availability and details on WhatsApp.'],
 ['عروض وباقات الشعر في البرشاء | ألوان الشعر','تصفحي باقات الشعر المنشورة في صالون ألوان الشعر بالبرشاء، دبي. اكتشفي الأسعار واطلبي تأكيد التوفر والتفاصيل عبر واتساب.']],
'/gallery':[
 ['Hair Gallery & Before and After | Alwan Alshaar Dubai','See hair colour, styling and care shared by Alwan Alshaar in Dubai. Explore salon photos and interactive before-and-after hair transformations.'],
 ['معرض الشعر ونتائج قبل وبعد | ألوان الشعر دبي','شاهدي صور صبغات وتصفيف وعناية الشعر من ألوان الشعر في دبي. اكتشفي صور الصالون ونتائج الشعر التفاعلية قبل وبعد.']],
'/about':[
 ['About Alwan Alshaar Ladies Salon | Al Barsha, Dubai','Meet Alwan Alshaar Ladies Salon in Al Barsha, Dubai. Explore hair colour, care, styling and extensions, with daily opening hours from 10 AM to 10 PM.'],
 ['عن صالون ألوان الشعر للسيدات | البرشاء، دبي','تعرفي على صالون ألوان الشعر للسيدات بالبرشاء، دبي. اكتشفي الصبغات والعناية والتصفيف والوصلات. نفتح يومياً من ١٠ صباحاً إلى ١٠ مساءً.']],
'/contact':[
 ['Contact & Directions | Alwan Alshaar, Al Barsha','Find Alwan Alshaar on 22nd Street, Al Barsha 1, Dubai. Open daily, 10 AM–10 PM. Call or WhatsApp +971 50 534 0488, or get directions to the salon.'],
 ['التواصل والاتجاهات | ألوان الشعر، البرشاء','تجدين ألوان الشعر في شارع ٢٢، البرشاء ١، دبي. نفتح يومياً من ١٠ صباحاً إلى ١٠ مساءً. اتصلي أو راسلينا على ‎+971 50 534 0488 أو احصلي على الاتجاهات.']],
'/book':[
 ['Request a Salon Appointment | Alwan Alshaar Dubai','Choose hair services and your preferred date and time at Alwan Alshaar, Al Barsha. Send your request on WhatsApp; the salon will confirm availability.'],
 ['طلب موعد في الصالون | ألوان الشعر دبي','اختاري خدمات الشعر والتاريخ والوقت المفضلين في ألوان الشعر بالبرشاء. أرسلي طلبك عبر واتساب وسيؤكد الصالون توفر الموعد.']]
};
function localizedPath(route,language){return (language==='ar'?'/ar':'')+(route==='/'?'/':route+'/')}
function seoInfo(route,language){const [title,description]=(SEO_PAGES[route]||SEO_PAGES['/'])[language==='ar'?1:0];return {title,description,url:SEO_ORIGIN+localizedPath(route,language)}}
function localizedLinks(html,language){return html.replace(/<a\b[^>]*>/g,tag=>{if(/data-lang=/.test(tag))return tag;return tag.replace(/href="\/(?!ar(?:\/|\")|assets\/)([^\"]*)"/,(_,path)=>{const m=path.match(/^([^?#]*)(.*)$/);const base=m[1].replace(/\/$/,'');return 'href="'+'/alwan-salon'+localizedPath(base?'/'+base:'/',language)+m[2]+'"'})})}
function updateSeo(route,language){const info=seoInfo(route,language);document.title=info.title;for(const [selector,attr,value] of [
 ['meta[name="description"]','content',info.description],['link[rel="canonical"]','href',info.url],
 ['meta[property="og:title"]','content',info.title],['meta[property="og:description"]','content',info.description],['meta[property="og:url"]','content',info.url],['meta[property="og:locale"]','content',language==='ar'?'ar_AE':'en_AE'],['meta[property="og:locale:alternate"]','content',language==='ar'?'en_AE':'ar_AE'],
 ['meta[name="twitter:title"]','content',info.title],['meta[name="twitter:description"]','content',info.description]
])document.querySelector(selector)?.setAttribute(attr,value);const script=document.querySelector('script[type="application/ld+json"]');if(script){const data=JSON.parse(script.textContent);for(const item of data['@graph']||[]){if(['WebPage','AboutPage','ContactPage'].includes(item['@type']))Object.assign(item,{'@id':info.url+'#webpage',url:info.url,name:info.title,description:info.description,inLanguage:language});if(item['@type']==='BreadcrumbList')for(const crumb of item.itemListElement){const oldPath=new URL(crumb.item).pathname.replace(/^\/alwan-salon(?=\/|$)/,'').replace(/^\/ar(?=\/|$)/,'').replace(/\/$/,'')||'/';crumb.item=SEO_ORIGIN+localizedPath(oldPath,language);crumb.name=oldPath==='/'?(language==='ar'?'الرئيسية':'Home'):oldPath==='/services'?(language==='ar'?'الخدمات':'Services'):info.title.split(' | ')[0]}}script.textContent=JSON.stringify(data).replace(/</g,'\\u003c')}}
