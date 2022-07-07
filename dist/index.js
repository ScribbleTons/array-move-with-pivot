"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var shiftLeft = function (array, from, to, pivotKey) {
    //left shift elements : to > from
    var _a, _b;
    var subData = array.slice(from, to); // a section of the original array
    var draft = subData.slice(); // unchanged copy of array for pivoting
    var temp = draft[0];
    for (var i = 0; i < to - from; i++) {
        if (i !== to - from - 1) {
            subData[i + 1] = __assign(__assign({}, subData[i + 1]), (_a = {}, _a[pivotKey] = draft[i][pivotKey], _a));
        }
        else {
            subData[i + 1] = __assign(__assign({}, temp), (_b = {}, _b[pivotKey] = draft[i][pivotKey], _b));
        }
    }
    subData.shift();
    return subData;
};
var shiftRight = function (array, from, to, pivotKey) {
    // right shift elements : to < from
    var _a, _b;
    var subData = array.slice(to, from);
    var draft = subData.slice();
    for (var i = 0; i <= from - to; i++) {
        if (i === from - to - 1) {
            subData[i] = __assign(__assign({}, subData[i]), (_a = {}, _a[pivotKey] = draft[0][pivotKey], _a));
        }
        else {
            subData[i] = __assign(__assign({}, subData[i]), (_b = {}, _b[pivotKey] = draft[i + 1] ? draft[i + 1][pivotKey] : undefined, _b));
        }
    }
    subData.pop();
    subData.unshift(subData[subData.length - 1]);
    subData.pop();
    return subData;
};
var moveArrayItems = function (array, from, to, pivotKey) {
    if (from === to)
        return array;
    if (from > to) {
        var arr = shiftRight(array, from + 1, to, pivotKey);
        array.splice.apply(array, __spreadArray([to, from - to + 1], arr, false));
        return array;
    }
    else {
        var arr = shiftLeft(array, from, to + 1, pivotKey);
        array.splice.apply(array, __spreadArray([from, to - from + 1], arr, false));
        return array;
    }
};
module.exports = moveArrayItems;
