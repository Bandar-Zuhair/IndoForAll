/* Create An Array of Different Worker Types Cards Data */
let indoforall_homeWorkerArray = [
    {
        workerImg: "worker1/1.jpg",
        workerPassport: "worker1/2.jpg",
        workerVideo: "worker1/3.mp4",
    },

    {
        workerImg: "worker2/1.jpg",
        workerPassport: "worker2/2.jpg",
        workerVideo: "worker2/3.mp4",
    },

    {
        workerImg: "worker3/1.jpg",
        workerPassport: "worker3/2.jpg",
        workerVideo: "worker3/3.mp4",
    },
];
let indoforall_driveWorkerArray = [

];
let indoforall_hairWorkerArray = [

];
let indoforall_doctorWorkerArray = [

];







/* Create An Array of Questions With Their Answers Data */
let indoforall_questionAndAnswerArray = [

    {
        questionText: "كيف يتم اختيار العمالة المناسبة؟",
        answerText: "يتم عن طريق الفيديوهات المرسلة ثم التواصل معنا أو عن طريق التواصل مع العمالة بشكل مباشر.",
    },

    {
        questionText: "هل لابد من وجود تاشيرة لبدا اجراءات الاستقدام؟",
        answerText: "التاشيرة هي اساس عملية الاستقدام ولايمكن عمل اي اجراء قبل استخراج التاشيرة.",
    },

    {
        questionText: "ماهي متطلبات استخراج التاشيرة؟",
        answerText: "ان يكون لديك رقم نفاذ وطني.",
    },

    {
        questionText: "كيف يتم استخراج التاشيرة؟",
        answerText: "يتم استخراج تاشيرات العمالة بشكل الكتروني",
    },

    {
        questionText: "ماهي الحالات التي يتم فيها تعويض العميل خلال فترة الضمان؟",
        answerText: "رفض العمل - الهروب - الحمل.",
    },

    {
        questionText: "ماهي التعويض الذي نقدمه للعميل؟",
        answerText: "التعويض يتم عن طريق استبدال العاملة فقط في خلال فترة الضمان (3 شهور).",
    },

    {
        questionText: "ماهي مدة وصول العاملة",
        answerText: "تختلف على حسب نوع الفيزا وغالبا تتراوح المدة من 12 الى 14 يوم.",
    },

    {
        questionText: "كيف يتم اشعار العميل بوقت وصول العاملة؟",
        answerText: "يتم اشعار العميل عن طريق الواتس اب وإرسال له تذكرة السفر لموعد وصول العاملة.",
    },

    {
        questionText: "كيف يمكننا ارسال المبلغ لكم؟",
        answerText: "عن طريق التحويل بالبنك",
    },
    {
        questionText: "ماهي طريقة تجديد الفيزا؟",
        answerText: "عن طريق موقع ابشر أو عن طريق الجوازات",
    },
    {
        questionText: "ماهو مبلغ تجديد الفيزا؟",
        answerText: "مية ريال شهريا",
    },
    {
        questionText: "هل استطيع تحويل فيزة الزيارة الى إقامة؟",
        answerText: "نعم، يتم عن طريق الوزارة الداخلية اونلاين",
    },

]
/* Create An Array of Proof Videos Data */
let indoforall_proofVideosArray = [

    {
        videoSrc: "worker1/3.mp4",
    },

    {
        videoSrc: "worker2/3.mp4",
    },

    {
        imgSrc: "worker1/1.jpg",
    },
]
/* Array For Ads Videos/Images Use Only (imgSrc - videoSrc - videoThumbnailSrc) Words */
let indoforall_adsVideosArray = [

    {
        videoSrc: "indoforall_ads/video1.mp4",
        videoThumbnailSrc: "indoforall_ads/استقدام-من-اندونيسيا.png",
    },

    {
        imgSrc: "indoforall_ads/استقدام-من-اندونيسيا.png",
    },

]


function indoforall_createWorkerTypeDetalis(o){let e=1;indoforall_worker_cards_div.innerHTML="",indoforall_worker_details_text.style.opacity="0",indoforall_worker_details_text.style.transition="opacity 0.5s ease-in-out",indoforall_worker_details_text.style.opacity="1",o===indoforall_homeWorkerArray?indoforall_worker_details_text.innerText="قسم معلومات استقدام عمالة المنزلية":o===indoforall_driveWorkerArray?indoforall_worker_details_text.innerText="قسم معلومات استقدام سائق الخاص":o===indoforall_hairWorkerArray?indoforall_worker_details_text.innerText="قسم معلومات استقدام كوفيرة":o===indoforall_doctorWorkerArray&&(indoforall_worker_details_text.innerText="قسم معلومات استقدام ممرضة"),indoforall_worker_detalis_section.style.opacity="0",indoforall_worker_detalis_section.style.transition="opacity 0.5s ease-in-out",indoforall_worker_detalis_section.style.display="flex",indoforall_worker_detalis_section.offsetWidth,indoforall_worker_detalis_section.style.opacity="1",o.forEach((o=>{let{workerImg:l,workerPassport:n,workerVideo:t}=o,i=document.createElement("div");i.classList.add("indoforall_worker_card");let a=`\n            <div onclick="indoforall_showCardsDetails( '${e}', '${l}', '${n}', '${t}');">\n                <h2>${e}</h2>\n                <img src="${l}" alt="استقدام-من-اندونيسيا" title="استقدام-من-اندونيسيا">\n            </div>\n        `;i.innerHTML=a,indoforall_worker_cards_div.appendChild(i),e++})),indoforall_worker_details_text.scrollIntoView({block:"center",inline:"center",behavior:"smooth"})}function indoforall_showCardsDetails(o,e,l,n){let t=document.createElement("div");t.classList.add("indoforall_full_screen_overlay"),t.style.display="flex";let i=document.createElement("a");i.classList.add("indoforall_full_screen_overlay_exit_button"),i.innerText="عودة";let a=document.createElement("h1");a.innerHTML="عمالة اندونيسية رقم "+o;let d=document.createElement("img");d.src=e,d.alt="استقدام-من-اندونيسيا",d.title="استقدا-من-اندونيسيا",d.onclick=function(){c(d.src)};let r=document.createElement("img");r.src=l,r.alt="استقدام-من-اندونيسيا",r.title="استقدام-من-اندونيسيا",r.onclick=function(){c(r.src)};let s=document.createElement("video");function c(o){let e=document.createElement("div");e.classList.add("indoforall_full_screen_img_overlay");let l=document.createElement("a");l.classList.add("indoforall_full_screen_overlay_exit_button"),l.innerText="عودة";let n=document.createElement("img");n.src=o,n.alt="استقدام-من-اندونيسيا",n.title="استقدام-من-اندونيسيا",n.classList.add("indoforall_big_img"),e.appendChild(l),e.appendChild(n),document.body.appendChild(e),t.style.display="none",l.onclick=function(){t.style.display="flex",e.innerHTML="",e.style.display="none"}}s.src=n,s.setAttribute("controls",!0),s.setAttribute("title","استقدام-من-اندونيسيا"),t.appendChild(i),t.appendChild(a),t.appendChild(d),t.appendChild(r),t.appendChild(s),indoforall_header.style.display="none",indoforall_choose_worker_type_section.style.display="none",indoforall_worker_detalis_section.style.display="none",indoforall_main_page_section.style.display="none",indoforall_footer.style.display="none",document.body.appendChild(t),window.scrollTo({top:0}),i.onclick=function(){indoforall_header.style.display="block",indoforall_choose_worker_type_section.style.display="flex",indoforall_worker_detalis_section.style.display="flex",indoforall_main_page_section.style.display="flex",indoforall_footer.style.display="flex",t.innerHTML="",t.style.display="none",indoforall_worker_cards_div.scrollIntoView({block:"center",inline:"center"})}}indoforall_questionAndAnswerArray.forEach((o=>{let{questionText:e,answerText:l}=o,n=document.createElement("div");n.classList.add("indoforall_QuestionDiv");let t=`\n            <h2 class="indoforall_QuestionText">${e}</h2>\n            <h3 class="indoforall_AnswerText">${l}</h3>\n    `;n.innerHTML=t,indoforall_question_area.appendChild(n)}));let cardCounter=1,currentVideo=null;function indoforall_websiteGuidance(){document.documentElement.style.overflow="hidden";let o=document.createElement("div");o.classList.add("indoforall_full_screen_guidance_overlay");let e=document.createElement("a");e.classList.add("indoforall_full_screen_overlay_exit_button"),e.innerText="عودة";let l=document.createElement("div");l.classList.add("web_guidance_div");l.innerHTML='\n        <a href="https://indoforall.com">1- في الصفحة الرئيسية انزل الى قسم اختيار نوع العمالة الاندونيسية.</a>\n        <a href="https://indoforall.com">2- بعد اختيار نوع العمالة، خذ نظرة على اسعار الاستقدام ومدة إنجاز العمل.</a>\n        <a onclick="indoforall_whatsApp()">3- اخيرا، تواصل معنا للاستقدام او لطلب المزيد من المعلومات والنصائح.</a>\n        <a href="https://indoforall.com/اسئلة-استقدام-من-اندونيسيا.html" id="indoforall_web_guidance_note_text">ملاحظة: اذا كنت تبحث عن معلومات أكثر اذهب لصفحة الأسئلة الشائعة او تواصل معنا على الواتس.</a>\n    ',o.appendChild(l),o.appendChild(e),document.body.appendChild(o),e.onclick=function(){document.documentElement.style.overflow="auto",o.style.display="none",o.innerHTML="",indoforall_nav.scrollIntoView({block:"center",inline:"center"})}}indoforall_proofVideosArray.forEach((o=>{let e,{imgSrc:l,videoSrc:n}=o,t=document.createElement("div");t.classList.add("indoforall_Proof_video_div"),l?(e=`\n            <h2>${cardCounter}</h2>\n            <img src="${l}" alt="استقدام-من-اندونيسيا" title="استقدام-من-اندونيسيا">\n        `,t.onclick=function(){!function(o){let e=document.createElement("div");e.classList.add("indoforall_full_screen_img_overlay");let l=document.createElement("a");l.classList.add("indoforall_full_screen_overlay_exit_button"),l.innerText="عودة";let n=document.createElement("img");n.src=o,n.alt="استقدام-من-اندونيسيا",n.title="استقدام-من-اندونيسيا",n.classList.add("indoforall_big_img"),e.appendChild(l),e.appendChild(n),document.body.appendChild(e),indoforall_header.style.display="none",indoforall_proof_section.style.display="none",indoforall_footer.style.display="none",l.onclick=function(){indoforall_header.style.display="block",indoforall_proof_section.style.display="flex",indoforall_footer.style.display="flex",indoforall_proof_area.scrollIntoView({block:"center",inline:"center"}),e.innerHTML="",e.style.display="none"}}(l)}):n&&(e=`\n            <h2>${cardCounter}</h2>\n            <video src="${n}" controls title="استقدام-من-اندونيسيا"></video>\n        `,t.onclick=function(){currentVideo&&currentVideo!==this.querySelector("video")&&currentVideo.pause(),currentVideo=this.querySelector("video")}),t.innerHTML=e,cardCounter++,indoforall_proof_area.appendChild(t)})),indoforall_adsVideosArray.forEach((o=>{let{imgSrc:e,videoSrc:l,videoThumbnailSrc:n}=o,t=document.createElement("div");t.classList.add("indoforall_ads_only_videos_div");let i,a,d=document.createElement("div");if(d.classList.add("indoforall_ads_only_img_div"),e)a=`\n            <img src=${e} alt="استقدام-من-اندونيسيا" title="استقدام-من-اندونيسيا">\n        `,d.innerHTML=a,indoforall_ads_videos_and_img_div.appendChild(d),d.onclick=function(){!function(o){let e=document.createElement("div");e.classList.add("indoforall_full_screen_img_overlay");let l=document.createElement("a");l.classList.add("indoforall_full_screen_overlay_exit_button"),l.innerText="عودة";let n=document.createElement("img");n.src=o,n.alt="استقدام-من-اندونيسيا",n.title="استقدام-من-اندونيسيا",n.classList.add("indoforall_big_img"),e.appendChild(l),e.appendChild(n),document.body.appendChild(e),indoforall_header.style.display="none",indoforall_accounts_section.style.display="none",indoforall_footer.style.display="none",l.onclick=function(){indoforall_header.style.display="block",indoforall_accounts_section.style.display="flex",indoforall_footer.style.display="flex";let l=document.querySelector(`img[src="${o}"]`);if(l){const o=window.innerHeight,e=l.offsetHeight,n=l.getBoundingClientRect().top-(o-e)/2;window.scrollTo({top:n})}e.innerHTML="",e.style.display="none"}}(e)};else if(l){i=`\n            <img src=${n} alt="استقدام-من-اندونيسيا" class="indoforall_ads_thumbnail_img" title="استقدام-من-اندونيسيا">\n            <video src=${l} controls title="استقدام-من-اندونيسيا" class="indoforall_ads_orignal_video"></video>\n        `,t.innerHTML=i,indoforall_ads_videos_and_img_div.appendChild(t);let o=document.getElementsByClassName("indoforall_ads_orignal_video"),e=document.getElementsByClassName("indoforall_ads_thumbnail_img");for(let l=0;l<o.length;l++)o[l].addEventListener("play",(function(){console.log("Video started playing");for(let n=0;n<o.length;n++)n!==l&&(o[n].pause(),e[n].style.opacity=1);e[l].style.opacity=0}))}}));let indoforall_showNavOptions=()=>{indoforall_nav_options.style.opacity="1",indoforall_nav_options.style.height="100%",indoforall_nav_options.style.right="0",document.body.classList.add("nav-open"),document.body.style.overflow="hidden"},indoforall_hideNavOptions=()=>{indoforall_nav_options.style.opacity="0",indoforall_nav_options.style.height="0",indoforall_nav_options.style.right="-50%",document.body.classList.remove("nav-open"),document.body.style.overflow=""};function indoforall_whatsApp(){window.open("https://wa.me/+966509465975","_blank")}function indoforall_gmail(){window.location.href="mailto:indoforall.office@gmail.com"}function indoforall_location(){let o="https://www.google.com/maps?q="+encodeURIComponent("Jl. Mandalawangi No.7, RT.04/RW.04, Babakan, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16128");window.open(o,"_blank")}function indoforall_scrollUpIcon(){indoforall_header.scrollIntoView({top:0,behavior:"smooth"})}indoforall_nav.onclick=o=>{o.stopPropagation(),indoforall_showNavOptions()},indoforall_close_nav.onclick=o=>{o.stopPropagation(),indoforall_hideNavOptions()},document.addEventListener("click",(o=>{indoforall_nav_options.contains(o.target)||o.target===indoforall_close_nav||indoforall_hideNavOptions()})),window.onscroll=function(){window.pageYOffset>=indoforall_nav.offsetTop?indoforall_go_up_arrow.style.opacity="1":indoforall_go_up_arrow.style.opacity="0"},setTimeout((function(){indoforall_header.style.opacity="1"}),100);let ioniconsModuleScript=document.createElement("script");ioniconsModuleScript.type="module",ioniconsModuleScript.src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js",document.body.appendChild(ioniconsModuleScript);let ioniconsNomoduleScript=document.createElement("script");if(ioniconsNomoduleScript.setAttribute("nomodule",""),ioniconsNomoduleScript.src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js",document.body.appendChild(ioniconsNomoduleScript),window.location.pathname.endsWith(".html")){var newPath=window.location.pathname.replace(".html","");window.history.replaceState({},document.title,newPath)}
