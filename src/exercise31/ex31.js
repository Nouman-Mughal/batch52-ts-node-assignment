var _usernames = [];
if (_usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, _usernames_1 = _usernames; _i < _usernames_1.length; _i++) {
        var username = _usernames_1[_i];
        if (username.toLowerCase() === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
