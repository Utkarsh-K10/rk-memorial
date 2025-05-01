// export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import Notices from './pages/Notices';
import AdminLogin from './pages/AdminLogin';
import AboutPage from './pages/AboutUs';
// src/App.jsx
// Removed duplicate import
import Header from "./components/Header";
import Admission from './pages/Admission';
import ContactUs from './pages/ContactUs';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import RegisterStudent from './pages/RegisterStudent';


function App() {
  return (
    <Router>
      <div className="font-body bg-secondary min-h-screen">
        {/* Global Header and Navigation */}
        <Header />
        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/about" element={< AboutPage/>} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="*" element={<NotFound/>} />
          <Route path='/register' element={<RegisterStudent/>} /> {/* This route is for the student registration page */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;



// import schoolLogo from '../public/logo.png'
// import './App.css'

// function App() {

//   return (
//     <>
//       <div>
//         <a href="https://rkmssatna.in" target="_blank">
//           <img src={schoolLogo} className="logo react" alt="School Logo" />
//         </a>
//       </div>
//       <div className="card">
//         <h1>Welcome to RKMSSatna</h1>
//       </div>
//     </>
//   )
// }
