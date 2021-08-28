import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import Protected from './Protected'
import ProductList from './ProductList'
import SearchProduct from './SearchProduct'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route path="/login">
       <Login/>
      </Route>
        <Route path="/add">
          {/* <AddProduct /> */}
          <Protected Cmp={AddProduct} />
        </Route>
        <Route path="/update/:id">
          {/* <UpdateProduct /> */}
          <Protected Cmp={UpdateProduct} />
        </Route>
          <Route path="/search">
            {/* <UpdateProduct /> */}
            <Protected Cmp={SearchProduct} />
          </Route>
        <Route path="/register">
          <Register />
        </Route>
          <Route path="/">
            <Protected Cmp={ProductList} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
