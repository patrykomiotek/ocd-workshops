const ADD = 'tickets/add';
const LOAD = 'tickets/load';
const RESET = 'tickets/reset';

// { type: ADD, payload: { id, tile, description }}
// { type: LOAD }
// { type: RESET, payload: [] }
// export const add = (ticket) => ({ type: ADD, payload: ticket });

// function add - action creator
// STATIC CREATORS
export function add(ticket) { // dispatch(add({ })) -> dispatch({ type: "tickets/add", payload: {}})
  return { type: ADD, payload: ticket }; // action
}
export const load = (data = []) => ({ type: LOAD, payload: data });
export const reset = () => ({ type: RESET });

// ASYNC CREATORS
export const fetchTickets = () => { // fetchTickets()
  return (dispatch) => {
    dispatch({ type: "tickets/loading "});

    // TODO: change api to use tickets
    // it uses mocked ticket data instead of real api
    fetch('/tickets')
      .then((response) => response.json())
      .then((data) => {
        dispatch(load(data));
      })
      .catch(error => dispatch({ type: "tickes/has_error" }));
  };
};

// TODO: not use every time :)
const INITIAL_STATE = {
  data: [],
  isLoading: false,
  hasError: false
};

// TODO: remove me
// const mockData = [
//   {id: 1, title: 'Nie działa drukarka', description: 'Lorem ipsum....'},
//   {id: 2, title: 'Nie działa drukarka', description: 'Lorem ipsum....'},
//   {id: 3, title: 'Nie działa drukarka', description: 'Lorem ipsum....'},
// ];

// FSA - Flux Standard Action
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
       // {type: "tickets/add", payload: {}, meta: { hasError: false }}
       // { type: "tickets/add", payload: {id: 4, title: 'Nie działa drukarka', description: 'Lorem ipsum....'} }
      return { ...state, data: [...state.data, action.payload] }; // [] [{id,name,title}]
    case 'tickets/loading':
      return { ...state, isLoading: true };
    case 'tickets/has_error':
      return { ...state, hasError: true };
    case LOAD:
      return { ...state, data: action.payload, isLoading: false };
    case RESET:
      return { ...state, data: [] };
    default:
      return state;
  }
};

export default reducer;
