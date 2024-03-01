/* How To Manage This Website? */
/* Use The Down Arrays To Add or Remove Any Worker Pictures & Videos or Proof Videos or Coomon Questions */







/* Create An Array of Workers Cards Data */
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
        questionText: "كيف يتم اختيار العاملة المناسبة؟",
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
        questionText: "ماهي الحالات التي يتم فيها تعويض العميل خلال الفترة التجريبية؟",
        answerText: "رفض العمل - الهروب - الحمل.",
    },

    {
        questionText: "ماهي التعويض الذي نقدمه للعميل؟",
        answerText: "التعويض يتم عن طريق استبدال العاملة فقط في خلال فترة الضمان (3 شهور).",
    },

    {
        questionText: "ماهي مدة وصول العاملة",
        answerText: "تختلف على حسب نوع الفيزا وغالبا تتراوح المدة بين 12 الى 14 يوم.",
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





/* Create Worker Type Details */
/* ArrayName is the name of the Array of The Worker Type Button Clicked */
function indoforall_createWorkerTypeDetalis(arrayName) {
    /* Uinque Number For Each Card */
    let cardCounter = 1;

    // Clear existing content
    indoforall_worker_cards_div.innerHTML = '';

    /* Make A Smooth Fade In When The 'indoforall_worker_details_text' Apear */
    indoforall_worker_details_text.style.opacity = '0';
    indoforall_worker_details_text.style.transition = 'opacity 0.5s ease-in-out';
    indoforall_worker_details_text.style.opacity = '1';

    /* Check Which Button Has Clicked And Based On That Set The InnerText For The 'indoforall_worker_details_text' */
    if (arrayName === indoforall_homeWorkerArray) {
        indoforall_worker_details_text.innerText = 'قسم العمالة المنزلية الاندونيسية';
    } else if (arrayName === indoforall_driveWorkerArray) {
        indoforall_worker_details_text.innerText = 'قسم العمالة السائقين الخاص';
    } else if (arrayName === indoforall_hairWorkerArray) {
        indoforall_worker_details_text.innerText = 'قسم العمالة الكوفيرة الاندونيسية';
    } else if (arrayName === indoforall_doctorWorkerArray) {
        indoforall_worker_details_text.innerText = 'قسم العمالة الممرضة الاندونيسية';
    }

    // Apply fade-in animation
    indoforall_worker_detalis_section.style.opacity = '0';
    indoforall_worker_detalis_section.style.transition = 'opacity 0.5s ease-in-out';
    indoforall_worker_detalis_section.style.display = 'flex';

    // Trigger reflow to ensure transition is applied
    void indoforall_worker_detalis_section.offsetWidth;

    // Fade in the section
    indoforall_worker_detalis_section.style.opacity = '1';

    // Loop through the array to create worker cards
    arrayName.forEach((item) => {
        let { workerImg, workerPassport, workerVideo } = item;

        let WorkerCard = document.createElement("div");
        WorkerCard.classList.add("indoforall_worker_card");

        let workerCardInfo = `
            <div onclick="indoforall_showCardsDetails( '${cardCounter}', '${workerImg}', '${workerPassport}', '${workerVideo}');">
                <h2>${cardCounter}</h2>
                <img src="${workerImg}" alt="استقدام-عمالة-اندونيسية">
            </div>
        `;

        /* Set The InnerHTML Code For The 'WorkerCard' */
        WorkerCard.innerHTML = workerCardInfo;

        /* Append The 'WorkerCard' To the 'indoforall_worker_cards_div' */
        indoforall_worker_cards_div.appendChild(WorkerCard);

        cardCounter++;
    });

    indoforall_worker_details_text.scrollIntoView({
        block: 'center',
        inline: 'center',
        behavior: 'smooth',
    });
}




/* Show Cards Details On Ovelay Layer */
function indoforall_showCardsDetails(cardCounter, workerImg, workerPassport, workerVideo) {

    /* Create Overlay For Show Workers Card Detals */
    let fullscreenoverlay = document.createElement('div');
    fullscreenoverlay.classList.add('indoforall_full_screen_overlay');
    fullscreenoverlay.style.display = 'flex';

    /* Create A Button To Exit Worker Card Details */
    let fullscreenoverlayexitbutton = document.createElement('a');
    fullscreenoverlayexitbutton.classList.add('indoforall_full_screen_overlay_exit_button');
    fullscreenoverlayexitbutton.innerText = "عودة";

    /* Create The Elements With Their Info */
    let FullScreencardCounter = document.createElement('h1');
    FullScreencardCounter.innerHTML = 'عمالة اندونيسية رقم ' + cardCounter;

    let FullScreenWorkerImg = document.createElement('img');
    FullScreenWorkerImg.src = workerImg;
    FullScreenWorkerImg.alt = "استقدام-عمالة-اندونيسيلا";
    FullScreenWorkerImg.onclick = function () {
        indoforall_show_full_screen_image(FullScreenWorkerImg.src)
    }

    let FullScreenWorkerPassport = document.createElement('img');
    FullScreenWorkerPassport.src = workerPassport;
    FullScreenWorkerPassport.alt = "استقدام-عمالة-اندونيسيلا";
    FullScreenWorkerPassport.onclick = function () {
        indoforall_show_full_screen_image(FullScreenWorkerPassport.src)
    }

    let FullScreenWorkerVideo = document.createElement('video');
    FullScreenWorkerVideo.src = workerVideo;
    FullScreenWorkerVideo.setAttribute('controls', true);
    FullScreenWorkerVideo.setAttribute('title', 'استقدام-عمالة-اندونيسية');

    /* Append All Elements Inside The 'fullscreenoverlay' ELement */
    fullscreenoverlay.appendChild(fullscreenoverlayexitbutton);
    fullscreenoverlay.appendChild(FullScreencardCounter);
    fullscreenoverlay.appendChild(FullScreenWorkerImg);
    fullscreenoverlay.appendChild(FullScreenWorkerPassport);
    fullscreenoverlay.appendChild(FullScreenWorkerVideo);


    /* Hide And Show Diffrenet Sections */
    indoforall_header.style.display = 'none';
    indoforall_choose_worker_type_section.style.display = 'none';
    indoforall_worker_detalis_section.style.display = 'none';
    indoforall_main_page_section.style.display = 'none';
    indoforall_footer.style.display = 'none';
    document.body.appendChild(fullscreenoverlay);

    /* Scroll Up Once Clicked on Any Card */
    window.scrollTo({ top: 0, });

    /* Function To Exit Worker Card Details */
    fullscreenoverlayexitbutton.onclick = function () {
        indoforall_header.style.display = 'block';
        indoforall_choose_worker_type_section.style.display = 'flex';
        indoforall_worker_detalis_section.style.display = 'flex';
        indoforall_main_page_section.style.display = 'flex';
        indoforall_footer.style.display = 'flex';

        fullscreenoverlay.innerHTML = '';
        fullscreenoverlay.style.display = 'none';

        /* Scoll Back The 'indoforall_worker_cards_div' Element After Exiting The Worker Card Details Page */
        indoforall_worker_cards_div.scrollIntoView({
            block: 'center',
            inline: 'center',
        });
    }

    /* Function For Showing Full Screen Images */
    function indoforall_show_full_screen_image(src) {

        /* Create A Div To Contain The Big Image */
        let FullScreenImgOverlay = document.createElement('div');
        FullScreenImgOverlay.classList.add("indoforall_full_screen_img_overlay");

        /* Create A Button To Exit The Big Image Page */
        let fullscreenoverlayexitbutton = document.createElement('a');
        fullscreenoverlayexitbutton.classList.add('indoforall_full_screen_overlay_exit_button');
        fullscreenoverlayexitbutton.innerText = "عودة";

        /* Create The Big Image Element Based on The 'src' Value */
        let FullScreenImg = document.createElement('img');
        FullScreenImg.src = src;
        FullScreenImg.alt = "استقدام-عمالة-اندونيسيلا";
        FullScreenImg.classList.add('indoforall_big_img');

        /* Append All The elements inside 'FullScreenImgOverlay' */
        FullScreenImgOverlay.appendChild(fullscreenoverlayexitbutton);
        FullScreenImgOverlay.appendChild(FullScreenImg);
        document.body.appendChild(FullScreenImgOverlay);

        /* Hide The Worker card Details So You Can See The Big Image */
        fullscreenoverlay.style.display = 'none';

        /* Function To Exit The Big Image Page */
        fullscreenoverlayexitbutton.onclick = function () {
            /* ReDispaly The Worker Card Details Again */
            fullscreenoverlay.style.display = 'flex';

            /* Hide And Reset All Data Stored inside The 'FullScreenImgOverlay' Element */
            FullScreenImgOverlay.innerHTML = '';
            FullScreenImgOverlay.style.display = 'none';
        }
    }
}




// Go through each item in the 'data' value array 'indoforall_questionAndAnswerArray'
indoforall_questionAndAnswerArray.forEach((item) => {
    // Get all the properties from each item in the object from the array
    let { questionText, answerText } = item;

    // Create a new div element for the Questions And Answers
    let indoforall_QuestionDiv = document.createElement("div");
    indoforall_QuestionDiv.classList.add("indoforall_QuestionDiv");

    // Create the HTML content for the Questions And Answers Elements
    let indoforall_QuestionAndAnswerInfo = `
            <h2 class="indoforall_QuestionText">${questionText}</h2>
            <h3 class="indoforall_AnswerText">${answerText}</h3>
    `;

    // Set the innerHTML of the created div to the workerCardInfo HTML
    indoforall_QuestionDiv.innerHTML = indoforall_QuestionAndAnswerInfo;

    // Append the 'indoforall_QuestionDiv' element inside the 'indoforall_question_area'
    indoforall_question_area.appendChild(indoforall_QuestionDiv);
});









// Go through each item in the 'data' value array 'indoforall_proofVideosArray'
// Initialize cardCounter outside the loop

/* Uniqe Number For Each Card */
let cardCounter = 1;

indoforall_proofVideosArray.forEach((item) => {
    /* Get The Array Properties */
    let { imgSrc, videoSrc } = item;

    /* Create The Card Container Div */
    let ProofVideoDiv = document.createElement("div");
    ProofVideoDiv.classList.add("indoforall_Proof_video_div");

    /* Create A Variable To Store The Inner HTML Code */
    let ProofVideoInfo;

    /* Check If The Object Has 'imgSrc' Or 'videoSrc' And Based On it, It Will Show Different Code */
    if (imgSrc) {
        ProofVideoInfo = `
            <h2>${cardCounter}</h2>
            <img src="${imgSrc}">
        `;
        ProofVideoDiv.onclick = function () {
            indoforall_show_full_screen_image(imgSrc);
        };
    } else if (videoSrc) {
        ProofVideoInfo = `
            <h2>${cardCounter}</h2>
            <video src="${videoSrc}" controls></video>
        `;
    }

    /* Set The InnerHTML Code For the 'ProofVideoDiv' */
    ProofVideoDiv.innerHTML = ProofVideoInfo;

    /* Add 1 Number in Every Time This Loop Repeats */
    cardCounter++;

    /* Append The 'ProofVideoDiv' To the 'indoforall_proof_area' */
    indoforall_proof_area.appendChild(ProofVideoDiv);




    /* Function For Showing Full Screen Images */
    function indoforall_show_full_screen_image(src) {

        /* Create A Div To Contain The Big Image */
        let FullScreenImgOverlay = document.createElement('div');
        FullScreenImgOverlay.classList.add("indoforall_full_screen_img_overlay");

        /* Create A Button To Exit The Big Image Page */
        let fullscreenoverlayexitbutton = document.createElement('a');
        fullscreenoverlayexitbutton.classList.add('indoforall_full_screen_overlay_exit_button');
        fullscreenoverlayexitbutton.innerText = "عودة";

        /* Create The Big Image Element Based on The 'src' Value */
        let FullScreenImg = document.createElement('img');
        FullScreenImg.src = src;
        FullScreenImg.alt = "استقدام-عمالة-اندونيسيلا";
        FullScreenImg.classList.add('indoforall_big_img');

        /* Append All The elements inside 'FullScreenImgOverlay' */
        FullScreenImgOverlay.appendChild(fullscreenoverlayexitbutton);
        FullScreenImgOverlay.appendChild(FullScreenImg);
        document.body.appendChild(FullScreenImgOverlay);

        /* Hide And Show Diffrenet Sections */
        indoforall_header.style.display = 'none';
        indoforall_proofsection.style.display = 'none';
        indoforall_footer.style.display = 'none';


        /* Function To Exit The Big Image Page */
        fullscreenoverlayexitbutton.onclick = function () {
            /* ReDispaly The Worker Card Details Again */
            /* Hide And Show Diffrenet Sections */
            indoforall_header.style.display = 'block';
            indoforall_proofsection.style.display = 'flex';
            indoforall_footer.style.display = 'flex';

            /* Scoll Back The 'indoforall_worker_cards_div' Element After Exiting The Worker Card Details Page */
            indoforall_proof_area.scrollIntoView({
                block: 'center',
                inline: 'center',
            });

            /* Hide And Reset All Data Stored inside The 'FullScreenImgOverlay' Element */
            FullScreenImgOverlay.innerHTML = '';
            FullScreenImgOverlay.style.display = 'none';
        }
    }
});










/* Hide And Show nav Bar */
let indoforall_showNavOptions = () => {
    indoforall_nav_options.style.opacity = "1";
    indoforall_nav_options.style.height = "100%";
    indoforall_nav_options.style.right = "0"; // Move from right (-50%) to the original position (0%)
    document.body.classList.add("nav-open");
    document.body.style.overflow = "hidden"; // Disable scrolling
};

let indoforall_hideNavOptions = () => {
    indoforall_nav_options.style.opacity = "0";
    indoforall_nav_options.style.height = "0";
    indoforall_nav_options.style.right = "-50%"; // Move to the right (-50%)
    document.body.classList.remove("nav-open");
    document.body.style.overflow = ""; // Enable scrolling (restore default)
};

indoforall_nav.onclick = (event) => {
    event.stopPropagation();
    indoforall_showNavOptions();
};

indoforall_close_nav.onclick = (event) => {
    event.stopPropagation();
    indoforall_hideNavOptions();
};

document.addEventListener('click', (event) => {
    if (!indoforall_nav_options.contains(event.target) && event.target !== indoforall_close_nav) {
        indoforall_hideNavOptions();
    }
});








/* Open WhatsApp Chat */
function indoforall_whatsApp() {
    // Create the WhatsApp URL with the phone number.
    let whatsappURL = 'https://wa.me/+966509465975';

    // Open the WhatsApp chat window in a new tab.
    window.open(whatsappURL, '_blank');
}

/* Open Gmail Contact */
function indoforall_gmail() {
    let mailtoLink = "mailto:bndoory300@gmail.com";

    window.location.href = mailtoLink;
}

/* Open Loation Address */
function indoforall_location() {
    // Replace the coordinates with the latitude and longitude of Jakarta, Indonesia
    let latitude = -6.2088;
    let longitude = 106.8456;

    // Construct the Google Maps URL
    let mapsUrl = "https://www.google.com/maps?q=" + latitude + "," + longitude;

    // Open the Google Maps link in a new tab/window
    window.open(mapsUrl, "_blank");
}

/* Scroll Up To The Beginning Icon */
function indoforall_scrollUpIcon() {
    indoforall_header.scrollIntoView({ top: 0, behavior: 'smooth' });
}

window.onscroll = function () {
    if (window.pageYOffset >= indoforall_nav.offsetTop) {
        indoforall_go_up_arrow.style.opacity = "1";
    } else {
        indoforall_go_up_arrow.style.opacity = "0";
    }
};

/* Page Load Header Fade Animation */
setTimeout(function () {
    indoforall_header.style.opacity = "1";
}, 100);
