import React from 'react';
import '../css/styles.css';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import PropTypes from 'prop-types';

export default class ShopCarCard extends React.Component {
  constructor( props ){
    super( props );
    this.state = {
      url: null
    };
  }
  componentDidMount() {
    const storage = firebase.storage();
    const storageRef = storage.ref();
    storageRef.child( 'images/'+this.props.car.img ).getDownloadURL().then( ( url ) => {
      this.setState({
        url: url
      });
    });
  }

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <img src={this.state.url} className="img-card" alt={this.props.car.name}></img>
            <h5 className="h3">{this.props.car.name}</h5>
            <p className="card-text">{this.props.car.year} год, пробег {this.props.car.mileage}, {this.props.car.color}, {this.props.car.body},  {this.props.car.engine} </p>
            <p className="h5">{this.props.car.price} руб.</p>
          </div>
        </div>
      </div>
    );
  }
}

ShopCarCard.propTypes = {
  car: PropTypes.object
};
