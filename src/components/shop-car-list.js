import React from 'react';
import '../css/styles.css';
import ShopCarCard from './shop-car-card.js';
import PropTypes from 'prop-types';

function CarsList( props ) {
  const list = props.cars.map( car =>
    <ShopCarCard key={car.id} car={car}/>
  );
  return (
    <div>
      {list}
    </div>
  );
}
export default CarsList;

CarsList.propTypes = {
  cars: PropTypes.array
};
