// import logo from "./logo.svg";
import "./App.css";
import "./UserFavoriteAnimals";
import UserFavoriteAnimals from "./UserFavoriteAnimals";
import Exercise3 from "./Exercise3";
import "./Exercise3.css";

const myElement = <h1>I love JSX!</h1>;
const sum = 5 + 5;
const user = {
  firstName: "Bob",
  lastName: "Dylan",
  favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {myElement}
        <p>React is {sum} times better with JSX</p>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <UserFavoriteAnimals colors={user.favAnimals} />
      </header>
      <Exercise3 />
    </div>
  );
}

export default App;