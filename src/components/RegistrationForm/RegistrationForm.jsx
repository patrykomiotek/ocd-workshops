import { useState } from 'react';
import { Text } from '../Text';

function RegistrationForm() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.dir(event.target[0].value);
    // console.dir(event.target["email"].value); // document.getElementById("email");
    // console.log(event.target);
  }
  const handleChange = (event) => {
    //console.log('Value is: ', event.target.value);
    // {...state } -> { email: value, password: value }
    // event.target.name
    // setState({
    //   ...state,
    //   email: event.target.value,
    // });
    const name = event.target.name; // name="email", name="password"
    const value = event.target.value;
    console.log("name: ", name);
    setState({
      ...state,
      [name]: value // -> email, password, emailTest
    });
  }

  // <a href="http://eveil.com" onClick={(event) => event.preventDefault()}>Click me</a>
  const { email } = state;

  return (
    <form onSubmit={handleSubmit}>
      <Text>My awesome form</Text>
      <Text>Your email is: {email}</Text>
      <div>
        <label htmlFor="email">E-mail: </label>
        <input id="email" name="email" type="text" onChange={handleChange} />
        {/* <input id="email" name="email" type="email" /> */}
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input id="password" name="password" type="password" onChange={handleChange} />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
}

export { RegistrationForm };
