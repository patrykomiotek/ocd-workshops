import { useEffect, useRef } from 'react';

function MagicButton(props) {
  const buttonRef = useRef(null);
  const { children, color, bgColor, onClick } = props;

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = 'blue';
    }
  }, []);

  const buttonStyle = {
    color, // color: color,
    backgroundColor: bgColor,
  }

  return (
    <button ref={buttonRef} style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

MagicButton.defaultProps = {
  color: "red",
}

export { MagicButton };
