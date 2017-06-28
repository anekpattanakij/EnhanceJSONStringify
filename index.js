const CIRCULAR_REFERENCE_REPLACEMENT = 'CIRCULAR_DEPENDECY_OBJECT';

module.exports = function enhanceStringify(stringObject, formatOption = '\t', replaceString = CIRCULAR_REFERENCE_REPLACEMENT) {
    let cache = [];
    const returnStringObject = JSON.stringify(stringObject, (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (cache.indexOf(value) !== -1) { // If found circular reference
                // cache.push(CIRCULAR_REFERENCE_REPLACEMENT);// Replace circular reference with string
                return replaceString;
            } else
            {
                cache.push(value);// Store value for check circular
            }
        }
        return value;
    }, formatOption);
    cache = null; // Enable garbage collection to clean up memory
    return returnStringObject;
}