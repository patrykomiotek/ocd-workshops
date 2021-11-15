// import React from 'react';

// { label: 'Click me', color: 'red', bgColor: 'blue' }
function Button(props) {
  // props.color
  // props.bgColor
  const buttonStyle = {
    color: props.color,
    backgroundColor: props.bgColor,
  }

  return (
    <button style={buttonStyle}>
      {props.label}
    </button>
  );
}

export { Button };
