import { useState } from 'react';
import styled from 'styled-components';
import { FiShoppingBag } from 'react-icons/fi';

const Track = styled.div`
  position: relative;
  height: 56px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.full};
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
`;

const Label = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Handle = styled.div`
  position: absolute;
  left: 4px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  box-shadow: ${({ theme }) => theme.shadows.glow};
  transition: background 0.2s;
`;

const Success = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: white;
`;

export default function SlideToAdd({ onAdd, disabled }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    if (disabled || added) return;
    onAdd();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Track onClick={handleClick}>
      {added ? (
        <Success>✓ ADDED TO BAG</Success>
      ) : (
        <>
          <Handle><FiShoppingBag /></Handle>
          <Label>Slide to Bag →</Label>
        </>
      )}
    </Track>
  );
}
