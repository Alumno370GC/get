//Use Existing Arrays as Elements
//we can also create multidimennsionla arrays by nesting existing array
//whithin them. For examplo

let student1= ['jack',  24];
let student2= ['sara',  23];
let student3= ['Peter', 45];

//create multidimensional array
//using student1, stusdent2, student3
let Data =[student1, student2, student3];
console.log(Data);




let studentsData = [["Jack",24], ["Sara", 23]];

//loop over outer array
for(let i = 0; i<studentsData.length; i++){

for(let j =0; j<studentsData[i].length; j++){

console.log (studentsData[i][j]);

}


}