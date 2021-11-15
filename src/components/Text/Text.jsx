// <Text>Lorem ipsum</Text>
// <Text fontSize="10px">Lorem ipsum</Text>

function Text(props) {
  // console.log('Text props: ', props);
  return (
    <p>{props.children}</p>
  );
}

export { Text };
// export default Text;