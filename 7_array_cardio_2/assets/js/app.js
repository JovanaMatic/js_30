const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good!', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 },
];

// some check, is at least one person 19?

let over19 = people.some(item => 2023 - item.year === 19);

console.log(over19)
//output false no one is 19 according to years

// is everyone 19?

let every19 = people.some(item => 2023 - item.year === 19);
console.log(every19)
//output false no one is 19 according to years

// find the comment with the id 823423

let findComment = comments.find(item => item.id === 823423);
console.log(findComment.text)
//output: Super good!

// delete the comment with id 823423 / findindex

let getIndex = comments.findIndex(item => item.id === 823423);
let newArr = comments.slice();
let removedItem = newArr.splice(getIndex,1);

console.log(comments, newArr,removedItem)

// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

const firstElements = (arr,num) => {
   let newArr = [];

   if(arr.length > 0) {
    for(let i = 0; i < num; i++) {
        newArr.push(arr[i]);
       }
   }else{
       return arr;
   }
   return newArr;
}

console.log(firstElements([7, 9, 0, -2],3))

//Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8

const evenFunc = (num) => {
    let arr = num.toString().padStart(num.toString().length+1, '0').split('');    
    let newArr = [];
    
     for(let i = 0; i < arr.length; i++ ) {
         newArr.push(arr[i])
         if(arr[i] % 2 === 0 && arr[i+1] % 2 === 0) {
             i
             newArr.push('-')   
        }
        
     }
    return newArr.join('');
}

console.log(evenFunc(025468856543788))
