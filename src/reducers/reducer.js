import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { SET_CARS, SET_MANUFACTURER, ADD_FORM_DATA, UPDATE_CAR } from '../constants/constants.js';

const initalState = {
  cars: null,
  carsManufacturer: null
};

export function carsApp( state = initalState, action ) {
  switch ( action.type ) {
  case SET_CARS:
    return {
      cars: action.arr.cars,
      carsManufacturer: action.arr.carsManufacturer
    };
  case SET_MANUFACTURER:
    return {
      cars: state.cars,
      carsManufacturer: action.arr
    };

  case ADD_FORM_DATA:
    return {
      cars: action.arr,
      carsManufacturer: action.arr
    };

  case UPDATE_CAR:
    state.cars[action.index] = action.obj;
    return {
      cars: [...state.cars],
      carsManufacturer: state.carsManufacturer
    };

  default:
    return state;
  }
}

export const store = createStore( carsApp, applyMiddleware( thunk ) );
