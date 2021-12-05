// Additional assignments for Day 4

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let array = [200,90,70,55,23,56,450,1,31,79,68,90]

console.log(array.reverse())

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/


let maximum = 0
for (i=0; i<array.length; i++){
    
    if(array[i]>maximum){ maximum = array[i]
    } 
}   console.log(maximum)


/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

let minimum = array[0]
for (i=0; i<array.length; i++){
   
    if(array[i]<minimum){ minimum = array[i]
    } 
}   console.log(minimum)

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

let onlyEvenNumbers = [ ]
for (i=0; i<array.length; i++){
    if( array[i]%2 === 0 ){
        onlyEvenNumbers.push(array[i])
    } 

}   console.log( onlyEvenNumbers )

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

let deleteEvenNumbers = [ ]
for (i=0; i<array.length; i++){
    if( array[i]%2 !== 0 ){
        deleteEvenNumbers.push(array[i])
    } 
}   console.log( deleteEvenNumbers )

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

let withVowels = "this is a string supposed to be without any vowels"
let withoutVowels = " "
for ( i=0; i<withVowels.length; i++)
switch (withVowels[i]){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "a":
    case "a":
    break 
    default: withoutVowels += withVowels[i]
} 

console.log(withoutVowels)

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/