//Show & Hide Expression
!function () {
var a = 'name';
var b = getValueOf('age');
var c = 'location';

if (age > 3) {
updateControlAttribute(name, 'visible', true);
updateControlAttribute(location, 'visible', true);
}
else {
updateControlAttribute(name, 'visible', false);
updateControlAttribute(location, 'visible', false);
}
}();