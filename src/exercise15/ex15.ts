/**
 * Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of
 * invitations. You’ll have to think of someone else to invite.
 */

const modified_guest_list = ["nouman", "fahad", "aiza"];

modified_guest_list.map((guest_name) =>
  console.log(
    `${guest_name} you are invited to dinner at Shahbaz Chicken Tikka shop on 7:30 AM.Please be On time`
  )
);

console.log(`Sorry! ${modified_guest_list[2]} can't make it`);
// But my friend Talha can make it lets add him in.

modified_guest_list[2] = "talha";

modified_guest_list.map((guest_name) =>
  console.log(
    `${guest_name} you are invited to dinner at Shahbaz Chicken Tikka shop on 7:30 AM.Please be On time`
  )
);
