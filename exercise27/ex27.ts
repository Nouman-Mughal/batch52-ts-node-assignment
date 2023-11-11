const _alien_color: "green" | "red" | "yellow" = "green";

if (_alien_color === "green") {
  console.log("player just earned 5 points");
} else if (_alien_color === "yellow") {
  console.log("player just earned 10 points");
} else if (_alien_color === "red") {
  console.log("player just earned 15 points");
}

const _new_alien_color: "green" | "red" | "yellow" = "red";
if (_new_alien_color === "red") {
  console.log("player just earned 15 points");
} else if (_new_alien_color === "green") {
  console.log("player just earned 5 points for shooting the alien");
} else if (_new_alien_color === "yellow") {
  console.log("player just earned 10 points");
}

const _new_alien_color_: "green" | "red" | "yellow" = "yellow";
if (_new_alien_color_ === "yellow") {
  console.log("player just earned 10 points");
} else if (_new_alien_color_ === "red") {
  console.log("player just earned 15 points");
} else if (_new_alien_color_ === "green") {
  console.log("player just earned 5 points for shooting the alien");
}
