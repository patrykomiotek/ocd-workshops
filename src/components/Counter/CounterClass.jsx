import { Component } from 'react';

class CounterClass extends Component {
  intervalId;
  state = {
    counter: 0,
    timer: 100,
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     counter: 0
  //   }
  // }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(
        prevState => {
          return { counter: prevState.counter + 1 };
        }
      ); // this.setState({ counter: this.state.counter + 1 })

      // this.state.counter = 123;
      // 1.
      // const stateCopy = Object.assign({}, this.state);
      // const stateCopy = { ...this.state };
      // 2.
      // stateCopy.counter = 50;


    }, 1_000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { counter } = this.state;
    return (
      <div>Timer: {counter}</div>
    );
  }
}

export { CounterClass };
