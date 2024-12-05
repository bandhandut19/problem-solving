var students = [
    { name: "Shruti", grades: [85, 90, 92] },
    { name: "Akash", grades: [78, 85, 88] },
    { name: "Eva", grades: [95, 96, 98] },
    { name: "Dina", grades: [70, 75, 80] },
];
var calAverage = function (grades) {
    var sum = grades.reduce(function (acc, grade) { return acc + grade; }, 0);
    return sum / grades.length;
};
var sortStudentsByAverageGrade = function (students) {
    return students.sort(function (a, b) {
        var avgA = calAverage(a.grades);
        var avgB = calAverage(b.grades);
        return avgB - avgA;
    });
};
var sortedStudents = sortStudentsByAverageGrade(students);
console.log(sortedStudents);
