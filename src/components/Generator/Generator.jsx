import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Text } from '../Text';
import { Button } from '../Button';

function Generator() {
  // let uuid = uuidv4();
  const componentState = useState(uuidv4()); // -> [0, 1]
  const componentStateValue = componentState[0];
  const setComponentStateValue = componentState[1];

  const handleClick = (event) => {
    // console.log('Event: ', event);
    // uuid = uuidv4();
    setComponentStateValue(uuidv4());
  }

  return (
    <>
      <Text>Your UUID is: {componentStateValue}</Text>
      <Button label="Refresh" onClick={handleClick} />
    </>
  );
}

// const Generator = (props) => (
//   <div>
//     <p>Your UUID is: </p>
//   </div>
// );

export { Generator };
