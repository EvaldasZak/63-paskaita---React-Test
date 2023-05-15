import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Pages/Home';
import Register from './components/Pages/Register';
import Login from './components/Pages/Login';


const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Register />} />
        <Route path='/login'>
          <Route index element={<Login />} />
        </Route>
        {/* <Route index element={<Home />} /> */}
        <Route path='*' element={<h1>Error 404</h1>} />
      </Routes>
    </>
  );
}

export default App;