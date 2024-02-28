/*const array1 = [1,2,4,65,8]

const map1 = array1.map((a)=>(a*a));
console.log(map1);

const filter1 = array1.filter((a)=>(a > 10));
const filter2 = array1.filter((a,index)=>console.log(index));
console.log(filter1);
console.log(filter2);

const reduce1= array1.reduce((a,b)=>(a*b));
console.log(reduce1)
*/

const arr = [
    {
      id: 1,
      name: "Alex",
      passed: true,
      cgpa: "9.7",
    },
    {
      id: 2,
      name: "Leena",
      passed: false,
      cgpa: "3.7",
    },
    {
      id: 3,
      name: "Aaron",
      passed: true,
      cgpa: "8.9",
    },
    {
      id: 4,
      name: "Naman",
      passed: true,
      cgpa: "9",
    },
    {
      id: 5,
      name: "Ravi",
      passed: false,
      cgpa: "2.8",
    },
  ];

const newMap = arr.map((data) => data.name)
console.log(newMap)



const newFilter = arr.filter((data) => data.passed === true);
console.log(newFilter)