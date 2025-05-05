// export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Notices from './pages/Notices.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AboutPage from './pages/AboutUs.jsx';
// src/App.jsx
// Removed duplicate import
import Header from "./components/Header.jsx";
import Admission from './pages/Admission.jsx';
import ContactUs from './pages/ContactUs.jsx';
import BlogPage from './pages/BlogPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Footer from './components/Footer.jsx';
import NotFound from './components/NotFound.jsx';
import RegisterStudent from './pages/RegisterStudent.jsx';
import CreateNotice from './pages/CreateNotice.jsx';
import EditStudent from './pages/UpdateStudent.jsx';
import Blogs from './pages/Blogs.jsx';


function App() {
  return (
    <Router>
      <div className="font-body bg-secondary min-h-screen">
        {/* Global Header and Navigation */}
        <Header />
        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/about" element={< AboutPage/>} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/blog" element={<Blogs/>} />
          <Route path= "/blog/:id" element={<BlogPage/>} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path='/register' element={<RegisterStudent/>} /> {/* This route is for the student registration page */}
          <Route path="/manage-notice" element={<CreateNotice />} /> {/* This route is for the student registration page */}
          <Route path='/edit-student/:id' element={<EditStudent/>} /> {/* This route is for the student registration page */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
