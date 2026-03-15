import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';

const Main = styled.main`
  margin-left: 64px;
  min-height: 100vh;
  transition: margin-left 0.2s;
`;

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:category" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </Main>
    </>
  );
}

export default App;
