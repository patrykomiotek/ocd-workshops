import './App.css';
// import Text from './Text'; (only for default exports)
// import { Text } from './Text';
import { Text } from './components/Text';

// JSX -> JS -> keyword class
// class App extends React.Component
function App() {
  const path = "src/**/App.js";
  return (
    <div className="App">
      <header className="App-header">
        <Text>
          Edit <code>{path}</code> and save to reload.
        </Text>
        <Text fontSize="10" color="blue">
          Para 2 (with props)
        </Text>
        <Text>
          Para 3
        </Text>
      </header>
    </div>
  );
}

export default App;
