module.exports = function enhanceStringify(stringObject, formatOption = '\t') {
    let cache = [];
    const returnStringObject = JSON.stringify(stringObject, (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) { // If found circular reference, discard key
                return;
            }
            cache.push(value);// Store value in collection
        }
        return value;
    }, formatOption);
    cache = null; // Enable garbage collection to clean up memory
    return returnStringObject;
}