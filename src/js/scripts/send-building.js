let buildingData = {
    name: "Инженерная доска",
    type: "Агат",
    thickness: 15,
    width: 130,
    metres: 1,
}
const getTypeNameById = (id) => {
    switch (id) {
        case "agat":
            return "Агат"
        case "glover":
            return "Гловер"
        case "fidji":
            return "Фиджи"
        case "argentum":
            return "Аргентум"
        case "paladium":
            return "Паладиум"
        case "karelia":
            return "Карелиа"
        case "millenium":
            return "Миллениум"
        case "marsel":
            return "Марсель"
        case "milan":
            return "Милан"
        case "gefest":
            return "Гефест"
        case "atlant":
            return "Атлант"
        case "alikante":
            return "Аликанте"
        case "safari":
            return "Сафари"
        case "daysen":
            return "Атлант"
        case "oxford":
            return "Оксфорд"
        case "bergamo":
            return "Бергамо"
        case "deonis":
            return "Деонис"
        case "gray":
            return "Грей"
        default:
            break;
    }
}
const getSendBuildingData = (product) => {
    const {name, type, height, thickness, metres} = product
    return {
        name,
        type: getTypeNameById(type),
        thickness,
        height,
        metres,
    }
}
$(".building__btn").click((e) => {
    openPopup("build-popup")
    enableClosingPopupOnOverlayClick("build-popup", "popup__body")
    const id = $(e.currentTarget).attr("id")
    switch (id) {
        case "french-btn":
            buildingData = getSendBuildingData(french)
            break;
        case "board-btn":
            buildingData = getSendBuildingData(board)
            break;
        case "hungarian-btn":
            buildingData = getSendBuildingData(hungarian)
            break;
        default:
            break;
    }
})