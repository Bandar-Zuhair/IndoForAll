// Your Supabase credentials
const supabaseUrl = "https://dkerfetnaquggtlpicul.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrZXJmZXRuYXF1Z2d0bHBpY3VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3ODY5MDUsImV4cCI6MjA2MjM2MjkwNX0.GMEkAcx_SWTjV_TdlhQNXzIzh9mDM_L2h8SaLXllQsw"; // use public key
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

/* Page Load body Fade Animation */
setTimeout(function () {
    document.getElementById("indoforall-body").style.opacity = "1";
}, 100);

// Scroll event handler
function handleScroll() {
    const currentScrollPosition = window.scrollY;
    const header = document.getElementById("indoforall-header");

    if (currentScrollPosition > lastScrollPosition) {
        // Scrolling down
        header.classList.add("hidden");
    } else {
        // Scrolling up
        header.classList.remove("hidden");
    }

    lastScrollPosition = currentScrollPosition;
}

// Attach scroll event initially
let lastScrollPosition = 0;
window.addEventListener("scroll", handleScroll);

/* Create An Array of Different Worker Types Cards Data */
let indoforall_homeWorkerArray = [
    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-1.webp",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-2.webp",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-3.webp",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-4.webp",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-5.webp",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-6.webp",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-7.webp",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-8.webp",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-9.webp",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-10.webp",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-11.webp",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-12.webp",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-13.webp",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-14.webp",
    },

    {
        workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-15.webp",
    },
];
let indoforall_driveWorkerArray = [];
let indoforall_hairWorkerArray = [
    {
        workerImg: "استقدام-كوفيرة/استقدام-كوفيرة-1.webp",
    },

    {
        workerImg: "استقدام-كوفيرة/استقدام-كوفيرة-2.webp",
    },
];
let indoforall_sewingWorkerArray = [
    {
        workerImg: "استقدام-خياطة/استقدام-خياطة-1.webp",
    },

    {
        workerImg: "استقدام-خياطة/استقدام-خياطة-2.webp",
    },

    {
        workerImg: "استقدام-خياطة/استقدام-خياطة-3.webp",
    },
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
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-1.webp",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-2.webp",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-3.webp",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-4.webp",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-5.webp",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-6.webp",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-7.webp",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-8.webp",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-9.webp",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-10.webp",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-11.webp",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-12.webp",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-13.webp",
    },

    {
        imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-14.webp",
    },
];

/* Array For Ads Videos/Images Use Only (imgSrc - videoSrc - videoThumbnailSrc) Words */
let indoforall_adsVideosArray = [
    {
        imgSrc: "استقدام-من-اندونيسيا/استقدام-عمالة-اندونيسية.webp",
    },

    {
        videoSrc: "استقدام-اندونيسيا/استقدام-من-اندونيسيا.mp4",
        videoThumbnailSrc: "استقدام-اندونيسيا/استقدام-من-اندونيسيا.webp",
    },

    {
        imgSrc: "استقدام-اندونيسيا/استقدام-من-اندونيسيا.webp",
    },
];

// Function to update header height CSS custom property and intro section height
function updateHeaderHeight() {
    const header = document.querySelector("header");
    const introSection = document.querySelector(".intro-section");

    if (header) {
        const headerHeight = header.offsetHeight;
        document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);

        // Also directly set the intro section height as a fallback
        if (introSection) {
            const windowHeight = window.innerHeight;
            const newHeight = windowHeight - headerHeight;
            introSection.style.height = `${newHeight}px`;
            introSection.style.minHeight = `${newHeight}px`;
        }
    }
}

updateHeaderHeight();

// Function to initialize intro section with images from JSON data
function initializeIntroSection() {
    const headlines = document.querySelectorAll("#indoforall-web-intro-1, #indoforall-web-intro-3, .indoforall-web-intro-contact-us, #indoforall-website-guidance-text, #indoforall-request-worker-now-button, #indoforall-orbit-container-id");
    const scrollHint = document.getElementById("scrollHint");

    setTimeout(() => {
        let delay = 0;
        const duration = 600; // ms, should match your CSS transition duration

        headlines.forEach((headline, idx) => {
            setTimeout(() => {
                headline.classList.add("active", "in-view");
            }, delay);
            delay += duration;
        });

        // Animate scrollHint after all headlines
        setTimeout(() => {
            if (scrollHint) scrollHint.classList.add("active");
            // Animate scroll-note-btn after all
            const scrollNoteBtn = document.getElementById("scroll-note-btn");
            if (scrollNoteBtn) {
                setTimeout(() => {
                    scrollNoteBtn.classList.add("active", "in-view");
                }, duration);
            }
        }, delay);
    }, 600);

    // Return cleanup function
    return () => {
        // No interval to clear, so nothing needed here
    };
}

initializeIntroSection();

/* Function For Showing Full Screen Images */
function indoforall_show_full_screen_image(src) {
    // Disable scrolling
    document.documentElement.style.overflow = "hidden";

    /* Create A Div To Contain The Big Image or Video */
    let FullScreenImgOverlay = document.createElement("div");
    FullScreenImgOverlay.classList.add("indoforall-full-screen-img-overlay");

    /* Create A Button To Exit The Big Image or Video Page */
    let fullScreenOverlayExitButton = document.createElement("a");
    fullScreenOverlayExitButton.classList.add("indoforall-full-screen-overlay-exit-button");
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
    FullScreenImg.classList.add("indoforall-big-img");

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
    filterWorkerTypeDataDivOverlay.id = "indoforall-filter-worker-type-overlay";

    let filterWorkerTypeDataDiv = document.createElement("div");
    filterWorkerTypeDataDiv.id = "indoforall-filter-worker-type-div";

    let filterWorkerTypeDataContent = document.createElement("div");
    filterWorkerTypeDataContent.innerHTML = `
        <div id='indoforall-filter-worker-type-title' class='indoforall-mouse-gradient'>
            <h3>طلب استقدام</h3>
        </div>
        <div id="indoforall-filter-worker-work-type">
            <h3>اختار نوع العمالة</h3>
            <div id="indoforall-filter-worker-work-type-options">
                <h4 onclick="indoforall_chooseWorkerTypeDataFunction('home')">عاملة منزلية</h4>
                <h4 onclick="indoforall_chooseWorkerTypeDataFunction('driver')">سائق خاص</h4>
                <h4 onclick="indoforall_chooseWorkerTypeDataFunction('hair')">كوفيرة</h4>
                <h4 onclick="indoforall_chooseWorkerTypeDataFunction('sewing')">خياطة</h4>
                <h4 onclick="indoforall_chooseWorkerTypeDataFunction('nurse')">ممرضة</h4>
                <h4 onclick="indoforall_whatsApp()">خيارات اخرى؟ تواصل معنا على الواتس</h4>
            </div>
        </div>
        <div id="indoforall-submit-filter-worker-type">
            <h5 id="indoforall-cancel-worker-data-message-button">إلغاء</h5>
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

    /* Call a function to apply the hovering background text functionality */
    enableMouseGradient();

    // Close overlay on cancel button click
    document.querySelector("#indoforall-cancel-worker-data-message-button").onclick = function () {
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
                <h4>استقدام عاملة منزلية = 17,000 ريال سعودي</h4>
            `;
        } else if (workerTypeName === "driver") {
            workerTypeNameVariable = "سائق خاص";
            indoforall_filterWorkerCityType = `
                <h3>السعر</h3>
                <h4>استقدام سائق خاص = 11,500 ريال سعودي</h4>
            `;
        } else if (workerTypeName === "hair") {
            workerTypeNameVariable = "كوفيرة";
            indoforall_filterWorkerCityType = `
                <h3>السعر</h3>
                <h4>فيزة عمالة مهنية = 17,000 ريال سعودي</h4>
            `;
        } else if (workerTypeName === "sewing") {
            workerTypeNameVariable = "خياطة";
            indoforall_filterWorkerCityType = `
                <h3>السعر</h3>
                <h4>فيزة عمالة مهنية = 17,000 ريال سعودي</h4>
            `;
        } else if (workerTypeName === "nurse") {
            workerTypeNameVariable = "ممرضة";
            indoforall_filterWorkerCityType = `
                <h3>السعر</h3>
                <h4>فيزة عمالة مهنية = 17,000 ريال سعودي</h4>
            `;
        }

        /* Create Filter Worker Type Data Content */
        filterWorkerTypeDataContent.innerHTML = `
            <div id='indoforall-filter-worker-type-title' class='indoforall-mouse-gradient'>
                <h3>طلب استقدام ${workerTypeNameVariable}</h3>
            </div>

            <div id="indoforall-filter-worker-visa-type"></div>

            <div id="indoforall-filter-worker-city-type">
                <h3>طلب إستقدام الى</h3>
                <textarea placeholder="إسم المدينة" maxlength="30"></textarea>
            </div>

            <div id="indoforall-submit-filter-worker-type">
                <h5 onclick="indoforall_workerTypeWhatsAppMessageFunction()">إرسال</h5>
                <h5 id="indoforall-cancel-worker-data-message-button">إلغاء</h5>
            </div>
        `;

        /* Append The Elements in Each Other */
        filterWorkerTypeDataDiv.appendChild(filterWorkerTypeDataContent);
        filterWorkerTypeDataDivOverlay.appendChild(filterWorkerTypeDataDiv);
        document.body.appendChild(filterWorkerTypeDataDivOverlay);
        document.getElementById("indoforall-filter-worker-visa-type").innerHTML = indoforall_filterWorkerCityType; // Update this line

        /* Call a function to apply the hovering background text functionality */
        enableMouseGradient();

        /* Re-enable Scrolling And Remove The 'filterWorkerTypeDataDivOverlay' Element */
        document.getElementById("indoforall-cancel-worker-data-message-button").onclick = function () {
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
            let cityName = document.querySelector("#indoforall-filter-worker-city-type textarea").value;

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
                    finalMessage += `السعر: 17,000 ريال سعودي\n`;
                } else if (workerTypeNameVariable === "سائق خاص") {
                    finalMessage += `السعر: 11,500 ريال سعودي\n`;
                } else {
                    finalMessage += `نوع الفيزا: فيزة عمالة مهنية\n`;
                    finalMessage += `السعر: 17,000 ريال سعودي\n`;
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

/* Function for import all comments from google sheet */
if (document.getElementById("indoforall-clint-rate-section") || document.getElementById("indoforall-proof-section")) {
    document.getElementById("indoforall-comment-form").addEventListener("submit", async function (event) {
        event.preventDefault();

        const button = document.getElementById("indoforall-comment-submit-button-id");

        if (button.style.userSelect !== "none") {
            // Disable button
            button.style.userSelect = "none";
            button.style.background = "gray";
            button.innerText = "جاري النشر";

            // Gather input
            let reviewer_name = document.getElementById("indoforall-comment-username").value.trim();
            let comment = document.getElementById("indoforall-comment-text").value.trim();
            let stars = parseInt(document.getElementById("indoforall-comment-stars").value);
            let review_date = new Date().toISOString().split("T")[0];

            const newComment = {
                review_date,
                reviewer_name,
                comment,
                stars,
            };

            try {
                const column = "indoforall";

                // Fetch existing array
                const { data, error: fetchError } = await supabase.from("all_customers_comments").select(column).eq("id", 1).single();

                if (fetchError) throw fetchError;

                const existingArray = data[column] || [];
                const updatedArray = [newComment, ...existingArray]; // Add new comment on top

                // Update table
                const { error: updateError } = await supabase
                    .from("all_customers_comments")
                    .update({ [column]: updatedArray })
                    .eq("id", 1);

                if (updateError) throw updateError;

                document.getElementById("indoforall-comment-form").reset();
                await fetchReviews(); // Reload reviews
                showSuccessNotification();
            } catch (error) {
                console.error("Error submitting comment:", error.message);
            }

            // Re-enable button
            button.style.userSelect = "auto";
            button.style.background = "linear-gradient(to top, rgb(106, 75, 31), rgb(194, 156, 102))";
            button.innerText = "إرسال";
        }
    });

    // Function to Fetch and Display Reviews
    async function fetchReviews() {
        try {
            const column = "indoforall";

            const { data, error } = await supabase.from("all_customers_comments").select(column).eq("id", 1).single();

            if (error) throw error;

            const reviews = data[column] || [];

            let user_clint_rate_area = document.getElementById("indoforall-clint-rate-area");
            user_clint_rate_area.innerHTML = "";

            reviews.forEach((item) => {
                const { review_date, reviewer_name, comment, stars } = item;

                if (!comment.trim()) return;

                let clintRateDiv = document.createElement("div");
                clintRateDiv.classList.add("indoforall-rate-div");

                clintRateDiv.innerHTML = `
                <div class="indoforall-clint-rate-date-div">
                    <h3>${review_date}</h3>
                </div>
                <div class="indoforall-clint-rate-info-div">
                    <img src="استقدام-من-اندونيسيا.webp" alt="استقدام من اندونيسيا - اندو للجميع" title="استقدام من اندونيسيا - اندو للجميع">
                    <h4>${reviewer_name}</h4>
                </div>
                <div class="indoforall-clint-rate-comment-div">
                    <h5>${comment}</h5>
                </div>
                <div class="indoforall-clint-rate-star-div">
                    ${"★".repeat(stars)}
                </div>
                `;

                user_clint_rate_area.appendChild(clintRateDiv);
            });

            // Restore button
            const button = document.getElementById("indoforall-comment-submit-button-id");
            button.style.userSelect = "auto";
            button.style.background = "linear-gradient(to top, rgb(106, 75, 31), rgb(194, 156, 102))";
            button.innerText = "Share";
        } catch (error) {
            console.error("Error fetching reviews:", error.message);
        }
    }

    // Function to Show Floating Success Notification
    function showSuccessNotification() {
        let notification = document.getElementById("indoforall-success-notification");
        notification.style.display = "block";

        setTimeout(() => {
            notification.style.opacity = "1";
            notification.style.transform = "translateX(-50%) translateY(0px)";
        }, 10);

        setTimeout(() => {
            notification.style.opacity = "0";
            notification.style.transform = "translateX(-50%) translateY(10px)";
            setTimeout(() => {
                notification.style.display = "none";
            }, 400);
        }, 3000);
    }

    // Fetch on load
    fetchReviews();
}

/* ArrayName is the name of the Array of The Worker Type Button Clicked */
if (document.getElementById("indoforall-choose-worker-type-section")) {
    indoforall_createWorkerTypeDetalis = function (arrayName) {
        /* Uinque Number For Each Card */
        let cardCounter = 1;

        // Clear existing content
        document.getElementById("indoforall-worker-cards-div").innerHTML = "";

        /* Make A Smooth Fade In When The 'indoforall_worker_details_text' Apear */
        document.getElementById("indoforall-worker-details-text").style.opacity = "0";
        document.getElementById("indoforall-worker-details-text").style.transition = "opacity 0.5s ease-in-out";
        document.getElementById("indoforall-worker-details-text").style.opacity = "1";

        // Remove existing indoforall_workerTypeMessageButton element if it exists
        if (document.getElementById("indoforall-worker-type-message-button")) {
            document.getElementById("indoforall-worker-type-message-button").remove();
        }

        /* Create The Book Worker Now Button in The Worker Details Section */
        let indoforall_workerTypeMessageButton = document.createElement("a");
        indoforall_workerTypeMessageButton.id = "indoforall-worker-type-message-button";
        indoforall_workerTypeMessageButton.classList.add("indoforall-other-pages-link");
        indoforall_workerTypeMessageButton.style.background = "linear-gradient(to right, rgb(106, 75, 31), rgb(194, 156, 102))";

        /* Check Which Button Has Clicked And Based On That Set The InnerText For The 'indoforall_worker_details_text' */
        if (arrayName === indoforall_homeWorkerArray) {
            document.getElementById("indoforall-worker-details-text").innerText = "استقدام عاملة منزلية من اندونيسيا";
            indoforall_workerTypeMessageButton.innerHTML = "طلب استقدام عاملة منزلية";
            indoforall_workerTypeMessageButton.onclick = function () {
                indoforall_chooseWorkerTypeDataFunction("home");
            };
        } else if (arrayName === indoforall_driveWorkerArray) {
            document.getElementById("indoforall-worker-details-text").innerText = "استقدام سائق الخاص من اندونيسيا";
            indoforall_workerTypeMessageButton.innerHTML = "طلب استقدام سائق خاص";
            indoforall_workerTypeMessageButton.onclick = function () {
                indoforall_chooseWorkerTypeDataFunction("driver");
            };
        } else if (arrayName === indoforall_hairWorkerArray) {
            document.getElementById("indoforall-worker-details-text").innerText = "استقدام كوفيرة من اندونيسيا";
            indoforall_workerTypeMessageButton.innerHTML = "طلب استقدام كوفيرة";
            indoforall_workerTypeMessageButton.onclick = function () {
                indoforall_chooseWorkerTypeDataFunction("hair");
            };
        } else if (arrayName === indoforall_sewingWorkerArray) {
            document.getElementById("indoforall-worker-details-text").innerText = "استقدام خياطة من اندونيسيا";
            indoforall_workerTypeMessageButton.innerHTML = "طلب استقدام خياطة";
            indoforall_workerTypeMessageButton.onclick = function () {
                indoforall_chooseWorkerTypeDataFunction("sewing");
            };
        } else if (arrayName === indoforall_doctorWorkerArray) {
            document.getElementById("indoforall-worker-details-text").innerText = "استقدام ممرضة من اندونيسيا";
            indoforall_workerTypeMessageButton.innerHTML = "طلب استقدام ممرضة";
            indoforall_workerTypeMessageButton.onclick = function () {
                indoforall_chooseWorkerTypeDataFunction("nurse");
            };
        }

        /* Append The Content of The Worker Type Title Text */
        document.getElementById("indoforall-worker-details-text-div").appendChild(indoforall_workerTypeMessageButton);

        // Apply fade-in animation
        document.getElementById("indoforall-worker-detalis-section").style.opacity = "0";
        document.getElementById("indoforall-worker-detalis-section").style.transition = "opacity 0.5s ease-in-out";
        document.getElementById("indoforall-worker-detalis-section").style.display = "flex";

        // Trigger reflow to ensure transition is applied
        void document.getElementById("indoforall-worker-detalis-section").offsetWidth;

        // Fade in the section
        document.getElementById("indoforall-worker-detalis-section").style.opacity = "1";

        // Loop through the array to create worker cards
        arrayName.forEach((item) => {
            let { workerImg } = item;

            let workerCard = document.createElement("div");
            workerCard.classList.add("indoforall-worker-type-card");

            workerCard.innerHTML = `
                <div onclick="indoforall_show_full_screen_image('${workerImg}')">
                    <h2>${cardCounter}</h2>
                    <img src=${workerImg} alt="استقدام من اندونيسيا - اندو للجميع" title="استقدام من اندونيسيا - اندو للجميع" srcset="${workerImg} 480w, ${workerImg} 768w, ${workerImg} 1200w" sizes="(max-width: 768px) 100vw, 50vw" loading="lazy">
                </div>
            `;

            /* Append The 'workerCard' To the 'indoforall_worker_cards_div' */
            document.getElementById("indoforall-worker-cards-div").appendChild(workerCard);

            cardCounter++;
        });

        document.getElementById("indoforall-worker-details-text").scrollIntoView({
            block: "center",
            inline: "center",
            behavior: "smooth",
        });

        // Add horizontal scrolling functionality
        document.getElementById("indoforall-worker-cards-div").addEventListener("mousedown", function (event) {
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
    function indoforall_chooseWorkerTypeDataFunction(workerTypeName) {
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
            <h4>استقدام عاملة منزلية = 17,000 ريال سعودي</h4>
        `;
        } else if (workerTypeName === "driver") {
            workerTypeNameVariable = "سائق خاص";
            indoforall_filterWorkerCityType = `
            <h3>السعر</h3>
            <h4>استقدام سائق خاص = 11,500 ريال سعودي</h4>
        `;
        } else {
            workerTypeNameVariable = workerTypeName === "hair" ? "كوفيرة" : workerTypeName === "sewing" ? "خياطة" : "ممرضة";
            indoforall_filterWorkerCityType = `
            <h3>السعر</h3>
            <h4>فيزة عمالة مهنية = 17,000 ريال سعودي</h4>
        `;
        }

        /* Create The Filter Worker Type Data Content */
        let filterWorkerTypeDataDivOverlay = document.createElement("div");
        filterWorkerTypeDataDivOverlay.id = "indoforall-filter-worker-type-overlay";

        let filterWorkerTypeDataDiv = document.createElement("div");
        filterWorkerTypeDataDiv.id = "indoforall-filter-worker-type-div";

        let filterWorkerTypeDataContent = document.createElement("div");
        filterWorkerTypeDataContent.innerHTML = `
            <div id='indoforall-filter-worker-type-title'>
                <h3>طلب استقدام ${workerTypeNameVariable}</h3>
            </div>

            <div id="indoforall-filter-worker-visa-type"></div>

            <div id="indoforall-filter-worker-city-type">
                <h3>استقدام الى</h3>
                <textarea placeholder="اسم المدينة" maxlength="30"></textarea>
            </div>

            <div id="indoforall-submit-filter-worker-type">
                <h5 onclick="indoforall-workerTypeWhatsAppMessageFunction()">إرسال</h5>
                <h5 id="indoforall-cancel-worker-data-message-button">إلغاء</h5>
            </div>
        `;

        // Append the elements
        filterWorkerTypeDataDiv.appendChild(filterWorkerTypeDataContent);
        filterWorkerTypeDataDivOverlay.appendChild(filterWorkerTypeDataDiv);
        document.body.appendChild(filterWorkerTypeDataDivOverlay);
        document.getElementById("indoforall-filter-worker-visa-type").innerHTML = indoforall_filterWorkerCityType; // Update this line

        // Show overlay and content with animation
        setTimeout(() => {
            filterWorkerTypeDataDivOverlay.classList.add("show");
            filterWorkerTypeDataDiv.classList.add("show");
        }, 10);

        /* Re-enable Scrolling And Remove The 'filterWorkerTypeDataDivOverlay' Element */
        document.getElementById("indoforall-cancel-worker-data-message-button").onclick = function () {
            // Remove 'show' class to trigger fade-out animation
            filterWorkerTypeDataDiv.classList.remove("show");
            filterWorkerTypeDataDivOverlay.classList.remove("show");

            // Wait for animation to complete before removing the overlay
            setTimeout(() => {
                document.documentElement.style.overflow = "auto";
                document.body.removeChild(filterWorkerTypeDataDivOverlay);
            }, 500); // Matches the CSS transition duration
        };

        /* Function To Create Final WhatsApp Message Based on Worker Type Data Selected */
        indoforall_workerTypeWhatsAppMessageFunction = function () {
            // Get the text from the textarea
            let cityName = document.querySelector("#indoforall-filter-worker-city-type textarea").value;

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
                    finalMessage += `السعر: 17,000 ريال سعودي\n`;
                } else if (workerTypeNameVariable === "سائق خاص") {
                    finalMessage += `السعر: 11,500 ريال سعودي\n`;
                } else {
                    finalMessage += `نوع الفيزا: فيزة عمالة مهنية\n`;
                    finalMessage += `السعر: 17,000 ريال سعودي\n`;
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
    }
}

/* In Case if The 'indoforall_price_section' Elemenet Exist Then Create The Following Code */
if (document.getElementById("indoforall-price-section")) {
    /* Function To Filter Worker Type Data Content */
    indoforall_filterWorkerTypeBasedOnVisaFunction = function (clickedWorkerVisaTypeTitle, clickedWorkerVisaTypeMessage) {
        // Disable scrolling
        document.documentElement.style.overflow = "hidden";

        /* Store The Clicked Worker Visa Type */
        let clickedWorkerVisaTypeVariable = clickedWorkerVisaTypeTitle.innerText;

        /* Store The Clicked Worker Visa Type */
        let availableWorkerVisaTypeVariable;

        /* Based on The Passed 'clickedWorkerVisaTypeMessage' Value Create A Spicific Content */
        if (clickedWorkerVisaTypeMessage === "استقدام عاملة منزلية = 17,000 ريال سعودي") {
            availableWorkerVisaTypeVariable = `
                <h4 onclick="indoforall_filterWorkerTypeDataFunction('home', '${clickedWorkerVisaTypeMessage}')">عاملة منزلية</h4>
                <h4 onclick="indoforall_filterWorkerTypeDataFunction('driver', 'استقدام سائق خاص = 7,000 ريال سعودي')">سائق خاص</h4>
                <h4 onclick="indoforall_whatsApp()">خيارات اخرى؟ تواصل معنا على الواتس</h4>
            `;
        } else if (clickedWorkerVisaTypeMessage === "استقدام سائق خاص = 11,500 ريال سعودي") {
            availableWorkerVisaTypeVariable = `
                <h4 onclick="indoforall_filterWorkerTypeDataFunction('driver', '${clickedWorkerVisaTypeMessage}')">سائق خاص</h4>
                <h4 onclick="indoforall_whatsApp()">خيارات اخرى؟ تواصل معنا على الواتس</h4>
            `;
        } else if (clickedWorkerVisaTypeMessage === "فيزة عمالة مهنية = 17,000 ريال سعودي") {
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
        filterWorkerTypeDataDivOverlay.id = "indoforall-filter-worker-type-overlay";

        let filterWorkerTypeDataDiv = document.createElement("div");
        filterWorkerTypeDataDiv.id = "indoforall-filter-worker-type-div";

        let filterWorkerTypeDataContent = document.createElement("div");
        filterWorkerTypeDataContent.innerHTML = `
            <div id='indoforall-filter-worker-type-title' class='indoforall-mouse-gradient'>
                <h3>${clickedWorkerVisaTypeVariable}</h3>
            </div>

            <div id="indoforall-filter-worker-work-type">
                <h3>اختار نوع العمالة</h3>

                <div id="indoforall-filter-worker-work-type-options"></div>
                
            </div>

            <div id="indoforall-submit-filter-worker-type">
                <h5 id="indoforall-cancel-worker-data-message-button">إلغاء</h5>
            </div>
        `;

        /* Append The Elements in Each Other */
        filterWorkerTypeDataDiv.appendChild(filterWorkerTypeDataContent);
        filterWorkerTypeDataDivOverlay.appendChild(filterWorkerTypeDataDiv);
        document.body.appendChild(filterWorkerTypeDataDivOverlay);
        document.getElementById("indoforall-filter-worker-work-type-options").innerHTML = availableWorkerVisaTypeVariable;

        // Show overlay and content with animation
        setTimeout(() => {
            filterWorkerTypeDataDivOverlay.classList.add("show");
            filterWorkerTypeDataDiv.classList.add("show");
        }, 10);

        /* Call a function to apply the hovering background text functionality */
        enableMouseGradient();

        // Close overlay on cancel button click
        document.querySelector("#indoforall-cancel-worker-data-message-button").onclick = function () {
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
            document.getElementById("indoforall-filter-worker-type-div").innerHTML = "";
            document.getElementById("indoforall-filter-worker-type-overlay").removeChild(document.getElementById("indoforall-filter-worker-type-div"));
            document.body.removeChild(document.getElementById("indoforall-filter-worker-type-overlay"));

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
                <div id='indoforall-filter-worker-type-title' class='indoforall-mouse-gradient'>
                    <h3>طلب استقدام ${workerTypeNameVariable}</h3>
                </div>

                <div id="indoforall-filter-worker-visa-type">
                    <h3>السعر</h3>
                    <h4>${workerVisaTypeMessage}</h4>
                </div>

                <div id="indoforall-filter-worker-city-type">
                    <h3>استقدام الى</h3>
                    <textarea placeholder="اسم المدينة" maxlength="30"></textarea>
                </div>

                <div id="indoforall-submit-filter-worker-type">
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
                // Remove 'show' class to trigger fade-out animation
                filterWorkerTypeDataDiv.classList.remove("show");
                filterWorkerTypeDataDivOverlay.classList.remove("show");

                // Wait for animation to complete before removing the overlay
                setTimeout(() => {
                    document.documentElement.style.overflow = "auto";
                    document.body.removeChild(filterWorkerTypeDataDivOverlay);
                }, 500); // Matches the CSS transition duration
            };

            /* Function To Create Final WhatsApp Message Based on Worker Type Data Selected */
            indoforall_workerTypeWhatsAppMessageFunction = function () {
                // Get the text from the textarea
                let cityName = document.querySelector("#indoforall-filter-worker-city-type textarea").value;

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
                        finalMessage += `السعر: 17,000 ريال سعودي\n`;
                    } else if (workerTypeNameVariable === "سائق خاص") {
                        finalMessage += `السعر: 11,500 ريال سعودي\n`;
                    } else {
                        finalMessage += `نوع الفيزا: فيزة عمالة مهنية\n`;
                        finalMessage += `السعر: 17,000 ريال سعودي\n`;
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
if (document.getElementById("indoforall-common-question-section")) {
    const container = document.getElementById("indoforall-question-area");

    indoforall_questionAndAnswerArray.forEach(({ questionText, answerText }) => {
        const div = document.createElement("div");
        div.className = "indoforall-question-div animate-on-scroll from-bottom";

        const questionEl = document.createElement("h2");
        questionEl.className = "indoforall-question-text animate-on-scroll from-right";
        questionEl.textContent = questionText;

        const answerEl = document.createElement("p"); // Use <p> for better semantic HTML
        answerEl.className = "indoforall-answer-text animate-on-scroll from-left";
        answerEl.textContent = answerText;

        div.appendChild(questionEl);
        div.appendChild(answerEl);
        container.appendChild(div);
    });
}

// Define cardCounter outside the loop
/* Uniqe Number For Each Card */
let cardCounter = 1;

/* Keep Tracking The Playing Video So Then Other Videos Get Paused */
let currentVideo = null;

// in Case If The Element With The Id Name 'indoforall_proof_section' Exsist Then Go through each item in the 'data' value array 'indoforall_proofVideosArray'
if (document.getElementById("indoforall-proof-section")) {
    indoforall_proofVideosArray.forEach((item) => {
        const { imgSrc } = item;

        // Create the card container div
        const ProofVideoDiv = document.createElement("div");
        ProofVideoDiv.id = "indoforall-worker-card-proof-card";
        ProofVideoDiv.className = "indoforall-worker-proof-card animate-on-scroll from-bottom";

        // Generate the content dynamically based on 'imgSrc' or 'videoSrc'
        let content = `<h2>${cardCounter}</h2>`;
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

        // Set the inner HTML of the div
        ProofVideoDiv.innerHTML = content;

        // Increment card counter
        cardCounter++;

        // Append the new card to the proof area
        document.getElementById("indoforall-proof-area").appendChild(ProofVideoDiv);
    });

    // Horizontal scrolling functionality
    const proofArea = document.getElementById("indoforall-proof-area");
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
if (document.getElementById("indoforall-accounts-section")) {
    indoforall_adsVideosArray.forEach((item) => {
        /* Get The Array Properties */
        let { imgSrc, videoSrc, videoThumbnailSrc } = item;

        /* Create The Card Container Div */
        let AdsVideoDiv = document.createElement("div");
        AdsVideoDiv.classList.add("indoforall-ads-only-videos-div");

        let AdsImgDiv = document.createElement("div");
        AdsImgDiv.classList.add("indoforall-ads-only-img-div");

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
            document.getElementById("indoforall-ads-videos-and-img-div").appendChild(AdsImgDiv);
        } else if (videoSrc) {
            /* Create The HTML Content For The Videos */
            AdsVideoInfo = `
                <img src=${videoThumbnailSrc} alt="استقدام من اندونيسيا - اندو للجميع"  title="استقدام من اندونيسيا - اندو للجميع" class="indoforall-ads-thumbnail-img" srcset="${videoThumbnailSrc} 480w, ${videoThumbnailSrc} 768w, ${videoThumbnailSrc} 1200w" sizes="(max-width: 768px) 100vw, 50vw" loading="lazy">
                <video src=${videoSrc} controls title="استقدام من اندونيسيا - اندو للجميع" class="indoforall-ads-orignal-video" preload="metadata"></video>
            `;

            /* Set The InnerHTML Code For the 'AdsVideoDiv' */
            AdsVideoDiv.innerHTML = AdsVideoInfo;

            /* Append The 'AdsVideoDiv' To the 'indoforall_ads_videos_and_img_div' */
            document.getElementById("indoforall-ads-videos-and-img-div").appendChild(AdsVideoDiv);

            /* Get The Elements So You Can Use it Later */
            let orignalVideos = document.getElementsByClassName("indoforall-ads-orignal-video");
            let thumbnailImages = document.getElementsByClassName("indoforall-ads-thumbnail-img");

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
    FullScreenGuidanceOverlay.classList.add("indoforall-full-screen-guidance-overlay");

    // Create A Button To Exit The Big Image Page
    let fullScreenOverlayExitButton = document.createElement("a");
    fullScreenOverlayExitButton.classList.add("indoforall-full-screen-overlay-exit-button");
    fullScreenOverlayExitButton.innerText = "عودة";

    // Create Website Guidance Content
    let webGuidanceDiv = document.createElement("div");
    webGuidanceDiv.classList.add("web-guidance-div");

    let webGuidanceText = `
        <a itemprop="url" href="https://indoforall.com">1- في الصفحة الرئيسية اختار نوع العمالة الاندونيسية.</a>
        <a itemprop="url" title="اسعار الاستقدام من اندونيسيا - اندو للجميع" href="https://indoforall.com/%D8%A7%D8%B3%D8%B9%D8%A7%D8%B1-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85-%D9%85%D9%86-%D8%A7%D9%86%D8%AF%D9%88%D9%86%D9%8A%D8%B3%D9%8A%D8%A7">2- بعد اختيار نوع العمالة، خذ نظرة على اسعار الاستقدام ومدة إنجاز العمل.</a>
        <a onclick="indoforall_whatsApp()">3- اخيرا، تواصل معنا لطلب الاستقدام او للمزيد من المعلومات والنصائح.</a>
        <a itemprop="url" title="اسئلة الاستقدام من اندونيسيا - اندو للجميع" href="https://indoforall.com/%D8%A7%D8%B3%D8%A6%D9%84%D8%A9-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85-%D9%85%D9%86-%D8%A7%D9%86%D8%AF%D9%88%D9%86%D9%8A%D8%B3%D9%8A%D8%A7" id="indoforall-web-guidance-note-text">ملاحظة: اذا كنت تبحث عن معلومات أكثر اذهب لصفحة الأسئلة الشائعة او تواصل معنا على الواتس.</a>
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
    document.getElementById("indoforall-nav-options").style.display = "flex"; // Make it visible
    setTimeout(() => {
        document.getElementById("indoforall-nav-options").style.opacity = "1";
        document.getElementById("indoforall-nav-options").style.right = "0";
        document.getElementById("indoforall-nav-options").style.pointerEvents = "auto"; // Allow interaction
    }, 10);
    document.body.classList.add("nav-open");
    document.body.style.overflow = "hidden"; // Disable scrolling
};

let indoforall_hideNavOptions = () => {
    document.getElementById("indoforall-nav-options").style.opacity = "0";
    document.getElementById("indoforall-nav-options").style.right = "-75%";
    document.getElementById("indoforall-nav-options").style.pointerEvents = "none"; // Prevent interaction

    setTimeout(() => {
        document.getElementById("indoforall-nav-options").style.display = "none"; // Fully hide after transition
    }, 300); // Match transition time
    document.body.classList.remove("nav-open");
    document.body.style.overflow = ""; // Enable scrolling
};

document.getElementById("indoforall-nav").onclick = (event) => {
    event.stopPropagation();
    indoforall_showNavOptions();
};

document.getElementById("indoforall-close-nav").onclick = (event) => {
    event.stopPropagation();
    indoforall_hideNavOptions();
};

document.addEventListener("click", (event) => {
    if (!document.getElementById("indoforall-nav-options").contains(event.target) && event.target !== document.getElementById("indoforall-close-nav")) {
        indoforall_hideNavOptions();
    }
});

/* Function to run a video in the background of a section */
function addBackgroundVideo(sectionId, videoSrc) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Ensure the section does not already have a background video
    if (section.querySelector("video")) return;

    const video = document.createElement("video");
    Object.assign(video, {
        src: videoSrc,
        autoplay: true,
        loop: true,
        muted: true,
        playsInline: true,
    });

    Object.assign(video.style, {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: "-1",
        opacity: "0", // Start with opacity 0
        pointerEvents: "none", // Prevent video from interfering with clicks
        transition: "opacity 2s ease-in-out", // Add smooth transition
    });

    section.style.position = "relative"; // Ensure section allows absolute positioning
    section.prepend(video);

    // Add fade-in animation after a short delay
    setTimeout(() => {
        video.style.opacity = "0.3"; // Fade to final opacity
    }, 500); // Start fade after 500ms
}

// Add videos only to the intended sections
addBackgroundVideo("indoforall-intro-section", "استقدام-من-اندونيسيا.mp4");

/* Insert new click data in the Supabase */
async function insertNewClick(website) {
    // Step 1: Get current month name
    const monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    const currentMonth = monthNames[new Date().getMonth()];

    // Step 2: Fetch the current row for the website
    const { data, error } = await supabase.from("click_counter").select("*").eq("website", website).single();

    if (error) {
        console.error("Error fetching data:", error.message);
        return;
    }

    // Step 3: Parse the current value (e.g., "Clicks 4")
    let rawValue = data[currentMonth];
    let currentCount = 0;

    if (rawValue && typeof rawValue === "string" && rawValue.startsWith("Clicks ")) {
        currentCount = parseInt(rawValue.replace("Clicks ", ""), 10) || 0;
    }

    // Step 4: Increment the value
    let newCount = currentCount + 1;
    let newValue = `Clicks ${newCount}`;

    // Step 5: Update the table
    const { error: updateError } = await supabase
        .from("click_counter")
        .update({ [currentMonth]: newValue })
        .eq("website", website);

    if (updateError) {
        console.error("Error updating value:", updateError.message);
        return;
    }
}

// Array of flag image URLs (replace or add your own)
const flags = [
    "استقدام-الى-دول-الخليج/استقدام-الى-السعودية.webp",
    "استقدام-الى-دول-الخليج/استقدام-الى-قطر.webp",
    "استقدام-الى-دول-الخليج/استقدام-الى-عمان.webp",
    "استقدام-الى-دول-الخليج/استقدام-الى-البحرين.webp",
    "استقدام-الى-دول-الخليج/استقدام-الى-الامارات.webp",
];

const container = document.getElementById("indoforall-orbit-container-id");
const total = flags.length;

flags.forEach((src, i) => {
    const angle = (360 / total) * i;

    const wrapper = document.createElement("div");
    wrapper.className = "indoforall-orbit-flag";
    wrapper.style.animationDelay = `-${(20 / total) * i}s`; // stagger start

    const img = document.createElement("img");
    img.src = src;
    img.alt = `Flag ${i}`;

    // Add image to wrapper, wrapper to container
    wrapper.appendChild(img);
    wrapper.style.transform = `rotate(${angle}deg)`;
    container.appendChild(wrapper);
});

/* Hovering background text functionality */
function enableMouseGradient(selector = ".indoforall-mouse-gradient") {
    document.querySelectorAll(selector).forEach((elem) => {
        let currentX = 50;
        let currentY = 50;
        let targetX = 50;
        let targetY = 50;
        let animationFrame;

        elem.style.boxShadow = `${(targetX - 50) * 0.5}px ${(targetY - 50) * 0.5}px 25px rgba(255,255,255,0.2)`;
        elem.style.backgroundPosition = `${currentX}% ${currentY}%`;
        elem.style.backgroundSize = `${120 + (targetX - 50) * 0.3}% ${120 + (targetY - 50) * 0.3}%`;

        const update = () => {
            currentX += (targetX - currentX) * 0.2;
            currentY += (targetY - currentY) * 0.2;

            elem.style.backgroundImage = `radial-gradient(circle at ${currentX}% ${currentY}%, rgba(255,255,255,0.25) 0%, transparent 40%)`;

            animationFrame = requestAnimationFrame(update);
        };

        elem.addEventListener("mousemove", (e) => {
            const rect = elem.getBoundingClientRect();
            targetX = ((e.clientX - rect.left) / rect.width) * 100;
            targetY = ((e.clientY - rect.top) / rect.height) * 100;

            if (!animationFrame) {
                animationFrame = requestAnimationFrame(update);
            }
        });

        elem.addEventListener("mouseleave", () => {
            targetX = 50;
            targetY = 50;
        });
    });
}

// Call the function after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    enableMouseGradient();
});

/* Elements Animation On Scroll */
const animatedElements = document.querySelectorAll(".animate-on-scroll");

function animateOnScroll() {
    const triggerPoint = window.innerHeight * 0.9;

    animatedElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const midpoint = rect.top + rect.height / 2;

        if (midpoint < triggerPoint) {
            el.classList.add("in-view");
        }
    });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("resize", animateOnScroll);
document.addEventListener("DOMContentLoaded", animateOnScroll); // safer than immediate call

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
