// let isSafari = false,
//     isExplorer = false

// // CHROME
// if (navigator.userAgent.indexOf("Chrome") != -1) {
//     console.log("Google Chrome");
// }
// // FIREFOX
// else if (navigator.userAgent.indexOf("Firefox") != -1) {
//     console.log("Mozilla Firefox");
// }
// // INTERNET EXPLORER
// else if (navigator.userAgent.indexOf("MSIE") != -1) {
//     isExplorer = true
// }
// // EDGE
// else if (navigator.userAgent.indexOf("Edge") != -1) {
//     console.log("Internet Exploder");
// }
// // SAFARI
// else if (navigator.userAgent.indexOf("Safari") != -1) {
//     isSafari = true
// }
// // OPERA
// else if (navigator.userAgent.indexOf("Opera") != -1) {
//     console.log("Opera");
// }
// // YANDEX BROWSER
// else if (navigator.userAgent.indexOf("YaBrowser") != -1) {
//     console.log("YaBrowser");
// }
// // OTHERS
// else {
//     console.log("Others");
// }

new Swiper(".discounts", {
    pagination: {
        el: ".discounts__dots",
        clickable: true,
    },
    slideToClickedSlide: true,
    slidesPerView: "auto",
    spaceBetween: 39,
    centeredSlides: true,
    slidesPerGroup: 1,
    loop: true,
    initialSlide: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    }
})