const colors = ["red", "red", "green", "green", "green", "blue"]

const distinctColors = colors.reduce(
    (distinct, color) =>
        (distinct.indexOf(color) !== -1) ?
            distinct :
            [...distinct, color],
        []
)
console.log(distinctColors)


// const colors = ["red", "red", "green", "blue", "green"];
// const distinctColors = colors.reduce(
//     (distinct, color) =>
//         (distinct.indexOf(color) !== -1) ?
//             distinct :
//             [...distinct, color],
//     []
// )
// console.log(distinctColors)