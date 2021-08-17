import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Register from './Register'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
      <h1> Lekhapora</h1>
      <Route path="/login">
       <Login/>
      </Route>
        <Route path="/add">
          <AddProduct />
        </Route>
        <Route path="/update">
          <UpdateProduct />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
