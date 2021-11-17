import './App.css';
import { ErrorBoundary } from 'ErrorBoundary';
import { Blog } from './components/organisms/Blog';


// JSX -> JS -> keyword class
// class App extends React.Component
function App() {
  // const path = "src/**/App.js";
  return (
    <ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <Blog />
        </header>
      </div>
    </ErrorBoundary>
  );
}

export default App;
