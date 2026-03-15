import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import WaitlistForm from '../components/home/WaitlistForm';

const Page = styled.div`
  padding-top: 70px;
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(5rem, 25vw, 16rem);
  letter-spacing: 10px;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  z-index: 1;
  text-shadow: 0 0 100px rgba(139,0,0,0.5);
`;

const HeroBtns = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
  position: relative;
  z-index: 1;
`;

const StayTuned = styled.section`
  padding: 40px 16px;
  text-align: center;
`;

const StayTitle = styled.h2`
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

const FeaturedProduct = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.xl};
  padding: 32px 20px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const ProductImg = styled.div`
  width: 200px;
  height: 200px;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: ${({ theme }) => theme.radii.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textDim};
  font-size: 0.7rem;
  letter-spacing: 2px;
`;

const ProductName = styled.p`
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const ProductSeason = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Manifesto = styled.section`
  padding: 48px 16px;
  background: ${({ theme }) => theme.colors.pink};
`;

const ManifestoText = styled.p`
  font-size: 0.9rem;
  line-height: 1.9;
  color: #1a1a1a;
  margin-bottom: 16px;
`;

const ManifestoTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
  color: #1a1a1a;
`;

const VisionSection = styled.section`
  padding: 40px 16px;
  background: ${({ theme }) => theme.colors.pink};
`;

const BlockTitle = styled.h3`
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 16px;
  color: #1a1a1a;
`;

const BlockText = styled.p`
  font-size: 0.85rem;
  line-height: 1.8;
  color: #333;
  text-align: center;
`;

const Quote = styled.blockquote`
  font-size: 0.8rem;
  font-style: italic;
  color: #555;
  text-align: center;
  margin: 16px 0;
  padding: 0 16px;
  border-left: 3px solid #8B0000;
`;

const CollageSection = styled.section`
  padding: 32px 16px;
`;

const CollageTitle = styled.h2`
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

const CollageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
`;

const CollageImg = styled.div`
  aspect-ratio: 1;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const WaitlistSection = styled.section`
  padding: 48px 16px;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export default function AboutPage() {
  return (
    <Page>
      <HeroSection>
        <HeroTitle>TRUTH</HeroTitle>
        <HeroBtns>
          <Button as={Link} to="/shop">Shop Collection</Button>
          <Button variant="outline">Join Waitlist</Button>
        </HeroBtns>
      </HeroSection>

      <StayTuned>
        <StayTitle>Stay Tuned</StayTitle>
        <FeaturedProduct>
          <ProductImg>PRODUCT IMAGE</ProductImg>
          <ProductName>Light Jersey</ProductName>
          <ProductSeason>Season 1 — Coming Soon</ProductSeason>
        </FeaturedProduct>
      </StayTuned>

      <Manifesto>
        <ManifestoTitle>Not for everyone.<br />Made for you.</ManifestoTitle>
        <ManifestoText>
          Truth isn't just worn — it's felt. Rooted in something deeper than trend, it carries
          echoes of culture, silence, and purpose. A Different Winner? That's not just someone
          who stands out. It's someone who moves for purpose and growth and so much more, not
          for the sake of the win, but for the sake of making a mark, causing a shift.
        </ManifestoText>
      </Manifesto>

      <VisionSection>
        <BlockTitle>Our Vision</BlockTitle>
        <BlockText>
          To become the global emblem for individuals who feel different, yet destined —
          creating a community where uniqueness is celebrated, purpose is worn, and silence
          speaks louder than logos.
        </BlockText>
        <Quote>
          "We envision a world where fashion is not just seen, but felt — where being different
          is not a rebellion, but a revolution."
        </Quote>

        <BlockTitle style={{ marginTop: 32 }}>Our Mission</BlockTitle>
        <BlockText>
          Truth exists to bridge the gap between quiet luxury and street identity — crafting
          emotionally resonant pieces that reflect the soul of the wearer. We design for those
          who move through the world calm, yet unforgettable.
        </BlockText>
        <Quote>
          "Our mission is to crown the different, clothe the uncommon, and speak to those
          who've never been spoken to by fashion before."
        </Quote>
      </VisionSection>

      <CollageSection>
        <CollageTitle>The Feeling of Truth</CollageTitle>
        <CollageGrid>
          {[...Array(9)].map((_, i) => <CollageImg key={i} />)}
        </CollageGrid>
      </CollageSection>

      <WaitlistSection>
        <h2 style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: 8 }}>
          Join the Waitlist
        </h2>
        <p style={{ fontSize: '0.75rem', color: '#888', marginBottom: 24 }}>
          Join our waitlist to receive latest updates, news and blogs
        </p>
        <WaitlistForm />
      </WaitlistSection>
    </Page>
  );
}
