// Exercise 1: Your Favorite Food //

let favoritefood ='meat';
let favoritemeal ='dinner';
console.log(" I eat " + favoritefood + " at every " + favoritemeal )
// ==>  I eat meat at every dinner //






//___________________________________________________________________________________________________//


// Exercise 2 : Series //


                              //Part I //

const myWatchedSeries = [" black mirror ", " money heist ", " the big bang theory "];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence ='I watched ';
console.log( myWatchedSeriesSentence  +  myWatchedSeriesLength  + ' series :' +   myWatchedSeries  )
// ==> I watched 3 series : black mirror , money heist , the big bang theory //





                              // Part II //



const myWatchedSeries2 = [" black mirror ", " money heist ", " the big bang theory "];






// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series. //
let position = myWatchedSeries2.indexOf(" the big bang theory ");


console.log(position)  //==> position 2 //


myWatchedSeries2 [position] = "Freinds" // ==> [' black mirror ', ' money heist ', 'Freinds'] //

console.log (myWatchedSeries2);


//Add, at the end of the array, the name of another series you watched.//

myWatchedSeries2.push = " cursed "
console.log(myWatchedSeries2 )  //==> [' black mirror ', ' money heist ', 'Freinds', push: ' cursed '] //



// Add, at the beginning of the array, the name of your favorite series.//
// Delete the series "black mirro". //


const myWatchedSeries3 = [" black mirror ", " money heist ", " Freinds ", " cursed "]; 
myWatchedSeries3.splice(0, 1, ' the 100 ' ); 
console.log(myWatchedSeries3) // ==>    [' the 100 ', ' money heist ', ' Freinds ', ' cursed ']



// Console.log the third letter of the series “money heist”. //

let str =" money heist ";
 str.substring(3,4);
console.log(str.substring(3,4))



//Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.//








//________________________________________________________________________________________________________________________________________________//




//Exercise 3 : The Temperature Converter//




//Store a celsius temperature into a variable//




let C = "25";



//To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32//


let F = Number (C)  / 5 * 9 + 32;


//Result//


console.log(" temperature  " + C + " C° " + " Equal  " + F + " In F° " )



// Exercise 4 : Guess The Answers #1 //


// Example//


console.log(2+3)
// Prediction: It will output 5, because 2 and 3 are numbers
// Actual: 5


          //code test //


          let c;
          let a = 34;
          let b = 21;
      
          console.log(a+b) //first expression
          // Prediction: It will output 55, because 34 and 21 are numbers.
          // Actual: 55
      
          a = 2;
      
          console.log(a+b) //second expression
          // Prediction: It will output 23, because  21 and 2 are numbers.
          // Actual:  23       

        console.log(C)

       
         

        // Analyse the code below, what will be the outcome? ///

        console.log(3 + 4 + '5');
        


        // 5 is a string that contains the number 5. 
        //When a string is added to a number, 
        //JavaScript concatenates the two elements into a single string. 
        //In this case, the string '5' is added to the end of the previous result,
        //which was 7. Therefore,
        // the final result of the expression is a string '75'.//

        //________________________________________________________________________________//

        // 5 est une chaîne de caractères qui contient le chiffre 5. 
        //Lorsqu'une chaîne de caractères est ajoutée à un nombre, 
        //JavaScript concatène les deux éléments en une seule chaîne de caractères. 
        //Dans ce cas, la chaîne de caractères '5' est ajoutée à la fin du résultat précédent,
        //qui était 7. Par conséquent,
        // le résultat final de l'expression est une chaîne de caractères '75'.//





//____________________________________________________________________________________//        



//     Exercise 5 : Guess The Answers #2       //

typeof(15)
// Prediction: 15 is a number
// Actual: Number

typeof(5.5)
// Prediction: 5.5 is a number
// Actual: Number

typeof(NaN)
// Prediction: No a Number 
// Actual:Number

typeof("hello")
// Prediction: hello is a string
// Actual: String

typeof(true)
// Prediction:  Boolean  2 answers False or True
// Actual: boolean

typeof(1 != 2)
// Prediction: Boolean 2 possible answers True or False
// Actual: True

"hamburger" + "s"
// Prediction: hamburger s 
// Actual:hamburgers

"hamburgers" - "s"
// Prediction: hamburger
// Actual:NaN

"1" + "3"
// Prediction:13 string add 3 to 1.
// Actual: 13

"1" - "3"
// Prediction: -2 
// Actual: -2

"johnny" + 5
// Prediction: johnny5 string add 5 to johnny
// Actual: johnny5

"johnny" - 5
// Prediction: NaN not a number
// Actual: NaN

99 * "hello"
// Prediction:NaN not a number
// Actual: NaN

1 != 1
// Prediction: True Not equal
// Actual: False

1 == "1"
// Prediction: True is comparison of value
// Actual: True

1 === "1"
// Prediction: True is comparison of value and type 1 number / "1" string.
// Actual: True



//_____________________________________________________________________________//



// Exercise 6 : Guess The Answers #3 //



5 + "34"
// Prediction: 534 JavaScript will convert the number to a string and concatenate the two strings.
// Actual: 534

5 - "4"
// Prediction: 1 when subtracting a string from a number, JavaScript tries to automatically convert the string
// Actual: 1
10 % 5
// Prediction: 0  The modulo operator % returns the remainder of the division of the first number by the second number.
// Actual: 0
5 % 10
// Prediction: 5 The % operator returns the remainder of the division of two numbers. In this case, 5 is less than 10, so the remainder of the division of 5 by 10 is simply 5.
// Actual: 5
"Java" + "Script"  //concatenates the two strings "Java" and "Script" together. The expected answer is therefore "JavaScript".//
// Prediction: JavaScript
// Actual: JavaScript
" " + " "
// Prediction:   concatenates two empty strings that contain no characters.
// Actual:
" " + 0
// Prediction: 0  when concatenating a string with a number, the number is automatically converted to a string.
// Actual: 0
true + true
// Prediction: 2 true is converted to 1 and false is converted to 0. Thus, "true + true" is equivalent to the addition of two integers 1+1, which gives the integer 2 as result.
// Actual: 2
true + false
// Prediction: true
// Actual: 1
false + true
// Prediction: 1 false has a numerical value of 0 and true has a numerical value of 1, so when they are added together, the result is 1.
// Actual: 1
false - true
// Prediction: -1 false has a numerical value of 0 and true has a numerical value of 1, by subtracting, the result is -1.
// Actual: -1
!true
// Prediction: False The "!" (non-logical) operator reverses the boolean
// Actual:false
3 - 4
// Prediction: -1 negatif number
// Actual: -1
"Bob" - "bill"
// Prediction: NaN   (-) is used for subtraction between numbers, not between strings.
// Actual: NaN