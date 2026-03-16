import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { SidebarContext } from '../../App';

const ToggleBtn = styled(motion.button)`
  position: fixed;
  left: ${({ $open }) => $open ? '68px' : '12px'};
  top: 50%;
  transform: translateY(-50%);
  z-index: 95;
  width: 22px;
  height: 48px;
  border-radius: 0 8px 8px 0;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: left 0.25s ease;
  box-shadow: 2px 0 12px rgba(139,0,0,0.4);
`;

const SidebarWrap = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 70px;
  bottom: 0;
  width: 64px;
  z-index: 90;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(13,13,13,0.97);
  backdrop-filter: blur(16px);
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  padding: 20px 0;
`;

const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 11px 6px;
  gap: 3px;
  color: ${({ $active, theme }) => $active ? 'white' : theme.colors.textDim};
  transition: all 0.2s;
  position: relative;
  &:hover { color: white; }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: ${({ $active }) => $active ? '20px' : '0'};
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 0 2px 2px 0;
    transition: height 0.2s;
  }
`;

const Icon = styled.span`
  font-size: 1.25rem;
  line-height: 1;
`;

const Label = styled.span`
  font-size: 0.5rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  white-space: nowrap;
`;

const AddBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-top: 8px;
  transition: all 0.2s;
  &:hover { border-color: ${({ theme }) => theme.colors.accent}; color: white; }
`;

const navLinks = [
  { to: '/shop/tops', icon: '👕', label: 'Tops' },
  { to: '/shop/bottoms', icon: '👖', label: 'Bottoms' },
  { to: '/shop/outerwear', icon: '🧥', label: 'Outer' },
  { to: '/shop/headwear', icon: '🧢', label: 'Heads' },
  { to: '/shop/footwear', icon: '👟', label: 'Shoes' },
  { to: '/shop/accessories', icon: '🎒', label: 'Access' },
  { to: '/shop/collectibles', icon: '📦', label: 'Collect' },
];

export default function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  const location = useLocation();

  return (
    <>
      <ToggleBtn
        $open={sidebarOpen}
        onClick={() => setSidebarOpen(o => !o)}
        whileTap={{ scale: 0.92 }}
      >
        <motion.span
          animate={{ rotate: sidebarOpen ? 0 : 180 }}
          transition={{ duration: 0.2 }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
            <path d="M7 2L2 8L7 14" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.span>
      </ToggleBtn>

      <AnimatePresence>
        {sidebarOpen && (
          <SidebarWrap
            initial={{ x: -64, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -64, opacity: 0 }}
            transition={{ type: 'tween', duration: 0.25 }}
          >
            {navLinks.map(link => (
              <NavItem
                key={link.to}
                to={link.to}
                $active={location.pathname === link.to}
              >
                <Icon>{link.icon}</Icon>
                <Label>{link.label}</Label>
              </NavItem>
            ))}
            <AddBtn>+</AddBtn>
          </SidebarWrap>
        )}
      </AnimatePresence>
    </>
  );
}
