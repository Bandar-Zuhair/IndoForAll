// Define cardCounter outside the loop
/* Uniqe Number For Each Card */
let cardCounter = 1;

/* Keep Tracking The Playing Video So Then Other Videos Get Paused */
let currentVideo = null;

// Go through each item in the 'data' value array 'indoforall_proofVideosArray'
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
            <img src="${imgSrc}" alt="استقدام-اندونيسيا" title="استقدام-اندونيسيا">
        `;
        ProofVideoDiv.onclick = function () {
            indoforall_show_full_screen_image(imgSrc);
        };
    } else if (videoSrc) {
        ProofVideoInfo = `
            <h2>${cardCounter}</h2>
            <video src="${videoSrc}" controls title="استقدام-اندونيسيا"></video>
        `;
        ProofVideoDiv.onclick = function () {
            // Pause any currently playing video
            if (currentVideo && currentVideo !== this.querySelector('video')) {
                currentVideo.pause();
            }
            currentVideo = this.querySelector('video');
        };
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
        let fullScreenOverlayExitButton = document.createElement('a');
        fullScreenOverlayExitButton.classList.add('indoforall_full_screen_overlay_exit_button');
        fullScreenOverlayExitButton.innerText = "عودة";

        /* Create The Big Image Element Based on The 'src' Value */
        let FullScreenImg = document.createElement('img');
        FullScreenImg.src = src;
        FullScreenImg.alt = "استقدام-اندونيسيا";
        FullScreenImg.title = "استقدام-اندونيسيا";
        FullScreenImg.classList.add('indoforall_big_img');

        /* Append All The elements inside 'FullScreenImgOverlay' */
        FullScreenImgOverlay.appendChild(fullScreenOverlayExitButton);
        FullScreenImgOverlay.appendChild(FullScreenImg);
        document.body.appendChild(FullScreenImgOverlay);

        /* Hide And Show Different Sections */
        indoforall_header.style.display = 'none';
        indoforall_proof_section.style.display = 'none';
        indoforall_footer.style.display = 'none';


        /* Function To Exit The Big Image Page */
        fullScreenOverlayExitButton.onclick = function () {
            /* ReDisplay The Worker Card Details Again */
            /* Hide And Show Different Sections */
            indoforall_header.style.display = 'block';
            indoforall_proof_section.style.display = 'flex';
            indoforall_footer.style.display = 'flex';

            /* Scroll Back To The 'indoforall_worker_cards_div' Element After Exiting The Worker Card Details Page */
            indoforall_proof_area.scrollIntoView({
                block: 'center',
                inline: 'center',
            });

            /* Hide And Reset All Data Stored Inside The 'FullScreenImgOverlay' Element */
            FullScreenImgOverlay.innerHTML = '';
            FullScreenImgOverlay.style.display = 'none';
        }
    }
});
