var people = [
    { name: "Alice", age: 30, gender: "female" },
    { name: "Bob", age: 25, gender: "male" },
    { name: "Charlie", age: 35, gender: "male" },
    { name: "Diana", age: 28, gender: "female" },
    { name: "Eve", age: 40, gender: "female" },
];
var filterAndMap = function (people) {
    return people
        .filter(function (person) { return person.gender !== "female"; })
        .map(function (person) { return person.name; });
};
var result = filterAndMap(people);
console.log(result);
