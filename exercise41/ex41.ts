const magicians_arr = ["Dynamo", "david blaine", "harry houdini"];

const show_magicians = (mag_names: string[]) => {
  mag_names.map((mag_name) => console.log(mag_name));
};

show_magicians(magicians_arr);
