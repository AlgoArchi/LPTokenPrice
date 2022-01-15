import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavBar from './Layouts/NavBar';
import Claim from './Components/Claim';
import Footer from './Layouts/Footer';
import { ToastContainer } from 'react-toastify';
require('dotenv').config()

function App() {
  return (
      <div className="body">
        <NavBar />
        <Claim />        
        <Footer />
        <ToastContainer 
          theme="colored"
        />
      </div>
  );
}

export default App;
