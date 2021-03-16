const rangeValueToThicknessBoard = (value) => {
    switch (+value) {
        case 1:
            return 12
        case 3:
            return 15
        case 5:
            return 16
        default:
            return 12
    }
}
const rangeValueToWidthBoard = (widthValue, thickness) => {
    if (thickness === 16) {
        switch (+widthValue) {
            case 1:
                return 160
            case 3:
                return 180
            default:
                return 160
        }
    } else {
        switch (+widthValue) {
            case 1:
                return 130
            case 3:
                return 150
            default:
                return 130
        }
    }
}
const rangeValueToThicknessHungarian = (value) => {
    switch (+value) {
        case 1:
            return 12
        case 3:
            return 15
        case 5:
            return 16
        default:
            return 12
    }
}
const rangeValueToWidthHungarian = (widthValue, thickness) => {
    if (thickness === 12) {
        switch (+widthValue) {
            case 1:
                return 90
            case 3:
                return 130
            case 5:
                return 160
            default:
                return 90
        }
    } else if (thickness === 16) {
        switch (+widthValue) {
            case 1:
                return 90
            case 3:
                return 160
            default:
                return 90
        }
    } else return 130
}
const rangeValueToThicknessFrench = (value) => {
    switch (+value) {
        case 1:
            return 12
        case 3:
            return 15
        case 5:
            return 16
        default:
            return 12
    }
}
const rangeValueToWidthFrench = (widthValue, thickness) => {
    if (thickness === 12) {
        switch (+widthValue) {
            case 1:
                return 90
            case 3:
                return 130
            default:
                return 90
        }
    } else if (thickness === 16) {
        return 90
    } else {
        return 130
    }
}