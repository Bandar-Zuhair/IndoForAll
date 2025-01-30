/* Page Load Header Fade Animation */
setTimeout(function () {
    indoforall_body.style.opacity = "1";
}, 100);

/* Create An Array of Different Worker Types Cards Data */
let indoforall_homeWorkerArray = [
    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-1.jpg",
        workerVideo: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-2.mp4",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-3.jpg",
        workerVideo: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-4.mp4",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-5.jpg",
        workerVideo: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-6.mp4",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-7.jpg",
        workerVideo: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-8.mp4",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-9.jpg",
        workerVideo: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-10.mp4",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-11.jpg",
        workerVideo: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-12.mp4",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-13.jpg",
        workerVideo: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-14.mp4",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-15.jpg",
        workerVideo: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-16.mp4",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-17.jpg",
        workerVideo: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-18.mp4",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-19.jpg",
        workerVideo: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-20.mp4",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-21.jpg",
        workerVideo: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-22.mp4",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-23.jpg",
        workerVideo: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-24.mp4",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-25.jpg",
        workerVideo: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-26.mp4",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-27.jpg",
        workerVideo: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-28.mp4",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-29.jpg",
        workerVideo: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-30.mp4",
    },

    /* Last Number = 29 & 30 */
];
let indoforall_driveWorkerArray = [];
let indoforall_hairWorkerArray = [
    {
        workerImg: "استقدام-كوفيرة/استقدام-كوفيرة-1.jpg",
        workerVideo: "استقدام-كوفيرة/استقدام-كوفيرة-2.mp4",
    },

    {
        workerImg: "استقدام-كوفيرة/استقدام-كوفيرة-3.jpg",
        workerVideo: "استقدام-كوفيرة/استقدام-كوفيرة-4.mp4",
    },

    /* Last Number = 3 & 4 */
];
let indoforall_sewingWorkerArray = [
    {
        workerImg: "استقدام-خياطة/استقدام-خياطة-1.jpg",
        workerVideo: "استقدام-خياطة/استقدام-خياطة-2.mp4",
    },

    {
        workerImg: "استقدام-خياطة/استقدام-خياطة-3.jpg",
        workerVideo: "استقدام-خياطة/استقدام-خياطة-4.mp4",
    },

    {
        workerImg: "استقدام-خياطة/استقدام-خياطة-5.jpg",
        workerVideo: "استقدام-خياطة/استقدام-خياطة-6.mp4",
    },

    /* Last Number = 5 & 6 */
];
let indoforall_doctorWorkerArray = [];

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
        answerText: "يتم استخراج تاشيرات العمالة بشكل الكتروني.",
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
        answerText: "عن طريق التحويل بالبنك.",
    },
    {
        questionText: "ماهي طريقة تجديد الفيزا؟",
        answerText: "عن طريق موقع ابشر أو عن طريق الجوازات.",
    },
    {
        questionText: "ماهو مبلغ تجديد الفيزا؟",
        answerText: "مية ريال سعودي شهريا.",
    },
    {
        questionText: "هل استطيع تحويل فيزة الزيارة الى إقامة؟",
        answerText: "نعم، يتم عن طريق الوزارة الداخلية اونلاين.",
    },
];

/* Create An Array of Proof Videos Data */
let indoforall_proofVideosArray = [
    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-1.jpg",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-2.jpg",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-3.jpg",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-4.jpg",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-5.jpg",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-6.jpg",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-7.jpg",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-8.jpg",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-9.jpg",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-10.jpg",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-11.jpg",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-12.jpg",
    },

    {
        videoSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-1.mp4",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-13.jpg",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-14.jpg",
    },
];

/* Array For Ads Videos/Images Use Only (imgSrc - videoSrc - videoThumbnailSrc) Words */
let indoforall_adsVideosArray = [
    {
        videoSrc: "استقدام-اندونيسيا/استقدام-من-اندونيسيا.mp4",
        videoThumbnailSrc: "استقدام-اندونيسيا/استقدام-من-اندونيسيا.png",
    },

    {
        imgSrc: "استقدام-اندونيسيا/استقدام-من-اندونيسيا.png",
    },
];

/* Function For Showing Full Screen Images */
function indoforall_show_full_screen_image(src) {
    // Disable scrolling
    document.documentElement.style.overflow = "hidden";

    /* Create A Div To Contain The Big Image or Video */
    let FullScreenImgOverlay = document.createElement("div");
    FullScreenImgOverlay.classList.add("indoforall_full_screen_img_overlay");

    /* Create A Button To Exit The Big Image or Video Page */
    let fullScreenOverlayExitButton = document.createElement("a");
    fullScreenOverlayExitButton.classList.add("indoforall_full_screen_overlay_exit_button");
    fullScreenOverlayExitButton.innerText = "عودة";
    fullScreenOverlayExitButton.style.zIndex = "1000"; // Ensure the exit button is above the overlay

    /* Create The Big Image Element Based on The 'src' Value */
    let FullScreenImg = document.createElement("img");
    FullScreenImg.src = src;
    FullScreenImg.srcset = `${src} 480w, ${src} 768w, ${src} 1200w`;
    FullScreenImg.sizes = "(max-width: 768px) 100vw, 50vw";
    FullScreenImg.loading = "lazy";
    FullScreenImg.alt = "استقدام من اندونيسيا - اندو للجميع";
    FullScreenImg.title = "استقدام من اندونيسيا - اندو للجميع";
    FullScreenImg.classList.add("indoforall_big_img");

    /* Append Image Element to FullScreenImgOverlay */
    FullScreenImgOverlay.appendChild(FullScreenImg);

    /* Append Exit Button to FullScreenImgOverlay */
    FullScreenImgOverlay.appendChild(fullScreenOverlayExitButton);

    /* Append FullScreenImgOverlay to the body */
    document.body.appendChild(FullScreenImgOverlay);

    // Add "show" class to trigger fade-in animation
    setTimeout(() => {
        FullScreenImgOverlay.classList.add("show");
    }, 10);

    /* Function To Exit The Big Image or Video Page */
    fullScreenOverlayExitButton.onclick = function () {
        // Re-enable scrolling
        document.documentElement.style.overflow = "auto";

        // Remove "show" class to trigger fade-out animation
        FullScreenImgOverlay.classList.remove("show");

        // Wait for the animation to complete before removing the element
        setTimeout(() => {
            FullScreenImgOverlay.remove();
        }, 500); // Matches the CSS transition duration
    };
}

indoforall_craeteRequestWorkerMessage = function () {
    // Disable scrolling
    document.documentElement.style.overflow = "hidden";

    // Create The Filter Worker Type Data Content
    let filterWorkerTypeDataDivOverlay = document.createElement("div");
    filterWorkerTypeDataDivOverlay.id = "indoforall_filter_worker_type_overlay";

    let filterWorkerTypeDataDiv = document.createElement("div");
    filterWorkerTypeDataDiv.id = "indoforall_filter_worker_type_div";

    let filterWorkerTypeDataContent = document.createElement("div");
    filterWorkerTypeDataContent.innerHTML = `
        <div id='indoforall_filter_worker_type_title'>
            <h3>طلب استقدام الآن</h3>
        </div>
        <div id="indoforall_filter_worker_work_type">
            <h3>اختار نوع العمالة</h3>
            <div id="indoforall_filter_worker_work_type_options">
                <h4 onclick="indoforall_chooseWorkerTypeDataFunction('home')">عاملة منزلية</h4>
                <h4 onclick="indoforall_chooseWorkerTypeDataFunction('driver')">سائق خاص</h4>
                <h4 onclick="indoforall_chooseWorkerTypeDataFunction('hair')">كوفيرة</h4>
                <h4 onclick="indoforall_chooseWorkerTypeDataFunction('sewing')">خياطة</h4>
                <h4 onclick="indoforall_chooseWorkerTypeDataFunction('nurse')">ممرضة</h4>
                <h4 onclick="indoforall_whatsApp()">خيارات اخرى؟ تواصل معنا على الواتس</h4>
            </div>
        </div>
        <div id="indoforall_submit_filter_worker_type">
            <h5 id="indoforall_cancel_worker_data_message_button">إلغاء</h5>
        </div>
    `;

    // Append the elements
    filterWorkerTypeDataDiv.appendChild(filterWorkerTypeDataContent);
    filterWorkerTypeDataDivOverlay.appendChild(filterWorkerTypeDataDiv);
    document.body.appendChild(filterWorkerTypeDataDivOverlay);

    // Show overlay and content with animation
    setTimeout(() => {
        filterWorkerTypeDataDivOverlay.classList.add("show");
        filterWorkerTypeDataDiv.classList.add("show");
    }, 10);

    // Close overlay on cancel button click
    document.querySelector("#indoforall_cancel_worker_data_message_button").onclick = function () {
        // Remove 'show' class to trigger fade-out animation
        filterWorkerTypeDataDiv.classList.remove("show");
        filterWorkerTypeDataDivOverlay.classList.remove("show");

        // Wait for animation to complete before removing the overlay
        setTimeout(() => {
            document.documentElement.style.overflow = "auto";
            document.body.removeChild(filterWorkerTypeDataDivOverlay);
        }, 500); // Matches the CSS transition duration
    };

    /* Function To Filter And Create The Worker Type Data Content */
    indoforall_chooseWorkerTypeDataFunction = function (workerTypeName) {
        /* Save The Text Based on The workerType Value */
        let workerTypeNameVariable;

        /* Save The clicked City Type in This Variable */
        let indoforall_filterWorkerCityType;

        /* Based on The Passed 'workerTypeName' Value Set The Name of Worker Type Data */
        if (workerTypeName === "home") {
            workerTypeNameVariable = "عاملة منزلية";
            indoforall_filterWorkerCityType = `
            <h3>السعر</h3>
                <h4>استقدام عاملة منزلية = 18,500 ريال سعودي</h4>
            `;
        } else if (workerTypeName === "driver") {
            workerTypeNameVariable = "سائق خاص";
            indoforall_filterWorkerCityType = `
                <h3>السعر</h3>
                <h4>استقدام سائق خاص = 7,000 ريال سعودي</h4>
            `;
        } else if (workerTypeName === "hair") {
            workerTypeNameVariable = "كوفيرة";
            indoforall_filterWorkerCityType = `
                <h3>السعر</h3>
                <h4>فيزة عمالة مهنية = 18,500 ريال سعودي</h4>
            `;
        } else if (workerTypeName === "sewing") {
            workerTypeNameVariable = "خياطة";
            indoforall_filterWorkerCityType = `
                <h3>السعر</h3>
                <h4>فيزة عمالة مهنية = 18,500 ريال سعودي</h4>
            `;
        } else if (workerTypeName === "nurse") {
            workerTypeNameVariable = "ممرضة";
            indoforall_filterWorkerCityType = `
                <h3>السعر</h3>
                <h4>فيزة عمالة مهنية = 18,500 ريال سعودي</h4>
            `;
        }

        /* Create Filter Worker Type Data Content */
        filterWorkerTypeDataContent.innerHTML = `
        <div id='indoforall_filter_worker_type_title'>
            <h3>طلب استقدام ${workerTypeNameVariable}</h3>
        </div>

        <div id="indoforall_filter_worker_visa_type"></div>

        <div id="indoforall_filter_worker_city_type">
            <h3>طلب إستقدام الى</h3>
            <textarea placeholder="إسم المدينة" maxlength="30"></textarea>
        </div>

        <div id="indoforall_submit_filter_worker_type">
            <h5 onclick="indoforall_workerTypeWhatsAppMessageFunction()">إرسال</h5>
            <h5 id="indoforall_cancel_worker_data_message_button">إلغاء</h5>
        </div>
    `;

        /* Append The Elements in Each Other */
        filterWorkerTypeDataDiv.appendChild(filterWorkerTypeDataContent);
        filterWorkerTypeDataDivOverlay.appendChild(filterWorkerTypeDataDiv);
        document.body.appendChild(filterWorkerTypeDataDivOverlay);
        indoforall_filter_worker_visa_type.innerHTML = indoforall_filterWorkerCityType; // Update this line

        /* Re-enable Scrolling And Remove The 'filterWorkerTypeDataDivOverlay' Element */
        indoforall_cancel_worker_data_message_button.onclick = function () {
            // Re-enable Scrolling
            document.documentElement.style.overflow = "auto";

            // Remove 'show' class to trigger fade-out animation
            filterWorkerTypeDataDiv.classList.remove("show");
            filterWorkerTypeDataDivOverlay.classList.remove("show");

            /// Wait for animation to complete before removing the overlay
            setTimeout(() => {
                document.documentElement.style.overflow = "auto";
                document.body.removeChild(filterWorkerTypeDataDivOverlay);
            }, 500); // Matches the CSS transition duration
        };

        /* Function To Create Final WhatsApp Message Based on Worker Type Data Selected */
        indoforall_workerTypeWhatsAppMessageFunction = function () {
            // Get the text from the textarea
            let cityName = document.querySelector("#indoforall_filter_worker_city_type textarea").value;

            if (cityName === "") {
                alert("يرجى التأكد من كتابة اسم المدينة");
            } else {
                // Get today's date
                let today = new Date();
                let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

                // Create the final message with all the details
                let finalMessage = `طلب جديد استقدام ${workerTypeNameVariable} من اندونيسيا\n`;
                finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Add today's date

                /* Based on The Passed 'workerTypeName' Value Set The Name of Worker Type Data */
                if (workerTypeNameVariable === "عاملة منزلية") {
                    finalMessage += `السعر: 18,500 ريال سعودي\n`;
                } else if (workerTypeNameVariable === "سائق خاص") {
                    finalMessage += `السعر: 7,000 ريال سعودي\n`;
                } else {
                    finalMessage += `نوع الفيزا: فيزة عمالة مهنية\n`;
                    finalMessage += `السعر: 18,500 ريال سعودي\n`;
                }

                finalMessage += `استقدام الى: ${cityName}\n\n`;
                finalMessage += `شركة استقدام اندو للجميع`;

                // Encode the message using encodeURIComponent
                let encodedMessage = encodeURIComponent(finalMessage);

                // Create the WhatsApp URL
                let whatsappURL = `https://wa.me/966509465975?text=${encodedMessage}`;

                // Open WhatsApp in a new window
                window.open(whatsappURL, "_blank");
            }
        };
    };
};

document.getElementById("indoforall_comment_form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent page refresh

    let name = document.getElementById("indoforall_comment_username").value.trim();
    let comment = document.getElementById("indoforall_comment_text").value.trim();
    let stars = document.getElementById("indoforall_comment_stars").value;

    let formData = new URLSearchParams();
    formData.append("name", name); // Match Google Apps Script keys
    formData.append("comment", comment);
    formData.append("stars", stars);

    try {
        let response = await fetch("https://script.google.com/macros/s/AKfycbyg5u7aYubTF4tj0Ca8dSX-GXY8txqVT3-ogI3rRgw3ROxerw-qWg2WphnlcceiY5lWGg/exec", {
            method: "POST",
            body: formData,
        });

        let data = await response.text();

        if (data === "Success") {
            document.getElementById("indoforall_comment_form").reset();

            await fetchReviews(); // Wait until fetchReviews() is fully executed

            showSuccessNotification(); // Now run the notification function
        }
    } catch (error) {}
});

// Function to Fetch and Display Reviews
function fetchReviews() {
    fetch("https://script.google.com/macros/s/AKfycbyg5u7aYubTF4tj0Ca8dSX-GXY8txqVT3-ogI3rRgw3ROxerw-qWg2WphnlcceiY5lWGg/exec")
        .then((response) => response.json())
        .then((data) => {
            let indoforall_clint_rate_area = document.getElementById("indoforall_clint_rate_area");
            indoforall_clint_rate_area.innerHTML = ""; // Clear old reviews

            data.reverse().forEach((item) => {
                // Reverse to show newest first
                let { date, name, comment, starAmount } = item;

                let clintRateDiv = document.createElement("div");
                clintRateDiv.classList.add("indoforall_rate_div");

                clintRateDiv.innerHTML = `
                <div class="indoforall_clint_rate_date_div indoforall_animate_on_scroll">
                    <h3 class="indoforall_animate_on_scroll">${date}</h3>
                </div>

                <div class="indoforall_clint_rate_info_div indoforall_animate_on_scroll">
                    <img src="favicon.png" alt="Review Profile" title="Review Profile">
                    <h4>${name}</h4>
                </div>

                <div class="indoforall_clint_rate_comment_div">
                    <h5>${comment}</h5>
                </div>

                <div class="indoforall_clint_rate_star_div">
                    ${"★".repeat(starAmount)}
                </div>
            `;

                indoforall_clint_rate_area.appendChild(clintRateDiv);
            });

            // Smooth appearance with delay
            setTimeout(() => {
                indoforall_clint_rate_area.classList.add("show");
            }, 100);
        })
        .catch((error) => console.error("Error fetching reviews:", error));
}

// Function to Show Floating Success Notification
function showSuccessNotification() {
    let notification = document.getElementById("indoforall_success_notification");
    notification.style.display = "block";

    setTimeout(() => {
        notification.style.opacity = "1";
        notification.style.transform = "translateX(-50%) translateY(0px)"; // Move slightly up
    }, 10);

    setTimeout(() => {
        notification.style.opacity = "0";
        notification.style.transform = "translateX(-50%) translateY(10px)"; // Move down slightly while fading out
        setTimeout(() => {
            notification.style.display = "none";
        }, 400);
    }, 3000);
}

// Fetch Reviews on Page Load
fetchReviews();

/* ArrayName is the name of the Array of The Worker Type Button Clicked */
if (document.getElementById("indoforall_choose_worker_type_section")) {
    indoforall_createWorkerTypeDetalis = function (arrayName) {
        /* Uinque Number For Each Card */
        let cardCounter = 1;

        // Clear existing content
        indoforall_worker_cards_div.innerHTML = "";

        /* Make A Smooth Fade In When The 'indoforall_worker_details_text' Apear */
        indoforall_worker_details_text.style.opacity = "0";
        indoforall_worker_details_text.style.transition = "opacity 0.5s ease-in-out";
        indoforall_worker_details_text.style.opacity = "1";

        // Remove existing indoforall_workerTypeMessageButton element if it exists
        let existingButton = document.getElementById("indoforall_worker_type_message_button");
        if (existingButton) {
            existingButton.remove();
        }

        /* Create The Book Worker Now Button in The Worker Details Section */
        let indoforall_workerTypeMessageButton = document.createElement("a");
        indoforall_workerTypeMessageButton.id = "indoforall_worker_type_message_button";
        indoforall_workerTypeMessageButton.classList.add("indoforall_other_pages_link");
        indoforall_workerTypeMessageButton.style.background = "linear-gradient(to right, rgb(5, 0, 91), rgb(13, 0, 255))";

        /* Check Which Button Has Clicked And Based On That Set The InnerText For The 'indoforall_worker_details_text' */
        if (arrayName === indoforall_homeWorkerArray) {
            indoforall_worker_details_text.innerText = "استقدام عاملة منزلية من اندونيسيا";
            indoforall_workerTypeMessageButton.innerHTML = "طلب استقدام عاملة منزلية الآن";
            indoforall_workerTypeMessageButton.onclick = function () {
                indoforall_chooseWorkerTypeDataFunction("home");
            };
        } else if (arrayName === indoforall_driveWorkerArray) {
            indoforall_worker_details_text.innerText = "استقدام سائق الخاص من اندونيسيا";
            indoforall_workerTypeMessageButton.innerHTML = "طلب استقدام سائق خاص الآن";
            indoforall_workerTypeMessageButton.onclick = function () {
                indoforall_chooseWorkerTypeDataFunction("driver");
            };
        } else if (arrayName === indoforall_hairWorkerArray) {
            indoforall_worker_details_text.innerText = "استقدام كوفيرة من اندونيسيا";
            indoforall_workerTypeMessageButton.innerHTML = "طلب استقدام كوفيرة الآن";
            indoforall_workerTypeMessageButton.onclick = function () {
                indoforall_chooseWorkerTypeDataFunction("hair");
            };
        } else if (arrayName === indoforall_sewingWorkerArray) {
            indoforall_worker_details_text.innerText = "استقدام خياطة من اندونيسيا";
            indoforall_workerTypeMessageButton.innerHTML = "طلب استقدام خياطة الآن";
            indoforall_workerTypeMessageButton.onclick = function () {
                indoforall_chooseWorkerTypeDataFunction("sewing");
            };
        } else if (arrayName === indoforall_doctorWorkerArray) {
            indoforall_worker_details_text.innerText = "استقدام ممرضة من اندونيسيا";
            indoforall_workerTypeMessageButton.innerHTML = "طلب استقدام ممرضة الآن";
            indoforall_workerTypeMessageButton.onclick = function () {
                indoforall_chooseWorkerTypeDataFunction("nurse");
            };
        }

        /* Append The Content of The Worker Type Title Text */
        indoforall_worker_details_text_div.appendChild(indoforall_workerTypeMessageButton);

        // Apply fade-in animation
        indoforall_worker_detalis_section.style.opacity = "0";
        indoforall_worker_detalis_section.style.transition = "opacity 0.5s ease-in-out";
        indoforall_worker_detalis_section.style.display = "flex";

        // Trigger reflow to ensure transition is applied
        void indoforall_worker_detalis_section.offsetWidth;

        // Fade in the section
        indoforall_worker_detalis_section.style.opacity = "1";

        // Loop through the array to create worker cards
        arrayName.forEach((item) => {
            let { workerImg, workerVideo } = item;

            let workerCard = document.createElement("div");
            workerCard.classList.add("indoforall_worker_type_card");

            workerCard.innerHTML = `
                <div onclick="indoforall_showCardsDetails( '${cardCounter}', '${workerImg}', '${workerVideo}');">
                    <h2>${cardCounter}</h2>
                    <img src=${workerImg} alt="استقدام من اندونيسيا - اندو للجميع" title="استقدام من اندونيسيا - اندو للجميع" srcset="${workerImg} 480w, ${workerImg} 768w, ${workerImg} 1200w" sizes="(max-width: 768px) 100vw, 50vw" loading="lazy">
                </div>
            `;

            /* Append The 'workerCard' To the 'indoforall_worker_cards_div' */
            indoforall_worker_cards_div.appendChild(workerCard);

            cardCounter++;
        });

        indoforall_worker_details_text.scrollIntoView({
            block: "center",
            inline: "center",
            behavior: "smooth",
        });

        // Add horizontal scrolling functionality
        document.getElementById("indoforall_worker_cards_div").addEventListener("mousedown", function (event) {
            if (event.button === 0) {
                // Check if left mouse button is clicked
                this.classList.add("grabbing"); // Add grabbing cursor style
                this.dataset.scrollX = this.scrollLeft; // Store initial scrollLeft position
                this.dataset.clientX = event.clientX; // Store initial clientX position

                let onMouseMove = function (event) {
                    let deltaX = event.clientX - parseInt(this.dataset.clientX); // Calculate delta X
                    this.scrollLeft = parseInt(this.dataset.scrollX) - deltaX; // Adjust scrollLeft position
                }.bind(this);

                let onMouseUp = function () {
                    this.classList.remove("grabbing"); // Remove grabbing cursor style
                    window.removeEventListener("mousemove", onMouseMove); // Remove event listeners
                    window.removeEventListener("mouseup", onMouseUp);
                }.bind(this);

                window.addEventListener("mousemove", onMouseMove); // Listen for mouse movement
                window.addEventListener("mouseup", onMouseUp); // Listen for mouse release
            }
        });
    };

    /* Function To Create Filter Worker Type Data Message From Worker Details Button */
    indoforall_chooseWorkerTypeDataFunction = function (workerTypeName) {
        // Disable scrolling
        document.documentElement.style.overflow = "hidden";

        /* Save The Text Based on The 'workerTypeName' Value */
        let workerTypeNameVariable;

        /* Based on The 'workerTypeName' Value Save The Content Inside This Variable */
        let indoforall_filterWorkerCityType;

        /* Based on The Passed 'workerTypeName' Value Set The Name of Worker Type Data */
        if (workerTypeName === "home") {
            workerTypeNameVariable = "عاملة منزلية";
            indoforall_filterWorkerCityType = `
            <h3>السعر</h3>
            <h4>استقدام عاملة منزلية = 18,500 ريال سعودي</h4>
        `;
        } else if (workerTypeName === "driver") {
            workerTypeNameVariable = "سائق خاص";
            indoforall_filterWorkerCityType = `
            <h3>السعر</h3>
            <h4>استقدام سائق خاص = 7,000 ريال سعودي</h4>
        `;
        } else {
            workerTypeNameVariable = workerTypeName === "hair" ? "كوفيرة" : workerTypeName === "sewing" ? "خياطة" : "ممرضة";
            indoforall_filterWorkerCityType = `
            <h3>السعر</h3>
            <h4>فيزة عمالة مهنية = 18,500 ريال سعودي</h4>
        `;
        }

        /* Create The Filter Worker Type Data Content */
        let filterWorkerTypeDataDivOverlay = document.createElement("div");
        filterWorkerTypeDataDivOverlay.id = "indoforall_filter_worker_type_overlay";

        let filterWorkerTypeDataDiv = document.createElement("div");
        filterWorkerTypeDataDiv.id = "indoforall_filter_worker_type_div";

        let filterWorkerTypeDataContent = document.createElement("div");
        filterWorkerTypeDataContent.innerHTML = `
            <div id='indoforall_filter_worker_type_title'>
                <h3>طلب استقدام ${workerTypeNameVariable}</h3>
            </div>

            <div id="indoforall_filter_worker_visa_type"></div>

            <div id="indoforall_filter_worker_city_type">
                <h3>استقدام الى</h3>
                <textarea placeholder="اسم المدينة" maxlength="30"></textarea>
            </div>

            <div id="indoforall_submit_filter_worker_type">
                <h5 onclick="indoforall_workerTypeWhatsAppMessageFunction()">إرسال</h5>
                <h5 id="indoforall_cancel_worker_data_message_button">إلغاء</h5>
            </div>
        `;

        /* Append The Elements in Each Other */
        filterWorkerTypeDataDiv.appendChild(filterWorkerTypeDataContent);
        filterWorkerTypeDataDivOverlay.appendChild(filterWorkerTypeDataDiv);
        document.body.appendChild(filterWorkerTypeDataDivOverlay);
        indoforall_filter_worker_visa_type.innerHTML = indoforall_filterWorkerCityType; // Update this line

        /* Re-enable Scrolling And Remove The 'filterWorkerTypeDataDivOverlay' Element */
        indoforall_cancel_worker_data_message_button.onclick = function () {
            // Re-enable Scrolling
            document.documentElement.style.overflow = "auto";

            // Remove the filterWorkerTypeDataDivOverlay
            document.body.removeChild(filterWorkerTypeDataDivOverlay);
        };

        /* Function To Create Final WhatsApp Message Based on Worker Type Data Selected */
        indoforall_workerTypeWhatsAppMessageFunction = function () {
            // Get the text from the textarea
            let cityName = document.querySelector("#indoforall_filter_worker_city_type textarea").value;

            if (cityName === "") {
                alert("يرجى التأكد من كتابة اسم المدينة");
            } else {
                // Get today's date
                let today = new Date();
                let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

                // Create the final message with all the details
                let finalMessage = `طلب جديد استقدام ${workerTypeNameVariable} من اندونيسيا\n`;
                finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Add today's date

                /* Based on The Passed 'workerTypeName' Value Set The Name of Worker Type Data */
                if (workerTypeNameVariable === "عاملة منزلية") {
                    finalMessage += `السعر: 18,500 ريال سعودي\n`;
                } else if (workerTypeNameVariable === "سائق خاص") {
                    finalMessage += `السعر: 7,000 ريال سعودي\n`;
                } else {
                    finalMessage += `نوع الفيزا: فيزة عمالة مهنية\n`;
                    finalMessage += `السعر: 18,500 ريال سعودي\n`;
                }

                finalMessage += `استقدام الى: ${cityName}\n\n`;
                finalMessage += `شركة استقدام اندو للجميع`;

                // Encode the message using encodeURIComponent
                let encodedMessage = encodeURIComponent(finalMessage);

                // Create the WhatsApp URL
                let whatsappURL = `https://wa.me/966509465975?text=${encodedMessage}`;

                // Open WhatsApp in a new window
                window.open(whatsappURL, "_blank");
            }
        };
    };
}

/* in Case If The Element With The Id Name 'indoforall_worker_detalis_section' Exsist Then Show Cards Details On Ovelay Layer */
if (document.getElementById("indoforall_worker_detalis_section")) {
    /* Hide The 'indoforall_worker_detalis_section' Element in Everytime Users Visit This 'index.html' Page */
    document.getElementById("indoforall_worker_detalis_section").style.display = "none";

    function indoforall_showCardsDetails(cardCounter, workerImg, workerVideo) {
        /* Create Overlay For Show Workers Card Detals */
        let fullscreenoverlay = document.createElement("div");
        fullscreenoverlay.classList.add("indoforall_full_screen_overlay");
        fullscreenoverlay.style.display = "flex";

        /* Create A Button To Exit Worker Card Details */
        let fullScreenOverlayExitButton = document.createElement("a");
        fullScreenOverlayExitButton.classList.add("indoforall_full_screen_overlay_exit_button");
        fullScreenOverlayExitButton.innerText = "عودة";

        /* Create The Elements With Their Info */
        let FullScreencardCounter = document.createElement("h1");
        FullScreencardCounter.innerHTML = "عمالة اندونيسية رقم " + cardCounter;

        let FullScreenWorkerImg = document.createElement("img");
        FullScreenWorkerImg.src = workerImg;
        FullScreenWorkerImg.srcset = `${workerImg} 480w, ${workerImg} 768w, ${workerImg} 1200w`;
        FullScreenWorkerImg.sizes = "(max-width: 768px) 100vw, 50vw";
        FullScreenWorkerImg.loading = "lazy";
        FullScreenWorkerImg.alt = "استقدام من اندونيسيا - اندو للجميع";
        FullScreenWorkerImg.title = "استقدام من اندونيسيا - اندو للجميع";
        FullScreenWorkerImg.onclick = function () {
            indoforall_show_full_screen_image(workerImg);
        };

        let FullScreenWorkerVideo = document.createElement("video");
        FullScreenWorkerVideo.src = workerVideo;
        FullScreenWorkerVideo.setAttribute("controls", true);
        FullScreenWorkerVideo.setAttribute("title", "استقدام من اندونيسيا - اندو للجميع");
        FullScreenWorkerVideo.setAttribute("preload", "metadata"); // Load only metadata initially
        FullScreenWorkerVideo.setAttribute("poster", workerImg); // Set a poster image for better user experience

        /* Append All Elements Inside The 'fullscreenoverlay' ELement */
        fullscreenoverlay.appendChild(fullScreenOverlayExitButton);
        fullscreenoverlay.appendChild(FullScreencardCounter);
        fullscreenoverlay.appendChild(FullScreenWorkerImg);
        fullscreenoverlay.appendChild(FullScreenWorkerVideo);

        /* Hide And Show Diffrenet Sections */
        indoforall_header.style.display = "none";
        indoforall_clint_rate_section.style.display = "none";
        indoforall_choose_worker_type_section.style.display = "none";
        indoforall_worker_detalis_section.style.display = "none";
        indoforall_main_page_section.style.display = "none";
        indoforall_footer.style.display = "none";
        document.body.appendChild(fullscreenoverlay);

        /* Scroll Up Once Clicked on Any Card */
        window.scrollTo({ top: 0 });

        /* Function To Exit Worker Card Details */
        fullScreenOverlayExitButton.onclick = function () {
            indoforall_header.style.display = "block";
            indoforall_clint_rate_section.style.display = "flex";
            indoforall_choose_worker_type_section.style.display = "flex";
            indoforall_worker_detalis_section.style.display = "flex";
            indoforall_main_page_section.style.display = "flex";
            indoforall_footer.style.display = "flex";

            fullscreenoverlay.innerHTML = "";
            fullscreenoverlay.style.display = "none";

            /* Scoll Back The 'indoforall_worker_cards_div' Element After Exiting The Worker Card Details Page */
            indoforall_worker_cards_div.scrollIntoView({
                block: "center",
                inline: "center",
            });
        };
    }
}

/* In Case if The 'indoforall_price_section' Elemenet Exist Then Create The Following Code */
if (document.getElementById("indoforall_price_section")) {
    /* Function To Filter Worker Type Data Content */
    indoforall_filterWorkerTypeBasedOnVisaFunction = function (clickedWorkerVisaTypeTitle, clickedWorkerVisaTypeMessage) {
        // Disable scrolling
        document.documentElement.style.overflow = "hidden";

        /* Store The Clicked Worker Visa Type */
        let clickedWorkerVisaTypeVariable = clickedWorkerVisaTypeTitle.innerText;

        /* Store The Clicked Worker Visa Type */
        let availableWorkerVisaTypeVariable;

        /* Based on The Passed 'clickedWorkerVisaTypeMessage' Value Create A Spicific Content */
        if (clickedWorkerVisaTypeMessage === "استقدام عاملة منزلية = 18,500 ريال سعودي") {
            availableWorkerVisaTypeVariable = `
                <h4 onclick="indoforall_filterWorkerTypeDataFunction('home', '${clickedWorkerVisaTypeMessage}')">عاملة منزلية</h4>
                <h4 onclick="indoforall_filterWorkerTypeDataFunction('driver', 'استقدام سائق خاص = 7,000 ريال سعودي')">سائق خاص</h4>
                <h4 onclick="indoforall_whatsApp()">خيارات اخرى؟ تواصل معنا على الواتس</h4>
            `;
        } else if (clickedWorkerVisaTypeMessage === "استقدام سائق خاص = 7,000 ريال سعودي") {
            availableWorkerVisaTypeVariable = `
                <h4 onclick="indoforall_filterWorkerTypeDataFunction('driver', '${clickedWorkerVisaTypeMessage}')">سائق خاص</h4>
                <h4 onclick="indoforall_whatsApp()">خيارات اخرى؟ تواصل معنا على الواتس</h4>
            `;
        } else if (clickedWorkerVisaTypeMessage === "فيزة عمالة مهنية = 18,500 ريال سعودي") {
            availableWorkerVisaTypeVariable = `
                <h4 onclick="indoforall_filterWorkerTypeDataFunction('driver', '${clickedWorkerVisaTypeMessage}')">سائق خاص</h4>
                <h4 onclick="indoforall_filterWorkerTypeDataFunction('hair', '${clickedWorkerVisaTypeMessage}')">كوفيرة</h4>
                <h4 onclick="indoforall_filterWorkerTypeDataFunction('sewing', '${clickedWorkerVisaTypeMessage}')">خياطة</h4>
                <h4 onclick="indoforall_filterWorkerTypeDataFunction('nurse', '${clickedWorkerVisaTypeMessage}')">ممرضة</h4>
                <h4 onclick="indoforall_whatsApp()">خيارات اخرى؟ تواصل معنا على الواتس</h4>
            `;
        }

        /* Create The Filter Worker Type Data Content */
        let filterWorkerTypeDataDivOverlay = document.createElement("div");
        filterWorkerTypeDataDivOverlay.id = "indoforall_filter_worker_type_overlay";

        let filterWorkerTypeDataDiv = document.createElement("div");
        filterWorkerTypeDataDiv.id = "indoforall_filter_worker_type_div";

        let filterWorkerTypeDataContent = document.createElement("div");
        filterWorkerTypeDataContent.innerHTML = `
            <div id='indoforall_filter_worker_type_title'>
                <h3>${clickedWorkerVisaTypeVariable}</h3>
            </div>

            <div id="indoforall_filter_worker_work_type">
                <h3>اختار نوع العمالة</h3>

                <div id="indoforall_filter_worker_work_type_options"></div>
                
            </div>

            <div id="indoforall_submit_filter_worker_type">
                <h5 id="indoforall_cancel_worker_data_message_button">إلغاء</h5>
            </div>
        `;

        /* Append The Elements in Each Other */
        filterWorkerTypeDataDiv.appendChild(filterWorkerTypeDataContent);
        filterWorkerTypeDataDivOverlay.appendChild(filterWorkerTypeDataDiv);
        document.body.appendChild(filterWorkerTypeDataDivOverlay);
        indoforall_filter_worker_work_type_options.innerHTML = availableWorkerVisaTypeVariable;

        // Show overlay and content with animation
        setTimeout(() => {
            filterWorkerTypeDataDivOverlay.classList.add("show");
            filterWorkerTypeDataDiv.classList.add("show");
        }, 10);

        // Close overlay on cancel button click
        document.querySelector("#indoforall_cancel_worker_data_message_button").onclick = function () {
            // Remove 'show' class to trigger fade-out animation
            filterWorkerTypeDataDiv.classList.remove("show");
            filterWorkerTypeDataDivOverlay.classList.remove("show");

            // Wait for animation to complete before removing the overlay
            setTimeout(() => {
                document.documentElement.style.overflow = "auto";
                document.body.removeChild(filterWorkerTypeDataDivOverlay);
            }, 500); // Matches the CSS transition duration
        };

        /* Function To Filter Worker Type Data */
        indoforall_filterWorkerTypeDataFunction = function (workerTypeName, workerVisaTypeMessage) {
            /* Append The Elements in Each Other */
            indoforall_filter_worker_type_div.innerHTML = "";
            indoforall_filter_worker_type_overlay.removeChild(indoforall_filter_worker_type_div);
            document.body.removeChild(indoforall_filter_worker_type_overlay);

            /* Save The Text Based on The workerType Value */
            let workerTypeNameVariable;

            /* Based on The Passed 'workerTypeName' Value Set The Name of Worker Type Data */
            if (workerTypeName === "home") {
                workerTypeNameVariable = "عاملة منزلية";
            } else if (workerTypeName === "driver") {
                workerTypeNameVariable = "سائق خاص";
            } else if (workerTypeName === "hair") {
                workerTypeNameVariable = "كوفيرة";
            } else if (workerTypeName === "sewing") {
                workerTypeNameVariable = "خياطة";
            } else if (workerTypeName === "nurse") {
                workerTypeNameVariable = "ممرضة";
            }

            /* Create The Content For The Worker Type Data Content */
            let filterWorkerTypeDataContent = document.createElement("div");
            filterWorkerTypeDataContent.innerHTML = `
                <div id='indoforall_filter_worker_type_title'>
                    <h3>طلب استقدام ${workerTypeNameVariable}</h3>
                </div>

                <div id="indoforall_filter_worker_visa_type">
                    <h3>السعر</h3>
                    <h4>${workerVisaTypeMessage}</h4>
                </div>

                <div id="indoforall_filter_worker_city_type">
                    <h3>استقدام الى</h3>
                    <textarea placeholder="اسم المدينة" maxlength="30"></textarea>
                </div>

                <div id="indoforall_submit_filter_worker_type">
                    <h5 onclick="indoforall_workerTypeWhatsAppMessageFunction()">إرسال</h5>
                    <h5 onclick="indoforall_cancelFilterWorkerTypeData()">إلغاء</h5>
                </div>
            `;

            /* Append The Elements in Each Other */
            filterWorkerTypeDataDiv.appendChild(filterWorkerTypeDataContent);
            filterWorkerTypeDataDivOverlay.appendChild(filterWorkerTypeDataDiv);
            document.body.appendChild(filterWorkerTypeDataDivOverlay);

            /* Re-enable Scrolling And Remove The 'filterWorkerTypeDataDivOverlay' Elemenet */
            indoforall_cancelFilterWorkerTypeData = function () {
                // Re-enable Scrolling
                document.documentElement.style.overflow = "auto";

                document.body.removeChild(filterWorkerTypeDataDivOverlay);
            };

            /* Function To Create Final WhatsApp Message Based on Worker Type Data Selected */
            indoforall_workerTypeWhatsAppMessageFunction = function () {
                // Get the text from the textarea
                let cityName = document.querySelector("#indoforall_filter_worker_city_type textarea").value;

                if (cityName === "") {
                    alert("يرجى التأكد من كتابة اسم المدينة");
                } else {
                    // Get today's date
                    let today = new Date();
                    let formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

                    // Create the final message with all the details
                    let finalMessage = `طلب جديد استقدام ${workerTypeNameVariable} من اندونيسيا\n`;
                    finalMessage += `تاريخ إرسال الطلب: ${formattedDate}\n\n`; // Add today's date

                    /* Based on The 'workerTypeNameVariable' Value Create The WhatsApp Message*/
                    if (workerTypeNameVariable === "عاملة منزلية") {
                        finalMessage += `السعر: 18,500 ريال سعودي\n`;
                    } else if (workerTypeNameVariable === "سائق خاص") {
                        finalMessage += `السعر: 7,000 ريال سعودي\n`;
                    } else {
                        finalMessage += `نوع الفيزا: فيزة عمالة مهنية\n`;
                        finalMessage += `السعر: 18,500 ريال سعودي\n`;
                    }

                    finalMessage += `استقدام الى: ${cityName}\n\n`;
                    finalMessage += `شركة استقدام اندو للجميع`;

                    // Encode the message using encodeURIComponent
                    let encodedMessage = encodeURIComponent(finalMessage);

                    // Create the WhatsApp URL
                    let whatsappURL = `https://wa.me/966509465975?text=${encodedMessage}`;

                    // Open WhatsApp in a new window
                    window.open(whatsappURL, "_blank");
                }
            };
        };
    };
}

// in Case If The Element With The Id Name 'indoforall_common_question_section' Exsist Then Go through each item in the 'data' value array 'indoforall_questionAndAnswerArray'
if (document.getElementById("indoforall_common_question_section")) {
    indoforall_questionAndAnswerArray.forEach((item) => {
        // Get all the properties from each item in the object from the array
        let { questionText, answerText } = item;

        // Create a new div element for the Questions And Answers
        let indoforall_QuestionDiv = document.createElement("div");
        indoforall_QuestionDiv.classList.add("indoforall_QuestionDiv");

        // Create the HTML content for the Questions And Answers Elements
        indoforall_QuestionDiv.innerHTML = `
            <h2 class="indoforall_QuestionText">${questionText}</h2>
            <h3 class="indoforall_AnswerText">${answerText}</h3>
    `;

        // Append the 'indoforall_QuestionDiv' element inside the 'indoforall_question_area'
        document.getElementById("indoforall_question_area").appendChild(indoforall_QuestionDiv);
    });
}

// Define cardCounter outside the loop
/* Uniqe Number For Each Card */
let cardCounter = 1;

/* Keep Tracking The Playing Video So Then Other Videos Get Paused */
let currentVideo = null;

// in Case If The Element With The Id Name 'indoforall_proof_section' Exsist Then Go through each item in the 'data' value array 'indoforall_proofVideosArray'
if (document.getElementById("indoforall_proof_section")) {
    indoforall_proofVideosArray.forEach((item) => {
        const { imgSrc, videoSrc } = item;

        // Create the card container div
        const ProofVideoDiv = document.createElement("div");
        ProofVideoDiv.id = "indoforall_worker_card_proof_card";
        ProofVideoDiv.className = "indoforall_worker_proof_card";

        // Generate the content dynamically based on 'imgSrc' or 'videoSrc'
        let content = `<h2>${cardCounter}</h2>`;
        if (imgSrc) {
            content += `
                <img 
                    src="${imgSrc}" 
                    srcset="${imgSrc} 480w, ${imgSrc} 768w, ${imgSrc} 1200w" 
                    sizes="(max-width: 768px) 100vw, 50vw" 
                    loading="lazy" 
                    alt="استقدام من اندونيسيا - اندو للجميع" 
                    title="استقدام من اندونيسيا - اندو للجميع" 
                    onclick="indoforall_show_full_screen_image(this.src)">
            `;
        } else if (videoSrc) {
            content += `
                <video 
                    src="${videoSrc}" 
                    controls 
                    preload="metadata" 
                    title="استقدام من اندونيسيا - اندو للجميع" 
                    poster="${imgSrc || ""}">
                </video>
            `;
            ProofVideoDiv.onclick = () => {
                // Pause currently playing video
                if (currentVideo && currentVideo !== ProofVideoDiv.querySelector("video")) {
                    currentVideo.pause();
                }
                currentVideo = ProofVideoDiv.querySelector("video");
            };
        }

        // Set the inner HTML of the div
        ProofVideoDiv.innerHTML = content;

        // Increment card counter
        cardCounter++;

        // Append the new card to the proof area
        indoforall_proof_area.appendChild(ProofVideoDiv);
    });

    // Horizontal scrolling functionality
    const proofArea = document.getElementById("indoforall_proof_area");
    proofArea.addEventListener("mousedown", (event) => {
        if (event.button !== 0) return; // Only proceed for the left mouse button

        proofArea.classList.add("grabbing");
        const initialScrollX = proofArea.scrollLeft;
        const initialClientX = event.clientX;

        const onMouseMove = (moveEvent) => {
            const deltaX = moveEvent.clientX - initialClientX;
            proofArea.scrollLeft = initialScrollX - deltaX;
        };

        const onMouseUp = () => {
            proofArea.classList.remove("grabbing");
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    });
}

/* in Case If The Element With The Id Name 'indoforall_accounts_section' Exsist Then Create Function For Creating Ads Videos & Images Content */
if (document.getElementById("indoforall_accounts_section")) {
    indoforall_adsVideosArray.forEach((item) => {
        /* Get The Array Properties */
        let { imgSrc, videoSrc, videoThumbnailSrc } = item;

        /* Create The Card Container Div */
        let AdsVideoDiv = document.createElement("div");
        AdsVideoDiv.classList.add("indoforall_ads_only_videos_div");

        let AdsImgDiv = document.createElement("div");
        AdsImgDiv.classList.add("indoforall_ads_only_img_div");

        /* Create A Variable To Store The Inner HTML Code */
        let AdsVideoInfo;
        let AdsImgInfo;

        /* Check If The Object Has 'imgSrc' Or 'videoSrc' And Based On it, It Will Show Different Code */
        if (imgSrc) {
            /* Create The HTML Content For The Images */
            AdsImgInfo = `
            <img src=${imgSrc} alt="استقدام من اندونيسيا - اندو للجميع" title="استقدام من اندونيسيا - اندو للجميع" onclick="indoforall_show_full_screen_image(this.src)" srcset="${imgSrc} 480w, ${imgSrc} 768w, ${imgSrc} 1200w" sizes="(max-width: 768px) 100vw, 50vw" loading="lazy">
        `;

            /* Set The InnerHTML Code For the 'AdsVideoDiv' */
            AdsImgDiv.innerHTML = AdsImgInfo;

            /* Append The 'AdsVideoDiv' To the 'indoforall_ads_videos_and_img_div' */
            indoforall_ads_videos_and_img_div.appendChild(AdsImgDiv);
        } else if (videoSrc) {
            /* Create The HTML Content For The Videos */
            AdsVideoInfo = `
                <img src=${videoThumbnailSrc} alt="استقدام من اندونيسيا - اندو للجميع"  title="استقدام من اندونيسيا - اندو للجميع" class="indoforall_ads_thumbnail_img" srcset="${videoThumbnailSrc} 480w, ${videoThumbnailSrc} 768w, ${videoThumbnailSrc} 1200w" sizes="(max-width: 768px) 100vw, 50vw" loading="lazy">
                <video src=${videoSrc} controls title="استقدام من اندونيسيا - اندو للجميع" class="indoforall_ads_orignal_video" preload="metadata"></video>
            `;

            /* Set The InnerHTML Code For the 'AdsVideoDiv' */
            AdsVideoDiv.innerHTML = AdsVideoInfo;

            /* Append The 'AdsVideoDiv' To the 'indoforall_ads_videos_and_img_div' */
            indoforall_ads_videos_and_img_div.appendChild(AdsVideoDiv);

            /* Get The Elements So You Can Use it Later */
            let orignalVideos = document.getElementsByClassName("indoforall_ads_orignal_video");
            let thumbnailImages = document.getElementsByClassName("indoforall_ads_thumbnail_img");

            for (let i = 0; i < orignalVideos.length; i++) {
                orignalVideos[i].addEventListener("play", function () {
                    // Pause other videos
                    for (let j = 0; j < orignalVideos.length; j++) {
                        if (j !== i) {
                            orignalVideos[j].pause();
                            thumbnailImages[j].style.opacity = 1; // Make thumbnail visible
                        }
                    }
                    thumbnailImages[i].style.opacity = 0; // Hide thumbnail of the playing video
                });
            }
        }
    });
}

function indoforall_websiteGuidance() {
    // Disable scrolling
    document.documentElement.style.overflow = "hidden";

    // Create A Div To Contain The Big Image
    let FullScreenGuidanceOverlay = document.createElement("div");
    FullScreenGuidanceOverlay.classList.add("indoforall_full_screen_guidance_overlay");

    // Create A Button To Exit The Big Image Page
    let fullScreenOverlayExitButton = document.createElement("a");
    fullScreenOverlayExitButton.classList.add("indoforall_full_screen_overlay_exit_button");
    fullScreenOverlayExitButton.innerText = "عودة";

    // Create Website Guidance Content
    let webGuidanceDiv = document.createElement("div");
    webGuidanceDiv.classList.add("web_guidance_div");

    let webGuidanceText = `
        <a itemprop="url" href="https://indoforall.com">1- في الصفحة الرئيسية اختار نوع العمالة الاندونيسية.</a>
        <a itemprop="url" title="اسعار الاستقدام من اندونيسيا - اندو للجميع" href="https://indoforall.com/%D8%A7%D8%B3%D8%B9%D8%A7%D8%B1-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85-%D9%85%D9%86-%D8%A7%D9%86%D8%AF%D9%88%D9%86%D9%8A%D8%B3%D9%8A%D8%A7">2- بعد اختيار نوع العمالة، خذ نظرة على اسعار الاستقدام ومدة إنجاز العمل.</a>
        <a onclick="indoforall_whatsApp()">3- اخيرا، تواصل معنا لطلب الاستقدام او للمزيد من المعلومات والنصائح.</a>
        <a itemprop="url" title="اسئلة الاستقدام من اندونيسيا - اندو للجميع" href="https://indoforall.com/%D8%A7%D8%B3%D8%A6%D9%84%D8%A9-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85-%D9%85%D9%86-%D8%A7%D9%86%D8%AF%D9%88%D9%86%D9%8A%D8%B3%D9%8A%D8%A7" id="indoforall_web_guidance_note_text">ملاحظة: اذا كنت تبحث عن معلومات أكثر اذهب لصفحة الأسئلة الشائعة او تواصل معنا على الواتس.</a>
    `;

    // Append All The elements inside 'FullScreenGuidanceOverlay'
    webGuidanceDiv.innerHTML = webGuidanceText;
    FullScreenGuidanceOverlay.appendChild(webGuidanceDiv);
    FullScreenGuidanceOverlay.appendChild(fullScreenOverlayExitButton);

    document.body.appendChild(FullScreenGuidanceOverlay);

    // Trigger fade-in
    setTimeout(() => {
        FullScreenGuidanceOverlay.classList.add("active");
        webGuidanceDiv.classList.add("active");
    }, 50);

    // Function To Exit The Big Image Page
    fullScreenOverlayExitButton.onclick = function () {
        // Re-enable scrolling
        document.documentElement.style.overflow = "auto";

        // Trigger fade-out
        FullScreenGuidanceOverlay.classList.remove("active");
        webGuidanceDiv.classList.remove("active");

        // Remove the overlay after transition
        setTimeout(() => {
            if (document.body.contains(FullScreenGuidanceOverlay)) {
                document.body.removeChild(FullScreenGuidanceOverlay);
            }
        }, 500);
    };
}

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

document.getElementById("indoforall_nav").onclick = (event) => {
    event.stopPropagation();
    indoforall_showNavOptions();
};

document.getElementById("indoforall_close_nav").onclick = (event) => {
    event.stopPropagation();
    indoforall_hideNavOptions();
};

document.addEventListener("click", (event) => {
    if (!indoforall_nav_options.contains(event.target) && event.target !== indoforall_close_nav) {
        indoforall_hideNavOptions();
    }
});

/* Insert new click data in the google sheet */
function insertNewClick(columnName) {
    const scriptURL = "https://script.google.com/macros/s/AKfycbyU-p7z3tHF0I1K0GCmjcRG3CaG0NPkGyMPTvhlGPISxwIYrt6ueD7O2iHSza9SPOP3/exec";

    // Trim the column name before passing it
    fetch(`${scriptURL}?columnName=${encodeURIComponent(columnName.trim())}`)
        .then((response) => response.text())
        .then((data) => console.log("Response:", data))
        .catch((error) => console.error("Error:", error));
}

/* Open WhatsApp Chat */
function indoforall_whatsApp() {
    insertNewClick("indoforall.com");

    // Create the WhatsApp URL with the phone number.
    let whatsappURL = "https://wa.me/+966509465975";

    // Open the WhatsApp chat window in a new tab.
    window.open(whatsappURL, "_blank");
}

/* Open Gmail Contact */
function indoforall_gmail() {
    let mailtoLink = "mailto:indoforall.office@gmail.com";

    window.location.href = mailtoLink;
}

/* Open Loation Address */
function indoforall_location() {
    // Address to search on Google Maps
    let address = "Jl. Mandalawangi No.7, RT.04/RW.04, Babakan, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16128";

    // Encode the address to be used in the URL
    let encodedAddress = encodeURIComponent(address);

    // Construct the Google Maps URL
    let mapsUrl = "https://www.google.com/maps?q=" + encodedAddress;

    // Open the Google Maps link in a new tab/window
    window.open(mapsUrl, "_blank");
}
