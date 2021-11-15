import { v4 as uuidv4 } from 'uuid';
// import { Fragment } from 'react';

import { Text } from '../Text';
import { Button } from '../Button';

function Generator() {

  const handleClick = (event) => {
    console.log('Event: ', event);
  }

  return (
    <>
      <Text>Your UUID is: {uuidv4()}</Text>
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
