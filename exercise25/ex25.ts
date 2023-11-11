const alien_colour: "green" | "red" | "yellow" = "green";

if (alien_colour === "green") {
  console.log("player just earned 5 points");
} else {
}

const new_alien_colour: "green" | "red" | "yellow" = "red";

if (new_alien_colour === "red") {
} else if (new_alien_colour === "green") {
  console.log("player just earned 5 points");
}
