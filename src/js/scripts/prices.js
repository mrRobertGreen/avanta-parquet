const boardPrices = {
    low: {
        12: {
            130: 3190,
        },
        15: {
            130: 3190,
            150: 3263,
        },
        16: {
            160: 3553,
            180: 5003,
        },
    },
    mid: {
        12: {
            130: 3335,
        },
        15: {
            130: 3408,
            150: 3480,
        },
        16: {
            160: 3770,
            180: 5220,
        },
    },
    high: {
        12: {
            130: 3553,
        },
        15: {
            130: 3625,
            150: 3988,
        },
        16: {
            160: 4205,
            180: 5655,
        },
    }
}

const getItemFromTree = (tree, keys, idx = 0) => {
    if (idx === keys.length - 1 || tree[keys[idx]] === undefined) {
        return tree[keys[idx]]
    } else {
        return getItemFromTree(tree[keys[idx]], keys, ++idx)
    }
}