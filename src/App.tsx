import React from 'react';
import { Header } from './components/Header/Header';
import AuthProvider from './Context/authContext';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import './Global.css';

function App() {
  return (
    <AuthProvider>    
    <ToastContainer autoClose={3000}/>  
    <div className="container">
      <Header />
    </div>
    </AuthProvider>
  );
}

export default App;
