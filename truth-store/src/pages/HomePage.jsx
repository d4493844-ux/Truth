import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';
import WaitlistForm from '../components/home/WaitlistForm';

const Page = styled.div`
  padding-top: 70px;
`;

// ── HERO ──────────────────────────────────────
const Hero = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
  overflow: hidden;
`;

const HeroBg = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, #1a0000 0%, #0a0a0a 70%);
`;

const HeroTitle = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(5rem, 20vw, 14rem);
  letter-spacing: 8px;
  line-height: 0.9;
  color: ${({ theme }) => theme.colors.text};
  position: relative;
  z-index: 1;
  text-shadow: 0 0 80px rgba(139,0,0,0.4);
`;

const HeroSub = styled(motion.p)`
  font-size: 0.75rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  margin: 24px 0 40px;
  position: relative;
  z-index: 1;
`;

const HeroBtns = styled(motion.div)`
  display: flex;
  gap: 16px;
  position: relative;
  z-index: 1;
`;

// ── FEATURED BANNER ───────────────────────────
const FeaturedSection = styled.section`
  padding: 0 16px 32px;
`;

const FeaturedCard = styled.div`
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  position: relative;
  min-height: 280px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const FeaturedImg = styled.div`
  width: 100%;
  min-height: 280px;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a1a1a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textDim};
  font-size: 0.75rem;
  letter-spacing: 2px;
`;

const FeaturedBadge = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 2px;
  padding: 4px 10px;
  border-radius: 4px;
  text-transform: uppercase;
`;

const FeaturedCaption = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
`;

const FeaturedTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const FeaturedDate = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

// ── LOOKBOOK ──────────────────────────────────
const LookbookSection = styled.section`
  padding: 32px 16px;
`;

const SectionTitle = styled.h2`
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const SectionSub = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 16px;
`;

const LookbookGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 200px 200px;
  gap: 8px;
`;

const LookbookImg = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  grid-column: ${({ $wide }) => $wide ? 'span 1' : 'auto'};
  grid-row: ${({ $tall }) => $tall ? 'span 2' : 'auto'};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textDim};
  font-size: 0.65rem;
  letter-spacing: 1px;
`;

// ── PRODUCT ROWS ──────────────────────────────
const ProductSection = styled.section`
  padding: 32px 16px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 16px;
`;

// ── WAITLIST ──────────────────────────────────
const WaitlistSection = styled.section`
  padding: 48px 16px;
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const WaitlistTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const WaitlistSub = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 24px;
`;

export default function HomePage() {
  const { products, loading } = useProducts();

  return (
    <Page>
      {/* HERO */}
      <Hero>
        <HeroBg />
        <HeroTitle
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TRUTH
        </HeroTitle>
        <HeroSub
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Not for everyone. Made for you.
        </HeroSub>
        <HeroBtns
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button as={Link} to="/shop">Shop Collection</Button>
          <Button as={Link} to="/about" variant="outline">Join Waitlist</Button>
        </HeroBtns>
      </Hero>

      {/* FEATURED BANNER */}
      <FeaturedSection>
        <FeaturedCard>
          <FeaturedImg>FEATURED PHOTO HERE</FeaturedImg>
          <FeaturedBadge>Featured</FeaturedBadge>
          <FeaturedCaption>
            <FeaturedTitle>Lagos, VI Community</FeaturedTitle>
            <FeaturedDate>Pop-Up 26-02-26</FeaturedDate>
          </FeaturedCaption>
        </FeaturedCard>
      </FeaturedSection>

      {/* LOOKBOOK */}
      <LookbookSection>
        <SectionTitle>Community Lookbook</SectionTitle>
        <SectionSub>True, Raw, Untamed, Team, Hero weekly outlook</SectionSub>
        <LookbookGrid>
          <LookbookImg $tall>PHOTO 1</LookbookImg>
          <LookbookImg>PHOTO 2</LookbookImg>
          <LookbookImg>PHOTO 3</LookbookImg>
        </LookbookGrid>
      </LookbookSection>

      {/* NEW ARRIVALS */}
      <ProductSection>
        <SectionTitle>New Arrivals</SectionTitle>
        <ProductGrid>
          {loading
            ? [1,2,3].map(i => <div key={i} style={{height:160,background:'#1a1a1a',borderRadius:12}} />)
            : products.slice(0,3).map(p => <ProductCard key={p.id} product={p} />)
          }
        </ProductGrid>
      </ProductSection>

      {/* BEST SELLERS */}
      <ProductSection>
        <SectionTitle>Best Sellers</SectionTitle>
        <ProductGrid>
          {loading
            ? [1,2,3].map(i => <div key={i} style={{height:160,background:'#1a1a1a',borderRadius:12}} />)
            : products.slice(0,3).map(p => <ProductCard key={p.id} product={p} />)
          }
        </ProductGrid>
      </ProductSection>

      {/* BACK IN STOCK */}
      <ProductSection>
        <SectionTitle>Back in Stock</SectionTitle>
        <ProductGrid>
          {loading
            ? [1,2,3].map(i => <div key={i} style={{height:160,background:'#1a1a1a',borderRadius:12}} />)
            : products.slice(0,3).map(p => <ProductCard key={p.id} product={p} />)
          }
        </ProductGrid>
      </ProductSection>

      {/* WAITLIST */}
      <WaitlistSection>
        <WaitlistTitle>Join the Waitlist</WaitlistTitle>
        <WaitlistSub>Join our waitlist to receive latest updates, news and blogs</WaitlistSub>
        <WaitlistForm />
      </WaitlistSection>
    </Page>
  );
}
