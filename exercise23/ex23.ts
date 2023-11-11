let car = `Mercedes`;
const arr = ["subaru"];

console.log(`Is Car === 'Mercedes'? I predict true`);
console.log(car === `Mercedes`);

console.log(`Is Car !== 'Mercedes'? I predict false`);
console.log(car !== `Mercedes`);

console.log(`Is Car === 'mercedes'? I predict false`);
console.log(car === car.toLowerCase());

console.log(`Is Car == 'Mercedes'? I predict true`);
console.log(car === `Mercedes`);

console.log(`Is Car != 'Mercedes'? I predict false`);
console.log(car !== `Mercedes`);

console.log(`Is Car !== 'mercedes'? I predict true`);
console.log(car !== car.toLowerCase());

console.log(`Is car > 'mercedes'? I predict true`);
console.log(car > car.toLowerCase()); // am wrong here;

console.log(`Is car < 'mercedes'? I predict true`);
console.log(car < car.toLowerCase());

console.log(`Is car >= 'mercedes'? I predict false`);
console.log(car <= car.toLowerCase());

console.log(`Is car >= 'mercedes'? I predict false`);
/** the comparison is based on lexicographical (dictionary) order. 
In lexicographical order, uppercase letters come before lowercase letters.
In lexicographical order, uppercase letters have a lower Unicode value than their lowercase counterparts. 
Therefore, the uppercase 'M' in 'Mercedes' has a lower Unicode value than the lowercase 'm' in 'mercedes'. */
console.log(car >= car.toLowerCase());

console.log(`Is car and 'Mercedes'? I predict false`);
console.log(car && "Mercedes");

console.log(`Is car and 'Mercedes'? I predict false`);
console.log(car || "Mercedes");

console.log(`Is arr has car named 'Mercedes'? I predict false`);
// will retrun undefined or string ~ find Method in typescript
// const _car_found = arr.find((car) => {
//   return car === "Mercedes";
// });
// console.log(!!_car_found);
console.log(arr.includes(car));

console.log(`Is arr has no car named 'Mercedes'? I predict true`);
// will retrun undefined or string ~ find Method in typescript
// const _car_not_found = arr.find((car) => {
//   return car !== "Mercedes";
// });

// console.log(!!_car_not_found);
console.log(arr.includes(car));
