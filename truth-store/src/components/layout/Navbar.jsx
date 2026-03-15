import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: rgba(10,10,10,0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
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

const LogoIcon = styled(Link)`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Navbar() {
  const { totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <Nav>
      <LogoIcon to="/">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M4 7L14 4L24 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M4 7L4 21L14 24L24 21L24 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 4L14 24" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </LogoIcon>
      <Icons>
        <IconBtn onClick={() => navigate('/shop')}><FiSearch /></IconBtn>
        <IconBtn onClick={() => navigate('/cart')}>
          <FiShoppingCart />
          {totalItems > 0 && <Badge>{totalItems}</Badge>}
        </IconBtn>
        <IconBtn><FiUser /></IconBtn>
      </Icons>
    </Nav>
  );
}
