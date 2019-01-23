import '../css/styles.css';
import { connect } from 'react-redux';
import EditContainer from '../components/edit-container.js';
import { setCars } from '../actions/actions.js';

const mapStateToProps = ( store ) => {
  return {
    cars: store.cars
  };
};
const boundAddCars = ( dispatch ) => {
  return {
    setCars: () => {
      return dispatch( setCars() );
    }
  };
};

export default connect(
  mapStateToProps,
  boundAddCars
)( EditContainer );
