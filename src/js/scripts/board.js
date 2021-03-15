const board = {
    name: "Инженерная доска",
    id: "agat",
    type: "dyed",
    width: 70,
    metres: 1,
}
$("#building_board .material__item").on("click", (e) => {
    const id = $(e.target).attr("id")
    if (id === "mdf") {
        board.type = "dyed"
        board.category = "mdf"
        const widths = getwidths(boardMDFPrices, "dyed")
        const thicknesses = getThicknesses(boardMDFPrices, "dyed")
        setRangeValues("#building_board ._thickness", thicknesses)
        setRangeStyle("#range-thickness-board", thicknesses.length)
        setRangeValues("#building_board ._width", widths)
        setRangeStyle("#range-width-board", widths.length)
    } else {
        board.type = id
        board.category = "massif"
        const widths = getwidths(boardMassifPrices, id)
        const thicknesses = getThicknesses(boardMassifPrices, id)
        setRangeValues("#building_board ._thickness", thicknesses)
        setRangeStyle("#range-thickness-board", thicknesses.length)
        setRangeValues("#building_board ._width", widths)
        setRangeStyle("#range-width-board", widths.length)
    }
    initRangeFillLower()
    const price = calculatePrice(board)
    setPrice("#building_board .size__price", price)
})
$("#building_board .style__span").on("click", (e) => {
    const type = $(e.target).attr("id")
    board.type = type
})
$("#range-thickness-board").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const thickness = rangeValueToThicknessboard(board.category, board.type, value)
    $("#building_board .thickness-mm").html(thickness + " мм.")
    board.thickness = thickness
    const price = calculatePrice(board)
    setPrice("#building_board .size__price", price)
})
$("#range-width-board").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const width = rangeValueTowidthboard(board.category, board.type, value)
    $("#building_board .width-mm").html(width + " мм.")
    board.width = width
    const price = calculatePrice(board)
    setPrice("#building_board .size__price", price)
})
$("#building_board .size__input").on("input", (e) => {
    const value = e.target.value
    board.metres = value
    const price = calculatePrice(board)
    setPrice("#building_board .size__price", price)
})
$("#building_board .types__item").on("click", (e) => {
    board.form = $(e.currentTarget).attr("id")
})