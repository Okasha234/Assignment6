// //===================Chapter#21-25====================//

// //----------------TASK#1--------------------
// var first_Name = prompt("Enter your first name");
// var last_Name = prompt("Enter your last name");
// var full_Name = document.write(first_Name+" "+last_Name);

// //----------------TASK#2--------------------
// var mobile = prompt("Enter your favourite mobile phone name");
// var itr = 0;
// for(var i=0; i<mobile.length; i++){
//     itr = itr + 1;
// }
// document.write("My Favourite phone is: "+mobile+"<br>");
// document.write("Length of string: "+itr);

// //----------------TASK#3--------------------
// var string = "Pakistani";
// for (var i=0; i<string.length; i++){
//     if (string[i] === "n"){
//         break;
//     }
// }
// document.write("String: "+string+"<br>");
// document.write("Index no: "+i+"<br>");

// //----------------TASK#4--------------------
// var string = "Hello World";
// for (var i=0; i<string.length; i++){
//     if (string[i] === "l"){
//         var j = i;
//     }
// }
// document.write("String: "+string+"<br>");
// document.write("Last index no: "+j+"<br>");

// //----------------TASK#5--------------------
// var string = "Pakistani";
// for (var i=0; i<string.length; i++){
//     if (i === 3){
//         break;
//     }
// }
// document.write("String: "+string+"<br>");
// document.write("Character at index 3: "+string[i]+"<br>");

// //----------------TASK#6--------------------
// var first_Name = prompt("Enter your first name");
// var last_Name = prompt("Enter your last name");
// var full_Name = first_Name.concat(" "+last_Name);
// document.write(full_Name);

// //----------------TASK#7--------------------
// var city_Name = "Hyderabad";
// document.write("City: "+city_Name+"<br>");
// document.write("After Replacement: "+city_Name.replace("Hyder","Islam")+"<br>");

// //----------------TASK#8--------------------
// var message = "Ali and Sami are best friends. They play cricket and football together";
// document.write(message.replace(/and/g, "&"));
// document.write(message);

// //----------------TASK#9--------------------
// var a = "10";
// document.write("Value: "+a+"<br>");
// document.write("Type: "+typeof(a)+"<br>");
// var b = parseInt("10");
// document.write("Value: "+b+"<br>");
// document.write("Type: "+typeof(b)+"<br>");

// //----------------TASK#10--------------------
// var a = prompt("Enter any words in small letters");
// document.write("User Input: "+a+"<br>");
// var b = a.toUpperCase();
// document.write("Upper Case: "+b+"<br>");

// //----------------TASK#11--------------------
// var a = prompt("Enter any word");
// var b = a.toLowerCase();
// var c = b.split('');
// document.write("User Input: "+a+"<br>");
// var upper_Letter = b[0].toUpperCase();
// var d = c.splice(0,1,upper_Letter);
// var $string = c.toString();
// var final_String = $string.replace(/,/g,"");
// document.write("Title Case: "+final_String+"<br>");

// //----------------TASK#12-------------------
// var num = "35.36" ;
// document.write("Number: "+ num+"<br>");
// var final_Num = num.replace('.','');
// document.write("Result: "+ final_Num+"<br>");

// //----------------TASK#13-------------------
// var user_Name = prompt("Enter you name", "Ali Okasha");
// var message;
// var split = [];
// var arr = [];
// for (var i = 0; i < user_Name.length; i++) {
//     split[i] = user_Name.split("&nbsp;");
//     arr[i] = user_Name.charCodeAt(i);
//     if (arr[i] === 33 || arr[i] === 44 || arr[i] === 46 || arr[i] === 64) {
//         message = "Invalid usename";
//         break;
//     }
//     else{
//         message = "Correcr username";
//     }
// }
// alert(message);

// //----------------TASK#14-------------------
// var $input = prompt("Enter the name of your order Sir/Madam");
// var $array = ["cake", "cookie", "patties", "apple pie", "chips"];
// var input = $input.toLowerCase();
// for (var i = 0; i < $array.length; i++) {
//     if ($array[i] === input) {
//         alert(input + " is available on index no. " + i);
//         break;
//     } else {
//         alert(input + " is not available");
//         break;
//     }
// }

// //----------------TASK#15-------------------
// var passwd = prompt("Enter your password");
// var x = passwd.match(/^[a-z0-9]+$/);

// if (passwd.length < 6) {
//     alert("Password must be 6 characters long");
// } else if (passwd[0] >= 48 || passwd[0] <= 57) {
//     alert("Password can't begin with number");
// } else if (x === null) {
//     alert("Password should be alphanumeric");
// }

// // //----------------TASK#16-------------------
// var university = "University of Karachi";
// var arr = university.split('');
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br>");
// }

// //----------------TASK#17-------------------
// var $input = prompt("Enter any string","Pakistan");
// var string_Length = $input.length-1
// document.write("User input: "+ $input + "<br>");
// document.write("Last character of input: "+ $input[string_Length] + "<br>");

// //----------------TASK#18-------------------
// var string = "The quick brown fox jumps over the lazy dog";
// var string = string.toLowerCase();
// var find = string.match(/the/g);
// var $no = find.length;
// document.write("Text: The quick brown fox jumps over the lazy dog"+"<br>"+"There are "+$no+" occurrence(s) of the word 'the'");

// //------------------------------------------------------------------------------------------------------------------------------------------------------

// //===================Chapter#26-30====================//

// //----------------TASK#1--------------------
// var $int = +prompt("Enter a positive integer number","3.452");
// var $roundOff = Math.round($int);
// var $floor = Math.floor($int);
// var $ceil = Math.ceil($int);
// document.write("Input: "+$int+"<br>");
// document.write("Round off value: "+$roundOff+"<br>");
// document.write("Floor value: "+$floor+"<br>");
// document.write("Ceil value: "+$ceil+"<br>");

// //----------------TASK#2--------------------
// var $int = +prompt("Enter a negative float number","-3.452");
// var $roundOff = Math.round($int);
// var $floor = Math.floor($int);
// var $ceil = Math.ceil($int);
// document.write("Input: "+$int+"<br>");
// document.write("Round off value: "+$roundOff+"<br>");
// document.write("Floor value: "+$floor+"<br>");
// document.write("Ceil value: "+$ceil+"<br>");

// //----------------TASK#3--------------------
// var $int = +prompt("Enter a negative float number","-4");
// var $abs = Math.abs($int);
// document.write("The absolute value of: "+$int+" is "+$abs+"<br>");

// //----------------TASK#4--------------------
// var $random = Math.random();
// document.write("Random dice value: "+$random+"<br>");

// //----------------TASK#5--------------------
// var $toss = Math.floor((Math.random()*2) + 1);
// if ($toss === 2){
//     document.write("Random coin value: "+$toss+"<br>");
// }else{
//     document.write("Random coin value: "+$toss+"<br>");
// }

// //----------------TASK#6--------------------
// var $randNo = Math.floor((Math.random()*100) + 1);
// document.write("Random number between 1 and 100: "+$randNo+"<br>");

// //----------------TASK#8--------------------
// var $guess = +prompt("Enter any number from 1 to 10","4");
// var $randNo = Math.floor((Math.random()*10) + 1);
// if ($guess == $randNo){
//     document.write($guess+ " is the right answer"+"<br>");
// }else{
//     document.write("Try again!"+"<br>");
// }

// //------------------------------------------------------------------------------------------------------------------------------------------------------

// //===================Chapter#31-34====================//

// //----------------TASK#1--------------------
// var date = new Date();
// document.write(date+"<br>");

// //----------------TASK#2--------------------
// var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// document.write("Current month: "+months[date.getMonth()]+"<br>");

// //----------------TASK#3--------------------
// var days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
// document.write("Today is: "+days[date.getDay()]+"<br>");

// //----------------TASK#4--------------------
// var $num = date.getDay();
// if ($num == 0 || $num == 6){
//     document.write("It's Fun day!"+"<br>");
// }

// //----------------TASK#5--------------------
// var $date = date.getDate();
// console.log($date)
// if ($date < 16){
//     document.write("First Fifteen Days of the month"+"<br>");
// }else{
//     document.write("Last Days of month"+"<br>");
// }

// //----------------TASK#6--------------------
// var date = new Date();
// document.write("Current date: "+date+"<br>");
// document.write("Elapsed milliseconds since Jan 1, 1970: "+Date.now()+"<br>");
// document.write("Elapsed minutes since Jan 1, 1970: "+(Date.now()/60)+"<br>");

// //----------------TASK#7--------------------
// var date = new Date();
// var $hr = date.getHours();
// if ($hr >=0 && $hr <12){
//     document.write("It's AM"+"<br>");
// }else{
//     document.write("It's PM"+"<br>");
// }

// //----------------TASK#8--------------------
// var laterDate = new Date(2020, 11, 31);
// document.write(laterDate);

// //----------------TASK#9--------------------
// var oneDay = 24 * 60 * 60 * 1000;
// var firstDate = new Date(2020, 3, 24);
// var secondDate = new Date();
// var diff = Math.round(((secondDate - firstDate) / oneDay));
// document.write(diff+" days have passed since 1st Ramdan, 2020"+"<br>");

// //----------------TASK#10--------------------
// var oneDay = 24 * 60 * 60;
// var firstDate = new Date(2020, 0, 1);
// var secondDate = new Date(2020, 11, 5);
// var diff = Math.round(((secondDate - firstDate) / oneDay));

// document.write(secondDate+"<br>");
// document.write(diff+" seconds have passed since the begining of 2020"+"<br>");

// //----------------TASK#11--------------------
// var yesterday = new Date(new Date().getTime() - (2 * 60 * 60 * 1000));
// document.write(yesterday);

// //----------------TASK#12--------------------
// var yesterday = new Date(new Date() - ((24*60*60*100)*365.25*1000));
// document.write(yesterday);

// //----------------TASK#13--------------------
// var dob_entry = prompt("Enter your DOB","month/day/year")
// var split_dob = dob_entry.split("/");
// var month = split_dob[0];
// var day = split_dob[1];
// var year = split_dob[2];
// var dob_asdate = new Date(year, month, day);
// var today = new Date();
// var mili_dif = Math.abs(today.getTime() - dob_asdate.getTime());
// var age = Math.round(mili_dif / (1000 * 3600 * 24 * 365.25));
// document.write("Your age is: "+age);


// //------------------------------------------------------------------------------------------------------------------------------------------------------

// //===================Chapter#35-38====================//

// //----------------TASK#1--------------------
// function my_date(){
//     document.write(new Date());
// }
// my_date();

// //----------------TASK#2--------------------
// function full_Name(first_Name, last_Name){
//     document.write(first_Name+" "+last_Name);
// }
// full_Name("Ali", "Okasha");

// //----------------TASK#3--------------------
// function sum(first_No, second_No){
//     document.write("Sum: "+(first_No+second_No));
// }
// var first_No = +prompt("Enter your first number");
// var second_No = +prompt("Enter your second number");
// sum(first_No, second_No);

// //----------------TASK#4--------------------
// function sum(num1, num2, operator){
//     if (operator === '+'){
//         document.write("Sum of "+num1+" and "+num2+" is "+(num1+num2));    
//     }else if(operator === '*'){
//         document.write("Multiplication of "+num1+" and "+num2+" is "+(num1*num2));    
//     }else if(operator === '-'){
//         document.write("Sub of "+num1+" and "+num2+" is "+(num1-num2));    
//     }else if(operator === '/'){
//         document.write("Division of "+num1+" and "+num2+" is "+(num1/num2));    
//     }else if(operator === '%'){
//         document.write("Remainder of "+num1+" and "+num2+" is "+(num1%num2));    
//     }else{
//         document.write("Invalid Input!");
//     }

// }
// var num1 = +prompt("Enter your first number");
// var operator = prompt("Enter the operation you want to perform")
// var num2 = +prompt("Enter your second number");
// sum(num1, num2, operator);


// //----------------TASK#5--------------------
// function sqr(num){
//     document.write("Square of "+num+" is "+(num*num));
// }
// var num = +prompt("Enter any number");
// sqr(num);

// //----------------TASK#6--------------------
// function fac(num){
//     factorial = 1;
//     for(var i=1; i<=num; i++){
//         factorial = factorial * i;
//     }
//     return factorial
// }
// var num = +prompt("Enter any number");
// document.write(fac(num));

// //----------------TASK#7--------------------
// function count($start, $stop){
//     for(var i=$start; i<=$stop; i++){
//         document.write(i+"<br>");
//     }
// }
// var $start = +prompt("Enter starting number");
// var $stop = +prompt("Enter ending number");
// count($start, $stop);

// // //----------------TASK#8--------------------
// function pythagorous($base, $perp){
//     function sqr(x,y){
//         var $hyp = (x*x)+(y*y);
//         return $hyp;
//     } 
//     var $hyp = sqr($base, $perp);
//     return Math.sqrt($hyp);
// }
// var $base = +prompt("Enter the value of Base");
// var $perp = +prompt("Enter the value of Perpendicular");
// document.write("Hypotenuse of right angle triangle is: "+pythagorous($base, $perp));

// //----------------TASK#9--------------------
// function dimensions($width, $height) {
//     document.write("Area: "+($width*$height));
// }
// var $height = +prompt("Enter height");
// dimensions(10, $height);

// //----------------TASK#10--------------------
// function palindrome(string) {
//     if (string == string.split('').reverse().join('')) {
//         document.write(string + ' is palindrome.');
//     }
//     else {
//         document.write(string + ' is not palindrome.');
//     }
// }
// var check = prompt("Enter any word or phrase");
// palindrome(check);

// //----------------TASK#11--------------------
// function uppercase(str) {
//     var array1 = str.split(' ');
//     var newarray1 = [];
//     for (var i = 0; i < array1.length; i++) {
//         newarray1.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));
//     }
//     return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));

// //----------------TASK#12--------------------
// function find_longest_word(str){
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];
//   for(var x = 1 ; x < array1.length ; x++){
//     if(result.length < array1[x].length){
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));

// //----------------TASK#13--------------------
// function char_count(str, letter) {
//     var letter_Count = 0;
//     for (var position = 0; position < str.length; position++) {
//         if (str.charAt(position) == letter) {
//             letter_Count += 1;
//         }
//     }
//     return letter_Count;
// }
// document.write(char_count('JSResourceS.com', 'o'));

// //----------------TASK#14--------------------
function calcCircumference(radius) {
    return 2*3.141*radius;
}
function calcArea(radius) {
    return 3.141*(radius*radius);
}
document.write("Circumference of circle: "+calcCircumference(4)+"<br>");
document.write("Area of circle: "+calcCircumference(4));






