interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any;
}

function create_car(
  manufacturer: string,
  model: string,
  ...options: any[]
): Car {
  const car: Car = { manufacturer, model };

  options.forEach((option) => {
    const [key, value] = option;
    car[key] = value;
  });

  return car;
}

const my_car = create_car(
  "Toyota",
  "Camry",
  ["color", "blue"],
  ["optionalFeature", "sunroof"]
);

console.log(my_car);
