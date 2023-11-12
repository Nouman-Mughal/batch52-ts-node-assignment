const _magicians_array = ["Dynamo", "david blaine", "harry houdini"];

const _show_magicians = (mag_names: string[]) => {
  mag_names.map((mag_name) => console.log(mag_name));
};

const _show_great_magicians = (mag_names: string[]) => {
  mag_names.map((mag_name) => console.log(`Great! ${mag_name}`));
  return mag_names;
};

const new_mag_array: string[] = _show_great_magicians(_magicians_array);

_show_magicians(new_mag_array);
