import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './components/app.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopContainer from './containers/cars-shop-container.js';
import AddContainer from './containers/cars-add-container.js';
import EditContainer from './containers/cars-edit-container.js';
import EditForm from './containers/cars-edit-form-container.js';
import { Provider } from 'react-redux';
import { store } from './reducers/reducer.js';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <div>
        <Route exact path="/" component={ShopContainer} />
        <Route path="/add" component={AddContainer} />
        <Route exact path="/edit" component={EditContainer} />
        <Route path="/edit/:id" component={EditForm} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById( 'root' )
);
