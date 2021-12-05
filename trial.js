
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