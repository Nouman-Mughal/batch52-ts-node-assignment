let current_users: string[] = ["john", "alice", "bob", "susan", "mike"];
let new_users: string[] = ["Jane", "alice", "steve", "Mike", "diana"];

for (let new_user of new_users) {
  if (
    current_users
      .map((user) => user.toLowerCase())
      .includes(new_user.toLowerCase())
  ) {
    console.log(
      `Sorry, the username '${new_user}' is already taken. Please choose a different one.`
    );
  } else {
    console.log(`The username '${new_user}' is available.`);
  }
}
