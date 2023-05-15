import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';

import UsersContext from './context/UsersContext';

import Register from './components/Pages/Register';
import Login from './components/Pages/Login';

import Home from './components/Pages/Home';
import Add from './components/Pages/Add';

import Header from './components/Organisms/Header';
import Footer from './components/Organisms/Footer';
import styled from 'styled-components';

// Styled component
const AppContainer = styled.div`
  height: 50vh;
  padding: 0px 30px;
`;

const App = () => {
  const { currentUser } = useContext(UsersContext);

  return (
    <>
      <Header user={currentUser}/>

        <AppContainer>
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
            <>
              <Route index element={<Home />} />
               <Route path='/add'>
                <Route index element={<Add />} />
               </Route>
            </>
            )
        }

        <Route path='*' element={<h1>Error 404</h1>} />
      </Routes>
      </AppContainer>

      <Footer/>
    </>
    );
  }
  
  export default App;