import './App.css';
// import Text from './Text'; (only for default exports)
// import { Text } from './Text';
import { Text as TextGh, age } from './Text';

// JSX -> JS -> keyword class
// class App extends React.Component
function App() {
  const path = "src/**/App.js";
  return (
    <div className="App">
      <header className="App-header">
        <TextGh>
          Edit <code>{path}</code> and save to reload {age}.
        </TextGh>
        <TextGh fontSize="10" color="blue">
          Para 2 (with props)
        </TextGh>
        <TextGh>
          Para 3
        </TextGh>
      </header>
    </div>
  );
}

export default App;
