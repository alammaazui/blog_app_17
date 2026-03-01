import { Link, Route, Routes } from 'react-router';
import Register from './components/Register'
import Login from './components/Login';
import Nav from './components/Nav';
import Unauthorized from './components/Unauthorized';
import Authorization from './components/Authorization';
import Admin from './components/Admin';
import Author from './components/Author';

const App = () => {
  return (
    <>
    <Nav></Nav>
    <hr />
    <Link to={'/signin'}>Login</Link>
    <hr />
    <Link to={'/register'}>Register</Link>
    <hr />
    <Routes> 
      <Route path='signin' element = {<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path="unauthorized" element={<Unauthorized/>} />
      <Route element={<Authorization allowedRole={'admin'}/>}>
          <Route path='admin'  element={<Admin/>} />
      </Route>
      <Route element={<Authorization allowedRole={'author'}/>}>
          <Route path='author'  element={<Author/>} />
      </Route>

    </Routes>
    </>
  );
}

export default App;
