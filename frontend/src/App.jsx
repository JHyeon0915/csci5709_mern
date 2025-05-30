import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Header from './components/Header';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" component={App}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
