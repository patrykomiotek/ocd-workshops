import { useState } from 'react';
import { Text } from '../Text';

function RegistrationForm() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.dir(event.target[0].value);
    console.dir(event.target["email"].value); // document.getElementById("email");
    // console.log(event.target);
  }
  const handleChange = (event) => {
    //console.log('Value is: ', event.target.value);
    // {...state } -> { email: value, password: value }
    setState({
      ...state,
      email: event.target.value,
    });
  }

  // <a href="http://eveil.com" onClick={(event) => event.preventDefault()}>Click me</a>

  return (
    <form onSubmit={handleSubmit}>
      <Text>My awesome form</Text>
      <Text>Your email is: {state.email}</Text>
      <div>
        <label htmlFor="email">E-mail: </label>
        <input id="email" name="email" type="text" onChange={handleChange} />
        {/* <input id="email" name="email" type="email" /> */}
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input id="password" name="password" type="password" />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
}

export { RegistrationForm };
