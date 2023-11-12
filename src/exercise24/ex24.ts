let _car = `Mercedes`;
const _arr = ["subaru"];

console.log(`Is Car === 'Mercedes'? I predict true`);
console.log(_car === `Mercedes`);

console.log(`Is Car !== 'Mercedes'? I predict false`);
console.log(_car !== `Mercedes`);

console.log(`Is Car === 'mercedes'? I predict false`);
console.log(_car === _car.toLowerCase());

console.log(`Is Car == 'Mercedes'? I predict true`);
console.log(_car === `Mercedes`);

console.log(`Is Car != 'Mercedes'? I predict false`);
console.log(_car !== `Mercedes`);

console.log(`Is Car !== 'mercedes'? I predict true`);
console.log(_car !== _car.toLowerCase());

console.log(`Is _car > 'mercedes'? I predict true`);
console.log(_car > _car.toLowerCase()); // am wrong here;

console.log(`Is _car < 'mercedes'? I predict true`);
console.log(_car < _car.toLowerCase());

console.log(`Is _car >= 'mercedes'? I predict false`);
console.log(_car <= _car.toLowerCase());

console.log(`Is _car >= 'mercedes'? I predict false`);
/** the comparison is based on lexicographical (dictionary) order. 
In lexicographical order, uppercase letters come before lowercase letters.
In lexicographical order, uppercase letters have a lower Unicode value than their lowercase counterparts. 
Therefore, the uppercase 'M' in 'Mercedes' has a lower Unicode value than the lowercase 'm' in 'mercedes'. */
console.log(_car >= _car.toLowerCase());

console.log(`Is _car and 'Mercedes'? I predict false`);
console.log(_car && "Mercedes");

console.log(`Is _car and 'Mercedes'? I predict false`);
console.log(_car || "Mercedes");

console.log(`Is _arr has _car named 'Mercedes'? I predict false`);
// will retrun undefined or string ~ find Method in typescript
const car_found = _arr.find((_car) => {
  return _car === "Mercedes";
});
console.log(!!car_found);

console.log(`Is _arr has no _car named 'Mercedes'? I predict true`);
// will retrun undefined or string ~ find Method in typescript
const car_not_found = _arr.find((_car) => {
  return _car !== "Mercedes";
});

console.log(!!car_not_found);
