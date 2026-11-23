// const products = [
//   { id: 1, name: "Keyboard", price: 50,  stock: 10 },
//   { id: 2, name: "Mouse",    price: 20,  stock: 0  },
//   { id: 3, name: "Monitor",  price: 200, stock: 4  },
// ];

// const mouse = products.findIndex(p => p.id === 2);
// const mouse = products.filter(p => p.id >= 2).length > 5;

// Boolean
// const mouse = products.some(p => p.id ===2);
// const mouse = products.every(p => p.id ===2);

// only primitive data type 
// const mouse = products.includes({id : 2}); // always false cause object compare by references 

// map trasform every item of the array of print every item 

// const mouse = products.map(p => p.name);
// const mouse = products.map(p=> ({...p ,price:  p.price * 2}))
// const mouse = products.map(p => p.id == 2 ? { ...p, price: p.price = 0} : p);

// const mouse = products.reduce((sum , p) => sum + p.price, 0);

// const mouse = products.reduce((acc, p ) =>{
//     acc[p.id] = p;
//     return acc;
// }, {});


//return undefined so we can not get the result as we do with map 
// const mouse = products.forEach(element => {
//    element.price *=2;
// });

// const pro = {id: 4, name: " fdhsajif" , price: 44, stock: 4};

// products.unshift(pro);

// products.splice(1,1);
// products.slice(0,1);

// const mouse = products.sort((a,b ) => a.stock - b.stock);
// const mouse = products.sort((a,b) => a.price-b.price);

// const mouse = products.find(p => p.id ===2);
// if (mouse) mouse.price = 1234;

// mutating -> change the original array and return it 
// immutable -> leave the original array and return new array 

// console.log(products);


const students = [
  { id: 1, name: "Lina", grade: 85, passed: true },
  { id: 2, name: "Omar", grade: 45, passed: false },
  { id: 3, name: "Sara", grade: 92, passed: true },
];

// const student = students.filter(p => p.name == "Omar");
// const student = students.filter(p => p.passed == true);
// const grade = students.reduce((sum , p) => sum + p.grade, 0);
// const rem = students.filter(p => p.id !== 2);
// const index = students.findIndex(p => p.id === 2);
// students.splice(index, 1);

// //mnutating 
// students.map(p => p.id === 1 ? { ...p , grade:  p.grade = 90} : p);
// // immutable
// students.map(p => p.id === 1 ? { ...p , grade: 90} : p);

// const avrg = students.reduce((sum, p) => sum + p.grade, 0);

const passing = students.some(p => p.passed);

console.log(passing);