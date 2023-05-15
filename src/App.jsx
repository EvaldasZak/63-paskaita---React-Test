import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Pages/Home';


const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='*' element={<h1>Error 404</h1>} />
      </Routes>
    </>
  );
}

export default App;