
let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    payed: true,
    meansOfPayment: ["cash", "creditCard"]
  }
};

const displayGroceries = () => {
  groceries.fruits.forEach(fruit => console.log(fruit));
};

const cloneGroceries = () => {
  const user = client;
  const shopping = groceries;

  // Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
  client = "Betty";

  // Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
  shopping.totalPrice = "35$";

  // Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?
  shopping.other.payed = false;

  return {
    user,
    shopping
  };
};

const clonedGroceries = cloneGroceries();

console.log(clonedGroceries.user); // Betty
console.log(clonedGroceries.shopping.totalPrice); // 35$
console.log(clonedGroceries.shopping.other.payed); // false