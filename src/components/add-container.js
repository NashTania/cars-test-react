import React  from 'react';
import '../css/styles.css';
import AddForm from './add-form.js';
import PropTypes from 'prop-types';

export default class AddContainer extends React.Component {
  constructor( props ){
    super( props );
    this.state = {
      manufacturer: []
    };
  }
  componentDidMount() {
    if ( this.props.manufacturer === null ) {
      this.props.setManufacturer().then( () => {
        this.setState({
          manufacturer: this.props.manufacturer
        });
      });
    } else {
      this.setState({
        manufacturer: this.props.manufacturer
      });
    }
  }
  render() {
    return (
      <div>
        <div className='page-header'>
          <p className='page-header-p display-3'>
          Добавить
          </p>
        </div>
        <AddForm history={this.props.history} manufacturer={this.state.manufacturer} addData={this.props.addFormData} setCars={this.props.setCars}/>
      </div>
    );
  }
}


AddContainer.propTypes = {
  setManufacturer: PropTypes.func,
  addFormData: PropTypes.func,
  setCars: PropTypes.func
};
