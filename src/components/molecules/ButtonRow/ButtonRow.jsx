import { useEffect, useRef } from 'react';

import { MagicButton } from 'components/atoms/MagicButton';
import { Text } from 'components/atoms/Text';

function ButtonRow() {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "red";
    }
  }, []);

  const handleOnMouseEnter = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "green";
    }
  }

  const handleOnMouseLeave = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "blue";
    }
  }

  return (
    <div>
      <Text>Button row</Text>
      <MagicButton
        ref={buttonRef}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >Click me!</MagicButton>
    </div>
  );
}

export { ButtonRow };
