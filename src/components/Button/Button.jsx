// import React from 'react';

// { label: 'Click me', color: 'red', bgColor: 'blue' }
function Button(props) {
  // props.color
  // props.bgColor

  // standard
  // const label = props.label;
  // const color = props.color;
  // const bgColor = props.bgColor;

  // ES way with destructing
  const { label, color, bgColor } = props;

  const buttonStyle = {
    color, // color: color,
    backgroundColor: bgColor,
  }

  return (
    <button style={buttonStyle}>
      {label}
    </button>
  );
}

Button.defaultProps = {
  color: "green",
}

export { Button };
