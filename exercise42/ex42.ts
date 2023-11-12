const magicians_array = ["Dynamo", "david blaine", "harry houdini"];

const show_great_magicians = (mag_names: string[]) => {
  mag_names.map((mag_name) => console.log(`Great! ${mag_name}`));
};

show_great_magicians(magicians_array);
