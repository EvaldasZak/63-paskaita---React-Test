import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';

import UsersContext from './context/UsersContext';

import Home from './components/Pages/Home';
import Register from './components/Pages/Register';
import Login from './components/Pages/Login';


const App = () => {
  const { currentUser } = useContext(UsersContext);


  return (
    <>
    <Routes>
      {
        !currentUser ? (
          <>
          <Route index element={<Login />} />
          <Route path='/register'>
            <Route index element={<Register />} />
          </Route>
          </>
        ) : (
          <Route index element={<Home />} />
          )
      }

      <Route path='*' element={<h1>Error 404</h1>} />
    </Routes>
    </>
    );
  }
  
  export default App;