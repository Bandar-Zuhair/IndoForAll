/* How To Manage This Website? */
/* Use The Down Three Arrays To Add or Remove Any Worker Pictures or Proof Videos or Coomon Questions */







/* Create An Array of Workers Cards Data */
let WorkerCradsArray = [
    {
        workerNum: 1,
        workerImg: "worker1/1.jpg",
        workerPassport: "worker1/2.jpg",
        workerVideo: "worker1/3.mp4",
    },

    {
        workerNum: 2,
        workerImg: "worker2/1.jpg",
        workerPassport: "worker1/2.jpg",
        workerVideo: "worker1/3.mp4",
    },

    {
        workerNum: 2,
        workerImg: "worker3/1.jpg",
        workerPassport: "worker1/2.jpg",
        workerVideo: "worker1/3.mp4",
    },
];



/* Create An Array of Proof Videos Data */
let ProofVideosArray = [

    {
        videoNum: 1,
        videoSrc: "worker1/3.mp4",
    },
    {
        videoNum: 2,
        videoSrc: "worker2/3.mp4",
    },
]



/* Create An Array of Questions With Their Answers Data */
let QuestionAndAnswerArray = [

    {
        questionText: "كيف يتم اختيار العاملة المناسبة؟",
        answerText: "يتم اختيار العاملة المناسبة بناء على رغبات العميل عن طريق التواصل معنا",
    },

    {
        questionText: "هل لابد من وجود تاشيرة لبدا اجراءات الاستقدام؟",
        answerText: "التاشيرة هي اساس عملية الاستقدام ولايمكن عمل اي اجراء قبل استخراج التاثيرة.",
    },

    {
        questionText: "ماهي متطلبات استخراج التاشيرة؟",
        answerText: "1- كرت العائلة <br> 2- اظهار القدرة المالية عبر شهادة بنكية او تقدير الراتب.",
    },

    {
        questionText: "كيف يتم استخراج التاشيرة؟",
        answerText: "يتم استخراج تاشيرات العمالة بشكل الكتروني",
    },

    {
        questionText: "هل يتضمن العقد فترة تجريبية للعمالة المستقدمة؟",
        answerText: "هناك فترة للعمالة المستقدمة مدتها 90 يوم عمل يتم احتسابها من تاريخ بدا عمل اجراءات الاستقدام.",
    },

    {
        questionText: "ماهي الحالات التي يتم فيها تعويض العميل خلال الفترة التجريبية؟",
        answerText: "الهروب او الامتناع عن العمل او الحمل في حال كانت العاملة انثى.",
    },

    {
        questionText: "ماهي التعويض الذي نقدمه للعميل؟",
        answerText: "التعويض يتم عن طريق استبدال العاملة.",
    },

    {
        questionText: "ماهي مدة وصول العاملة",
        answerText: "تتراوح المدة بين 15 الى 20 يوم.",
    },

    {
        questionText: "كيف يتم اشعار العميل بوقت وصول العاملة؟",
        answerText: "يتم اشعار العميل بالوقت المتوقع لوصول العاملة، ويتم التنسيق مع العميل لاستلام العمالة واستلام كامل الوثائق استقدام العمالة.",
    },

    {
        questionText: "ماهي خدمات التعقيب؟",
        answerText: "خدمات التعقيب هي انجاز جميع الاوراق الخاص بك بدون اي تعقيدات.",
    },

    {
        questionText: "كيف يمكننا ارسال المبلغ لكم؟",
        answerText: "1- التحويل البنكي (بنك الراجحي - بنك سامبا - بنك البلاد)<br>2- التحويل اونلاين عبر خدمة STC Pay.",
    },

    {
        questionText: "ماهي المتطلبات لإتمام الخدمة؟",
        answerText: "ارسل لنا بيناتك ونوع العاملة ونحن نقوم بإنجاز الخدمة.",
    },

]







// Go through each item in the 'data' value array 'WorkerCradsArray'
WorkerCradsArray.forEach((item) => {
    // Get all the properties from each item in the object from the array
    let { workerNum, workerImg, workerPassport, workerVideo } = item;

    // Create a new div element for the worker card
    let WorkerCard = document.createElement("div");
    WorkerCard.classList.add("indoforall_WorkerCard");

    // Create the HTML content for the worker card element
    let workerCardInfo = `
        <div onclick="ShowCardsDetails( '${workerNum}', '${workerImg}', '${workerPassport}', '${workerVideo}');">
            <h2>${workerNum}</h2>
            <img src="${workerImg}" alt="استقدام عمالة منزلية من اندونيسيا">
        </div>
    `;

    // Set the innerHTML of the created div to the workerCardInfo HTML
    WorkerCard.innerHTML = workerCardInfo;

    // Append the created worker card to the indoforall_cardsarea
    indoforall_cardsarea.appendChild(WorkerCard);
});

/* Show Cards Details Over An Ovelay Layer */
function ShowCardsDetails(workerNum, workerImg, workerPassport, workerVideo) {

    /* Create Overlay For Show Workers Card Detals */
    let fullscreenoverlay = document.createElement('div');
    fullscreenoverlay.classList.add('indoforall_fullscreenoverlay');
    fullscreenoverlay.style.display = 'flex';

    /* Create A Button To Exit Worker Card Details */
    let fullscreenoverlayexitbutton = document.createElement('a');
    fullscreenoverlayexitbutton.classList.add('fullscreenoverlayexitbutton');
    fullscreenoverlayexitbutton.innerText = "عودة";

    /* Create The Elements With Their Info */
    let FullScreenWorkerNum = document.createElement('h1');
    FullScreenWorkerNum.innerHTML = 'عاملة منزل رقم ' + workerNum;

    let FullScreenWorkerImg = document.createElement('img');
    FullScreenWorkerImg.src = workerImg;
    FullScreenWorkerImg.onclick = function () {
        Show_Full_Screen_Image(FullScreenWorkerImg.src)
    }

    let FullScreenWorkerPassport = document.createElement('img');
    FullScreenWorkerPassport.src = workerPassport;
    FullScreenWorkerPassport.onclick = function () {
        Show_Full_Screen_Image(FullScreenWorkerPassport.src)
    }

    let FullScreenWorkerVideo = document.createElement('video');
    FullScreenWorkerVideo.src = workerVideo;
    FullScreenWorkerVideo.setAttribute('controls', true);
    FullScreenWorkerVideo.setAttribute('title', 'استقدام عمالة منزلية من اندونيسيا');

    /* Append All Elements Inside The 'fullscreenoverlay' ELement */
    fullscreenoverlay.appendChild(fullscreenoverlayexitbutton);
    fullscreenoverlay.appendChild(FullScreenWorkerNum);
    fullscreenoverlay.appendChild(FullScreenWorkerImg);
    fullscreenoverlay.appendChild(FullScreenWorkerPassport);
    fullscreenoverlay.appendChild(FullScreenWorkerVideo);


    /* Hide And Show Diffrenet Sections */
    indoforall_header.style.display = 'none';
    indoforall_cardssection.style.display = 'none';
    indoforall_mainpagesection.style.display = 'none';
    indoforall_footer.style.display = 'none';
    document.body.appendChild(fullscreenoverlay);

    /* Scroll Up Once Clicked on Any Card */
    window.scrollTo({ top: 0, });

    /* Function To Exit Worker Card Details */
    fullscreenoverlayexitbutton.onclick = function () {
        indoforall_header.style.display = 'block';
        indoforall_cardssection.style.display = 'flex';
        indoforall_mainpagesection.style.display = 'flex';
        indoforall_footer.style.display = 'flex';

        fullscreenoverlay.innerHTML = '';
        fullscreenoverlay.style.display = 'none';

        /* Scoll Back The 'indoforall_cardsarea' Element After Exiting The Worker Card Details Page */
        indoforall_cardsarea.scrollIntoView({
            block: 'center',
            inline: 'center',
        });
    }

    /* Function For Showing Full Screen Images */
    function Show_Full_Screen_Image(src) {

        /* Create A Div To Contain The Big Image */
        let FullScreenImgOverlay = document.createElement('div');
        FullScreenImgOverlay.classList.add("indoforall_fullscreenimgoverlay");

        /* Create A Button To Exit The Big Image Page */
        let fullscreenoverlayexitbutton = document.createElement('a');
        fullscreenoverlayexitbutton.classList.add('fullscreenoverlayexitbutton');
        fullscreenoverlayexitbutton.innerText = "عودة";

        /* Create The Big Image Element Based on The 'src' Value */
        let FullScreenImg = document.createElement('img');
        FullScreenImg.src = src;
        FullScreenImg.classList.add('bigimg');

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




// Go through each item in the 'data' value array 'QuestionAndAnswerArray'
QuestionAndAnswerArray.forEach((item) => {
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

    // Append the 'indoforall_QuestionDiv' element inside the 'indoforall_questionarea'
    indoforall_questionarea.appendChild(indoforall_QuestionDiv);
});









// Go through each item in the 'data' value array 'ProofVideosArray'
ProofVideosArray.forEach((item) => {
    // Get all the properties from each item in the object from the array
    let { videoNum, videoSrc } = item;

    // Create a new div element for the Proof Videos
    let ProofVideoDiv = document.createElement("div");
    ProofVideoDiv.classList.add("indoforall_ProofVideoDiv");

    // Create the HTML content for the 'ProofVideoDiv' element
    let ProofVideoInfo = `
        <h2>${videoNum}</h2>
        <video src=${videoSrc} controls></video>
    `;

    // Set the innerHTML of the ProofVideoInfo element to the ProofVideoDiv HTML
    ProofVideoDiv.innerHTML = ProofVideoInfo;

    // Append the 'ProofVideoDiv' to the 'indoforall_prooarea'
    indoforall_prooarea.appendChild(ProofVideoDiv);
});












/* navigate Between Page And Hide Or Show Pages */
function showSection(section) {
    indoforall_cardssection.style.display = 'none';
    indoforall_mainpagesection.style.display = 'none';
    indoforall_pricesection.style.display = 'none';
    indoforall_questionsection.style.display = 'none';
    indoforall_proofsection.style.display = 'none';
    indoforall_systemworksection.style.display = 'none';
    indoforall_aboutussection.style.display = 'none';

    if (section === indoforall_cardssection || section === indoforall_aboutussection) {
        section.style.display = 'flex';
        indoforall_mainpagesection.style.display = 'flex';
    } else {
        section.style.display = 'flex';
    }
}
function avalibaleworkerpage() {
    showSection(indoforall_cardssection);
}
function bookingpricepage() {
    showSection(indoforall_pricesection);
}
function questionpage() {
    showSection(indoforall_questionsection);
}
function proofpage() {
    showSection(indoforall_proofsection);
}
function systemworkpage() {
    showSection(indoforall_systemworksection);
}
function aboutuspage() {
    showSection(indoforall_aboutussection);
}











/* Hide And Show nav Bar */
let shownavoptions = () => {
    indoforall_navoptions.style.opacity = "1";
    indoforall_navoptions.style.height = "100%";
};

let hidenavoptions = () => {
    indoforall_navoptions.style.opacity = "0";
    indoforall_navoptions.style.height = "0";
};

indoforall_nav.onclick = (event) => { event.stopPropagation(); shownavoptions(); };
indoforall_closenav.onclick = (event) => { event.stopPropagation(); hidenavoptions(); };

document.addEventListener('click', (event) => {
    if (!indoforall_navoptions.contains(event.target) && event.target !== indoforall_closenav) {
        hidenavoptions();
    }
});

/* Open WhatsApp Chat */
function openwhatsappchat() {
    // Create the WhatsApp URL with the phone number.
    var whatsappURL = 'https://wa.me/+966509465975';

    // Open the WhatsApp chat window in a new tab.
    window.open(whatsappURL, '_blank');
}

/* Open Gmail Contact */
function opengmailchat() {
    var mailtoLink = "mailto:bndoory300@gmail.com";

    window.location.href = mailtoLink;
}

/* Open Loation Address */
function openlocationaddress() {
    // Replace the coordinates with the latitude and longitude of Jakarta, Indonesia
    var latitude = -6.2088;
    var longitude = 106.8456;

    // Construct the Google Maps URL
    var mapsUrl = "https://www.google.com/maps?q=" + latitude + "," + longitude;

    // Open the Google Maps link in a new tab/window
    window.open(mapsUrl, "_blank");
}

/* Scroll Up To The Beginning Icon */
function scrollupicon() {
    indoforall_header.scrollIntoView({ top: 0, behavior: 'smooth' });
}

/* Scrolling To The Targeted Elements After navigating Throught The nav Bar */
function scrolltosectiontext() {
    // Select all elements with the specified class
    var elements = document.querySelectorAll('.indoforall_SectionIntroText');

    // Iterate over each element and scroll to it
    elements.forEach(function (element) {
        element.scrollIntoView({ block: 'center', inline: 'center' });
    });
}

window.onscroll = function () {
    if (window.pageYOffset >= indoforall_nav.offsetTop) {
        indoforall_GoUpArrow.style.opacity = "1";
    } else {
        indoforall_GoUpArrow.style.opacity = "0";
    }
};
