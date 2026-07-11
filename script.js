/* ===========================
   PORTFOLIO CONFIG
   Edit everything here
=========================== */

const config = {
    name: "REVEN",

    email: "your@email.com",

    social: {
        instagram: "https://instagram.com/yourusername",
        tiktok: "https://tiktok.com/@yourusername",
        threads: "https://threads.net/@yourusername",
        strava: "https://www.strava.com/athletes/yourid",
        hevy: "https://hevy.com/user/yourusername",
        spotify: "https://open.spotify.com/user/yourid"
    },

    pb: {
        "5k": "00:00:00",
        "10k": "00:00:00",
        "15k": "00:00:00",
        "21k": "Soon."
    },

    quotes: [

        "The clock doesn't care about excuses.",

        "No shortcuts. Just mileage.",

        "Discipline ages better than motivation.",

        "Student by obligation. Runner by choice.",

        "Train now. Flex later.",

        "Motivation is optional. Consistency isn't."

    ]
};


/* ===========================
   PERSONAL BEST
=========================== */

const pb5 = document.getElementById("pb5k");
const pb10 = document.getElementById("pb10k");
const pb15 = document.getElementById("pb15k");
const pb21 = document.getElementById("pb21k");

if (pb5) pb5.textContent = config.pb["5k"];
if (pb10) pb10.textContent = config.pb["10k"];
if (pb15) pb15.textContent = config.pb["15k"];
if (pb21) pb21.textContent = config.pb["21k"];


/* ===========================
   SOCIAL LINKS
=========================== */

const instagram = document.getElementById("instagram");
const tiktok = document.getElementById("tiktok");
const threads = document.getElementById("threads");
const strava = document.getElementById("strava");
const hevy = document.getElementById("hevy");
const spotify = document.getElementById("spotify");
const igContact = document.getElementById("igContact");

function setLink(element, url) {
    if (!element) return;

    element.href = url;
    element.target = "_blank";
}

setLink(instagram, config.social.instagram);
setLink(tiktok, config.social.tiktok);
setLink(threads, config.social.threads);
setLink(strava, config.social.strava);
setLink(hevy, config.social.hevy);
setLink(spotify, config.social.spotify);
setLink(igContact, config.social.instagram);


/* ===========================
   EMAIL
=========================== */

const emailText = document.querySelector("#contact p");

if (emailText) {
    emailText.textContent = `Email: ${config.email}`;
}


/* ===========================
   ROTATING QUOTES
=========================== */

const quote = document.getElementById("quote");

let quoteIndex = 0;

function changeQuote() {

    if (!quote) return;

    quote.style.opacity = 0;

    setTimeout(() => {

        quote.textContent = config.quotes[quoteIndex];

        quote.style.opacity = 1;

        quoteIndex++;

        if (quoteIndex >= config.quotes.length) {
            quoteIndex = 0;
        }

    }, 300);

}

changeQuote();

setInterval(changeQuote, 4000);


/* ===========================
   SCROLL REVEAL
=========================== */

const revealElements = document.querySelectorAll(
    "section, .pb-card, .stat-card, .profile-card"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


/* ===========================
   SMOOTH NAV ACTIVE
=========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

Part-time student.
Full-time training.
`);
