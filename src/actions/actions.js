import { SET_CARS, SET_MANUFACTURER, ADD_FORM_DATA, UPDATE_CAR } from '../constants/constants.js';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDeZXW4ecywvgc_62_4jDnY9rBf2BVtwlg',
  authDomain: 'test-cars-shop.firebaseapp.com',
  databaseURL: 'https://test-cars-shop.firebaseio.com',
  projectId: 'test-cars-shop',
  storageBucket: 'test-cars-shop.appspot.com',
  messagingSenderId: '421313678653'
};
firebase.initializeApp( config );


export function setCars(){
  return ( dispatch ) => {
    return  firebase.database().ref( '/projectData/' ).once( 'value' ).then( ( snapshot ) => {
      dispatch({
        type: SET_CARS,
        arr: snapshot.val()
      });
    }
    );
  };
}

export function setManufacturer(){
  return ( dispatch ) => {
    return  firebase.database().ref( '/projectData/carsManufacturer' ).once( 'value' ).then( ( snapshot ) => {
      dispatch({
        type: SET_MANUFACTURER,
        arr: snapshot.val()
      });
    });
  };
}

export function addFormData( arr ) {
  return ( dispatch ) => {
    return firebase.database().ref( '/projectData/cars' ).set( arr ).then(() => {
      dispatch({
        type: ADD_FORM_DATA,
        arr: arr
      });
    })
  };

}

export function updateCar( obj, index ) {
  return ( dispatch ) => {
    return firebase.database().ref( '/projectData/cars/'+ index ).set( obj ).then(() => {
      dispatch({
        type: UPDATE_CAR,
        obj: obj,
        index: index
      });
    })
  }
}
