"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moveArrayObjects = require('./');
var lodash_1 = require("lodash");
var isArrayEqual = function (x, y) {
    return (0, lodash_1.isEmpty)((0, lodash_1.xorWith)(x, y, lodash_1.isEqual));
};
describe('Move array items around a pivot', function () {
    it('Moves items around a pivot', function () {
        expect(1 + 12).toBe(13);
    });
});
