import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Product from './pages/Products/Product';
import Contact from './pages/Contact';
import Header from './components/Header';
import Signup from './pages/Auths/Signup';
import Login from './pages/Auths/Login';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" component={App}>
            <Route index element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" />
    </>
  )
}

export default App
