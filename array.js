const arr = [1, 2, "shm"];
arr.push(4); // push at the end
arr.unshift(10); //push at the beginning

arr.pop(); //removes element from the end of array
arr.shift(); //removes element from the beginning of array

// in basically loops for indexes
for (const i in arr) {
    console.log(i);
    console.log(arr[i]);
}

// of loops over the array elements
for (const i of arr) {
    console.log(i);
}

// array methods
// map, filter, reduce, concat, slice, splice
