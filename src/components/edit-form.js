import React  from 'react';
import '../css/styles.css';
import PropTypes from 'prop-types';

export default class EditForm extends React.Component {
  constructor( props ){
    super( props );
    this.id = props.match.params.id;
    this.state = {
      listModel: null,
      car: null,
      index: null
    };
  }

  componentDidMount() {
    const car = this.props.cars.find( ( car ) => {
      return car.id == this.props.match.params.id;
    });
    this.setState({
      car: car,
      index: this.props.cars.indexOf( car )
    });
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

  submitForm = ( event ) => {
    event.preventDefault();
    const data = {};
    data.name = event.target.name.value;
    data.manufacturer = event.target.manufacturer.value;
    data.model = event.target.model.value;
    data.year = event.target.year.value;
    data.mileage = event.target.mileage.value;
    data.color = event.target.color.value;
    data.price = event.target.price.value;
    data.body = event.target.body.value;
    data.capacity = event.target.capacity.value;
    data.engine = event.target.engine.value;
    const value = event.target.img.value.split( '\\' );
    data.img = value[value.length - 1];
    data.id = Math.floor( ( Math.random()*100 ) + 10 );
    this.props.updateCar( data, this.state.index ).then(() => {
      this.props.history.push('/edit')
    })
  }

  render() {
    const car = this.state.car;
    const manufacturerList = Object.keys( this.props.manufacturer );
    let list = manufacturerList.map( manufacturer =>
      <option key={manufacturer} value={manufacturer}>{manufacturer}</option>
    );
    if( this.state.car !== null ){
      return(
        <form onSubmit={this.submitForm.bind( this )} className='edit'>
          <div className="form-group">

            <label htmlFor="name">Название</label>
            <input type="text" className="form-control form-select" id="name" name="name" placeholder="Название" defaultValue={car.name}></input>

            <select className="form-control form-control form-select" id="manufacturer" name="manufacturer" defaultValue={car.manufacturer} onChange={this.renderModel}>
              <option value='select'></option>
              {list}
            </select>

            <select className="form-control form-control form-select" name="model" id="model" defaultValue={car.model}>
              <option value='select'></option>
              {this.state.listModel}
            </select>

            <label htmlFor="year">Год выпуска</label>
            <input type="text" className="form-control form-select" id="year" name="year" placeholder="Год выпуска" defaultValue={car.year}></input>

            <label htmlFor="mileage">Пробег</label>
            <input type="text" className="form-control form-select" id="mileage" name="mileage" placeholder="Пробег" defaultValue={car.mileage}></input>

            <label htmlFor="color">Цвет</label>
            <input type="text" className="form-control form-select" id="color" name="color" placeholder="Цвет" defaultValue={car.color}></input>

            <label htmlFor="price">Цена</label>
            <input type="text" className="form-control form-select" id="price" name="price" placeholder="Цена" defaultValue={car.price}></input>

            <select className="form-control form-control form-select" id="body" name="body" defaultValue={car.body}>
              <option value='select'>Выберите тип кузова</option>
              <option value='Седан'>Седан</option>
              <option value='Хэтчбек'>Хэтчбек</option>
              <option value='Универсал'>Универсал</option>
              <option value='Купе'>Купе</option>
              <option value='Кабриолет'>Кабриолет</option>
            </select>

            <label htmlFor="capacity">Расход топлива</label>
            <input type="text" className="form-control form-select" id="capacity" name="capacity" placeholder="Расход топлива" defaultValue={car.capacity}></input>

            <select className="form-control form-control form-select " id="engine" name="engine" defaultValue={car.engine}>
              <option value='select'>Выберите тип двигателя</option>
              <option value='Бензин'>Бензин</option>
              <option value='Дизель'>Дизель</option>
            </select>

            <label htmlFor="img">Выберите фото</label>
            <input type="file" className="form-control-file" id="img" name="img" ></input>
          </div>
          <button type='submit' className="btn btn-primary">Submit</button>
        </form>
      );
    } else {
      return (
        <p></p>
      );
    }
  }
}


EditForm.propTypes = {
  cars: PropTypes.array,
  manufacturer: PropTypes.object,
  updateCar: PropTypes.func,
  match: PropTypes.object
};
