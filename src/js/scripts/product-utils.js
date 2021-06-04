const setPrice = (selector, value) => {
    if (isNaN(+value)) return
    $(selector).html(`<p>${value} ₽</p>`)
}
const calculatePrice = (product) => {
    const {
        id,
        thickness,
        width,
        metres,
        name
    } = product
    const priceData = getPriceDataByProductName(product.name)
    const type = getProductTypeById(id, name)
    let price = getItemFromTree(priceData, [type, thickness, width])
    return Math.round(price * metres * 1.1) // + 10 % к цене
}
const getProductTypeById = (id, name) => {
    if (name === "Инженерная доска") {
        if (low.indexOf(id) !== -1) {
            return "low"
        }
        if (mid.indexOf(id) !== -1) {
            return "mid"
        }
        if (high.indexOf(id) !== -1) {
            return "high"
        }
    } else {
        return "all"
    }
}
const getPriceDataByProductName = (name) => {
    switch (name) {
        case "Инженерная доска":
            return boardPrices
        case "Венгерская ёлка":
            return hungarianPrices
        case "Французская ёлка":
            return frenchPrices
        default:
            break;
    }
}
const setRangeValues = (selector, values) => {
    const $elem = $(selector)
    let html = ""
    values.forEach(value => {
        html += `<div>${value}</div>`
    })
    $elem.html(html)
}
const setRangeStyle = (selector, count) => {
    const $elem = $(selector)
    switch (count) {
        case 1:
            $elem.attr("max", "2")
            return
        case 2:
            $elem.attr("max", "4")
            return
        case 3:
            $elem.attr("max", "6")
            return
        default:
            return
    }
}
const getWidths = (priceData, type, thickness) => {
    return Object.keys(priceData[type][thickness])
}
const getThicknesses = (priceData, type) => {
    return Object.keys(priceData[type])
}
const createSetCorrectInputValue = (selector) => {
    let prevValue;
    return () => {
        const $input = $(selector)
        let value = +$input.val()
        const maxValue = +$input.attr("max")
        const minValue = +$input.attr("min")
        if (value % 2 === 0) {
            if (value === maxValue) {
                $input.val(value = maxValue - 1)
            } else if (value === minValue) {
                $input.val(value = minValue + 1)
            } else if (prevValue > value) {
                $input.val(--value)
            } else {
                $input.val(++value)
            }
        } else {
            prevValue = value
        }
        return value
    }
}
const getItemFromTree = (tree, keys, idx = 0) => {
    if (idx === keys.length - 1 || tree[keys[idx]] === undefined) {
        return tree[keys[idx]]
    } else {
        return getItemFromTree(tree[keys[idx]], keys, ++idx)
    }
}
let isEnableReloadingInputRange = true
const reloadInputRange = () => {
    if (isEnableReloadingInputRange) {
        isEnableReloadingInputRange = false
        setTimeout(() => {
            initRangeFillLower()
            isEnableReloadingInputRange = true
        }, 20)
    }
}