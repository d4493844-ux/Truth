import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import Sidebar from './Sidebar';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: rgba(10,10,10,0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.6rem;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.colors.text};
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const IconBtn = styled.button`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  position: relative;
  display: flex;
  align-items: center;
  transition: color 0.2s;
  &:hover { color: ${({ theme }) => theme.colors.accent}; }
`;

const Badge = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 0.6rem;
  font-weight: 700;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <Nav>
        <IconBtn onClick={() => setSidebarOpen(true)}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="12" x2="15" y2="12"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </IconBtn>
        <Logo to="/">TRUTH</Logo>
        <Icons>
          <IconBtn onClick={() => navigate('/shop')}><FiSearch /></IconBtn>
          <IconBtn onClick={() => navigate('/cart')}>
            <FiShoppingCart />
            {totalItems > 0 && <Badge>{totalItems}</Badge>}
          </IconBtn>
          <IconBtn><FiUser /></IconBtn>
        </Icons>
      </Nav>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
