import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiInstagram, FiTwitter } from 'react-icons/fi';

const FooterWrap = styled.footer`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 40px 20px 24px;
  text-align: center;
`;

const Tagline = styled.p`
  font-size: 0.7rem;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.textDim};
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 24px;
`;

const SocialBtn = styled.a`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.2rem;
  transition: color 0.2s;
  &:hover { color: ${({ theme }) => theme.colors.accent}; }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 20px;
`;

const FooterLink = styled(Link)`
  font-size: 0.75rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.textDim};
  text-transform: uppercase;
  &:hover { color: ${({ theme }) => theme.colors.textMuted}; }
`;

const Copy = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textDim};
`;

const BottomTag = styled.p`
  font-size: 0.65rem;
  letter-spacing: 4px;
  color: ${({ theme }) => theme.colors.textDim};
  margin-top: 16px;
  text-transform: uppercase;
`;

export default function Footer() {
  return (
    <FooterWrap>
      <Tagline>← Chaos before Clarity →</Tagline>
      <SocialRow>
        <SocialBtn href="#" target="_blank"><FiInstagram /></SocialBtn>
        <SocialBtn href="#" target="_blank"><FiTwitter /></SocialBtn>
      </SocialRow>
      <Links>
        <FooterLink to="/about">About</FooterLink>
        <FooterLink to="/shop">Shop</FooterLink>
        <FooterLink to="/">Waitlist</FooterLink>
      </Links>
      <Copy>© {new Date().getFullYear()} TRUTH. All rights reserved.</Copy>
      <BottomTag>Stay connected to us</BottomTag>
    </FooterWrap>
  );
}
