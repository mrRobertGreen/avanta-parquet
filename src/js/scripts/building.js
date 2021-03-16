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
    if (window.matchMedia("(max-width: 1000px)").matches) return
    const marginTopStart = 75
    const marginBottomFinish = 45
    const start = document.querySelector("#building_board .texture__title").offsetTop + window.innerHeight - marginTopStart
    const finish = document.querySelector("#building_board .calc-wrapper").offsetTop + window.innerHeight - marginBottomFinish
    const scrollTop = $(window).scrollTop()
    if (scrollTop >= start && scrollTop <= finish) {
        $("#building_board .chosen").addClass("_fixed");
        $("#building_board .chosen_down").addClass("_hidden")
    }
    if (scrollTop < start) {
        $("#building_board .chosen").removeClass("_fixed");
    }
    if (scrollTop > finish) {
        $("#building_board .chosen").removeClass("_fixed");
        $("#building_board .chosen_down").removeClass("_hidden")
    }
})
