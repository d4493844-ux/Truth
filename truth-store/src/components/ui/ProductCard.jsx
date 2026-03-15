import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled(Link)`
  display: block;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    border-color: ${({ theme }) => theme.colors.borderHover};
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.card};
  }
`;

const ImageWrap = styled.div`
  aspect-ratio: 1;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s;
  }
  ${Card}:hover & img { transform: scale(1.05); }
`;

const Info = styled.div`
  padding: 12px;
`;

const Name = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2px;
`;

const Sub = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: 8px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Tag = styled.span`
  font-size: 0.6rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textDim};
`;

const Swatches = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 6px;
`;

const Swatch = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  border: 1px solid rgba(255,255,255,0.2);
`;

export default function ProductCard({ product }) {
  const { id, name, price, season, status, image, colorways = [] } = product;
  return (
    <Card to={`/product/${id}`}>
      <ImageWrap>
        {image
          ? <img src={image} alt={name} />
          : <span style={{ color: '#333', fontSize: '2rem' }}>👕</span>
        }
      </ImageWrap>
      <Info>
        <Name>{name}</Name>
        <Sub>{season}</Sub>
        <Bottom>
          <Price>₦{price?.toLocaleString()}</Price>
          <Tag>{status}</Tag>
        </Bottom>
        {colorways.length > 0 && (
          <Swatches>
            {colorways.map((c, i) => <Swatch key={i} $color={c} />)}
          </Swatches>
        )}
      </Info>
    </Card>
  );
}
