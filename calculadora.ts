//Using the push() Method
//The push method adds an elemnt at  the end of the array

let dailyActivities = ["eat", "sleep"];
dailyActivities.push("exercise");
console.log(dailyActivities);

let Activities = ["eat", "sleep"];
Activities.unshift("work");
console.log(Activities);


//we can add or change elements by accessing the index

let daily = ["eat","sleep","work"];
daily[1]="exercise";
console.log(daily);


//Remove Elements From an Array
// we can remove an elemnet from any specified
//splice

let numbers = [1,2,34,5]
//remove one element
//starting from index

numbers.splice(2,1);
console.log(numbers);