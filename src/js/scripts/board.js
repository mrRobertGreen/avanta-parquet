const board = {
    name: "Инженерная доска",
    id: "agat",
    width: 130,
    thickness: 15,
    metres: 1,
}
$("#building_board .texture__item").on("click", (e) => {
    const $elem = $(e.currentTarget)
    board.id = $elem.attr("id")
    const price = calculatePrice(board)
    setPrice("#building_board .size__price", price)
})
$("#range-thickness-board").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const thickness = rangeValueToThicknessBoard(value)
    $("#building_board .thickness-mm").html(thickness + " мм.")
    board.thickness = thickness
    const price = calculatePrice(board)
    setPrice("#building_board .size__price", price)
    const type = getProductTypeById(board.id, board.name)
    const widths = getWidths(boardPrices, type, board.thickness)
    setRangeValues("#building_board ._width", widths)
    setRangeStyle("#range-width-board", widths.length)
    reloadInputRange()
})
$("#range-width-board").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const width = rangeValueToWidthBoard(value, board.thickness)
    $("#building_board .width-mm").html(width + " мм.")
    board.width = width
    const price = calculatePrice(board)
    setPrice("#building_board .size__price", price)
    reloadInputRange()
})
$("#building_board .size__input").on("input", (e) => {
    const value = e.target.value
    board.metres = value
    const price = calculatePrice(board)
    setPrice("#building_board .size__price", price)
})
$("#building_board .texture__item").on("click", (e) => {
    board.id = $(e.currentTarget).attr("id")
})


// active slide changing
const board_imgs = {
    "agat": "../img/Desk/агат.jpg",
    "alikante": "../img/Desk/аликанте.jpg",
    "atlant": "../img/Desk/атлант.jpg",
    "bergamo": "../img/Desk/бергамо.jpg",
    "glover": "../img/Desk/гаовер_3.jpg",
    "gefest": "../img/Desk/гефест.jpg",
    "daysen": "../img/Desk/дайсен.jpg",
    "deonis": "../img/Desk/деонис.jpg",
    "karelia": "../img/Desk/карелия.jpg",
    // "konkord": "../img/Desk/конкорд.jpg",
    "marsel": "../img/Desk/марсель.jpg",
    "milan": "../img/Desk/милан.jpg",
    "millenium": "../img/Desk/миллениум.jpg",
    "oxford": "../img/Desk/оксфорд.jpg",
    "paladium": "../img/Desk/палладиум.jpg",
}
$("#building_board .texture__item").on("click", (e) => {
    const id = $(e.currentTarget).attr("id")
    const img = $(".chosen__img")
    const src = board_imgs[id]
    
    img.attr('src', src)
    const picture = $("#building_board .chosen picture").attr("srcset", src)
    const source = $("#building_board .chosen source").attr("srcset", src)
    // console.log(img.attr('src'));
})