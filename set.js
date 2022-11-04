const st = new Set([1, 2, 3]);
console.log(st);

st.add(4);
for (const i of st) {
    console.log(i);
}

console.log(st.has(3)); // check if element exists in the set
st.delete(3);
console.log(st.has(3));

console.log(st.size);
st.clear(); //remove all elements from the set
console.log(st.size);
