const designsection = document.getElementById("graphic-design-list");
const uidesignsection = document.getElementById("ui-design-list");
const othersection = document.getElementById("other-list");

const pythontitle = document.getElementById("python-title");
const webtitle = document.getElementById("web-title");

setInterval(() => {
    if (window.innerWidth < 1000) {
        designsection.classList = "presentation";
        uidesignsection.classList = "presentation";
        othersection.classList = "presentation";
        pythontitle.innerText = "Other";
        webtitle.innerText = "";
    } else {
        designsection.classList = "presentation-grid-four";
        uidesignsection.classList = "presentation-grid-two";
        othersection.classList = "presentation-grid-two";
        pythontitle.innerText = "Python"
        webtitle.innerText = "Web"
    }
}, 1);

document.body.addEventListener("click", function() {
    console.log(window.innerWidth);
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

$("img").ready(function() {
    setTimeout(function() {
        console.log("ready");
        
        $("#loading").animate({
            top: "100%"
        }, 800, function() {
            this.classList = "none"
        })

    }, getRndInteger(200, 800))
});