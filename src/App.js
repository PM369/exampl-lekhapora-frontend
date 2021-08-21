import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import {BrowserRouter,Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import Protected from './Protected'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Route path="/login">
       <Login/>
      </Route>
        <Route path="/add">
          {/* <AddProduct /> */}
          <Protected Cmp={AddProduct}/>
        </Route>
        <Route path="/update">
          {/* <UpdateProduct /> */}
          <Protected Cmp={UpdateProduct} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
