const modified_make_shirt = (
  size: string = "Large",
  message: string = "I love typescript"
) => {
  console.log(
    `The size of t-shirt is ${size} and message written on it is ${message}`
  );
};

modified_make_shirt();
modified_make_shirt("Medium");
modified_make_shirt("small", "I love Programming!");
