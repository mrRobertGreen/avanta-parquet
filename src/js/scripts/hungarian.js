const hungarian = {
    name: "Венгерская ёлка",
    id: "agat",
    width: 130,
    thickness: 15,
    metres: 1,
}
$("#building_hungarian .texture__item").on("click", (e) => {
    const $elem = $(e.currentTarget)
    hungarian.id = $elem.attr("id")
    const price = calculatePrice(hungarian)
    setPrice("#building_hungarian .size__price", price)
})
$("#range-thickness-hungarian").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const thickness = rangeValueToThicknessHungarian(value)
    $("#building_hungarian .thickness-mm").html(thickness + " мм.")
    hungarian.thickness = thickness
    const price = calculatePrice(hungarian)
    setPrice("#building_hungarian .size__price", price)
    const type = getProductTypeById(hungarian.id, hungarian.name)
    const widths = getWidths(hungarianPrices, type, hungarian.thickness)
    setRangeValues("#building_hungarian ._width", widths)
    setRangeStyle("#range-width-hungarian", widths.length)
    reloadInputRange()
})
$("#range-width-hungarian").on("input", (e) => {
    const setCorrectInputValue = createSetCorrectInputValue(e.target)
    const value = setCorrectInputValue()
    const width = rangeValueToWidthHungarian(value, hungarian.thickness)
    $("#building_hungarian .width-mm").html(width + " мм.")
    hungarian.width = width
    const price = calculatePrice(hungarian)
    setPrice("#building_hungarian .size__price", price)
    reloadInputRange()
})
$("#building_hungarian .size__input").on("input", (e) => {
    const value = e.target.value
    hungarian.metres = value
    const price = calculatePrice(hungarian)
    setPrice("#building_hungarian .size__price", price)
})
$("#building_hungarian .texture__item").on("click", (e) => {
    hungarian.id = $(e.currentTarget).attr("id")
})