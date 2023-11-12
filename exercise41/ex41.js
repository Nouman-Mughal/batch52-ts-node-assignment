"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show_magicians = void 0;
var magicians_arr = ["Dynamo", "david blaine", "harry houdini"];
var show_magicians = function (mag_names) {
    mag_names.map(function (mag_name) { return console.log(mag_name); });
};
exports.show_magicians = show_magicians;
(0, exports.show_magicians)(magicians_arr);
