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
    const type = getProductTypeById(board.id)
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