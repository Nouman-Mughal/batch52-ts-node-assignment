var _magicians_array = ["Dynamo", "david blaine", "harry houdini"];
var _show_magicians = function (mag_names) {
    mag_names.map(function (mag_name) { return console.log(mag_name); });
};
var _show_great_magicians = function (mag_names) {
    mag_names.map(function (mag_name) { return console.log("Great! ".concat(mag_name)); });
    return mag_names;
};
var new_mag_array = _show_great_magicians(_magicians_array);
_show_magicians(new_mag_array);
