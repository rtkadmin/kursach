const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdownCaret = document.querySelector(".arrow");
const dropdownContent = document.querySelector(".dropdown-content");

// add click event to dropdown button
dropdownBtn.addEventListener("click", () => {
    // add rotate to caret element
    dropdownCaret.classList.toggle("arrow-rotate");
    // add open styles to menu element
    dropdownContent.classList.toggle("menu-open");
    dropdownBtn.setAttribute(
        "aria-expanded",
        dropdownBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
});

const dropdownBtn2 = document.querySelector(".dropdown-btn2");
const dropdownCaret2 = document.querySelector(".arrow2");
const dropdownContent2 = document.querySelector(".dropdown-content2");

// add click event to dropdown button
dropdownBtn2.addEventListener("click", () => {
    // add rotate to caret element
    dropdownCaret2.classList.toggle("arrow-rotate");
    // add open styles to menu element
    dropdownContent2.classList.toggle("menu-open");
    dropdownBtn2.setAttribute(
        "aria-expanded",
        dropdownBtn2.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
});
const dropdownBtn3 = document.querySelector(".dropdown-btn3");
const dropdownCaret3 = document.querySelector(".arrow3");
const dropdownContent3 = document.querySelector(".dropdown-content3");

// add click event to dropdown button
dropdownBtn3.addEventListener("click", () => {
    // add rotate to caret element
    dropdownCaret3.classList.toggle("arrow-rotate");
    // add open styles to menu element
    dropdownContent3.classList.toggle("menu-open");
    dropdownBtn3.setAttribute(
        "aria-expanded",
        dropdownBtn3.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
});
const dropdownBtn4 = document.querySelector(".dropdown-btn4");
const dropdownCaret4 = document.querySelector(".arrow4");
const dropdownContent4 = document.querySelector(".dropdown-content4");

// add click event to dropdown button
dropdownBtn4.addEventListener("click", () => {
    // add rotate to caret element
    dropdownCaret4.classList.toggle("arrow-rotate");
    // add open styles to menu element
    dropdownContent4.classList.toggle("menu-open");
    dropdownBtn4.setAttribute(
        "aria-expanded",
        dropdownBtn4.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
});


