!function () {
var a = getValueOf('score1');
var b = getValueOf('score2');
var c = getValueOf('score3');
var d = getValueOf('score4');
var e = getValueOf('score5');
var f = 'totalScore';

var g = 0;
g = a * Number(b) + c / d - e;
updateControlAttribute(f, 'value', g);
}();
