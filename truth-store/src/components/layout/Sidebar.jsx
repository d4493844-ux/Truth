import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const SidebarWrap = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 70px;
  bottom: 0;
  z-index: 90;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(15,15,15,0.95);
  backdrop-filter: blur(12px);
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  padding: 16px 0;
  overflow: hidden;
`;

const ToggleBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  transition: all 0.2s;
  flex-shrink: 0;
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 8px;
  gap: 4px;
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
    height: ${({ $active }) => $active ? '24px' : '0'};
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 0 2px 2px 0;
    transition: height 0.2s;
  }
`;

const Icon = styled.span`
  font-size: 1.3rem;
  line-height: 1;
`;

const Label = styled(motion.span)`
  font-size: 0.55rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
`;

const AddBtn = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  margin-top: 8px;
  transition: all 0.2s;
  &:hover { border-color: ${({ theme }) => theme.colors.accent}; color: white; }
`;

const navLinks = [
  { to: '/shop/tops', icon: '👕', label: 'Tops' },
  { to: '/shop/bottoms', icon: '👖', label: 'Bottoms' },
  { to: '/shop/outerwear', icon: '🧥', label: 'Outerwear' },
  { to: '/shop/headwear', icon: '🧢', label: 'Headwear' },
  { to: '/shop/footwear', icon: '👟', label: 'Footwear' },
  { to: '/shop/accessories', icon: '🎒', label: 'Access.' },
  { to: '/shop/collectibles', icon: '📦', label: 'Collect.' },
];

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();

  return (
    <SidebarWrap
      initial={{ width: 56 }}
      animate={{ width: expanded ? 64 : 56 }}
      transition={{ type: 'tween', duration: 0.2 }}
    >
      <ToggleBtn onClick={() => setExpanded(e => !e)}>
        <motion.span
          animate={{ rotate: expanded ? 0 : 180 }}
          transition={{ duration: 0.2 }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.span>
      </ToggleBtn>

      {navLinks.map(link => (
        <NavItem
          key={link.to}
          to={link.to}
          $active={location.pathname === link.to}
        >
          <Icon>{link.icon}</Icon>
          <AnimatePresence>
            {expanded && (
              <Label
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.15 }}
              >
                {link.label}
              </Label>
            )}
          </AnimatePresence>
        </NavItem>
      ))}

      <AddBtn title="More">+</AddBtn>
    </SidebarWrap>
  );
}
