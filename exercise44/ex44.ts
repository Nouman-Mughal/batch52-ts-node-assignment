const items_needed = [
  "chicken",
  "cheese",
  "extra-cheese",
  "extra-mayo",
  "potato",
  "bread",
];
const make_sandwitch = (items: string[]) => {
  console.log(
    `An order has been placed of Sandwitch and that sandwitch must have these items ${items.join(
      ","
    )}.`
  );
};

make_sandwitch(items_needed);
make_sandwitch([items_needed[0], items_needed[2]]);
make_sandwitch([items_needed[4], items_needed[5]]);
