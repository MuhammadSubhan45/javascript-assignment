// Js program to find maximum between two numbers

// var firstNum =+ prompt("Write First Number");
// var secondNum  =+ prompt("Write Second Number");
// if ( firstNum > secondNumber ){
//     alert("First Num is max");
// }
// else{
//      alert("Second Num is max");
// }



// Js program to find maximum between three numbers

// var firstNum =+ prompt("Write First Number");
// var secNum =+ prompt("Write Second Number");
// var thirdNum =+ prompt("Write Third Number");
// if(firstNum>secNum){
//     alert("First Num is max")
// }
// if(secNum>thirdNum){
//     alert("Second Num is max")
// }
// if(thirdNum>firstNum){
//     alert("Third Num is max")
// }else{
//     alert("no one is max")
// }




// js program to check whether a number is negative, positive or zero

// var num =+ prompt("Enter a Number");

// if( num > 0){
//     alert("Number is Positive");
// }
// if( num < 0){
//     alert("Number is Negative");
// }
// else{
//     alert("Number is Zero");
// }



// Js program to check whether a number is divisible by 5 and 11 or not

// var num =+ prompt("Enter a number");
// if(num % 5 == 0){
//     alert("Number is divisible by 5")
// }
// else if(num % 11 == 0){
//     alert("Number is divisible by 11")
// }else{
//     alert("Number is neither divisible on 5 nor on 11")
// }




//js program to check whether a number is even or odd

// var num =+ prompt("Enter a number");

// if(num % 2 == 0){
//     alert("entered num is an even number");
// }
// else{
//     alert("entered num is an odd number");
// }



// js program to check whether a year is leap year or not

// var year =+ prompt("Enter year");

// if(year % 4 ==0){
//     alert( year + " is leap year");
// }
// else{
//     alert(year + " is not a leap year");
// }




// js program to check whether a character is alphabet or not

// var char = prompt("Enter a character");
// if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
//     alert( char + " is an alphabet");
// }
// else {
//     alert( char + " is not an alphabet");
// }





// js program to input any alphabet and check whether it is vowel or consonant

// var char = prompt("Enter a character:");
// if (char == "a" || char == "A" || char == "e" || char == "E" || char == "i" || char == "I" || char == "o" || char == "O" || char == "u" || char == "U") {
//     alert(char + " is vowel.");
// }
// else if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
//     alert(char + " is consonant");
// }
// else {
//     alert(char + " not an alphabet.");
// }





// js program to input any character and check whether it is alphabet, digit or special character

// var char = prompt("Enter a character")

// if ( char >= "a" || char >= "A" ) {
//     alert(char + " is an alphabet");
// }
// else if (char >= 0 || char<= 0) {
//     alert(char + " is a digit");
// }
// else{
//     alert(char + " is a special char");
// }





//  js program to check whether a character is uppercase or lowercase alphabet

// var char = prompt("Enter a Character ");

//     if ((char >= 'A') && (char <= 'Z')){
//         alert(char + " is an upper case Char");
//     }
//     else if ((char >= 'a') && (char <= 'z')){
//         alert(char + " is an lower case Char");
//     }
//     else{
//         alert("not a Char");
//     }
    





// js program to input week number and print week day

// var num =+ prompt("Enter the number of a day of week");

// if (num == 1) {
//    alert(num + " comes on monday")
// }
//  else if (num == 2) {
//     alert(num + " comes on tuesday")
// }
// else if (num == 3) {
//     alert(num + " comes on wednesday")
// }
// else if (num == 4) {
//     alert(num + " comes on thursday")
// }
// else if (num == 5) {
//     alert(num + " comes on friday")
// }
// else if (num == 6) {
//     alert(num + " comes on saturday")
// }
// else if (num == 7) {
//     alert(num + " comes on sunday")
// }
// else {
//     alert("number should b/w 1-7");
// }





//  js program to input month number and print number of days in that month

// var num =+ prompt("Enter a number b/w (1-12)");

// if (num == 1) {
//     alert(num + " is January")
// }
// else if (num == 2) {
//     alert(num + " is february")
// }
// else if (num == 3) {
//     alert(num + " is march")
// }
// else if (num == 4) {
//     alert(num + " is april")
// }
// else if (num == 5) {
//     alert(num + " is may")
// }
// else if (num == 6) {
//     alert(num + " is june")
// }
// else if (num == 7) {
//     alert(num + " is juy")
// }
// else if (num == 8) {
//     alert(num + " is august")
// }
// else if (num == 9) {
//     alert(num + " is september")
// }
// else if (num == 10) {
//     alert(num + " is october")
// }
// else if (num == 11) {
//     alert(num + " is november")
// }
// else if (num == 12) {
//     alert(num + " is december")
// }
// else  {
//     alert("number shoud be between 1-12")
// }






//  js program to input angles of a triangle and check whether triangle is valid or not

// let angleFirst =+ prompt("Enter 1st angle");
// let angleSec =+ prompt("Enter 2nd angle");
// let angleThird =+ prompt("Enter 3rd angle");
// let sum = angleFirst + angleSec + angleThird;

//     if (sum == 180 && angleFirst > 0 && angleSec > 0 && angleThird > 0) {
//         alert("triangle is valid")
//     }
//     else {
//         alert("triangle ain't valid")
//     }




//  js program to check whether the triangle is equilateral, isosceles or scalene triangle

// let sideFirst = + prompt("Enter 1st side")
// let sideSec = + prompt("Enter 2nd side")
// let sideThird = + prompt("Enter 3rd side")

//     if (sideFirst == sideSec == sideThird) {
//         alert("it's Equilateral triangle");
//     }
//     else {
//         alert("it's Scalene triangle");
//     }


// js program to calculate profit or loss

// let salePrice =+  prompt("Enter sale price");
// let costPrice =+  prompt("Enter cost price");
// let profit = salePrice - costPrice;

// if (profit > 0) {
//     alert("Yayyyy! imma in profit");
// }
// else if (profit < 0) {
//     alert('Alas! gotta loss')
// }
// else if (profit == 0 ){
//     alert("huh! neither profit nor loss ");
// }
// else{
//     alert("yar enter something valid");
// }






//  js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// let physics = + prompt("Enter physics marks");
// let chemistry = + prompt("Enter chem marks");
// let biology = + prompt("Enter bio marks");
// let mathmatics = + prompt("Enter math marks");
// let computer = + prompt("Enter comp marks");
// let sum = (physics + chemistry + biology + mathmatics + computer);
// let percentage = ((sum * 100) / 500);

// if (percentage >= 90) {
//    alert (   `your grade is A and percentage is ${percentage}%  `  );
// }
// else if (percentage >= 80) {
//     alert (   `your grade is B and percentage is ${percentage}% `  );
// }
// else if (percentage >= 70) {
//     alert (   `your grade is C and percentage is ${percentage}% `  );
// }
// else if (percentage >= 60) {
//     alert (   `your grade is D and percentage is ${percentage}% `  );
// }
// else if (percentage >= 40) {
//     alert (   `your grade is E and percentage is ${percentage}% `  );
// }
// else if (percentage < 40) {
//     alert (   `your grade is F and percentage is ${percentage}% `  );
// }
// else {
//     alert("enter correct value");
// }


