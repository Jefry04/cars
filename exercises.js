const arr = [1, 2, 3, 4, 5, 6];

const arrDuplicate = arr.map ((num) => num*2);
const arrFilter = arr.filter ((num) => num%2==0)
const arrReduce = arr.reduce ((acc, num) => acc+num)

console.log (arrReduce)
