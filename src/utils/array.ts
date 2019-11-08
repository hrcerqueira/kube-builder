export const flatten = (arr: any[]): any[] => {
    return arr.reduce((flat, toFlatten) =>
        flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
    , []);
}