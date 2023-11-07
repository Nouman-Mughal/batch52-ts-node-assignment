/**
 * Shrinking Guest List: You just found out that your new dinner table won’t arrive
 * in time for the dinner, and you have space for only two guests.
 */

const shrinked_guest_list = ["nouman", "fahad", "aiza"];

shrinked_guest_list.map((guest_name) =>
  console.log(
    `${guest_name} you are invited to dinner at Shahbaz Chicken Tikka shop on 7:30 AM.Please be On time`
  )
);

console.log(`Sorry! ${shrinked_guest_list[2]} can't make it`);
// But my friend Talha can make it lets add him in.

shrinked_guest_list[2] = "talha";

shrinked_guest_list.map((guest_name) =>
  console.log(
    `${guest_name} you are invited to dinner at Shahbaz Chicken Tikka shop on 7:30 AM.Please be On time`
  )
);

console.log("Hey guys! Good News... I have booked the bigger table ");

shrinked_guest_list.unshift("wajiha");

shrinked_guest_list.splice(2, 0, "amina");

shrinked_guest_list.push("aiza");

shrinked_guest_list.map((guest_name) =>
  console.log(
    `${guest_name} you are invited to dinner at Shahbaz Chicken Tikka shop on 7:30 AM.Please be On time`
  )
);

console.log(
  "Sorry Guys My booked table has not been managed by resturant, So only two person can be booked."
);

while (shrinked_guest_list.length > 2) {
  const person = shrinked_guest_list.pop();
  console.log(`Sorry! ${person} you are not invited Now`);
}

shrinked_guest_list.map((guest_name) =>
  console.log(`Dont Worry ${guest_name} you are still invited for the dinner`)
);
