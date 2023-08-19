import React, { Component } from 'react';
import './App.css';
import FormComponent from './FormComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      dietaryRestrictions: {
        nutsFree: false,
        lactoseFree: false,
        vegan: false,
      },
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === 'checkbox'
      ? this.setState((prevState) => ({
          dietaryRestrictions: {
            ...prevState.dietaryRestrictions,
            [name]: checked,
          },
        }))
      : this.setState({
          [name]: value,
        });
  }

  handleSubmit() {
    const { firstName, lastName, age, gender, destination, dietaryRestrictions } = this.state;
    const queryString = `?firstName=${firstName}&lastName=${lastName}&age=${age}&gender=${gender}&destination=${destination}&lactoseFree=${dietaryRestrictions.lactoseFree ? 'on' : 'off'}`;
    
    // Update URL in the address bar
    window.history.pushState(null, '', queryString);
    
    this.setState({ submitted: true });
  }

  render() {
    const {
      firstName,
      lastName,
      age,
      gender,
      destination,
      dietaryRestrictions,
      submitted,
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>React Form Container</h1>
        </header>
        <main>
          <FormComponent
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            data={this.state}
          />
          <div className="entered-info">
            {submitted && (
              <>
                <h3>Entered information:</h3>
                <p>Your name: {firstName} {lastName}</p>
                <p>Your age: {age}</p>
                <p>Your gender: {gender}</p>
                <p>Your destination: {destination}</p>
                <p>Your dietary restrictions:</p>
                <ul>
                  <li>Nuts free: {dietaryRestrictions.nutsFree ? 'Yes' : 'No'}</li>
                  <li>Lactose free: {dietaryRestrictions.lactoseFree ? 'Yes' : 'No'}</li>
                  <li>Vegan: {dietaryRestrictions.vegan ? 'Yes' : 'No'}</li>
                </ul>
              </>
            )}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
