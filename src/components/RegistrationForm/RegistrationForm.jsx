import { useState, useEffect } from 'react';
import { Text } from '../Text';

function RegistrationForm() {
  const [isValid, setIsValid] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  // const [emailError, setEmailError] = useState(false)
  // {}, { email: "Email is invalid "}, { email: "Email is invalid", password: ""}

  useEffect(() => {
    console.log("I am here isValid");
  }, [isValid]);

  useEffect(() => {
    if (!state.email.includes("@")) {
      setErrors({
        ...errors, // spread operator
        email: "Email is invalid",
      });
    } else {
      // const value1 = 1;
      // value1 = 2;

      // const { label, color, bgColor, onClick } = props;
      // const { label, color } = props
      // const { label, ...restProps } = props;
      // label = "Lorem ipsum"
      // restProps = { color: "#fff", bgColor: "#000", onClick: fn() }

      // {}, { email: "Email is invalid "}, { email: "Email is invalid", password: "Err"}
      // { email: "Email is invalid", password: "Err"}
      // const email = "Email is invalid"
      // const rest = { password: "Err" }
      const { email, ...rest } = errors; // rest operator
      setErrors(rest);

      // const errorsCopy = { ...errors };
      // delete errorsCopy.email;
      // setErrors(errorsCopy);

    }
  }, [state.email]);

  useEffect(() => {
    if (state.password.toLowerCase() === 'brzydkieslowo') {
      // FIXME: refactor me
      setErrors({
        ...errors, // spread operator
        password: "Email is invalid",
      });
    } else {
      const { password, ...rest } = errors; // rest operator
      setErrors(rest);
    }
  }, [state.password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = state;
    if (email && password) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
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
        {/* {errors.email ? errors.email : null} */}
        {errors.email && <Text color="red">{errors.email}</Text>}
        {/* <input id="email" name="email" type="email" /> */}
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input id="password" name="password" type="password" onChange={handleChange} />
        {errors.password && <Text color="red">{errors.password}</Text>}
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  );
}

export { RegistrationForm };
