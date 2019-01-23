import '../css/styles.css';
import { connect } from 'react-redux';
import AddContainer from '../components/add-container.js';
import { store } from '../reducers/reducer.js';
import { setManufacturer, addFormData, setCars } from '../actions/actions.js';

const mapStateToProps = ( store ) => {
  return {
    manufacturer: store.carsManufacturer
  };
};

const boundAddCars = ( dispatch ) => {
  return {
    setManufacturer: () => {
      return dispatch( setManufacturer() );
    },
    setCars: () => {
      return dispatch( setCars() );
    },
    addFormData: ( obj ) => {
      let data = store.getState();
      const arr = data.cars;
      arr.push( obj );
      return dispatch( addFormData( arr ) );
    }
  };
};

export default connect(
  mapStateToProps,
  boundAddCars
)( AddContainer );
