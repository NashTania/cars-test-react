import '../css/styles.css';
import { connect } from 'react-redux';
import EditFormContainer from '../components/edit-form-container.js';
import { setCars, updateCar } from '../actions/actions.js';

const mapStateToProps = ( store ) => {
  return {
    cars: store.cars,
    manufacturer: store.carsManufacturer
  };
};

const boundAddCars = ( dispatch ) => {
  return {
    setCars: () => {
      return dispatch( setCars() );
    },
    updateCar: ( obj, index ) => {
      return dispatch( updateCar( obj, index ) );
    }
  };
};

export default connect(
  mapStateToProps,
  boundAddCars
)( EditFormContainer );
