const alien_color: "green" | "red" | "yellow" = "green";

if (alien_color === "green") {
  console.log("player just earned 5 points for shooting the alien");
} else if (alien_color !== "green") {
  console.log("player just earned 10 points");
}

const new_alien_color = "red";
if (new_alien_color === "red" || new_alien_color === "yellow") {
  console.log("player just earned 10 points");
} else if (new_alien_color === "green") {
  console.log("player just earned 5 points for shooting the alien");
}
