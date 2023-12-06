function addStudentToClass(student){
    return new Promise((resolve, reject) => {
        const randomDelay = Math.floor(Math.random() * ( 3000 - 1000 + 1) + 1000);
        setTimeout(() => {
            if(student.age < 18){
                reject (`\n addStudentToClass was rejected after ${randomDelay / 1000} seconds because ${student.name} is too young for this class.`);
            } else {
                resolve (`\n addStudentToClass was resolved after ${randomDelay / 1000} seconds because ${student.name} is added to the class.`);
            }
        }, randomDelay);
    })
}

const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 19 },
];

for (const student of students) {
    console.log("Next student...")
    registerStudent(student);
}
//how to create a random number with a fixed range
