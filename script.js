/* How To Manage This Website? */







/* Create An Array of Workers Cards Data */
let WorkerCradsArray = [
    {
        workerNum: 1,
        workerImg: "pic2.jpg",
        workerPassport: "pic3.jpg",
        workerVideo: "video1.mp4",
    },

    {
        workerNum: 2,
        workerImg: "pic5.jpg",
        workerPassport: "pic6.jpg",
        workerVideo: "video2.mp4",
    },

    {
        workerNum: 2,
        workerImg: "pic5.jpg",
        workerPassport: "pic6.jpg",
        workerVideo: "video2.mp4",
    },

    {
        workerNum: 2,
        workerImg: "pic5.jpg",
        workerPassport: "pic6.jpg",
        workerVideo: "video2.mp4",
    },

    {
        workerNum: 2,
        workerImg: "pic5.jpg",
        workerPassport: "pic6.jpg",
        workerVideo: "video2.mp4",
    },

    {
        workerNum: 2,
        workerImg: "pic5.jpg",
        workerPassport: "pic6.jpg",
        workerVideo: "video2.mp4",
    },

    {
        workerNum: 2,
        workerImg: "pic5.jpg",
        workerPassport: "pic6.jpg",
        workerVideo: "video2.mp4",
    },

    {
        workerNum: 2,
        workerImg: "pic5.jpg",
        workerPassport: "pic6.jpg",
        workerVideo: "video2.mp4",
    },

    {
        workerNum: 2,
        workerImg: "pic5.jpg",
        workerPassport: "pic6.jpg",
        workerVideo: "video2.mp4",
    },

    {
        workerNum: 2,
        workerImg: "pic5.jpg",
        workerPassport: "pic6.jpg",
        workerVideo: "video2.mp4",
    },
];

/* Create An Array of Questions With Their Answers Data */
let QuestionAndAnswerArray = [

    {
        questionText: "كيف يتم اختيار العاملة المناسبة",
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

/* Create An Array of Proof Videos Data */
let ProofVideosArray = [

    {
        videoNum: 1,
        videoSrc: "video1.mp4",
    },
    {
        videoNum: 2,
        videoSrc: "video2.mp4",
    },
    {
        videoNum: 3,
        videoSrc: "video1.mp4",
    },
    {
        videoNum: 4,
        videoSrc: "video2.mp4",
    },
    {
        videoNum: 5,
        videoSrc: "video1.mp4",
    },
    {
        videoNum: 6,
        videoSrc: "video2.mp4",
    },
    {
        videoNum: 7,
        videoSrc: "video1.mp4",
    },
    {
        videoNum: 8,
        videoSrc: "video1.mp4",
    },
    {
        videoNum: 9,
        videoSrc: "video2.mp4",
    },


]





// Go through each item in the 'data' value array 'WorkerCradsArray'
WorkerCradsArray.forEach((item) => {
    // Get all the properties from each item in the object from the array
    let { workerNum, workerImg, workerPassport, workerVideo } = item;

    // Create a new div element for the worker card
    let WorkerCard = document.createElement("div");
    WorkerCard.classList.add("IndoForAll_WorkerCard");

    // Create the HTML content for the worker card element
    let workerCardInfo = `
        <div onclick="ShowCardsDetails( '${workerNum}', '${workerImg}', '${workerPassport}', '${workerVideo}');">
            <h1>${workerNum}</h1>
            <img src="${workerImg}" alt="استقدام عمالة منزلية من اندونيسيا">
        </div>
    `;

    // Set the innerHTML of the created div to the workerCardInfo HTML
    WorkerCard.innerHTML = workerCardInfo;

    // Append the created worker card to the IndoForAll_CardsArea
    IndoForAll_CardsArea.appendChild(WorkerCard);
});

/* Show Cards Details Over An Ovelay Layer */
function ShowCardsDetails(workerNum, workerImg, workerPassport, workerVideo) {

    /* Create Overlay For Show Workers Card Detals */
    let FullScreenOverlay = document.createElement('div');
    FullScreenOverlay.classList.add('IndoForAll_FullScreenOverlay');
    FullScreenOverlay.style.display = 'flex';

    /* Create A Button To Exit Worker Card Details */
    let FullScreenOverlayExitButton = document.createElement('a');
    FullScreenOverlayExitButton.classList.add('FullScreenOverlayExitButton');
    FullScreenOverlayExitButton.innerText = "عودة";

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

    /* Append All Elements Inside The 'FullScreenOverlay' ELement */
    FullScreenOverlay.appendChild(FullScreenOverlayExitButton);
    FullScreenOverlay.appendChild(FullScreenWorkerNum);
    FullScreenOverlay.appendChild(FullScreenWorkerImg);
    FullScreenOverlay.appendChild(FullScreenWorkerPassport);
    FullScreenOverlay.appendChild(FullScreenWorkerVideo);


    /* Hide And Show Diffrenet Sections */
    IndoForAll_header.style.display = 'none';
    IndoForAll_CardsSection.style.display = 'none';
    IndoForAll_MainPageSection.style.display = 'none';
    IndoForAll_Footer.style.display = 'none';
    document.body.appendChild(FullScreenOverlay);

    /* Scroll Up Once Clicked on Any Card */
    window.scrollTo({ top: 0, });

    /* Function To Exit Worker Card Details */
    FullScreenOverlayExitButton.onclick = function () {
        IndoForAll_header.style.display = 'block';
        IndoForAll_CardsSection.style.display = 'flex';
        IndoForAll_MainPageSection.style.display = 'flex';
        IndoForAll_Footer.style.display = 'flex';

        FullScreenOverlay.innerHTML = '';
        FullScreenOverlay.style.display = 'none';

        /* Scoll Back The 'IndoForAll_CardsArea' Element After Exiting The Worker Card Details Page */
        IndoForAll_CardsArea.scrollIntoView({
            block: 'center',
            inline: 'center',
        });
    }

    /* Function For Showing Full Screen Images */
    function Show_Full_Screen_Image(src) {

        /* Create A Div To Contain The Big Image */
        let FullScreenImgOverlay = document.createElement('div');
        FullScreenImgOverlay.classList.add("IndoForAll_FullScreenImgOverlay");

        /* Create A Button To Exit The Big Image Page */
        let FullScreenOverlayExitButton = document.createElement('a');
        FullScreenOverlayExitButton.classList.add('FullScreenOverlayExitButton');
        FullScreenOverlayExitButton.innerText = "عودة";

        /* Create The Big Image Element Based on The 'src' Value */
        let FullScreenImg = document.createElement('img');
        FullScreenImg.src = src;
        FullScreenImg.classList.add('BigImg');

        /* Append All The elements inside 'FullScreenImgOverlay' */
        FullScreenImgOverlay.appendChild(FullScreenOverlayExitButton);
        FullScreenImgOverlay.appendChild(FullScreenImg);
        document.body.appendChild(FullScreenImgOverlay);

        /* Hide The Worker card Details So You Can See The Big Image */
        FullScreenOverlay.style.display = 'none';

        /* Function To Exit The Big Image Page */
        FullScreenOverlayExitButton.onclick = function () {
            /* ReDispaly The Worker Card Details Again */
            FullScreenOverlay.style.display = 'flex';

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
    let IndoForAll_QuestionDiv = document.createElement("div");
    IndoForAll_QuestionDiv.classList.add("IndoForAll_QuestionDiv");

    // Create the HTML content for the Questions And Answers Elements
    let IndoForAll_QuestionAndAnswerInfo = `
            <h1 class="IndoForAll_QuestionText">${questionText}</h1>
            <h1 class="IndoForAll_AnswerText">${answerText}</h1>
    `;

    // Set the innerHTML of the created div to the workerCardInfo HTML
    IndoForAll_QuestionDiv.innerHTML = IndoForAll_QuestionAndAnswerInfo;

    // Append the 'IndoForAll_QuestionDiv' element inside the 'IndoForAll_QuestionArea'
    IndoForAll_QuestionArea.appendChild(IndoForAll_QuestionDiv);
});









// Go through each item in the 'data' value array 'ProofVideosArray'
ProofVideosArray.forEach((item) => {
    // Get all the properties from each item in the object from the array
    let { videoNum, videoSrc } = item;

    // Create a new div element for the Proof Videos
    let ProofVideoDiv = document.createElement("div");
    ProofVideoDiv.classList.add("IndoForAll_ProofVideoDiv");

    // Create the HTML content for the 'ProofVideoDiv' element
    let ProofVideoInfo = `
        <h1>${videoNum}</h1>
        <video src=${videoSrc} controls></video>
    `;

    // Set the innerHTML of the ProofVideoInfo element to the ProofVideoDiv HTML
    ProofVideoDiv.innerHTML = ProofVideoInfo;

    // Append the 'ProofVideoDiv' to the 'IndoForAll_ProoArea'
    IndoForAll_ProoArea.appendChild(ProofVideoDiv);
});












/* Navigate Between Page And Hide Or Show Pages */
function showSection(section) {
    IndoForAll_CardsSection.style.display = 'none';
    IndoForAll_MainPageSection.style.display = 'none';
    IndoForAll_PriceSection.style.display = 'none';
    IndoForAll_QuestionSection.style.display = 'none';
    IndoForAll_ProofSection.style.display = 'none';
    IndoForAll_SystemWorkSection.style.display = 'none';
    IndoForAll_AboutUsSection.style.display = 'none';

    if(section === IndoForAll_CardsSection || section === IndoForAll_AboutUsSection){
        section.style.display = 'flex';
        IndoForAll_MainPageSection.style.display = 'flex';
    }else{
        section.style.display = 'flex';
    }
}
function AvalibaleWorkerPage() {
    showSection(IndoForAll_MainPageSection);
}
function AvalibaleWorkerPage() {
    showSection(IndoForAll_CardsSection);
}
function BookingPricePage() {
    showSection(IndoForAll_PriceSection);
}
function QuestionPage() {
    showSection(IndoForAll_QuestionSection);
}
function ProofPage() {
    showSection(IndoForAll_ProofSection);
}
function SystemWorkPage() {
    showSection(IndoForAll_SystemWorkSection);
}
function AboutUsPage() {
    showSection(IndoForAll_AboutUsSection);
}

























/* Hide And Show Nav Bar */
let showNavOptions = () => {
    IndoForAll_NavOptions.style.opacity = "1";
    IndoForAll_NavOptions.style.height = "100%";
};

let hideNavOptions = () => {
    IndoForAll_NavOptions.style.opacity = "0";
    IndoForAll_NavOptions.style.height = "0";
};

IndoForAll_Nav.onclick = (event) => { event.stopPropagation(); showNavOptions(); };
IndoForAll_CloseNav.onclick = (event) => { event.stopPropagation(); hideNavOptions(); };

document.addEventListener('click', (event) => {
    if (!IndoForAll_NavOptions.contains(event.target) && event.target !== IndoForAll_CloseNav) {
        hideNavOptions();
    }
});

/* Open WhatsApp Chat */
function openWhatsAppChat() {
    // Create the WhatsApp URL with the phone number.
    var whatsappURL = 'https://wa.me/+966509465975';

    // Open the WhatsApp chat window in a new tab.
    window.open(whatsappURL, '_blank');
}

/* Open Gmail Contact */
function openGmailChat() {
    var mailtoLink = "mailto:bndoory300@gmail.com";

    window.location.href = mailtoLink;
}

/* Open Loation Address */
function openLocationAddress() {
    // Replace the coordinates with the latitude and longitude of Jakarta, Indonesia
    var latitude = -6.2088;
    var longitude = 106.8456;

    // Construct the Google Maps URL
    var mapsUrl = "https://www.google.com/maps?q=" + latitude + "," + longitude;

    // Open the Google Maps link in a new tab/window
    window.open(mapsUrl, "_blank");
}

/* Scroll Up To The Beginning Icon */
function ScrollUpIcon(){
    IndoForAll_header.scrollIntoView({ top: 0, behavior: 'smooth' });
}

/* Scrolling To The Targeted Elements After Navigating Throught The Nav Bar */
function ScrollToSectionText() {
    // Select all elements with the specified class
    var elements = document.querySelectorAll('.IndoForAll_SectionIntroText');

    // Iterate over each element and scroll to it
    elements.forEach(function (element) {
        element.scrollIntoView({ block: 'center', inline: 'center' });
    });
}

window.onscroll = function () {
    if (window.pageYOffset >= IndoForAll_Nav.offsetTop) {
        IndoForAll_GoUpArrow.style.opacity = "1";
    } else {
        IndoForAll_GoUpArrow.style.opacity = "0";
    }
};
