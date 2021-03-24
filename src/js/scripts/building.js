const chahgeSubmitButtonText = () => {
    if (window.matchMedia("(min-width: 820px)").matches) {
        $(".building__btn").html("Отправить")
    }
}
$(".material__item").on("click", (e) => {
    const target = $(e.target)
    if (target.attr("id") === "mdf") {
        $(".building__style").removeClass("_hidden")
    } else {
        $(".building__style").addClass("_hidden")
    }
})

chahgeSubmitButtonText()

$(window).resize(chahgeSubmitButtonText)

$(window).on("scroll", function () {
    stickyChosenImageFlow("building_board")
    stickyChosenImageFlow("building_hungarian")
    stickyChosenImageFlow("building_french")
})
const stickyChosenImageFlow = (productId) => {  // sticky-эффект у выбранной текстуры
    if (window.matchMedia("(max-width: 1000px)").matches) return
    const marginTopStart = 75
    const marginBottomFinish = 45
    const start = document.querySelector(`#${productId} .texture__title`).offsetTop + window.innerHeight - marginTopStart
    const finish = document.querySelector(`#${productId} .calc-wrapper`).offsetTop + window.innerHeight - marginBottomFinish
    const scrollTop = $(window).scrollTop()
    if (scrollTop >= start && scrollTop <= finish) {
        $(`#${productId} .chosen`).addClass("_fixed");
        $(`#${productId} .chosen_down`).addClass("_hidden")
    }
    if (scrollTop < start) {
        $(`#${productId} .chosen`).removeClass("_fixed");
    }
    if (scrollTop > finish) {
        $(`#${productId} .chosen`).removeClass("_fixed");
        $(`#${productId} .chosen_down`).removeClass("_hidden")
    }
}

// lazy loading
(async () => {
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll("img.lazyload");
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Инициализация LazySizes (чтение data-src & class=lazyload)
        lazySizes.init(); // lazySizes применяется при обработке изображений, находящихся на странице.
    }
})();
