// we can also make a function as the value in object
const obj = {
    name: "shm",
    age: 23,
    "random-key": true,
    sayMyName: function () {
        console.log("Your name is", this.name);
    },
};

console.log(obj.name);
console.log(obj["age"]);
console.log(obj["random-key"]);

obj.hobby = "Cricket";
console.log(obj);

delete obj.hobby; // delete key from the object
console.log(obj);

obj.sayMyName();

//Object.keys(obj), values(obj), entries(obj)
//these methods basically return an array

for (const [key, values] of Object.entries(obj)) {
    console.log(key, values);
}

for (const key of Object.keys(obj)) {
    console.log(key);
}

for (const value of Object.values(obj)) {
    console.log(value);
}

//access, insertion and removal is O(1) in objects
//just like map in c++

console.log(Object.keys(obj));
