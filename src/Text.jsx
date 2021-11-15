// <Text>Lorem ipsum</Text>
// <Text fontSize="10px">Lorem ipsum</Text>

const age = 21;

function Text(props) {
  console.log('Text props: ', props);
  return (
    <p>{props.children}</p>
  );
}

export { Text, age };
// export default Text;