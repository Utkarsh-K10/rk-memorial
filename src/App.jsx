// export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import Notices from './pages/Notices';
import AdminLogin from './pages/AdminLogin';

// src/App.jsx
// Removed duplicate import
import Header from "./components/Header";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <div className="font-body bg-secondary min-h-screen">
        {/* Global Header and Navigation */}
        <Header />
        <Navbar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
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
