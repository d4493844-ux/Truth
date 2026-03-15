import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiChevronLeft, FiHeart, FiShoppingCart, FiChevronRight } from 'react-icons/fi';
import { useProduct } from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import ColorSwatch from '../components/ui/ColorSwatch';
import SizeSelector from '../components/ui/SizeSelector';
import SlideToAdd from '../components/ui/SlideToAdd';

const Page = styled.div`
  padding-top: 70px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Bg = styled.div`
  position: fixed;
  inset: 0;
  background: radial-gradient(ellipse at 50% 30%, #1a0a0a 0%, #0a0a0a 60%);
  pointer-events: none;
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

const BackBtn = styled(Link)`
  width: 40px; height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  display: flex; align-items: center; justify-content: center;
  color: white;
`;

const ProductTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.4rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  flex: 1;
  text-align: center;
`;

const TopActions = styled.div`
  display: flex;
  gap: 12px;
`;

const IconBtn = styled.button`
  width: 40px; height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  display: flex; align-items: center; justify-content: center;
  color: white;
  font-size: 1rem;
  transition: background 0.2s;
  &:hover { background: rgba(255,255,255,0.2); }
`;

const SeasonPill = styled.div`
  margin: 0 16px 16px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const ComingSoon = styled.div`
  text-align: center;
  font-size: 0.7rem;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.textDim};
  margin-bottom: 16px;
`;

const ImageWrap = styled.div`
  margin: 0 16px;
  min-height: 320px;
  background: rgba(255,255,255,0.03);
  border-radius: ${({ theme }) => theme.radii.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textDim};
  font-size: 0.75rem;
  letter-spacing: 2px;
  margin-bottom: 24px;
  img { width: 80%; object-fit: contain; }
`;

const AccuracyBadge = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 6px 10px;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
`;

const Bottom = styled.div`
  padding: 0 16px 120px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.p`
  font-size: 0.7rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 10px;
`;

const Price = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: 700;
`;

const QtyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const QtyBtn = styled.button`
  width: 36px; height: 36px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: white;
  font-size: 1.2rem;
  display: flex; align-items: center; justify-content: center;
  transition: background 0.2s;
  &:hover { background: ${({ theme }) => theme.colors.surfaceHover}; }
`;

const QtyNum = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  min-width: 24px;
  text-align: center;
`;

const StyleGuideRow = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const SlideWrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: linear-gradient(to top, ${({ theme }) => theme.colors.background} 80%, transparent);
  z-index: 50;
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  color: ${({ theme }) => theme.colors.textMuted};
  letter-spacing: 2px;
  font-size: 0.8rem;
`;

export default function ProductPage() {
  const { id } = useParams();
  const { product, loading } = useProduct(id);
  const { addItem } = useCart();

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [qty, setQty] = useState(1);

  if (loading) return <Loading>LOADING...</Loading>;
  if (!product) return <Loading>PRODUCT NOT FOUND</Loading>;

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      colorway: selectedColor || product.colorways?.[0]?.name,
      size: selectedSize || 'M',
      quantity: qty,
      image: product.image,
    });
  };

  return (
    <Page>
      <Bg />
      <Content>
        <Header>
          <BackBtn to="/shop"><FiChevronLeft /></BackBtn>
          <ProductTitle>{product.name}</ProductTitle>
          <TopActions>
            <IconBtn><FiHeart /></IconBtn>
            <IconBtn as={Link} to="/cart"><FiShoppingCart /></IconBtn>
          </TopActions>
        </Header>

        <SeasonPill>
          {product.season}
          <FiChevronRight size={12} />
        </SeasonPill>

        <Label style={{ padding: '0 16px', marginBottom: 8 }}>Colorways</Label>
        <div style={{ padding: '0 16px 16px' }}>
          <ColorSwatch
            colorways={product.colorways || []}
            selected={selectedColor}
            onSelect={setSelectedColor}
          />
        </div>

        <ComingSoon>-COMING SOON-</ComingSoon>

        <div style={{ position: 'relative' }}>
          <ImageWrap>
            {product.image
              ? <img src={product.image} alt={product.name} />
              : 'PRODUCT IMAGE'
            }
          </ImageWrap>
          {product.accuracy && (
            <AccuracyBadge>
              {product.accuracy}%<br />
              <span style={{ fontSize: '0.6rem', fontWeight: 400 }}>Accuracy</span>
            </AccuracyBadge>
          )}
        </div>

        <Bottom>
          <div>
            <Price>₦{product.price?.toLocaleString()}</Price>
          </div>

          <div>
            <Label>Quantity</Label>
            <QtyRow>
              <QtyBtn onClick={() => setQty(q => Math.max(1, q - 1))}>−</QtyBtn>
              <QtyNum>{qty}</QtyNum>
              <QtyBtn onClick={() => setQty(q => q + 1)}>+</QtyBtn>
            </QtyRow>
          </div>

          <div>
            <Label>Size</Label>
            <SizeSelector selected={selectedSize} onSelect={setSelectedSize} />
          </div>

          <StyleGuideRow to="#">
            Style Guide
            <FiChevronRight />
          </StyleGuideRow>
        </Bottom>
      </Content>

      <SlideWrap>
        <SlideToAdd onAdd={handleAdd} disabled={!selectedSize} />
      </SlideWrap>
    </Page>
  );
}
