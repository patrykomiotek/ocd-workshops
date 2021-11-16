import { forwardRef } from 'react';

const MagicButton = forwardRef((props, ref) => {
  const { children, color, bgColor, onClick } = props;

  const buttonStyle = {
    color, // color: color,
    backgroundColor: bgColor,
  }

  return (
    <button ref={ref} style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
})

MagicButton.defaultProps = {
  color: "red",
}

export { MagicButton };
