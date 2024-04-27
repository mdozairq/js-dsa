const arr = [1, 2, 3, "Ozair"] 

arr.push(4)

// console.log(arr)

arr.unshift(0)

// console.log(arr)

arr.shift()

// console.log(arr)

const ans = arr.reduce((acc, item)=>{
    return acc + item
}, 0)

// console.log(ans)
const st = "2bha1vna0"
// console.log(st)
const st2 = st.slice(1,4).split("").reverse().join("").toString()
const st3 = st.slice(5, st.length -1).split("").reverse().join("").toString()
const newStr = st.charAt(0) + st2 + st.charAt(4) +  st3 + st.slice(st.length-1)
// console.log(newStr)
 
//Objects


const obj = {
    name: "Ozair",
    age: 18
}


// console.log(Object.entries(obj)[1])

//Set

const s = new Set([1,2,3])
s.add(4)
// console.log(s.size);
for(const i of s){
    // console.log(i)
}


//Map
const map = new Map([["a",2], ["b",3], [1,3]])

console.log(map.has("c"))

for(var [first, second] of map){
    console.log(first," : ", second);
}
// console.log(map);
