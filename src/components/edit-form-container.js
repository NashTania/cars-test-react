import React  from 'react';
import '../css/styles.css';
import EditForm from './edit-form.js';
import PropTypes from 'prop-types';

export default class EditFormContainer extends React.Component {
  constructor( props ){
    super( props );
    this.state = {
      cars: [],
      manufacturer: []
    };
  }
  componentDidMount() {
    if ( this.props.cars === null || this.props.manufacturer === null ) {
      this.props.setCars().then( () => {
        this.setState({
          cars: this.props.cars,
          manufacturer: this.props.manufacturer
        });
      });
    } else {
      this.setState({
        cars: this.props.cars,
        manufacturer: this.props.manufacturer
      });
    }
  }


  render() {
    if( this.state.cars.length !== 0 ){
      return (
        <div>
          <div className='page-header'>
            <p className='page-header-p display-3'>
            Редактировать
            </p>
          </div>
          <div className="flex-row justify-content-between">
            <div className='d-inline-flex p-2 bd-highlight flex-column card-column '>
              <EditForm cars={this.state.cars} manufacturer={this.state.manufacturer} match={this.props.match} updateCar={this.props.updateCar} history={this.props.history}/>
            </div>
          </div>
        </div>
      );
    }else{
      return(
        <p> </p>
      );
    }
  }
}

EditFormContainer.propTypes = {
  cars: PropTypes.array,
  manufacturer: PropTypes.object,
  setCars: PropTypes.func,
  updateCar: PropTypes.func,
  match: PropTypes.object
};
