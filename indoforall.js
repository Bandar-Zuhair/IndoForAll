/* =====================================================================
   اندو للجميع — indoforall.js
   One script for every page. Sections:
     1) Editable content (CV images, proof images, ads, prices)
     2) Environment (production / local), helpers
     3) Supabase (config from Netlify, local fallback) + click counter
     4) WhatsApp, toast, modal/sheet system, lightbox
     5) Request flow, CV gallery, guidance, reviews
     6) Header, mobile menu, dock, FAQ accordion, page renders
     7) Smooth scroll (Lenis) + animations (GSAP / ScrollTrigger)
   ===================================================================== */

/* ---------------------------------------------------------------------
   1) EDITABLE CONTENT
   To add a new CV image: upload it to the folder and add a new line
   { workerImg: "folder/file.webp" } to the matching array below.
   --------------------------------------------------------------------- */

/* عاملة منزلية */
let indoforall_homeWorkerArray = [
    { workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-1.webp" },
    { workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-2.webp" },
    { workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-3.webp" },
    { workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-4.webp" },
    { workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-5.webp" },
    { workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-6.webp" },
    { workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-7.webp" },
    { workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-8.webp" },
    { workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-9.webp" },
    { workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-10.webp" },
    { workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-11.webp" },
    { workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-12.webp" },
    { workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-13.webp" },
    { workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-14.webp" },
    { workerImg: "استقدام-عمالة-منزلية/استقدام-عمالة-منزلية-15.webp" },
];

/* سائق خاص */
let indoforall_driveWorkerArray = [];

/* كوفيرة */
let indoforall_hairWorkerArray = [
    { workerImg: "استقدام-كوفيرة/استقدام-كوفيرة-1.webp" },
    { workerImg: "استقدام-كوفيرة/استقدام-كوفيرة-2.webp" },
];

/* خياطة */
let indoforall_sewingWorkerArray = [
    { workerImg: "استقدام-خياطة/استقدام-خياطة-1.webp" },
    { workerImg: "استقدام-خياطة/استقدام-خياطة-2.webp" },
    { workerImg: "استقدام-خياطة/استقدام-خياطة-3.webp" },
];

/* ممرضة */
let indoforall_doctorWorkerArray = [];

/* صور إثبات المصداقية (صفحة المصداقية) */
let indoforall_proofVideosArray = [
    { imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-1.webp" },
    { imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-2.webp" },
    { imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-3.webp" },
    { imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-4.webp" },
    { imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-5.webp" },
    { imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-6.webp" },
    { imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-7.webp" },
    { imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-8.webp" },
    { imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-9.webp" },
    { imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-10.webp" },
    { imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-11.webp" },
    { imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-12.webp" },
    { imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-13.webp" },
    { imgSrc: "مصداقية-الاستقدام-من-اندونيسيا/استقدام-من-اندونيسيا-14.webp" },
];

/* صور وفيديوهات الإعلانات (صفحة الحسابات) — use imgSrc, or videoSrc + videoThumbnailSrc */
let indoforall_adsVideosArray = [
    { imgSrc: "استقدام-من-اندونيسيا/استقدام-عمالة-اندونيسية.webp" },
    {
        videoSrc: "استقدام-اندونيسيا/استقدام-من-اندونيسيا.mp4",
        videoThumbnailSrc: "استقدام-اندونيسيا/استقدام-من-اندونيسيا.webp",
    },
    { imgSrc: "استقدام-اندونيسيا/استقدام-من-اندونيسيا.webp" },
];

/* الأسعار ومدة الإنجاز لكل نوع عمالة (تُستخدم في رسالة الواتساب ونافذة الطلب) */
const INDOFORALL_WORKER_TYPES = {
    home: {
        name: "عاملة منزلية",
        visa: "فيزة زيارة",
        price: "17,000",
        duration: "12 - 14 يوم",
        img: "صور-مصغرة/عاملة-منزلية.webp",
        cvs: () => indoforall_homeWorkerArray,
    },
    driver: {
        name: "سائق خاص",
        visa: "فيزة سائق خاص",
        price: "11,500",
        duration: "12 - 14 يوم",
        img: "صور-مصغرة/سائق-خاص.webp",
        cvs: () => indoforall_driveWorkerArray,
    },
    hair: {
        name: "كوفيرة",
        visa: "فيزة عمالة مهنية",
        price: "17,000",
        duration: "خلال 15 يوم",
        img: "صور-مصغرة/كوفيرة.webp",
        cvs: () => indoforall_hairWorkerArray,
    },
    sewing: {
        name: "خياطة",
        visa: "فيزة عمالة مهنية",
        price: "17,000",
        duration: "خلال 15 يوم",
        img: "صور-مصغرة/خياطة.webp",
        cvs: () => indoforall_sewingWorkerArray,
    },
    nurse: {
        name: "ممرضة",
        visa: "فيزة عمالة مهنية",
        price: "17,000",
        duration: "خلال 15 يوم",
        img: "صور-مصغرة/ممرضة.webp",
        cvs: () => indoforall_doctorWorkerArray,
    },
};

/* Which worker types each price card (visa) offers */
const INDOFORALL_VISA_OPTIONS = {
    visit: { title: "طلب استقدام بفيزة زيارة", workers: ["home", "driver"] },
    driver: { title: "طلب استقدام بفيزة سائق خاص", workers: ["driver"] },
    professional: { title: "طلب استقدام بفيزة عمالة مهنية", workers: ["driver", "hair", "sewing", "nurse"] },
};

const INDOFORALL_POPULAR_CITIES = ["الرياض", "جدة", "مكة المكرمة", "المدينة المنورة", "الدمام", "الخبر"];

/* =====================================================================
   APP
   ===================================================================== */
(function () {
    "use strict";

    /* ---------------------------------------------------------------------
       2) ENVIRONMENT + HELPERS
       --------------------------------------------------------------------- */
    const doc = document;
    const root = doc.documentElement;

    const CONTACT = {
        phone: "966544386245",
        email: "info@indoforall.com",
        site: "https://indoforall.com",
        address: "Jl. Mandalawangi No.7, RT.04/RW.04, Babakan, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16128",
    };

    const SUPABASE_CDN = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js";
    const REVIEWS_TABLE = "all_customers_comments";
    const REVIEWS_COLUMN = "indoforall";

    const host = location.hostname;
    /* Live site */
    const IS_PRODUCTION = /(^|\.)indoforall\.com$/.test(host);
    /* This computer / phone on the same Wi-Fi */
    const IS_LOCAL =
        location.protocol === "file:" ||
        /^(localhost|127\.0\.0\.1|\[::1\]|0\.0\.0\.0)$/.test(host) ||
        /\.(local|localhost|test)$/.test(host) ||
        /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(host);
    /* Anything that is not the live site: local testing, a Netlify Drop preview shared with a friend, ... */
    const IS_PREVIEW = !IS_PRODUCTION;

    /* Keep preview copies out of Google (the canonical tags already point to indoforall.com) */
    if (IS_PREVIEW && !IS_LOCAL) {
        const robots = doc.querySelector('meta[name="robots"]');
        if (robots) robots.setAttribute("content", "noindex, nofollow");
    }

    /* `reduced-motion` is decided in <head> (OS setting, overridable with ?motion=full) */
    const REDUCED_MOTION = root.classList.contains("reduced-motion");
    const IS_TOUCH = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const IS_IOS =
        /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const HAS_GSAP = !!(window.gsap && window.ScrollTrigger);

    root.classList.add(HAS_GSAP ? "has-gsap" : "no-gsap");
    window.__ifaReady = true;

    const $ = (sel, ctx = doc) => ctx.querySelector(sel);
    const $$ = (sel, ctx = doc) => Array.from(ctx.querySelectorAll(sel));

    const icon = (name, cls = "") => `<svg class="icon ${cls}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;

    function escapeHtml(value) {
        return String(value == null ? "" : value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const s = doc.createElement("script");
            s.src = src;
            s.async = true;
            s.onload = () => resolve();
            s.onerror = () => {
                s.remove();
                reject(new Error("Failed to load " + src));
            };
            doc.head.appendChild(s);
        });
    }

    function track(eventName, params) {
        try {
            if (typeof window.gtag === "function" && !IS_LOCAL) window.gtag("event", eventName, params || {});
        } catch (e) {
            /* analytics must never break the page */
        }
    }

    function cvLabel(n) {
        if (!n) return "السير الذاتية متاحة عند الطلب";
        if (n === 1) return "سيرة ذاتية واحدة متاحة";
        if (n === 2) return "سيرتان ذاتيتان متاحتان";
        if (n <= 10) return `${n} سير ذاتية متاحة`;
        return `${n} سيرة ذاتية متاحة`;
    }

    /* Local testing / previews: internal links point to https://indoforall.com/...
       Rewrite them to the .html files on the current host so navigation stays on the preview. */
    function localizeLinks(scope) {
        if (!IS_PREVIEW) return;
        $$('a[href^="https://indoforall.com"]', scope || doc).forEach((a) => {
            try {
                const url = new URL(a.href);
                const path = decodeURIComponent(url.pathname).replace(/^\/+|\/+$/g, "");
                a.setAttribute("href", (path ? encodeURI(path) + ".html" : "index.html") + url.hash);
            } catch (e) {
                /* ignore malformed */
            }
        });
    }

    function currentSlug() {
        let path = location.pathname;
        try {
            path = decodeURIComponent(path);
        } catch (e) {
            /* keep raw */
        }
        return path
            .replace(/^\/+|\/+$/g, "")
            .replace(/\.html$/, "")
            .replace(/^index$/, "");
    }

    function markCurrentNav() {
        const slug = currentSlug();
        $$("[data-nav]").forEach((a) => {
            if (a.getAttribute("data-nav") === slug) a.setAttribute("aria-current", "page");
        });
    }

    /* ---------------------------------------------------------------------
       3) SUPABASE — lazy client
       Production: config from /.netlify/functions/get-config (Netlify env vars).
       Local: config.local.js (git-ignored) → else the live get-config endpoint.
       --------------------------------------------------------------------- */
    const Supa = (() => {
        let clientPromise = null;

        async function fetchJson(url) {
            const res = await fetch(url, { cache: "no-store" });
            if (!res.ok) throw new Error(`${url} → ${res.status}`);
            return res.json();
        }

        async function fromLocalFile() {
            if (!window.INDOFORALL_LOCAL_CONFIG) await loadScript("config.local.js");
            return window.INDOFORALL_LOCAL_CONFIG;
        }

        /* Live site: only its own Netlify function.
           Previews: own function (if any) → config.local.js → the live site's function. */
        async function getConfig() {
            const sources = [];
            if (!IS_LOCAL) sources.push(() => fetchJson("/.netlify/functions/get-config"));
            if (IS_PREVIEW) {
                sources.push(fromLocalFile);
                sources.push(() => fetchJson(CONTACT.site + "/.netlify/functions/get-config"));
            }
            let lastError = null;
            for (const source of sources) {
                try {
                    const cfg = await source();
                    if (cfg && cfg.supabaseUrl && cfg.supabaseAnonKey) return cfg;
                } catch (e) {
                    lastError = e;
                }
            }
            throw lastError || new Error("Supabase config not found");
        }

        function get() {
            if (!clientPromise) {
                clientPromise = (async () => {
                    const needsLib = !(window.supabase && typeof window.supabase.createClient === "function");
                    const [cfg] = await Promise.all([getConfig(), needsLib ? loadScript(SUPABASE_CDN) : null]);
                    if (!cfg || !cfg.supabaseUrl || !cfg.supabaseAnonKey) {
                        throw new Error(
                            IS_LOCAL
                                ? "Supabase config missing. Create config.local.js (see README note in the file header)."
                                : "Supabase config missing from get-config."
                        );
                    }
                    return window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey);
                })();
                clientPromise.catch(() => {
                    clientPromise = null;
                });
            }
            return clientPromise;
        }

        return { get };
    })();

    /* WhatsApp click counter (table click_counter). Skipped locally so testing doesn't inflate numbers. */
    async function insertNewClick(website) {
        const monthNames = [
            "january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december",
        ];
        const now = new Date();
        const currentMonth = monthNames[now.getMonth()];
        const currentYear = now.getFullYear();
        const supabase = await Supa.get();

        const { data, error } = await supabase.from("click_counter").select("*").eq("website", website).single();
        if (error) throw error;

        let monthData = data[currentMonth] || [];
        if (typeof monthData === "string") {
            try {
                monthData = JSON.parse(monthData);
            } catch (e) {
                monthData = [];
            }
        }

        monthData = monthData.map((entry) =>
            typeof entry === "object" && entry !== null ? `Clicks ${entry.clicks} - ${entry.year}` : entry
        );

        const yearIndex = monthData.findIndex((entry) => entry.includes(`- ${currentYear}`));
        if (yearIndex !== -1) {
            const parts = monthData[yearIndex].match(/Clicks (\d+) - (\d+)/);
            const currentClicks = parts ? parseInt(parts[1], 10) : 0;
            monthData[yearIndex] = `Clicks ${currentClicks + 1} - ${currentYear}`;
        } else {
            monthData.push(`Clicks 1 - ${currentYear}`);
        }

        const { error: updateError } = await supabase
            .from("click_counter")
            .update({ [currentMonth]: monthData })
            .eq("website", website);
        if (updateError) throw updateError;
        return monthData;
    }

    function countWhatsAppClick(source) {
        track("contact", { method: "whatsapp", source: source || "button" });
        if (IS_PREVIEW) {
            console.info("[preview] WhatsApp click not counted in Supabase (not the live site).");
            return;
        }
        insertNewClick("indoforall.com").catch((e) => console.warn("Click counter:", e.message || e));
    }

    /* ---------------------------------------------------------------------
       4a) WHATSAPP
       --------------------------------------------------------------------- */
    function whatsappUrl(text) {
        return `https://wa.me/${CONTACT.phone}` + (text ? `?text=${encodeURIComponent(text)}` : "");
    }

    /* Called synchronously inside a click handler so browsers never block it */
    function openWhatsApp(text, source) {
        const url = whatsappUrl(text);
        countWhatsAppClick(source);
        if (IS_IOS) {
            window.location.href = url;
            return;
        }
        const win = window.open(url, "_blank");
        if (win) {
            win.opener = null;
        } else {
            window.location.href = url;
        }
    }

    /* ---------------------------------------------------------------------
       4b) TOAST
       --------------------------------------------------------------------- */
    (function () {
        let container = null;
        let active = null;
        let timer = null;

        function hide(toast) {
            if (!toast) return;
            clearTimeout(timer);
            toast.classList.remove("indoforall-toast--visible");
            setTimeout(() => {
                toast.remove();
                if (active === toast) active = null;
            }, 320);
        }

        function attachSwipe(toast) {
            let startX = 0;
            let startY = 0;
            let dx = 0;
            let dy = 0;
            let dragging = false;
            toast.addEventListener(
                "touchstart",
                (e) => {
                    const t = e.touches[0];
                    startX = t.clientX;
                    startY = t.clientY;
                    dx = dy = 0;
                    dragging = true;
                    toast.style.transition = "none";
                },
                { passive: true }
            );
            toast.addEventListener(
                "touchmove",
                (e) => {
                    if (!dragging) return;
                    const t = e.touches[0];
                    dx = t.clientX - startX;
                    dy = Math.min(0, t.clientY - startY);
                    const useX = Math.abs(dx) > Math.abs(dy);
                    toast.style.transform = useX ? `translateX(${dx}px)` : `translateY(${dy}px)`;
                    toast.style.opacity = String(Math.max(0, 1 - Math.max(Math.abs(dx), Math.abs(dy)) / 160));
                },
                { passive: true }
            );
            toast.addEventListener("touchend", () => {
                dragging = false;
                toast.style.transition = "";
                if (Math.abs(dx) > 70 || dy < -30) {
                    hide(toast);
                } else {
                    toast.style.transform = "";
                    toast.style.opacity = "";
                }
            });
        }

        window.showToastMessage = function (message, durationMs) {
            if (!container) {
                container = doc.createElement("div");
                container.id = "indoforall-toast-container";
                container.setAttribute("role", "status");
                container.setAttribute("aria-live", "polite");
                doc.body.appendChild(container);
            }
            if (active) hide(active);

            const toast = doc.createElement("div");
            toast.className = "indoforall-toast";
            const text = doc.createElement("span");
            text.className = "indoforall-toast__text";
            text.textContent = message;
            const close = doc.createElement("button");
            close.className = "indoforall-toast__close";
            close.type = "button";
            close.setAttribute("aria-label", "إغلاق التنبيه");
            close.innerHTML = "&times;";
            close.addEventListener("click", () => hide(toast));
            toast.append(text, close);
            container.appendChild(toast);
            active = toast;
            attachSwipe(toast);
            void toast.offsetHeight;
            toast.classList.add("indoforall-toast--visible");
            if (durationMs > 0) timer = setTimeout(() => hide(toast), durationMs);
        };
    })();

    /* ---------------------------------------------------------------------
       4c) LAYERS — modal/sheet/lightbox/menu stack with back-button support
       (Android back gesture closes the open layer instead of leaving the page)
       --------------------------------------------------------------------- */
    let lenis = null;

    const Layers = (() => {
        const stack = [];

        function lock() {
            root.classList.add("is-locked");
            if (lenis) lenis.stop();
        }

        function unlock() {
            if (stack.length) return;
            root.classList.remove("is-locked");
            if (lenis) lenis.start();
        }

        function push(layer) {
            stack.push(layer);
            layer.hasHistory = false;
            try {
                history.pushState({ ifaLayer: stack.length }, "");
                layer.hasHistory = true;
            } catch (e) {
                /* sandboxed / file: — fall back to non-history close */
            }
            lock();
        }

        function closeTop() {
            const layer = stack.pop();
            if (layer) layer.hide();
            unlock();
        }

        function requestClose(layer) {
            if (!stack.length) return;
            if (layer && layer !== stack[stack.length - 1]) return;
            if (stack[stack.length - 1].hasHistory) history.back();
            else closeTop();
        }

        window.addEventListener("popstate", () => {
            if (stack.length) closeTop();
        });

        doc.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && stack.length) requestClose();
        });

        return {
            push,
            requestClose,
            top: () => stack[stack.length - 1],
            size: () => stack.length,
        };
    })();

    function trapFocus(container, e) {
        if (e.key !== "Tab") return;
        const focusables = $$(
            'a[href], button:not([disabled]), input:not([disabled]), textarea, select, [tabindex]:not([tabindex="-1"])',
            container
        ).filter((el) => el.offsetParent !== null);
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && doc.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && doc.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }

    let modalSeq = 0;

    function openModal(opts) {
        const id = `ifa-modal-${++modalSeq}`;
        const el = doc.createElement("div");
        el.className = "modal" + (opts.wide ? " modal--wide" : "");
        el.setAttribute("role", "dialog");
        el.setAttribute("aria-modal", "true");
        el.setAttribute("aria-labelledby", `${id}-title`);
        el.innerHTML = `
            <div class="modal__backdrop" data-close></div>
            <div class="modal__panel" tabindex="-1">
                <div class="modal__head">
                    <div>
                        <h2 class="modal__title" id="${id}-title"></h2>
                        <p class="modal__subtitle"></p>
                    </div>
                    <button class="modal__close" type="button" data-close aria-label="إغلاق">${icon("x")}</button>
                </div>
                <div class="modal__body" data-lenis-prevent></div>
                <div class="modal__foot"></div>
            </div>`;

        const panel = $(".modal__panel", el);
        const headText = $(".modal__head > div", el);
        const body = $(".modal__body", el);
        const foot = $(".modal__foot", el);
        const lastFocus = doc.activeElement;
        let swapToken = 0;

        const layer = {
            el,
            body,
            foot,
            set(o) {
                $(".modal__title", el).textContent = o.title || "";
                const sub = $(".modal__subtitle", el);
                sub.textContent = o.subtitle || "";
                sub.hidden = !o.subtitle;
                body.innerHTML = o.body || "";
                foot.innerHTML = o.foot || "";
                foot.hidden = !o.foot;
                body.scrollTop = 0;
                localizeLinks(el);
                if (typeof o.onRender === "function") o.onRender(layer);
            },
            /* Change the content of an open modal with a smooth transition.
               dir = 1 → forward (RTL: old content leaves to the right, new arrives from the left), -1 → back. */
            swap(o, dir) {
                if (typeof panel.animate !== "function") {
                    layer.set(o);
                    return;
                }
                const token = ++swapToken;
                const shift = (REDUCED_MOTION ? 0 : 28) * (dir || 1);
                const visible = () => [headText, body, foot].filter((p) => !p.hidden);
                const startH = panel.getBoundingClientRect().height;
                const outs = visible().map((p) =>
                    p.animate(
                        [
                            { opacity: 1, transform: "translateX(0)" },
                            { opacity: 0, transform: `translateX(${shift}px)` },
                        ],
                        { duration: 170, easing: "cubic-bezier(.4,0,1,1)", fill: "forwards" }
                    )
                );
                Promise.all(outs.map((a) => a.finished.catch(() => null))).then(() => {
                    if (token !== swapToken) return;
                    layer.set(o);
                    outs.forEach((a) => a.cancel());
                    const endH = panel.getBoundingClientRect().height;
                    if (Math.abs(endH - startH) > 1) {
                        panel.animate([{ height: `${startH}px` }, { height: `${endH}px` }], {
                            duration: 450,
                            easing: "cubic-bezier(.22,1,.36,1)",
                        });
                    }
                    visible().forEach((p, i) =>
                        p.animate(
                            [
                                { opacity: 0, transform: `translateX(${-shift}px)` },
                                { opacity: 1, transform: "translateX(0)" },
                            ],
                            { duration: 420, delay: i * 45, easing: "cubic-bezier(.22,1,.36,1)", fill: "backwards" }
                        )
                    );
                });
            },
            hide() {
                el.classList.remove("is-open");
                setTimeout(() => el.remove(), 560);
                if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus({ preventScroll: true });
            },
            close() {
                Layers.requestClose(layer);
            },
        };

        el.addEventListener("click", (e) => {
            if (e.target.closest("[data-close]")) {
                e.preventDefault();
                layer.close();
            }
        });
        el.addEventListener("keydown", (e) => trapFocus(panel, e));
        attachSheetDrag(el, panel, layer);

        layer.set(opts);
        doc.body.appendChild(el);
        Layers.push(layer);
        void el.offsetHeight;
        el.classList.add("is-open");
        setTimeout(() => panel.focus({ preventScroll: true }), 60);
        return layer;
    }

    /* Swipe the bottom sheet down to close (phones) */
    function attachSheetDrag(el, panel, layer) {
        const head = $(".modal__head", el);
        let startY = 0;
        let dy = 0;
        let startT = 0;
        let active = false;

        head.addEventListener(
            "touchstart",
            (e) => {
                if (window.innerWidth >= 768 || e.target.closest("button")) return;
                active = true;
                startY = e.touches[0].clientY;
                startT = Date.now();
                dy = 0;
                el.classList.add("is-dragging");
            },
            { passive: true }
        );
        head.addEventListener(
            "touchmove",
            (e) => {
                if (!active) return;
                dy = Math.max(0, e.touches[0].clientY - startY);
                panel.style.transform = `translateY(${dy}px)`;
            },
            { passive: true }
        );
        head.addEventListener("touchend", () => {
            if (!active) return;
            active = false;
            el.classList.remove("is-dragging");
            const fast = dy > 40 && Date.now() - startT < 250;
            panel.style.transform = "";
            if (dy > 110 || fast) layer.close();
        });
    }

    /* ---------------------------------------------------------------------
       4d) LIGHTBOX
       --------------------------------------------------------------------- */
    function openLightbox(sources, startIndex, altText) {
        const list = (sources || []).filter(Boolean);
        if (!list.length) return;
        let index = Math.max(0, Math.min(startIndex || 0, list.length - 1));
        const alt = altText || "استقدام من اندونيسيا - اندو للجميع";
        const multi = list.length > 1;

        const el = doc.createElement("div");
        el.className = "modal modal--lightbox";
        el.setAttribute("role", "dialog");
        el.setAttribute("aria-modal", "true");
        el.setAttribute("aria-label", "عرض الصورة");
        el.innerHTML = `
            <div class="modal__backdrop" data-close></div>
            <div class="lightbox">
                <div class="lightbox__bar">
                    <span class="lightbox__count" ${multi ? "" : "hidden"}></span>
                    <button class="lightbox__btn" type="button" data-close aria-label="إغلاق">${icon("x")}</button>
                </div>
                <img alt="${escapeHtml(alt)}" decoding="async" />
                <div class="lightbox__nav" ${multi ? "" : "hidden"}>
                    <button class="lightbox__btn" type="button" data-prev aria-label="الصورة السابقة">${icon("chevron-right")}</button>
                    <button class="lightbox__btn" type="button" data-next aria-label="الصورة التالية">${icon("chevron-left")}</button>
                </div>
            </div>`;

        const img = $("img", el);
        const count = $(".lightbox__count", el);
        const box = $(".lightbox", el);
        const canAnimate = typeof img.animate === "function";
        const EASE = "cubic-bezier(.22,1,.36,1)";
        let navToken = 0;

        function preload(src) {
            const pic = new Image();
            pic.src = src;
            return (pic.decode ? pic.decode() : Promise.resolve()).catch(() => null);
        }

        /* dir: 1 = next (RTL: current image leaves to the right, next comes from the left), -1 = previous, 0 = no animation */
        function show(i, dir) {
            index = (i + list.length) % list.length;
            const src = list[index];
            const token = ++navToken;
            count.textContent = `${index + 1} / ${list.length}`;
            const ready = preload(src);

            if (!dir || !canAnimate) {
                ready.then(() => {
                    if (token === navToken) img.src = src;
                });
                return;
            }

            const shift = REDUCED_MOTION ? 0 : 70;
            const from = img.style.transform || "translateX(0) scale(1)";
            const fromOpacity = img.style.opacity || "1";
            img.getAnimations().forEach((a) => a.cancel());
            const out = img.animate(
                [
                    { opacity: fromOpacity, transform: from },
                    { opacity: 0, transform: `translateX(${dir * shift}px) scale(.94)` },
                ],
                { duration: 220, easing: "cubic-bezier(.4,0,1,1)", fill: "forwards" }
            );
            Promise.all([out.finished.catch(() => null), ready]).then(() => {
                if (token !== navToken) return;
                img.src = src;
                img.style.transform = "";
                img.style.opacity = "";
                out.cancel();
                img.animate(
                    [
                        { opacity: 0, transform: `translateX(${-dir * shift}px) scale(.94)` },
                        { opacity: 1, transform: "translateX(0) scale(1)" },
                    ],
                    { duration: 420, easing: EASE }
                );
                /* warm up the neighbours so the next tap is instant */
                preload(list[(index + 1) % list.length]);
                preload(list[(index - 1 + list.length) % list.length]);
            });
        }

        const next = () => show(index + 1, 1);
        const prev = () => show(index - 1, -1);

        const lastFocus = doc.activeElement;
        const layer = {
            el,
            hide() {
                el.classList.remove("is-open");
                doc.removeEventListener("keydown", onKey);
                setTimeout(() => el.remove(), 450);
                if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
            },
        };

        function onKey(e) {
            if (Layers.top() !== layer || !multi) return;
            if (e.key === "ArrowLeft") next();
            if (e.key === "ArrowRight") prev();
        }

        el.addEventListener("click", (e) => {
            if (e.target.closest("[data-close]") || e.target === box) {
                Layers.requestClose(layer);
            } else if (e.target.closest("[data-next]")) {
                next();
            } else if (e.target.closest("[data-prev]")) {
                prev();
            }
        });
        doc.addEventListener("keydown", onKey);

        /* Swipe: the image follows the finger; RTL — moving the finger right brings the next image */
        let sx = 0;
        let sy = 0;
        let dx = 0;
        let dy = 0;
        let axis = null;
        box.addEventListener(
            "touchstart",
            (e) => {
                sx = e.touches[0].clientX;
                sy = e.touches[0].clientY;
                dx = dy = 0;
                axis = null;
            },
            { passive: true }
        );
        box.addEventListener(
            "touchmove",
            (e) => {
                dx = e.touches[0].clientX - sx;
                dy = e.touches[0].clientY - sy;
                if (!axis && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
                if (axis === "x" && multi && !REDUCED_MOTION) {
                    img.getAnimations().forEach((a) => a.cancel());
                    img.style.transform = `translateX(${dx}px) scale(${1 - Math.min(Math.abs(dx) / 2400, 0.06)})`;
                    img.style.opacity = String(1 - Math.min(Math.abs(dx) / 500, 0.45));
                } else if (axis === "y" && dy > 0 && !REDUCED_MOTION) {
                    img.style.transform = `translateY(${dy * 0.6}px) scale(${1 - Math.min(dy / 1600, 0.08)})`;
                    img.style.opacity = String(1 - Math.min(dy / 600, 0.5));
                }
            },
            { passive: true }
        );
        box.addEventListener("touchend", () => {
            if (axis === "x" && multi && Math.abs(dx) > 60) {
                if (dx > 0) next();
                else prev();
            } else if (axis === "y" && dy > 120) {
                Layers.requestClose(layer);
            } else if (img.style.transform && canAnimate) {
                /* not far enough: spring back */
                const from = img.style.transform;
                const fromOpacity = img.style.opacity || "1";
                img.style.transform = "";
                img.style.opacity = "";
                img.animate(
                    [
                        { transform: from, opacity: fromOpacity },
                        { transform: "translateX(0) scale(1)", opacity: 1 },
                    ],
                    { duration: 360, easing: EASE }
                );
            }
            axis = null;
        });

        show(index, 0);
        doc.body.appendChild(el);
        Layers.push(layer);
        void el.offsetHeight;
        el.classList.add("is-open");
        setTimeout(() => $("[data-close].lightbox__btn", el).focus({ preventScroll: true }), 60);
    }

    /* ---------------------------------------------------------------------
       5a) REQUEST FLOW → WhatsApp message
       --------------------------------------------------------------------- */
    function buildRequestMessage(type, city) {
        const t = INDOFORALL_WORKER_TYPES[type];
        const today = new Date();
        const date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
        let msg = `طلب جديد استقدام ${t.name} من اندونيسيا\n`;
        msg += `تاريخ إرسال الطلب: ${date}\n\n`;
        msg += `نوع الفيزا: ${t.visa}\n`;
        msg += `السعر: ${t.price} ريال سعودي\n`;
        msg += `استقدام الى: ${city}\n\n`;
        msg += `شركة استقدام اندو للجميع`;
        return msg;
    }

    function requestChooseMarkup(visaKey) {
        const visa = INDOFORALL_VISA_OPTIONS[visaKey];
        const keys = visa ? visa.workers : Object.keys(INDOFORALL_WORKER_TYPES);
        const tiles = keys
            .map((k) => {
                const t = INDOFORALL_WORKER_TYPES[k];
                return `<button class="choice" type="button" data-pick="${k}">
                    <img src="${t.img}" alt="" width="64" height="64" loading="lazy" />
                    <strong>${t.name}</strong>
                    <small>${t.price} ريال سعودي</small>
                </button>`;
            })
            .join("");
        const other = `<a class="choice choice--wa" href="${whatsappUrl()}" target="_blank" rel="noopener" data-wa="request-other">
                <img src="صور-مصغرة/خيارات-اخرى.webp" alt="" width="64" height="64" loading="lazy" />
                <strong>خيارات أخرى؟</strong>
                <small>تواصل معنا واتساب</small>
            </a>`;
        return `<p class="section-lead" style="margin:0 0 1rem;font-size:var(--fs-sm)">اختر نوع العمالة التي تحتاجها، وسنجهّز لك رسالة الطلب.</p>
            <div class="choice-grid">${tiles}${other}</div>`;
    }

    function requestDetailsMarkup(type) {
        const t = INDOFORALL_WORKER_TYPES[type];
        const chips = INDOFORALL_POPULAR_CITIES.map(
            (c) => `<button type="button" class="chip" data-city="${c}">${icon("map-pin")}${c}</button>`
        ).join("");
        return `
            <div class="summary-card">
                <img src="${t.img}" alt="" width="64" height="64" />
                <div><strong>طلب استقدام ${t.name}</strong><span>من اندونيسيا إلى السعودية</span></div>
            </div>
            <ul class="summary-list" role="list">
                <li><span>نوع الفيزا</span><strong>${t.visa}</strong></li>
                <li><span>السعر</span><strong>${t.price} ريال سعودي</strong></li>
                <li><span>مدة الإنجاز</span><strong>${t.duration}</strong></li>
            </ul>
            <form class="field" id="req-form" novalidate>
                <label for="req-city">مدينة الاستقدام</label>
                <input id="req-city" class="input" type="text" maxlength="30" placeholder="اكتب اسم مدينتك" autocomplete="address-level2" enterkeyhint="send" required />
                <div class="city-chips">${chips}</div>
            </form>
            <p class="form-note">سيتم فتح واتساب برسالة جاهزة فيها تفاصيل طلبك، ويمكنك تعديلها قبل الإرسال.</p>`;
    }

    function openRequest(opts) {
        const options = opts || {};
        let layer = null;
        let rendered = false;

        /* First render appears with the modal itself; later step changes animate */
        function render(content, dir) {
            if (rendered) layer.swap(content, dir);
            else layer.set(content);
            rendered = true;
        }

        function showChoose() {
            const visa = INDOFORALL_VISA_OPTIONS[options.visa];
            render(
                {
                    title: visa ? visa.title : "طلب استقدام من اندونيسيا",
                    subtitle: "الخطوة 1 من 2 — نوع العمالة",
                    body: requestChooseMarkup(options.visa),
                    foot: "",
                },
                -1
            );
        }

        function showDetails(type, canGoBack) {
            const t = INDOFORALL_WORKER_TYPES[type];
            render({
                title: `طلب استقدام ${t.name}`,
                subtitle: canGoBack ? "الخطوة 2 من 2 — مدينة الاستقدام" : "أدخل مدينتك لإرسال الطلب",
                body: requestDetailsMarkup(type),
                foot: `${canGoBack ? `<button class="btn btn--outline btn--icon" type="button" data-back aria-label="رجوع">${icon("arrow-right")}</button>` : ""}
                       <button class="btn btn--wa" type="submit" form="req-form">${icon("whatsapp")} إرسال الطلب عبر واتساب</button>`,
                onRender(l) {
                    const input = $("#req-city", l.el);
                    const form = $("#req-form", l.el);
                    $$("[data-city]", l.el).forEach((chip) =>
                        chip.addEventListener("click", () => {
                            input.value = chip.getAttribute("data-city");
                            input.classList.remove("is-invalid");
                            $$("[data-city]", l.el).forEach((c) => c.classList.toggle("is-active", c === chip));
                        })
                    );
                    input.addEventListener("input", () => input.classList.remove("is-invalid"));
                    form.addEventListener("submit", (e) => {
                        e.preventDefault();
                        const city = input.value.trim();
                        if (!city) {
                            input.classList.add("is-invalid");
                            input.focus();
                            window.showToastMessage("يرجى كتابة اسم المدينة أو اختيارها", 2500);
                            return;
                        }
                        track("generate_lead", { worker_type: t.name, city });
                        openWhatsApp(buildRequestMessage(type, city), "request-form");
                    });
                    const back = $("[data-back]", l.el);
                    if (back) back.addEventListener("click", showChoose);
                },
            }, 1);
        }

        layer = openModal({ title: "", body: "" });
        layer.el.addEventListener("click", (e) => {
            const pick = e.target.closest("[data-pick]");
            if (!pick) return;
            pick.classList.add("is-picked");
            showDetails(pick.getAttribute("data-pick"), true);
        });

        if (options.worker && INDOFORALL_WORKER_TYPES[options.worker]) showDetails(options.worker, false);
        else showChoose();
        return layer;
    }

    /* ---------------------------------------------------------------------
       5b) CV GALLERY (bottom sheet)
       --------------------------------------------------------------------- */
    function openGallery(type) {
        const t = INDOFORALL_WORKER_TYPES[type];
        if (!t) return;
        const items = t.cvs().map((x) => x.workerImg).filter(Boolean);

        const body = items.length
            ? `<ul class="gallery-grid" role="list">${items
                  .map(
                      (src, i) => `<li class="gallery-item">
                        <button type="button" data-lb-index="${i}" aria-label="تكبير السيرة الذاتية رقم ${i + 1}">
                            <img src="${src}" alt="سيرة ذاتية ${t.name} اندونيسية رقم ${i + 1}" loading="lazy" decoding="async" width="1080" height="1080" />
                        </button>
                        <span class="gallery-item__num">${i + 1}</span>
                        <span class="gallery-item__zoom">${icon("zoom")}</span>
                    </li>`
                  )
                  .join("")}</ul>`
            : `<div class="empty-state">
                    <span class="empty-state__icon">${icon("users")}</span>
                    <strong>السير الذاتية لـ${t.name} تُرسل عند الطلب</strong>
                    <p>تواصل معنا عبر الواتساب وسنرسل لك السير الذاتية والفيديوهات المتاحة حاليًا.</p>
               </div>`;

        const layer = openModal({
            wide: true,
            title: `استقدام ${t.name} من اندونيسيا`,
            subtitle: cvLabel(items.length) + (items.length ? " — اضغط على الصورة للتكبير" : ""),
            body,
            foot: `<button class="btn btn--gold" type="button" data-req>${icon("send")} طلب استقدام ${t.name}</button>
                   <a class="btn btn--wa btn--icon" href="${whatsappUrl()}" target="_blank" rel="noopener" data-wa="gallery" aria-label="تواصل واتساب">${icon("whatsapp")}</a>`,
        });

        layer.el.addEventListener("click", (e) => {
            const zoom = e.target.closest("[data-lb-index]");
            if (zoom) {
                openLightbox(items, parseInt(zoom.getAttribute("data-lb-index"), 10), `سيرة ذاتية ${t.name}`);
                return;
            }
            if (e.target.closest("[data-req]")) {
                Layers.requestClose(layer);
                setTimeout(() => openRequest({ worker: type }), 380);
            }
        });
    }

    /* ---------------------------------------------------------------------
       5c) "How do I use the site?" guidance
       --------------------------------------------------------------------- */
    function openGuide() {
        openModal({
            title: "كيف أستخدم موقع اندو للجميع؟",
            subtitle: "ثلاث خطوات سريعة لبدء طلبك",
            body: `<ol class="guide-steps">
                    <li>اختر نوع العمالة المناسبة لاحتياجك من قسم «أنواع العمالة» وشاهد السير الذاتية المتاحة.</li>
                    <li>راجع الأسعار ومدة الإنجاز في صفحة <a class="link-arrow" href="https://indoforall.com/%D8%A7%D8%B3%D8%B9%D8%A7%D8%B1-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%82%D8%AF%D8%A7%D9%85-%D9%85%D9%86-%D8%A7%D9%86%D8%AF%D9%88%D9%86%D9%8A%D8%B3%D9%8A%D8%A7">اسعار الاستقدام</a></li>
                    <li>اضغط «طلب استقدام» واكتب مدينتك، أو تواصل معنا مباشرة عبر الواتساب لنبدأ الإجراءات.</li>
                </ol>`,
            foot: `<button class="btn btn--gold" type="button" data-guide-req>${icon("send")} ابدأ طلب استقدام</button>
                   <a class="btn btn--wa btn--icon" href="${whatsappUrl()}" target="_blank" rel="noopener" data-wa="guide" aria-label="تواصل واتساب">${icon("whatsapp")}</a>`,
            onRender(l) {
                $("[data-guide-req]", l.el).addEventListener("click", () => {
                    Layers.requestClose(l);
                    setTimeout(() => openRequest(), 380);
                });
            },
        });
    }

    /* ---------------------------------------------------------------------
       5d) REVIEWS (Supabase)
       --------------------------------------------------------------------- */
    function isVisibleReview(item) {
        if (!item || !item.comment || !String(item.comment).trim()) return false;
        const status = item.status;
        if (status === undefined || status === null) return true; // legacy rows without status
        return status === true || status === "true";
    }

    function formatDate(value) {
        const d = new Date(value);
        if (!value || isNaN(d)) return value || "";
        try {
            return d.toLocaleDateString("ar-SA-u-ca-gregory-nu-latn", { year: "numeric", month: "long", day: "numeric" });
        } catch (e) {
            return value;
        }
    }

    function starsMarkup(n) {
        const stars = Math.max(0, Math.min(5, parseInt(n, 10) || 0));
        let out = "";
        for (let i = 1; i <= 5; i++) out += icon("star", i <= stars ? "" : "is-off");
        return `<div class="stars" role="img" aria-label="${stars} من 5 نجوم">${out}</div>`;
    }

    function reviewCard(item) {
        const name = String(item.reviewer_name || "عميل").trim();
        return `<article class="review-card">
            <span class="review-card__quote" aria-hidden="true">${icon("quote")}</span>
            ${starsMarkup(item.stars)}
            <p class="review-card__text">${escapeHtml(item.comment)}</p>
            <div class="review-card__author">
                <span class="avatar" aria-hidden="true">${escapeHtml(name.charAt(0) || "ع")}</span>
                <div>
                    <div class="review-card__name">${escapeHtml(name)}</div>
                    <div class="review-card__date">${escapeHtml(formatDate(item.review_date))}</div>
                </div>
            </div>
        </article>`;
    }

    const Reviews = (() => {
        const track$ = $("[data-reviews-track]");

        async function fetchAll() {
            const supabase = await Supa.get();
            const { data, error } = await supabase.from(REVIEWS_TABLE).select(REVIEWS_COLUMN).eq("id", 1).single();
            if (error) throw error;
            return (data && data[REVIEWS_COLUMN]) || [];
        }

        async function load() {
            if (!track$) return;
            track$.innerHTML = Array(3).fill('<div class="review-card review-card--skeleton skeleton"></div>').join("");
            try {
                const reviews = (await fetchAll()).filter(isVisibleReview);
                track$.innerHTML = reviews.length
                    ? reviews.map(reviewCard).join("")
                    : `<div class="reviews-empty">لا توجد تقييمات منشورة بعد — كن أول من يشاركنا تجربته.</div>`;
            } catch (e) {
                console.warn("Reviews:", e.message || e);
                track$.innerHTML = `<div class="reviews-empty">تعذّر تحميل التقييمات حاليًا. يمكنك مشاهدة آراء عملائنا على حساباتنا أو التواصل معنا عبر الواتساب.</div>`;
            }
            updateNav();
            if (HAS_GSAP && !REDUCED_MOTION) {
                gsap.from($$(".review-card", track$), {
                    autoAlpha: 0,
                    y: 30,
                    duration: 0.8,
                    stagger: 0.08,
                    ease: "power3.out",
                    clearProps: "transform",
                });
                ScrollTrigger.refresh();
            }
        }

        function step() {
            const card = $(".review-card", track$);
            return card ? card.getBoundingClientRect().width + 16 : track$.clientWidth * 0.8;
        }

        /* RTL: scrollLeft is 0 at the start (right edge) and negative toward the end */
        function updateNav() {
            const prev = $("[data-reviews-prev]");
            const next = $("[data-reviews-next]");
            if (!prev || !next || !track$) return;
            const pos = Math.abs(track$.scrollLeft);
            prev.disabled = pos <= 2;
            next.disabled = pos + track$.clientWidth >= track$.scrollWidth - 2;
        }

        function initControls() {
            if (!track$) return;
            const prev = $("[data-reviews-prev]");
            const next = $("[data-reviews-next]");
            if (prev) prev.addEventListener("click", () => track$.scrollBy({ left: step(), behavior: "smooth" }));
            if (next) next.addEventListener("click", () => track$.scrollBy({ left: -step(), behavior: "smooth" }));
            track$.addEventListener("scroll", () => requestAnimationFrame(updateNav), { passive: true });
            window.addEventListener("resize", updateNav);

            /* Mouse drag (desktop) */
            let down = false;
            let moved = false;
            let startX = 0;
            let startLeft = 0;
            track$.addEventListener("pointerdown", (e) => {
                if (e.pointerType !== "mouse") return;
                down = true;
                moved = false;
                startX = e.clientX;
                startLeft = track$.scrollLeft;
            });
            window.addEventListener("pointermove", (e) => {
                if (!down) return;
                const dx = e.clientX - startX;
                if (Math.abs(dx) > 5) {
                    moved = true;
                    track$.classList.add("is-dragging");
                }
                track$.scrollLeft = startLeft - dx;
            });
            window.addEventListener("pointerup", () => {
                if (!down) return;
                down = false;
                track$.classList.remove("is-dragging");
            });
            track$.addEventListener(
                "click",
                (e) => {
                    if (moved) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                },
                true
            );
        }

        async function submit(form, layer) {
            const btn = $('[type="submit"]', layer.el);
            const nameEl = $("#rv-name", form);
            const textEl = $("#rv-text", form);
            const waEl = $("#rv-wa", form);
            const starEl = $('input[name="rv-stars"]:checked', form);

            const reviewer_name = nameEl.value.trim();
            const comment = textEl.value.trim();
            const whatsapp = waEl.value.trim();
            const stars = parseInt(starEl ? starEl.value : "5", 10);

            let invalid = false;
            [nameEl, textEl].forEach((el) => {
                const bad = !el.value.trim();
                el.classList.toggle("is-invalid", bad);
                if (bad && !invalid) {
                    el.focus();
                    invalid = true;
                }
            });
            if (invalid) {
                window.showToastMessage("يرجى كتابة اسمك ورأيك قبل الإرسال", 2500);
                return;
            }

            const originalLabel = btn.innerHTML;
            btn.disabled = true;
            btn.textContent = "جاري الإرسال…";

            const newComment = {
                review_date: new Date().toISOString().split("T")[0],
                reviewer_name,
                comment,
                stars,
                whatsapp: whatsapp || null,
                status: "false",
            };

            try {
                const supabase = await Supa.get();
                const { data, error: fetchError } = await supabase
                    .from(REVIEWS_TABLE)
                    .select(REVIEWS_COLUMN)
                    .eq("id", 1)
                    .single();
                if (fetchError) throw fetchError;

                const updated = [newComment, ...((data && data[REVIEWS_COLUMN]) || [])];
                const { error: updateError } = await supabase
                    .from(REVIEWS_TABLE)
                    .update({ [REVIEWS_COLUMN]: updated })
                    .eq("id", 1);
                if (updateError) throw updateError;

                sendCommentEmail({
                    userName: reviewer_name,
                    userCommentText: comment,
                    userStarRate: stars,
                    userWhatsAppNumber: whatsapp,
                });

                track("review_submitted", { stars });
                Layers.requestClose(layer);
                window.showToastMessage("تم إرسال تقييمك بنجاح، شكرًا لك! سيظهر بعد مراجعته.", 4500);
            } catch (e) {
                console.error("Error submitting comment:", e.message || e);
                window.showToastMessage("تعذّر إرسال التقييم الآن، حاول مرة أخرى أو راسلنا على الواتساب.", 4000);
            } finally {
                btn.disabled = false;
                btn.innerHTML = originalLabel;
            }
        }

        function openForm() {
            const starsInputs = [5, 4, 3, 2, 1]
                .map(
                    (n) =>
                        `<input type="radio" id="rv-s${n}" name="rv-stars" value="${n}" ${n === 5 ? "checked" : ""} /><label for="rv-s${n}" title="${n} من 5">${icon("star")}<span class="sr-only">${n} من 5</span></label>`
                )
                .join("");
            openModal({
                title: "شارك تجربتك مع اندو للجميع",
                subtitle: "نعتمد على آرائكم لتحسين خدماتنا",
                body: `<form id="review-form" novalidate>
                        <div class="field"><label for="rv-name">اسمك</label><input id="rv-name" class="input" type="text" maxlength="30" autocomplete="name" required /></div>
                        <fieldset class="field"><legend>تقييمك للخدمة</legend><div class="star-input">${starsInputs}</div></fieldset>
                        <div class="field"><label for="rv-text">رأيك <span class="hint">(<span data-count>0</span>/200)</span></label><textarea id="rv-text" class="input" maxlength="200" required></textarea></div>
                        <div class="field"><label for="rv-wa">رقم الواتساب <span class="hint">(اختياري للتواصل لاحقًا)</span></label><input id="rv-wa" class="input" type="tel" inputmode="tel" maxlength="20" autocomplete="tel" placeholder="05xxxxxxxx" /></div>
                        <p class="form-note">تظهر التقييمات في الموقع بعد مراجعتها من فريقنا، ولا يتم نشر رقم الواتساب.</p>
                    </form>`,
                foot: `<button class="btn btn--gold" type="submit" form="review-form">${icon("send")} إرسال التقييم</button>`,
                onRender(l) {
                    const form = $("#review-form", l.el);
                    const text = $("#rv-text", l.el);
                    const counter = $("[data-count]", l.el);
                    text.addEventListener("input", () => {
                        counter.textContent = text.value.length;
                        text.classList.remove("is-invalid");
                    });
                    $("#rv-name", l.el).addEventListener("input", (e) => e.target.classList.remove("is-invalid"));
                    form.addEventListener("submit", (e) => {
                        e.preventDefault();
                        submit(form, l);
                    });
                },
            });
        }

        return { load, initControls, openForm, hasTrack: () => !!track$ };
    })();

    /* Email notification via Netlify function (not available on a plain local server) */
    function sendCommentEmail(payload) {
        if (IS_PREVIEW) {
            console.info("[preview] Comment email notification skipped (Netlify function runs only on the live site).");
            return;
        }
        fetch("/.netlify/functions/send-comment-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        })
            .then((res) => {
                if (!res.ok) console.warn("Comment email send failed:", res.status);
            })
            .catch((e) => console.warn("Comment email error:", e));
    }

    /* ---------------------------------------------------------------------
       6a) GLOBAL CLICK DELEGATION
       --------------------------------------------------------------------- */
    doc.addEventListener("click", (e) => {
        const wa = e.target.closest('a[href^="https://wa.me"]');
        if (wa) {
            if (IS_IOS) {
                e.preventDefault();
                openWhatsApp("", wa.getAttribute("data-wa"));
            } else {
                countWhatsAppClick(wa.getAttribute("data-wa"));
            }
            return;
        }

        const actionEl = e.target.closest("[data-action]");
        if (!actionEl) return;
        const action = actionEl.getAttribute("data-action");
        switch (action) {
            case "request":
                e.preventDefault();
                openRequest({ worker: actionEl.getAttribute("data-worker"), visa: actionEl.getAttribute("data-visa") });
                break;
            case "gallery":
                e.preventDefault();
                openGallery(actionEl.getAttribute("data-worker"));
                break;
            case "guide":
                e.preventDefault();
                openGuide();
                break;
            case "review":
                e.preventDefault();
                Reviews.openForm();
                break;
            case "lightbox": {
                e.preventDefault();
                const group = actionEl.getAttribute("data-group");
                if (group) {
                    const all = $$(`[data-action="lightbox"][data-group="${group}"]`);
                    openLightbox(
                        all.map((x) => x.getAttribute("data-src")),
                        all.indexOf(actionEl),
                        actionEl.getAttribute("data-alt")
                    );
                } else {
                    openLightbox([actionEl.getAttribute("data-src")], 0, actionEl.getAttribute("data-alt"));
                }
                break;
            }
            default:
                break;
        }
    });

    /* ---------------------------------------------------------------------
       6b) HEADER, MOBILE MENU, DOCK, PROGRESS
       --------------------------------------------------------------------- */
    function initHeader() {
        const header = $(".site-header");
        const dock = $(".mobile-dock");
        const progress = $(".scroll-progress");
        const hero = $(".hero, .page-hero");
        if (!header) return;

        let lastY = window.scrollY;
        let ticking = false;

        function update() {
            ticking = false;
            const y = window.scrollY;
            const menuOpen = root.classList.contains("menu-open");
            header.classList.toggle("is-scrolled", y > 24);
            if (!menuOpen && !root.classList.contains("is-locked")) {
                if (y > lastY + 6 && y > 320) header.classList.add("is-hidden");
                else if (y < lastY - 6 || y < 320) header.classList.remove("is-hidden");
            }
            if (dock) {
                const threshold = hero ? hero.offsetHeight * 0.55 : 300;
                dock.classList.toggle("is-visible", y > threshold);
            }
            if (progress) {
                const max = doc.documentElement.scrollHeight - window.innerHeight;
                progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
            }
            lastY = y;
        }

        window.addEventListener(
            "scroll",
            () => {
                if (!ticking) {
                    ticking = true;
                    requestAnimationFrame(update);
                }
            },
            { passive: true }
        );
        update();
    }

    function initMobileMenu() {
        const burger = $(".burger");
        const menu = $(".mobile-menu");
        if (!burger || !menu) return;
        const scroller = $(".mobile-menu__scroll", menu) || menu;
        let layer = null;

        scroller.addEventListener(
            "scroll",
            () => root.classList.toggle("menu-scrolled", scroller.scrollTop > 4),
            { passive: true }
        );

        function place() {
            const r = burger.getBoundingClientRect();
            menu.style.setProperty("--mx", `${r.left + r.width / 2}px`);
            menu.style.setProperty("--my", `${r.top + r.height / 2}px`);
        }

        function open() {
            place();
            scroller.scrollTop = 0;
            root.classList.remove("menu-scrolled");
            root.classList.add("menu-open");
            burger.setAttribute("aria-expanded", "true");
            burger.setAttribute("aria-label", "إغلاق القائمة");
            menu.setAttribute("aria-hidden", "false");
            layer = {
                hide() {
                    root.classList.remove("menu-open", "menu-scrolled");
                    burger.setAttribute("aria-expanded", "false");
                    burger.setAttribute("aria-label", "فتح القائمة");
                    menu.setAttribute("aria-hidden", "true");
                    layer = null;
                },
            };
            Layers.push(layer);
        }

        burger.addEventListener("click", () => {
            if (layer) Layers.requestClose(layer);
            else open();
        });

        menu.addEventListener("click", (e) => {
            const link = e.target.closest("a");
            if (!link || !layer) return;
            const href = link.getAttribute("href") || "";
            /* Same-page anchors: close first, then scroll */
            if (href.startsWith("#")) {
                e.preventDefault();
                Layers.requestClose(layer);
                const target = $(href);
                if (target) setTimeout(() => scrollToEl(target), 450);
            }
        });

        window.addEventListener("resize", () => {
            if (layer && window.innerWidth >= 1100) Layers.requestClose(layer);
        });
    }

    function scrollToEl(el) {
        const headerH = ($(".site-header") || { offsetHeight: 64 }).offsetHeight;
        if (lenis) {
            lenis.scrollTo(el, { offset: -headerH - 8, duration: 1.2 });
        } else {
            const top = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
            window.scrollTo({ top, behavior: REDUCED_MOTION ? "auto" : "smooth" });
        }
    }

    function initAnchors() {
        doc.addEventListener("click", (e) => {
            const a = e.target.closest('a[href^="#"]');
            if (!a || a.closest(".mobile-menu")) return;
            const id = a.getAttribute("href");
            if (id.length < 2) return;
            const target = doc.getElementById(decodeURIComponent(id.slice(1)));
            if (!target) return;
            e.preventDefault();
            scrollToEl(target);
            history.replaceState(null, "", id);
        });
    }

    /* ---------------------------------------------------------------------
       6c) FAQ accordion (native <details> + height animation)
       --------------------------------------------------------------------- */
    function initFaq() {
        $$("details.faq-item").forEach((item) => {
            const summary = $("summary", item);
            const answer = $(".faq-answer", item);
            if (!summary || !answer) return;
            summary.addEventListener("click", (e) => {
                if (REDUCED_MOTION || typeof answer.animate !== "function") return;
                e.preventDefault();
                if (item.dataset.animating) return;
                item.dataset.animating = "1";
                const easing = "cubic-bezier(.22,1,.36,1)";
                const done = () => {
                    delete item.dataset.animating;
                    answer.style.height = "";
                    if (HAS_GSAP) ScrollTrigger.refresh();
                };
                if (!item.open) {
                    item.open = true;
                    const h = answer.scrollHeight;
                    answer.animate(
                        [
                            { height: "0px", opacity: 0 },
                            { height: h + "px", opacity: 1 },
                        ],
                        { duration: 450, easing }
                    ).onfinish = done;
                } else {
                    const h = answer.scrollHeight;
                    const anim = answer.animate(
                        [
                            { height: h + "px", opacity: 1 },
                            { height: "0px", opacity: 0 },
                        ],
                        { duration: 320, easing }
                    );
                    anim.onfinish = () => {
                        item.open = false;
                        done();
                    };
                }
            });
        });
    }

    /* ---------------------------------------------------------------------
       6d) PAGE-SPECIFIC RENDERS
       --------------------------------------------------------------------- */
    function renderCvCounts() {
        $$("[data-cv-count]").forEach((el) => {
            const t = INDOFORALL_WORKER_TYPES[el.getAttribute("data-cv-count")];
            if (t) el.textContent = cvLabel(t.cvs().length);
        });
    }

    function renderProofGallery() {
        const list = $("[data-proof-gallery]");
        if (!list) return;
        list.innerHTML = indoforall_proofVideosArray
            .map((item) => item.imgSrc)
            .filter(Boolean)
            .map(
                (src, i) => `<li class="gallery-item" data-reveal="up">
                    <button type="button" data-action="lightbox" data-group="proof" data-src="${src}" data-alt="إثبات مصداقية الاستقدام من اندونيسيا رقم ${i + 1}" aria-label="تكبير الإثبات رقم ${i + 1}">
                        <img src="${src}" alt="إثبات وصول عمالة اندونيسية - تذكرة ووثائق سفر رقم ${i + 1}" loading="lazy" decoding="async" width="1080" height="1080" />
                    </button>
                    <span class="gallery-item__num">${i + 1}</span>
                    <span class="gallery-item__zoom">${icon("zoom")}</span>
                </li>`
            )
            .join("");
    }

    function renderAdsMedia() {
        const wrap = $("[data-ads-media]");
        if (!wrap) return;
        wrap.innerHTML = indoforall_adsVideosArray
            .map((item, i) => {
                if (item.videoSrc) {
                    return `<figure class="media-card media-card--video" data-reveal="up">
                        <video src="${item.videoSrc}" poster="${item.videoThumbnailSrc || ""}" controls playsinline preload="none" title="استقدام من اندونيسيا - اندو للجميع"></video>
                    </figure>`;
                }
                return `<figure class="media-card" data-reveal="up">
                    <button type="button" data-action="lightbox" data-group="ads" data-src="${item.imgSrc}" aria-label="تكبير الإعلان ${i + 1}">
                        <img src="${item.imgSrc}" alt="إعلان اندو للجميع للاستقدام من اندونيسيا" loading="lazy" decoding="async" />
                    </button>
                </figure>`;
            })
            .join("");

        /* Only one video plays at a time */
        const videos = $$("video", wrap);
        videos.forEach((v) =>
            v.addEventListener("play", () =>
                videos.forEach((o) => {
                    if (o !== v) o.pause();
                })
            )
        );
    }

    function initYear() {
        $$("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));
    }

    /* ---------------------------------------------------------------------
       7a) SMOOTH SCROLL — Lenis on desktop only (phones keep native scrolling)
       --------------------------------------------------------------------- */
    function initLenis() {
        if (!window.Lenis || REDUCED_MOTION || IS_TOUCH) return;
        lenis = new window.Lenis({ lerp: 0.1, smoothWheel: true, wheelMultiplier: 1 });
        if (HAS_GSAP) {
            lenis.on("scroll", ScrollTrigger.update);
            gsap.ticker.add((time) => lenis.raf(time * 1000));
            gsap.ticker.lagSmoothing(0);
        } else {
            const raf = (t) => {
                lenis.raf(t);
                requestAnimationFrame(raf);
            };
            requestAnimationFrame(raf);
        }
    }

    /* ---------------------------------------------------------------------
       7b) ANIMATIONS
       --------------------------------------------------------------------- */
    function splitWords(el) {
        if (el.dataset.splitDone) return [];
        el.dataset.splitDone = "1";
        const walker = doc.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        const words = [];
        nodes.forEach((node) => {
            const frag = doc.createDocumentFragment();
            node.textContent.split(/(\s+)/).forEach((part) => {
                if (!part) return;
                if (/^\s+$/.test(part)) {
                    frag.appendChild(doc.createTextNode(part));
                } else {
                    const span = doc.createElement("span");
                    span.className = "split-word";
                    span.textContent = part;
                    frag.appendChild(span);
                    words.push(span);
                }
            });
            node.parentNode.replaceChild(frag, node);
        });
        return words;
    }

    const REVEAL_FROM = {
        up: { y: 44 },
        down: { y: -30 },
        left: { x: -44 },
        right: { x: 44 },
        scale: { scale: 0.9 },
        fade: {},
        clip: { clipPath: "inset(14% 14% 14% 14% round 32px)", scale: 1.04 },
    };

    function revealFallback() {
        const els = $$("[data-reveal]").filter((el) => !el.classList.contains("is-revealed-css"));
        if (!("IntersectionObserver" in window)) {
            els.forEach((el) => el.classList.add("is-revealed-css"));
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-revealed-css");
                        io.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: "0px 0px -8% 0px" }
        );
        els.forEach((el) => io.observe(el));
    }

    function initRevealsGsap(scope) {
        const els = $$("[data-reveal]", scope || doc).filter((el) => !el.dataset.revealInit);
        if (!els.length) return;
        els.forEach((el) => {
            el.dataset.revealInit = "1";
            const from = REVEAL_FROM[el.getAttribute("data-reveal")] || REVEAL_FROM.up;
            gsap.set(el, Object.assign({ autoAlpha: 0 }, from));
        });
        ScrollTrigger.batch(els, {
            start: "top 92%",
            once: true,
            onEnter: (batch) => {
                batch.forEach((el, i) => {
                    const type = el.getAttribute("data-reveal");
                    const to = { autoAlpha: 1, x: 0, y: 0, scale: 1, duration: 1, ease: "power3.out", delay: i * 0.08 };
                    if (type === "clip") {
                        to.clipPath = "inset(0% 0% 0% 0% round 32px)";
                        to.duration = 1.3;
                        to.ease = "expo.out";
                    }
                    to.clearProps = type === "clip" ? "transform,clipPath" : "transform";
                    gsap.to(el, to);
                });
            },
        });
    }

    function formatNumber(v, decimals) {
        return decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString("en-US");
    }

    function initAnimations() {
        /* Reduced motion (or no GSAP): gentle opacity fades only */
        if (REDUCED_MOTION || !HAS_GSAP) {
            revealFallback();
            return;
        }

        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();

        /* Word-by-word headings */
        $$("[data-split]").forEach((el) => {
            const words = splitWords(el);
            if (!words.length) return;
            gsap.set(words, { yPercent: 70, autoAlpha: 0, rotate: 4 });
            ScrollTrigger.create({
                trigger: el,
                start: "top 90%",
                once: true,
                onEnter: () =>
                    gsap.to(words, {
                        yPercent: 0,
                        autoAlpha: 1,
                        rotate: 0,
                        duration: 0.9,
                        ease: "power4.out",
                        stagger: 0.045,
                    }),
            });
        });

        initRevealsGsap();

        /* Count-up numbers */
        $$("[data-count]").forEach((el) => {
            const end = parseFloat(el.getAttribute("data-count"));
            if (isNaN(end)) return;
            const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
            const obj = { v: 0 };
            el.textContent = formatNumber(0, decimals);
            ScrollTrigger.create({
                trigger: el,
                start: "top 94%",
                once: true,
                onEnter: () =>
                    gsap.to(obj, {
                        v: end,
                        duration: 1.8,
                        ease: "power2.out",
                        delay: parseFloat(el.getAttribute("data-count-delay") || "0"),
                        onUpdate: () => (el.textContent = formatNumber(obj.v, decimals)),
                    }),
            });
        });

        /* Steps timeline progress line */
        const steps = $(".steps");
        const progressLine = $(".steps__progress");
        if (steps && progressLine) {
            mm.add("(max-width: 1023.98px)", () => {
                gsap.fromTo(
                    progressLine,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        ease: "none",
                        scrollTrigger: { trigger: steps, start: "top 65%", end: "bottom 65%", scrub: 0.6 },
                    }
                );
            });
            mm.add("(min-width: 1024px)", () => {
                gsap.fromTo(
                    progressLine,
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        ease: "none",
                        scrollTrigger: { trigger: steps, start: "top 80%", end: "top 30%", scrub: 0.6 },
                    }
                );
            });
            $$(".step__num", steps).forEach((num) => {
                gsap.from(num, {
                    scale: 0.4,
                    autoAlpha: 0,
                    duration: 0.7,
                    ease: "back.out(2)",
                    scrollTrigger: { trigger: num, start: "top 85%", once: true },
                });
            });
        }

        /* Ticker: continuous loop that speeds up with scroll velocity */
        const tickerTrack = $(".ticker__track");
        if (tickerTrack) {
            tickerTrack.classList.remove("is-css");
            const loop = gsap.to(tickerTrack, { xPercent: 50, ease: "none", duration: 38, repeat: -1 });
            let resetTween = null;
            ScrollTrigger.create({
                trigger: tickerTrack,
                start: "top bottom",
                end: "bottom top",
                onUpdate(self) {
                    const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 250, 7);
                    loop.timeScale(boost);
                    if (resetTween) resetTween.kill();
                    resetTween = gsap.to(loop, { timeScale: 1, duration: 1.2, ease: "power2.out", delay: 0.1 });
                },
            });
        }

        /* Desktop-only depth effects */
        mm.add("(min-width: 1024px) and (hover: hover)", () => {
            const hero = $(".hero");
            if (hero) {
                gsap.to(".hero__visual", {
                    yPercent: 14,
                    ease: "none",
                    scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
                });
                gsap.to(".hero__copy", {
                    yPercent: -8,
                    autoAlpha: 0.35,
                    ease: "none",
                    scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
                });

                /* Pointer parallax on the orbit */
                const layers = [
                    { el: $(".orbit__photo", hero), depth: 14 },
                    { el: $(".float-badge--1", hero), depth: -22 },
                    { el: $(".float-badge--2", hero), depth: 26 },
                    { el: $(".float-badge--3", hero), depth: -16 },
                ]
                    .filter((l) => l.el)
                    .map((l) => ({
                        depth: l.depth,
                        x: gsap.quickTo(l.el, "x", { duration: 0.8, ease: "power3.out" }),
                        y: gsap.quickTo(l.el, "y", { duration: 0.8, ease: "power3.out" }),
                    }));
                const onMove = (e) => {
                    const r = hero.getBoundingClientRect();
                    const nx = (e.clientX - r.left) / r.width - 0.5;
                    const ny = (e.clientY - r.top) / r.height - 0.5;
                    layers.forEach((l) => {
                        l.x(nx * l.depth);
                        l.y(ny * l.depth);
                    });
                };
                hero.addEventListener("pointermove", onMove);
                return () => hero.removeEventListener("pointermove", onMove);
            }
            return undefined;
        });

        mm.add("(min-width: 900px) and (hover: hover)", () => {
            $$("[data-parallax]").forEach((el) => {
                gsap.fromTo(
                    el,
                    { yPercent: -6 },
                    {
                        yPercent: 6,
                        ease: "none",
                        scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
                    }
                );
            });

            /* Magnetic buttons */
            const cleanups = $$("[data-magnetic]").map((btn) => {
                const xTo = gsap.quickTo(btn, "x", { duration: 0.6, ease: "power3.out" });
                const yTo = gsap.quickTo(btn, "y", { duration: 0.6, ease: "power3.out" });
                const move = (e) => {
                    const r = btn.getBoundingClientRect();
                    xTo((e.clientX - (r.left + r.width / 2)) * 0.25);
                    yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
                };
                const leave = () => {
                    xTo(0);
                    yTo(0);
                };
                btn.addEventListener("pointermove", move);
                btn.addEventListener("pointerleave", leave);
                return () => {
                    btn.removeEventListener("pointermove", move);
                    btn.removeEventListener("pointerleave", leave);
                };
            });
            return () => cleanups.forEach((fn) => fn());
        });

        /* Recalculate after fonts/images settle */
        if (doc.fonts && doc.fonts.ready) doc.fonts.ready.then(() => ScrollTrigger.refresh());
        window.addEventListener("load", () => ScrollTrigger.refresh());
    }

    /* ---------------------------------------------------------------------
       BOOT
       --------------------------------------------------------------------- */
    function boot() {
        localizeLinks();
        markCurrentNav();
        initYear();
        renderCvCounts();
        renderProofGallery();
        renderAdsMedia();
        initHeader();
        initMobileMenu();
        initAnchors();
        initFaq();
        initLenis();
        initAnimations();

        if (Reviews.hasTrack()) {
            Reviews.initControls();
            const start = () => Reviews.load();
            if ("requestIdleCallback" in window) window.requestIdleCallback(start, { timeout: 1500 });
            else setTimeout(start, 300);
        }

        /* Handy for testing in the console */
        window.IndoForAll = { openRequest, openGallery, openGuide, openWhatsApp, isLocal: IS_LOCAL, supabase: Supa.get };
    }

    if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", boot);
    else boot();
})();
