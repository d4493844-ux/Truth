import styled, { css } from 'styled-components';

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    &:hover { background: ${({ theme }) => theme.colors.primaryHover}; box-shadow: ${({ theme }) => theme.shadows.glow}; }
  `,
  outline: css`
    background: transparent;
    color: white;
    border: 1px solid ${({ theme }) => theme.colors.border};
    &:hover { border-color: white; }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.textMuted};
    &:hover { color: white; }
  `,
  dark: css`
    background: ${({ theme }) => theme.colors.surface};
    color: white;
    border: 1px solid ${({ theme }) => theme.colors.border};
    &:hover { border-color: ${({ theme }) => theme.colors.accent}; }
  `,
};

const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${({ $size }) => $size === 'sm' ? '8px 16px' : $size === 'lg' ? '16px 32px' : '12px 24px'};
  font-size: ${({ $size }) => $size === 'sm' ? '0.75rem' : '0.85rem'};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.radii.sm};
  transition: all 0.2s;
  width: ${({ $full }) => $full ? '100%' : 'auto'};
  ${({ $variant }) => variants[$variant || 'primary']}
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`;

export default function Button({ children, variant, size, full, ...props }) {
  return (
    <Btn $variant={variant} $size={size} $full={full} {...props}>
      {children}
    </Btn>
  );
}
