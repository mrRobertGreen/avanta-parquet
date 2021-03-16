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
    // sticky-эффект у выбранной текстуры
    const menuOffset = document.querySelector("#building_board .chosen").offsetTop + window.innerHeight
    const finalBlockOffset = document.querySelector("#building_hungarian").offsetTop + window.innerHeight
    const fakeMenuOffset = document.querySelector(".menu_fake").offsetTop + window.innerHeight
    const scrollTop = $(window).scrollTop()
    if (scrollTop >= menuOffset - 145 && scrollTop <= finalBlockOffset) {
        $("#building_board .chosen").addClass('_fixed');
    }
    if (scrollTop < menuOffset || scrollTop > finalBlockOffset) {
        $("#building_board .chosen").removeClass('_fixed');
    }
})