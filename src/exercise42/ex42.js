var magicians_array = ["Dynamo", "david blaine", "harry houdini"];
var show_great_magicians = function (mag_names) {
    mag_names.map(function (mag_name) { return console.log("Great! ".concat(mag_name)); });
};
show_great_magicians(magicians_array);
