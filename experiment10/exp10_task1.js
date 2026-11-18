// Name: Jai kumar | Roll: 2510303237 | Experiment 10 | Task 1
const person = { name: "Jai kumar", age: 20, city: "Bareilly" };
console.log(person.name, person["age"]);
person.course = "B.Tech";
delete person.city;
console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
