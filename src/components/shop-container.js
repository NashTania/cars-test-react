import React from 'react';
import '../css/styles.css';
import ShopFilter from './shop-filter.js';
import CarsList from './shop-car-list.js';
import PropTypes from 'prop-types';

export default class ShopContainer extends React.Component {
  constructor( props ){
    super( props );
    this.state = {
      cars: [],
      manufacturer: [],
      filtredArr: [],
      models: []
    };
  }
  componentDidMount() {
    if ( this.props.cars === null || this.props.manufacturer === null ){
      this.props.setCars().then( () => {
        this.setState({
          cars: this.props.cars,
          manufacturer: this.props.manufacturer,
          filtredArr: this.props.cars
        });
      });
    } else {
      this.setState({
        cars: this.props.cars,
        manufacturer: this.props.manufacturer,
        filtredArr: this.props.cars
      });
    }
  }

  carsFilter = ( event ) => {
    if( event.target.value !== 'select' ){
      const arr = this.state.cars.slice( 0 );
      const cars = arr.filter( ( car ) => {
        return car.manufacturer === event.target.value;
      });
      this.setState({
        filtredArr: cars,
        models: cars
      });
    } else {
      this.setState({
        filtredArr: this.props.cars
      });
    }
  }

  priceSort = ( event ) => {
    const model = this.state.filtredArr.slice( 0 );
    if( event.target.checked === true ) {
      const arr = this.state.filtredArr.slice( 0 );
      let res = arr.sort( ( a,b ) => {
        return a.price - b.price;
      });
      this.setState({
        filtredArr: res
      });
    } else {
      this.setState({
        filtredArr: model
      });
    }
  }

  modelFilter = ( event ) => {
    const model = this.state.models.slice( 0 );
    if( event.target.value !== 'select' ){
      const arr = this.state.models.slice( 0 );
      const models = arr.filter( ( car ) => {
        return car.model === event.target.value;
      });
      this.setState({
        filtredArr: models
      });
    } else {
      this.setState({
        filtredArr: model
      });
    }
  }

  render() {
    return (
      <div>
        <div className='page-header'>
          <p className='page-header-p display-3'>
            Автомобили
          </p>
        </div>
        <div className="flex-row justify-content-between">
          <div className='d-inline-flex p-2 bd-highlight flex-column'>
            <ShopFilter manufacturer={this.state.manufacturer} carsFilter={this.carsFilter} modelFilter={this.modelFilter} priceSort={this.priceSort}/>
          </div>
          <div className='d-inline-flex p-2 bd-highlight flex-column card-column'>
            <CarsList cars={this.state.filtredArr} />
          </div>
        </div>
      </div>
    );
  }
}


ShopContainer.propTypes = {
  cars: PropTypes.array,
  setCars: PropTypes.func
};
