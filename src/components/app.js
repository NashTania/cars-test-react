import React  from 'react';
import '../css/styles.css';
import { Link } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Link to='/' className=' logo '>
          CARS
        </Link>
        <div className='black-menu'>
          <ul className="nav">
            <li className="nav-item">
              <Link to='/add' className="nav-link" >Добавить</Link>
            </li>
            <li className="nav-item">
              <Link to='/edit' className="nav-link">Редактировать</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
