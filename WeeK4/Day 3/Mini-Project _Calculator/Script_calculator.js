// Instructions:
// Create a HTML file for your calculator and a JS file for the calculator’s functionality.
// You must create 3 functions in the js file:
// number(num)
// operator(operator)
// equal()
// Hint : you can use the eval() method to help with your calculations.
// Before coding, take your time to understand all the parts to the exercise and their process. You can write it down somewhere if it helps (recommended).
// Bonus : create the RESET and CLEAR buttons.


let num1 = '';
let num2 = '';
let operator = '';
let result = '';

function number(num) {
    // console.log(num)
  if (operator === '') {
    num1 += num;
    document.getElementById('display').value = num1;
  } else {
    num2 += num;
    document.getElementById('display').value = num2;
  }
}

function operatorFunc(op) {
  operator = op;
}

// function equal() {
//   num1 = parseFloat(num1);
//   num2 = parseFloat(num2);
//   switch (operator) {
//     case '+':
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     case '/':
//       result = num1 / num2;
//       break;
//     default:
//       result = '';
//   }
//   document.getElementById('display').value = result;
//   num1 = result
//   num2 = ""
  
// }
function equal() {
  if (num1 === '' || num2 === '') {
    return; // sortir si l'un des nombres est vide
  }
  
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = '';
  }
  document.getElementById('display').value = result;
  num1 = result
  num2 = ""
}

function reset() {
  num1 = '';
  num2 = '';
  operator = '';
  result = '';
  document.getElementById('display').value = '';
}

function Clear(){
    if (operator === '') {
        num1 = num1.slice(0, num1.length-1);
      document.getElementById('display').value = num1;

      } else {
        num2 =  num2.slice(0, num2.length-1);
      document.getElementById('display').value = num2;

      }
}

// window.addEventListener("keydown",testkey)
// function testkey(e){
//     console.log(e.key)
//     if(!isNaN(e.key) && e.key !== " "){
//         if (operator === '') {
//             num1 += e.key;
//             document.getElementById('display').value = num1;
//         }else{
//             num2 += e.key;
//             document.getElementById('display').value = num2;
//         }
//     }

//     switch (e.key) {
//         case '+':
//         case '-':
//         case '*':
//         case '/':
//             operator = e.key;
//             break;
//       }

//     if(e.key === "Enter"){
//         equal()
//     }



//     if (e.key === "Backspace"){
//         Clear()
//     }

//     if (e.key === "spacekey"){
//         reset()

//      }
    
// }


document.addEventListener('keydown', function(event) {
  const key = event.key;

  // Validation des entrées
  if (isNaN(key)) {
    if (['+', '-', '*', '/','='].includes(key)) {
      operatorFunc(key);
    } else if (key === 'Enter') {
      equal();
    } else if (key === 'Backspace') {
      Clear();
    } else if (event.ctrlKey && key === 'r') {
      reset();
    } else {
      return;
    }
  } else {
    number(parseInt(key));
  }
});