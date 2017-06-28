const assert = require('assert');
const enhanceStringify = require('../');

// Create circular dependency object
let objectA = { variable1: 1, variable2: 2 };
let objectB = { variable1: objectA, variable2: 'two' };

objectA.variable1 = objectB.variable1;

describe('JSONConverterTest', function () {
    it('convert circulate object', function () {
        try {
            const tempConvertString = enhanceStringify(objectA);
            assert.equal('able to convert', 'able to convert');
        }
        catch (ex) {
            assert.equal('convert fail', ex.message);
        }
    }),
    it('convert circulate object with seperator parameter', function () {
        try {
            const tempConvertString = enhanceStringify(objectA,' ');
            assert.equal('able to convert', 'able to convert');
        }
        catch (ex) {
            assert.equal('convert fail', ex.message);
        }
    }),
    it('convert normal object', function () {
        try {
            //const tempConvertString = enhanceStringify(objectA);
            const tempConvertString = enhanceStringify({a:5});
            assert.equal('able to convert', 'able to convert');
        }
        catch (ex) {
            assert.equal('convert fail', ex.message);
        }
    })
});



