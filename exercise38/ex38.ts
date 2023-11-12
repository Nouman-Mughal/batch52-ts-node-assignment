const describe_city = (city_name: string, country: string = "Pakistan") => {
  console.log(`${city_name} is in ${country}`);
};

describe_city("Lahore");
describe_city("Quetta");
describe_city("Paris");
