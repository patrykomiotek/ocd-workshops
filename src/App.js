import './App.css';
import { Profiler } from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { ErrorBoundary } from 'ErrorBoundary';
import { Blog } from './components/organisms/Blog';
import { RegistrationForm } from './components/organisms/RegistrationForm';
import { TicketsConnected } from './components/organisms/Tickets';
import ticketsReducer from './components/organisms/Tickets/state';

// JSX -> JS -> keyword class
// class App extends React.Component

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// TODO: use Redux Toolkit
const store = createStore(
  combineReducers({
    tickets: ticketsReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

// const store = createStore(combineReducers({
//   tickets: ticketsReducer,
//   // ui: uiReducer,
//   // users: usersReducer,
// }));

// phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
// actualDuration, // time spent rendering the committed update
// baseDuration, // estimated time to render the entire subtree without memoization
// startTime, // when React began rendering this update
// commitTime,

function App() {
  // const path = "src/**/App.js";
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <TicketsConnected />
            {/* <Profiler id="RegistrationForm" onRender={
              (phase, actualDuration, baseDuration, startTime, commitTime) => {
                console.log(phase, actualDuration, baseDuration, startTime, commitTime);
              }
            }>
              <RegistrationForm />
            </Profiler> */}
          </header>
        </div>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
