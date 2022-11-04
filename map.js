//object vs map
//object is unordered while map in ordered
//object is not iterable while map in iterable
//keys in object can be or string or symbol type while that in map can be or any type
//an object has a prototype and may contain a few default keys which may collide with our own keys wherase a map do not contain any keys
//objects can hold function in a value whereas map only store values

const mp = new Map([
    ["a", 1],
    ["b", 2],
]);
mp.set("c", 3); // add new value to map
console.log(mp.has("a"));
mp.delete("b");
console.log(mp.size);

for (const [key, value] of mp) {
    console.log(key, value);
}

mp.clear();
console.log(mp.size);
