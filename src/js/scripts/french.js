const french = {
    name: "Французская ёлка",
    id: "agat",
    width: 130,
    thickness: 15,
    metres: 1,
}
$("#building_french .texture__item").on("click", (e) => {
    const $elem = $(e.currentTarget)
    french.id = $elem.attr("id")
    const price = calculatePrice(french)
    setPrice("#building_french .size__price", price)
})
$("#range-thickness-french").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const thickness = rangeValueToThicknessFrench(value)
    $("#building_french .thickness-mm").html(thickness + " мм.")
    french.thickness = thickness
    const price = calculatePrice(french)
    setPrice("#building_french .size__price", price)
    const type = getProductTypeById(french.id, french.name)
    const widths = getWidths(frenchPrices, type, french.thickness)
    setRangeValues("#building_french ._width", widths)
    setRangeStyle("#range-width-french", widths.length)
    reloadInputRange()
})
$("#range-width-french").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const width = rangeValueToWidthFrench(value, french.thickness)
    $("#building_french .width-mm").html(width + " мм.")
    french.width = width
    const price = calculatePrice(french)
    setPrice("#building_french .size__price", price)
    reloadInputRange()
})
$("#building_french .size__input").on("input", (e) => {
    const value = e.target.value
    french.metres = value
    const price = calculatePrice(french)
    setPrice("#building_french .size__price", price)
})
$("#building_french .texture__item").on("click", (e) => {
    french.id = $(e.currentTarget).attr("id")
})