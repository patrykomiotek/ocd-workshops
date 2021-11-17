import './App.css';
import { ErrorBoundary } from 'ErrorBoundary';
// import { Blog } from './components/organisms/Blog';
import { RegistrationForm } from './components/organisms/RegistrationForm';

// JSX -> JS -> keyword class
// class App extends React.Component
function App() {
  // const path = "src/**/App.js";
  return (
    <ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <RegistrationForm />
        </header>
      </div>
    </ErrorBoundary>
  );
}

export default App;
