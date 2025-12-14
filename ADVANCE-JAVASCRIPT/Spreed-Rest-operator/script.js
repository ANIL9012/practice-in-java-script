function addNumbers(...numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
}

addNumbers(1, 2, 3, 4); // Output: 10


const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);
// Output: [1, 2, 3, 4, 5]

const user = { name: "Anil", age: 22 };
const newUser = { ...user, city: "Delhi" };

console.log(newUser);
// Output: { name: "Anil", age: 22, city: "Delhi" }
