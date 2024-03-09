/* Create An Array of Different Worker Types Cards Data */
let indoforall_homeWorkerArray = [
    {
        workerImg: "worker1/1.jpg",
        workerPassport: "worker1/2.jpg",
        workerVideo: "worker1/3.mp4",
    },

    {
        workerImg: "worker1/1.jpg",
        workerPassport: "worker1/2.jpg",
        workerVideo: "worker1/3.mp4",
    },

    {
        workerImg: "worker1/1.jpg",
        workerPassport: "worker1/2.jpg",
        workerVideo: "worker1/3.mp4",
    },

    {
        workerImg: "worker1/1.jpg",
        workerPassport: "worker1/2.jpg",
        workerVideo: "worker1/3.mp4",
    },

    {
        workerImg: "worker1/1.jpg",
        workerPassport: "worker1/2.jpg",
        workerVideo: "worker1/3.mp4",
    },
];
let indoforall_driveWorkerArray = [
    {
        workerImg: "worker2/1.jpg",
        workerPassport: "worker1/2.jpg",
        workerVideo: "worker1/3.mp4",
    },

    {
        workerImg: "worker2/1.jpg",
        workerPassport: "worker1/2.jpg",
        workerVideo: "worker1/3.mp4",
    },

    {
        workerImg: "worker2/1.jpg",
        workerPassport: "worker1/2.jpg",
        workerVideo: "worker1/3.mp4",
    },
];
let indoforall_hairWorkerArray = [
    {
        workerImg: "worker3/1.jpg",
        workerPassport: "worker1/2.jpg",
        workerVideo: "worker1/3.mp4",
    },

    {
        workerImg: "worker3/1.jpg",
        workerPassport: "worker1/2.jpg",
        workerVideo: "worker1/3.mp4",
    },

    {
        workerImg: "worker3/1.jpg",
        workerPassport: "worker1/2.jpg",
        workerVideo: "worker1/3.mp4",
    },
];
let indoforall_doctorWorkerArray = [
    {
        workerImg: "worker1/1.jpg",
        workerPassport: "worker1/2.jpg",
        workerVideo: "worker1/3.mp4",
    },

    {
        workerImg: "worker1/1.jpg",
        workerPassport: "worker1/2.jpg",
        workerVideo: "worker1/3.mp4",
    },

    {
        workerImg: "worker1/1.jpg",
        workerPassport: "worker1/2.jpg",
        workerVideo: "worker1/3.mp4",
    },
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
        videoSrc: "worker1/3.mp4",
        videoThumbnailSrc: "indoforall_ads/استقدام-اندونيسيا.png",
    },

    {
        imgSrc: "indoforall_ads/استقدام-اندونيسيا.png",
    },

]



let cardCounter=1,currentVideo=null;function indoforall_websiteGuidance(){document.documentElement.style.overflow="hidden";let e=document.createElement("div");e.classList.add("indoforall_full_screen_guidance_overlay");let l=document.createElement("a");l.classList.add("indoforall_full_screen_overlay_exit_button"),l.innerText="عودة";let t=document.createElement("div");t.classList.add("web_guidance_div");let o=`
        <a href="https://indoforall.com">1- في الصفحة الرئيسية انزل الى قسم اختيار نوع العمالة الاندونيسية.</a>
        <a href="https://indoforall.com">2- بعد اختيار نوع العمالة، خذ نظرة على اسعار الاستقدام ومدة إنجاز العمل.</a>
        <a onclick="indoforall_whatsApp()">3- اخيرا، تواصل معنا للاستقدام او لطلب المزيد من المعلومات والنصائح.</a>
        <a href="https://indoforall.com/اسئلة-استقدام-اندونيسيا.html" id="indoforall_web_guidance_note_text">ملاحظة: اذا كنت تبحث عن معلومات أكثر اذهب لصفحة الأسئلة الشائعة او تواصل معنا على الواتس.</a>
    `;t.innerHTML=o,e.appendChild(t),e.appendChild(l),document.body.appendChild(e),l.onclick=function(){document.documentElement.style.overflow="auto",e.style.display="none",e.innerHTML="",indoforall_nav.scrollIntoView({block:"center",inline:"center"})}}indoforall_proofVideosArray.forEach(e=>{let{imgSrc:l,videoSrc:t}=e,o=document.createElement("div");o.classList.add("indoforall_Proof_video_div");let i;function n(e){let l=document.createElement("div");l.classList.add("indoforall_full_screen_img_overlay");let t=document.createElement("a");t.classList.add("indoforall_full_screen_overlay_exit_button"),t.innerText="عودة";let o=document.createElement("img");o.src=e,o.alt="استقدام-اندونيسيا",o.title="استقدام-اندونيسيا",o.classList.add("indoforall_big_img"),l.appendChild(t),l.appendChild(o),document.body.appendChild(l),indoforall_header.style.display="none",indoforall_proof_section.style.display="none",indoforall_footer.style.display="none",t.onclick=function(){indoforall_header.style.display="block",indoforall_proof_section.style.display="flex",indoforall_footer.style.display="flex",indoforall_proof_area.scrollIntoView({block:"center",inline:"center"}),l.innerHTML="",l.style.display="none"}}l?(i=`
            <h2>${cardCounter}</h2>
            <img src="${l}" alt="استقدام-اندونيسيا" title="استقدام-اندونيسيا">
        `,o.onclick=function(){n(l)}):t&&(i=`
            <h2>${cardCounter}</h2>
            <video src="${t}" controls title="استقدام-اندونيسيا"></video>
        `,o.onclick=function(){currentVideo&&currentVideo!==this.querySelector("video")&&currentVideo.pause(),currentVideo=this.querySelector("video")}),o.innerHTML=i,cardCounter++,indoforall_proof_area.appendChild(o)}),indoforall_adsVideosArray.forEach(e=>{let{imgSrc:l,videoSrc:t,videoThumbnailSrc:o}=e,i=document.createElement("div");i.classList.add("indoforall_ads_only_videos_div");let n=document.createElement("div");n.classList.add("indoforall_ads_only_img_div");let a,s;if(l)s=`
            <img src=${l} alt="استقدام-اندونيسيا" title="استقدام-اندونيسيا">
        `,n.innerHTML=s,indoforall_ads_videos_and_img_div.appendChild(n),n.onclick=function(){p(l)};else if(t){a=`
            <img src=${o} alt="استقدام-اندونيسيا" class="indoforall_ads_thumbnail_img" title="استقدام-اندونيسيا">
            <video src=${t} controls title="استقدام-اندونيسيا" class="indoforall_ads_orignal_video"></video>
        `,i.innerHTML=a,indoforall_ads_videos_and_img_div.appendChild(i);let d=document.getElementsByClassName("indoforall_ads_orignal_video"),c=document.getElementsByClassName("indoforall_ads_thumbnail_img");for(let r=0;r<d.length;r++)d[r].addEventListener("play",function(){console.log("Video started playing");for(let e=0;e<d.length;e++)e!==r&&(d[e].pause(),c[e].style.opacity=1);c[r].style.opacity=0})}function p(e){let l=document.createElement("div");l.classList.add("indoforall_full_screen_img_overlay");let t=document.createElement("a");t.classList.add("indoforall_full_screen_overlay_exit_button"),t.innerText="عودة";let o=document.createElement("img");o.src=e,o.alt="استقدام-اندونيسيا",o.title="استقدام-اندونيسيا",o.classList.add("indoforall_big_img"),l.appendChild(t),l.appendChild(o),document.body.appendChild(l),indoforall_header.style.display="none",indoforall_accounts_section.style.display="none",indoforall_footer.style.display="none",t.onclick=function(){indoforall_header.style.display="block",indoforall_accounts_section.style.display="flex",indoforall_footer.style.display="flex";let t=document.querySelector(`img[src="${e}"]`);if(t){let o=window.innerHeight,i=t.offsetHeight,n=t.getBoundingClientRect().top;window.scrollTo({top:n-(o-i)/2})}l.innerHTML="",l.style.display="none"}}});let indoforall_showNavOptions=()=>{indoforall_nav_options.style.opacity="1",indoforall_nav_options.style.height="100%",indoforall_nav_options.style.right="0",document.body.classList.add("nav-open"),document.body.style.overflow="hidden"},indoforall_hideNavOptions=()=>{indoforall_nav_options.style.opacity="0",indoforall_nav_options.style.height="0",indoforall_nav_options.style.right="-50%",document.body.classList.remove("nav-open"),document.body.style.overflow=""};function indoforall_whatsApp(){window.open("https://wa.me/+966509465975","_blank")}function indoforall_gmail(){window.location.href="mailto:indoforall.office@gmail.com"}function indoforall_location(){let e=encodeURIComponent("Jl. Mandalawangi No.7, RT.04/RW.04, Babakan, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16128");window.open("https://www.google.com/maps?q="+e,"_blank")}function indoforall_scrollUpIcon(){indoforall_header.scrollIntoView({top:0,behavior:"smooth"})}indoforall_nav.onclick=e=>{e.stopPropagation(),indoforall_showNavOptions()},indoforall_close_nav.onclick=e=>{e.stopPropagation(),indoforall_hideNavOptions()},document.addEventListener("click",e=>{indoforall_nav_options.contains(e.target)||e.target===indoforall_close_nav||indoforall_hideNavOptions()}),window.onscroll=function(){window.pageYOffset>=indoforall_nav.offsetTop?indoforall_go_up_arrow.style.opacity="1":indoforall_go_up_arrow.style.opacity="0"},setTimeout(function(){indoforall_header.style.opacity="1"},100);let jsonLdScript=document.createElement("script");jsonLdScript.type="application/ld+json",jsonLdScript.innerHTML=`
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "استقدام-اندونيسيا",
        "image": "https://indoforall_logo/استقدام-عمالة-اندونيسية.svg",
        "datePublished": "2024-02-27",
        "dateModified": "2024-02-27",
        "description": "استقدام اندونيسيا. استقدام عمالة اندونيسية. استقدام من اندونيسيا. استقدام عمالة من اندونيسيا. استقدام عمالة منزلية اندونيسية. استقدام عاملات اندونيسية",
        "author": {
            "@type": "Person",
            "name": "اندو للجميع"
        },
        "publisher": {
            "@type": "Organization",
            "name": "اندو للجميع",
            "logo": {
                "@type": "ImageObject",
                "url": "https://indoforall_logo/استقدام-اندونيسيا.ico"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://indoforall.com/"
        }
    }
`,document.head.appendChild(jsonLdScript);let ioniconsModuleScript=document.createElement("script");ioniconsModuleScript.type="module",ioniconsModuleScript.src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js",document.body.appendChild(ioniconsModuleScript);let ioniconsNomoduleScript=document.createElement("script");if(ioniconsNomoduleScript.setAttribute("nomodule",""),ioniconsNomoduleScript.src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js",document.body.appendChild(ioniconsNomoduleScript),window.location.pathname.endsWith(".html")){var e=window.location.pathname.replace(".html","");window.history.replaceState({},document.title,e)}
