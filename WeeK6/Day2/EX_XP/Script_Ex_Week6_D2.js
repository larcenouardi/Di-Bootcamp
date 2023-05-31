// Exercise 1 : Scope

/ #1
function funcOne() {
  let a = 5;
  if(a > 1) {
  a = 3;
  }
  alert(inside the funcOne function ${a});
  }
  
  // #1.1 - run in the console:
  funcOne()
  // #1.2 What will happen if the variable is declared with const instead of let ?
  
//    Prediction: The value of a inside the funcOne function will be 3. This is because the value of a is re-assigned
//    to 3 inside the if block. If the variable is declared with const instead of let, 
//    then the value of a will not be able to be re-assigned and will remain as 5.
  
  // #2
  let a = 0;
  function funcTwo() {
  a = 5;
  }
  
  function funcThree() {
  alert(inside the funcThree function ${a});
  }
  
  // #2.1 - run in the console:
  funcThree()
  funcTwo()
  funcThree()
  // #2.2 What will happen if the variable is declared with const instead of let ?
  
//    Prediction: The value of a inside the funcThree function will be 0. 
//   This is because the value of a is declared with let, which means that it has a local scope. 
//   When funcTwo is called, the value of a is re-assigned to 5. However, 
//   this change to the value of a is not visible to funcThree because it is in a different scope.
//    If the variable is declared with const instead of let, then the value of a will be 5 in both funcTwo and funcThree.
  
  //#3
  function funcFour() {
  window.a = "hello";
  }
  
  function funcFive() {
  alert(inside the funcFive function ${a});
  }
  
  // #3.1 - run in the console:
  funcFour()
  funcFive()
  
//   Prediction: The value of a inside the funcFive function will be "hello". 
//   This is because the variable a is declared with window, which means that it is a global variable.
//    When funcFour is called, the value of a is assigned to "hello".
//     This change to the value of a is visible to funcFive because it is also a global variable.
  
  //#4
  let a = 1;
  function funcSix() {
  let a = "test";
  alert(inside the funcSix function ${a});
  }
  
  // #4.1 - run in the console:
  funcSix()
  // #4.2 What will happen if the variable is declared with const instead of let ?
  
//    Prediction: The value of a inside the funcSix function will be "test". 
//   This is because the variable a is declared with let, which means that it has a local scope.
//    When funcSix is called, the value of a is re-assigned to "test".
//     This change to the value of a is not visible to any other functions because it is only in the scope of funcSix.
//      If the variable is declared with const instead of let, then the value of a will be 1 in both funcSix and any other
//       functions that try to access it.
  
  //#5
  let a = 2;
  if (true) {
  let a = 5;
  alert(in the if block ${a});
  }
  alert(outside of the if block ${a});
  
  // #5.1 - run the code in the console
  // #5.2 What will happen if the variable is declared with const instead of let ?
  
//    Prediction: The value of a inside the if block will be 5.
//    This is because the value of a is re-assigned to 5 inside the if block. However,
//     the value of a outside of the if block will remain as 2. This is because the if block creates a new scope,
//      and the value of a is only visible within that scope. If the variable is declared with const instead of let,
//       then the value of a will be 5 both inside and outside






// Exercise 2 : Ternary Operator


const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);






// Exercise 3 : Is It A String ?




const isString = (value) => {
    return typeof value === 'string';
  };
  
  console.log(isString('hello')); // true
  console.log(isString([1, 2, 4, 0])); // false



//   Exercise 4 : Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

for (let i = 1; i <= colors.length; i++) {
  console.log(`${i}# choice is ${colors[i - 1]}`);
}

const hasViolet = colors.includes("Violet");

if (hasViolet) {
  console.log("Yeah");
} else {
  console.log("No...");
}



// Exercise 5 : Colors #2






const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

for (let i = 0; i < colors.length; i++) {
  const ordinalIndex = i % 100;
  const ordinalSuffix = ordinal[ordinalIndex % 10] || ordinal[10];
  console.log(`${i + 1}${ordinalSuffix} choice is ${colors[i]}`);
}




// Exercise 6 : Bank Details



const bankAmount = 10000;
const vat = 0.17;
const details = ["+200", "-100", "+146", "+167", "-2900"];

for (let i = 0; i < details.length; i++) {
  if (details[i][0] === "+") {
    details[i] = details[i].slice(1) * (1 + vat);
  } else {
    details[i] = details[i].slice(1) * (1 - vat);
  }
}

bankAmount += details.reduce((a, b) => a + b, 0);

console.log(`Your bank account balance at the end of the month is ${bankAmount}`);









