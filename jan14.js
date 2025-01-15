const students = [
    { name: "Alice", score: 95, subject: "Math" },
    { name: "Bob", score: 67, subject: "Science" },
    { name: "Charlie", score: 82, subject: "English" },
    { name: "David", score: 74, subject: "History" },
    { name: "Eve", score: 58, subject: "Art" },
    { name: "Frank", score: 89, subject: "Physics" },
    { name: "Grace", score: 91, subject: "Biology" },
];

// const result=students.filter(item => item.score>70)
// console.log(result)

const grades = students.map(student =>{
    let grade;
    if (student.score >= 90){
        grade='A';
    }else if (student.score >= 80){
        grade='B';
    }else if (student.score >= 70){
        grade='C';

    }else if (student.score >= 60){
        grade='D';
    }else if (student.score < 60){
        grade='F';
    }
    return {...student,grade};
}
)
console.log(grades);

const total=students.reduce((sum,student)=> sum+student.score,0)
console.log(total)

const avg=total/students.length;
console.log(avg.toFixed(2))

const avgs=students.filter(student => student.score>avg)
console.log(avgs);
