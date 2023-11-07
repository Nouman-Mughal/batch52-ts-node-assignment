/**
 * Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
 * Then use your list to print a message to each person, inviting them to dinner.
 */

const guest_list = ["nouman", "fahad", "aiza"];

guest_list.map((guest_name) =>
  console.log(
    `${guest_name} you are invited to dinner at Shahbaz Chicken Tikka shop on 7:30 AM.Please be On time`
  )
);

console.log(`Sorry! ${guest_list[2]} can't make it`);
