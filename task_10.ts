type Student = {
  name: string;
  grades: number[];
};

const students: Student[] = [
  { name: "Shruti", grades: [85, 90, 92] },
  { name: "Akash", grades: [78, 85, 88] },
  { name: "Eva", grades: [95, 96, 98] },
  { name: "Dina", grades: [70, 75, 80] },
];

const calAverage = (grades: number[]): number => {
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  return sum / grades.length;
};

const sortStudentsByAverageGrade = (students: Student[]): Student[] => {
  return students.sort((a, b) => {
    const avgA = calAverage(a.grades);
    const avgB = calAverage(b.grades);
    return avgB - avgA;
  });
};

const sortedStudents = sortStudentsByAverageGrade(students);

console.log(sortedStudents);
