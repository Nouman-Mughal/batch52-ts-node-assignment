var modified_make_shirt = function (size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("The size of t-shirt is ".concat(size, " and message written on it is ").concat(message));
};
modified_make_shirt();
modified_make_shirt("Medium");
modified_make_shirt("small", "I love Programming!");
