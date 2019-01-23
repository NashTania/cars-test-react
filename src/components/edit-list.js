import React from 'react';
import '../css/styles.css';
import EditCard from './edit-car-card.js';
import PropTypes from 'prop-types';

function EditList( props ) {
  const list = props.cars.map( car =>
    <EditCard key={car.id} car={car} manufacturer={props.manufacturer} history={props.history}/>
  );
  return (
    <div>
      {list}
    </div>
  );
}
export default EditList;

EditList.propTypes = {
  cars: PropTypes.array,
  manufacturer: PropTypes.array
};
