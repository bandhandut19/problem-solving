type Person = {
  name: string;
  age: number;
  gender: string;
};

const people: Person[] = [
  { name: "Shruti", age: 30, gender: "female" },
  { name: "Shuvo", age: 25, gender: "male" },
  { name: "Chandan", age: 35, gender: "male" },
  { name: "Dina", age: 28, gender: "female" },
  { name: "Eva", age: 40, gender: "female" },
];

const filterAndMap = (people: Person[]): string[] => {
  return people
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};

const result = filterAndMap(people);
console.log(result);
