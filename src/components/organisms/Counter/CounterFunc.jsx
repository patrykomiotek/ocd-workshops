import { useState, useEffect } from 'react';

function CounterFunc() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // effect instructions
    // componentDidMount, componentDidUpdate
    const intervalId = setInterval(() => {
      setCounter(value => value + 1);
    }, 1_000);

    return () => {
      // unmounting, componentWillUnmount
      clearInterval(intervalId);
    }
  }, []); // [] - array of dependecies

  return (
    <div>
      Timer: {counter}
    </div>
  );
}

export { CounterFunc };
