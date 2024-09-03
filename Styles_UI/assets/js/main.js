// Pagination
let links = document.getElementsByClassName("prod-pagination__item");
let currentValue = 1;

function activeLink() {
    for (link of links) {
        link.classList.remove("active");
    }
    e.target.classList.add("active");
    currentValue = e.target.value;
}

// Slide text
let copy1 = document.querySelector(".footer-slide__wrap").cloneNode(true);
document.querySelector(".footer-slide").appendChild(copy1);

let copy2 = document.querySelector(".home__box").cloneNode(true);
document.querySelector(".home__slide").appendChild(copy2);

let copy3 = document.querySelector(".home__box1").cloneNode(true);
document.querySelector(".home__slide1").appendChild(copy3);

let copy4 = document.querySelector(".home__box2").cloneNode(true);
document.querySelector(".home__slide2").appendChild(copy4);

/// Chuyển tab
window.addEventListener("template-loaded", () => {
    const tabsSelector = "dev-container__item";
    const contentsSelector = "dev-container__text";

    const tabActive = `${tabsSelector}--active`;
    const contentActive = `${contentsSelector}--active`;

    const tabContainers = $$(".js-tabs");
    tabContainers.forEach((tabContainer) => {
        const tabs = tabContainer.querySelectorAll(`.${tabsSelector}`);
        const contents = tabContainer.querySelectorAll(`.${contentsSelector}`);
        tabs.forEach((tab, index) => {
            tab.onclick = () => {
                tabContainer
                    .querySelector(`.${tabActive}`)
                    ?.classList.remove(tabActive);
                tabContainer
                    .querySelector(`.${contentActive}`)
                    ?.classList.remove(contentActive);
                tab.classList.add(tabActive);
                contents[index].classList.add(contentActive);
            };
        });
    });
});

/**
 * JS toggle
 *
 * Cách dùng:
 * <button class="js-toggle" toggle-target="#box" >Click</button>
 * <div id="box">Content show/hide</div>
 */
window.addEventListener("template-loaded", initJsToggle);

function initJsToggle() {
    $$(".js-toggle").forEach((button) => {
        const target = button.getAttribute("toggle-target");
        if (!target) {
            document.body.innerText = `Cần thêm toggle-target cho: ${button.outerHTML}`;
        }
        button.onclick = (e) => {
            e.preventDefault();

            if (!$(target)) {
                return (document.body.innerText = `Không tìm thấy phần tử "${target}"`);
            }
            const isHidden = $(target).classList.contains("hide");

            requestAnimationFrame(() => {
                $(target).classList.toggle("hide", !isHidden);
                $(target).classList.toggle("show", isHidden);
            });
        };
        document.onclick = function (e) {
            if (!e.target.closest(target)) {
                const isHidden = $(target).classList.contains("hide");
                if (!isHidden) {
                    button.click();
                }
            }
        };
    });
}

window.addEventListener("template-loaded", () => {
    const links = $$(".js-dropdown-list > li > a");

    links.forEach((link) => {
        link.onclick = () => {
            if (window.innerWidth > 991) return;
            const item = link.closest("li");
            item.classList.toggle("navbar__item--active");
        };
    });
});

//Delete banner
function deleteBanner() {
    document.getElementById("banner").style.display = "none";
}

//move banner
function moveRightBanner() {
    document.getElementById("bannerLogin").style.left = "759px";
}

function moveLeftBanner() {
    document.getElementById("bannerLogin").style.left = "0";
}

//Push Image
document.getElementById("pushImage").onclick = function () {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = (_) => {
        let files = Array.from(input.files);
        console.log(files);
    };
    input.click();
};

//Push microphone
document.getElementById("mic").onclick = function () {
    let output = document.getElementById("message");
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    let recognization = new SpeechRecognition();
    recognization.onstart = () => {};
    recognization.onresult = (e) => {
        var transcript = e.results[0][0].transcript;
        output.innerText = transcript;
    };
    recognization.start();
};

//Chat message
function message(text) {
    return `<p
    id="messageUser"
    class="chat-message__text"
>${text}</p>`;
}

document.getElementById("send").onclick = function () {
    let mess = document.getElementById("inputMessage").value;
    document.getElementById("chat-box__wrap").style.display = "none";
    document.getElementById("inputMessage").value = "";
    document.getElementById("chat").innerHTML += message(mess);
};

//Carousel
const carousel = document.querySelector(".feedback-container__carousel"),
    firstItem = document.querySelectorAll(".feedback-container__box")[0],
    arrowIcons = document.querySelectorAll(".feedback-content__btn"),
    unMarginLeft = document.querySelector(".feedback-container");

let isDragStart = false,
    prevPageX,
    prevScrollLeft,
    positionDiff;

let firstItemWidth = firstItem.clientWidth + 14;

arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft +=
            icon.id == "left" ? -firstItemWidth : firstItemWidth;
    });
});

const autoSlide = () => {
    positionDiff = Math.abs(positionDiff);
    let firstItemWidth = firstItem.clientWidth + 14;
    let valDifference = firstItemWidth - positionDiff;

    if (carousel.scrollLeft > prevScrollLeft) {
        return (carousel.scrollLeft +=
            positionDiff > firstItemWidth / 3 ? valDifference : -positionDiff);
    }
    carousel.scrollLeft -=
        positionDiff > firstItemWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    // unMarginLeft.style.marginLeft = "20px";
};

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    autoSlide();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);
