const fav_mode_of_transport = [
  "motor_cycle",
  "car",
  "train",
  "bus",
  "jet",
  "aero_plane",
];

const length_transport_names = fav_mode_of_transport.length;
for (let i = 0; i < length_transport_names; i++) {
  switch (fav_mode_of_transport[i]) {
    case "motor_cycle":
      console.log(`I hate to ride my stupid ${fav_mode_of_transport[i]}.`);
      break;

    case "car":
      console.log(
        `traveling on ${fav_mode_of_transport[i]} is more relaxing than bike.`
      );
      break;

    case "train":
      console.log(`${fav_mode_of_transport[i]}s are so much stuffed nowadays.`);
      break;

    case "bus":
      console.log(
        `${fav_mode_of_transport[i]} fares are exponentionally increasing.`
      );
      break;

    case "jet":
      console.log(
        `${fav_mode_of_transport[i]} is my love because it has speed.`
      );
      break;

    case "aero_plane":
      console.log(`${fav_mode_of_transport[i]} good but not better than jet.`);
      break;
  }
}
