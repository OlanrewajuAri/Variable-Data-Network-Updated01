
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import ServicePage from './ServicePage/ServicePage';

function App() {
  return (
    <Router >


      {/* <Navbar /> */}
      <Navbar />

      <Routes>

        {/* <Route path='/' element={<HomePage/>} /> */}

        <Route path='/' element={ <ServicePage/>} />
       


      
      </Routes>
   
      <Footer/>

    </Router>

  );
}

export default App;
