const initRangeFillLower = () => {
    new WebkitInputRangeFillLower({
        selectors: [
            "range-width-board",
            "range-thickness-board",
            "range-width-hungarian",
            "range-thickness-hungarian",
            "range-width-french",
            "range-thickness-french",
        ],
        color: "#0095F6"
    });
}
initRangeFillLower()