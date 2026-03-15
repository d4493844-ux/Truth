import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  z-index: 200;
  backdrop-filter: blur(4px);
`;

const Drawer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  background: ${({ theme }) => theme.colors.surface};
  z-index: 201;
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
`;

const CloseBtn = styled.button`
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.4rem;
  margin-bottom: 32px;
  transition: color 0.2s;
  &:hover { color: white; }
`;

const BrandName = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 2rem;
  letter-spacing: 6px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.text};
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 0;
  font-size: 0.9rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme, $active }) => $active ? theme.colors.accent : theme.colors.textMuted};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  transition: color 0.2s;
  &:hover { color: ${({ theme }) => theme.colors.text}; }
`;

const navLinks = [
  { to: '/shop/tops', label: 'Tops', icon: '👕' },
  { to: '/shop/bottoms', label: 'Bottoms', icon: '👖' },
  { to: '/shop/outerwear', label: 'Outerwear', icon: '🧥' },
  { to: '/shop/headwear', label: 'Headwear', icon: '🧢' },
  { to: '/shop/footwear', label: 'Footwear', icon: '👟' },
  { to: '/shop/accessories', label: 'Accessories', icon: '🎒' },
  { to: '/shop/collectibles', label: 'Collectibles', icon: '📦' },
];

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <Drawer
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: 'tween', duration: 0.25 }}
          >
            <CloseBtn onClick={onClose}><FiX /></CloseBtn>
            <BrandName>TRUTH</BrandName>
            {navLinks.map(link => (
              <NavItem
                key={link.to}
                to={link.to}
                $active={location.pathname === link.to}
                onClick={onClose}
              >
                <span>{link.icon}</span>
                {link.label}
              </NavItem>
            ))}
          </Drawer>
        </>
      )}
    </AnimatePresence>
  );
}
