import React from 'react';

function FormComponent(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={props.handleChange}
      />
      <br />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={props.handleChange}
      />
      <br />
      <input
        type="number"
        name="age"
        placeholder="Age"
        onChange={props.handleChange}
      />
      <br />
      <label>
        Male
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={props.handleChange}
        />
      </label>
      <label>
        Female
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={props.handleChange}
        />
      </label>
      <br />
      <select name="destination" onChange={props.handleChange}>
        <option value="Japan">Japan</option>
        <option value="Hongkong">Hongkong</option>
        <option value="Paris">Paris</option>
        <option value="Casablanca">Casablanca</option>
      </select>
      <br />
      <label>
        Nuts free
        <input
          type="checkbox"
          name="nutsFree"
          onChange={props.handleChange}
        />
      </label>
      <label>
        Lactose Free
        <input
          type="checkbox"
          name="lactoseFree"
          onChange={props.handleChange}
        />
      </label>
      <label>
        Vegan
        <input
          type="checkbox"
          name="vegan"
          onChange={props.handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
