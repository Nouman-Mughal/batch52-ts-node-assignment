/**
 * More Guests: You just found a bigger dinner table, so now more space is available.
 * Think of three more guests to invite to dinner.
 */

const original_guest_list = ["nouman", "fahad", "aiza"];

original_guest_list.map((guest_name) =>
  console.log(
    `${guest_name} you are invited to dinner at Shahbaz Chicken Tikka shop on 7:30 AM.Please be On time`
  )
);

console.log(`Sorry! ${original_guest_list[2]} can't make it`);
// But my friend Talha can make it lets add him in.

original_guest_list[2] = "talha";

original_guest_list.map((guest_name) =>
  console.log(
    `${guest_name} you are invited to dinner at Shahbaz Chicken Tikka shop on 7:30 AM.Please be On time`
  )
);

console.log("Hey guys! Good News... I have booked the bigger table ");

original_guest_list.unshift("wajiha");

original_guest_list.splice(2, 0, "amina");

original_guest_list.push("aiza");

original_guest_list.map((guest_name) =>
  console.log(
    `${guest_name} you are invited to dinner at Shahbaz Chicken Tikka shop on 7:30 AM.Please be On time`
  )
);
