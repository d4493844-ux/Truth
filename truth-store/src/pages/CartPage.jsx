import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiChevronLeft, FiCheck, FiX } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import { initializePaystack } from '../lib/paystack';
import Button from '../components/ui/Button';

const Page = styled.div`
  padding-top: 70px;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 16px;
`;

const BackBtn = styled(Link)`
  width: 40px; height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  display: flex; align-items: center; justify-content: center;
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.8rem;
  letter-spacing: 4px;
`;

const SectionLabel = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 0 16px 12px;
`;

const ItemRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ItemImg = styled.div`
  width: 56px; height: 56px;
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  flex-shrink: 0;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem;
  overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.p`
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const ItemSub = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const QtyControl = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const QtyBtn = styled.button`
  width: 24px; height: 24px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: white;
  font-size: 0.9rem;
  display: flex; align-items: center; justify-content: center;
`;

const QtyNum = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
`;

const ItemPrice = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 8px 12px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
`;

const CheckBtn = styled.button`
  width: 28px; height: 28px;
  border-radius: 6px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  display: flex; align-items: center; justify-content: center;
  color: ${({ theme }) => theme.colors.accent};
`;

const RemoveBtn = styled.button`
  font-size: 0.7rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.textDim};
  &:hover { color: ${({ theme }) => theme.colors.accent}; }
`;

const Summary = styled.div`
  padding: 20px 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: ${({ $last }) => $last ? 'none' : '1px dashed'};
  border-color: ${({ theme }) => theme.colors.border};
`;

const SummaryLabel = styled.span`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const SummaryVal = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
`;

const PromoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 12px 16px;
  margin: 12px 0;
`;

const PromoLabel = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const CheckoutWrap = styled.div`
  padding: 16px;
`;

const Empty = styled.div`
  text-align: center;
  padding: 80px 20px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart();

  const handleCheckout = () => {
    const email = prompt('Enter your email for payment:');
    if (!email) return;
    initializePaystack({
      email,
      amount: subtotal,
      onSuccess: (res) => {
        alert(`Payment successful! Ref: ${res.reference}`);
        clearCart();
      },
      onClose: () => {},
      metadata: { items: JSON.stringify(items) },
    });
  };

  return (
    <Page>
      <Header>
        <BackBtn to="/shop"><FiChevronLeft /></BackBtn>
        <Title>CART</Title>
      </Header>

      {items.length === 0 ? (
        <Empty>
          <p style={{ marginBottom: 16 }}>Your bag is empty</p>
          <Button as={Link} to="/shop">Shop Now</Button>
        </Empty>
      ) : (
        <>
          <SectionLabel>My Products</SectionLabel>
          {items.map((item, i) => (
            <ItemRow key={i}>
              <ItemImg>
                {item.image ? <img src={item.image} alt={item.name} /> : '👕'}
              </ItemImg>
              <ItemInfo>
                <ItemName>{item.name}</ItemName>
                <ItemSub>{item.colorway} • {item.size}</ItemSub>
              </ItemInfo>
              <QtyControl>
                <QtyBtn onClick={() => updateQuantity(item.id, item.colorway, item.size, item.quantity + 1)}>+</QtyBtn>
                <QtyNum>{item.quantity}</QtyNum>
                <QtyBtn onClick={() => updateQuantity(item.id, item.colorway, item.size, item.quantity - 1)}>−</QtyBtn>
              </QtyControl>
              <ItemPrice>₦{(item.price * item.quantity).toLocaleString()}</ItemPrice>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'center' }}>
                <CheckBtn><FiCheck size={14} /></CheckBtn>
                <RemoveBtn onClick={() => removeItem(item.id, item.colorway, item.size)}>Remove</RemoveBtn>
              </div>
            </ItemRow>
          ))}

          <Summary>
            <SummaryRow>
              <SummaryLabel>Subtotal:</SummaryLabel>
              <SummaryVal>₦{subtotal.toLocaleString()}</SummaryVal>
            </SummaryRow>
            <PromoRow>
              <PromoLabel>Promo Code</PromoLabel>
              <span style={{ color: '#555', fontSize: '0.8rem' }}>--</span>
            </PromoRow>
            <SummaryRow $last>
              <SummaryLabel style={{ fontWeight: 700, color: 'white' }}>Total:</SummaryLabel>
              <SummaryVal style={{ fontSize: '1rem' }}>₦{subtotal.toLocaleString()}</SummaryVal>
            </SummaryRow>
          </Summary>

          <CheckoutWrap>
            <Button full onClick={handleCheckout} size="lg">
              Checkout with Paystack
            </Button>
          </CheckoutWrap>
        </>
      )}
    </Page>
  );
}
