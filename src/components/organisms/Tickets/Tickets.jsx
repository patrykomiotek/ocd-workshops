// legacy?
import { connect } from 'react-redux';
// hooks
// import { useSelector, useDispatch } from 'react-redux'

import { add, reset, fetchTickets } from './state';

const mockTicket = { id: 6, title: 'Halo halo', description: 'Lorem ipsum'};

function Tickets(props) {
  // TODO: use hooks
  return (
    <div className="tickets">
      <div>
        <button onClick={props.fetchTickets}>Fetch</button>
        <button onClick={() => props.add(mockTicket)}>Add</button>
        <button onClick={props.reset}>Reset</button>
      </div>
      <div>
        {props.tickets.map(elem => (
          <div key={elem.id}>
            <h2>{elem.title}</h2>
            <p>{elem.description}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  tickets: state.tickets.data,
  isTicketsLoading: state.tickets.isLoading,
});

const mapDispatchToProps = {
  add, // props.add()
  reset,
  fetchTickets
};

// const mapDispatchToProps = (dispatch) => ({
//   add: (ticket) => dispatch(add(ticket)),
//   load: () => dispatch(load()),
//   reset: () => dispatch(reset())
// });

// curring, Higher Order Component
// function connect(a, b) {
//   return function (Component) {
//     return <Component a={a} b={b} />
//   }
// }

const TicketsConnected = connect(mapStateToProps, mapDispatchToProps)(Tickets);

export { Tickets, TicketsConnected };
