const person = "fahad arshad Mehmood Mughal";
// Lower case name
console.log(person.toLowerCase(), "------->Lower Case<--------");

// upper case name
console.log(person.toUpperCase(), "-------->Upper Case<--------");

// title case name
const init_arr = person.split(" ");

const title_case_name = init_arr
  .map((name) => {
    const sub_arr = name.split("");
    return sub_arr[0].toUpperCase() + name.substring(1);
  })
  .toString()
  .replaceAll(",", " ");

console.log(title_case_name, "-------->Title Case<--------");
