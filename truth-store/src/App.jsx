import { useState, createContext, useContext } from 'react';
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

export const SidebarContext = createContext();

const Main = styled.main`
  margin-left: ${({ $sidebarOpen }) => $sidebarOpen ? '64px' : '0px'};
  transition: margin-left 0.25s ease;
  min-height: 100vh;
`;

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      <Navbar />
      <Sidebar />
      <Main $sidebarOpen={sidebarOpen}>
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
    </SidebarContext.Provider>
  );
}

export default App;
