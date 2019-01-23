import React  from 'react';
import '../css/styles.css';
import EditList from './edit-list.js';
import PropTypes from 'prop-types';

export default class EditContainer extends React.Component {
  constructor( props ){
    super( props );
    this.state = {
      cars: [],
      manufacturer: []
    };
  }
  componentDidMount() {
    if ( this.props.cars === null ){
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
    return (
      <div>
        <div className='page-header'>
          <p className='page-header-p display-3'>
            Редактировать
          </p>
        </div>
        <div className="flex-row justify-content-between">
          <div className='d-inline-flex p-2 bd-highlight flex-column card-column '>
            <EditList history={this.props.history} cars={this.state.cars} manufacturer={this.state.manufacturer} history={this.props.history}/>
          </div>
        </div>
      </div>
    );
  }
}

EditContainer.propTypes = {
  cars: PropTypes.array,
  manufacturer: PropTypes.array,
  setCars: PropTypes.func
};
