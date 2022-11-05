const arr = [1, 2, "shm"];
arr.push(4); // push at the end
arr.unshift(10); //push at the beginning

arr.pop(); //removes element from the end of array
arr.shift(); //removes element from the beginning of array

//in basically loops for indexes
for (const i in arr) {
    console.log(i);
    console.log(arr[i]);
}

//of loops over the array elements
for (const i of arr) {
    console.log(i);
}

//array methods
//sort,splice, map, slice, filter, reduce, concat

//sort
const v = [2, 3, 4, 10, 1, 8];
v.sort((a, b) => a - b);
// we have to pass comparator function in sort method
console.log("v: ", v);

//splice: (startIndex, elements to remove, e1, e2, e3...)
//(e1, e2, e3,...) are the element to insert
//changes the original array
const v1 = v.splice(2, 2, 100, 200);
console.log("v1: ", v1);

v.sort((a, b) => a - b);
console.log("v: ", v);
//map: returns an array with some method applied on original array
const v2 = v.map((a, idx, arr) => {
    return a + arr[idx];
});
console.log("v2: ", v2);

//slice: return a new array from start to end index
//doesn't change the original array
const v3 = v.slice(1, 3);
console.log("v3: ", v3);

//filter doesn't change the original array
const v4 = v.filter((ele) => {
    return ele % 10 === 0;
});
console.log("v4: ", v4);

console.log("v: ", v);
const sum = v.reduce((prev, curr) => {
    return prev + curr;
});
console.log("sum: ", sum);

const diff = v.reduce((prev, curr) => {
    return prev - curr;
});
console.log("diff: ", diff);
