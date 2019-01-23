import React from 'react';
import '../css/styles.css';
import PropTypes from 'prop-types';

export default class ShopFilter extends React.Component {
  constructor( props ){
    super( props );
    this.state = {
      listModel: null
    };
  }

  renderModel = ( event ) => {
    if( event.target.value !== 'select' ){
      const targetModel = event.target.value;
      let listModel = this.props.manufacturer[targetModel].map( manufacturer =>
        <option key={manufacturer} value={manufacturer}>{manufacturer}</option>
      );
      this.setState({
        listModel: listModel
      });
    } else {
      this.setState({
        listModel: null
      });
    }

  }

  changeFunction = ( event ) => {
    this.renderModel( event );
    this.props.carsFilter( event );
  }

  render(){
    const manufacturerList = Object.keys( this.props.manufacturer );
    let list = manufacturerList.map( manufacturer =>
      <option key={manufacturer} value={manufacturer}>{manufacturer}</option>
    );
    return (
      <div className='d-inline-flex p-2 bd-highlight flex-column'>
        <select className='select' name="manufacturer" onChange={this.changeFunction}>
          <option value='select'>Выберите марку</option>
          {list}
        </select>

        <select className='select' name="model" onChange={this.props.modelFilter}>
          <option value='select'>Выберите модель</option>
          {this.state.listModel}
        </select>

        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.props.priceSort}></input>
          <label className="form-check-label" htmlFor="exampleCheck1">Сортировать по цене</label>
        </div>
      </div>
    );
  }
}

ShopFilter.propTypes = {
  cars: PropTypes.array,
  carsFilter: PropTypes.func,
  modelFilter: PropTypes.func,
  priceSort: PropTypes.func
};
