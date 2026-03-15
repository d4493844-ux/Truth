import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiSearch, FiChevronLeft } from 'react-icons/fi';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ui/ProductCard';

const Page = styled.div`
  padding-top: 70px;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px;
  position: relative;
`;

const BackBtn = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.8rem;
  letter-spacing: 4px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const SearchBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const SearchBar = styled.div`
  padding: 0 16px 16px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};
  color: white;
  font-size: 0.85rem;
  outline: none;
  &::placeholder { color: ${({ theme }) => theme.colors.textDim}; }
  &:focus { border-color: ${({ theme }) => theme.colors.accent}; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 0 16px 40px;
`;

const Empty = styled.div`
  text-align: center;
  padding: 80px 20px;
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.85rem;
  letter-spacing: 2px;
`;

export default function ShopPage() {
  const { category } = useParams();
  const { products, loading } = useProducts(category);
  const [query, setQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Page>
      <Header>
        <BackBtn to="/"><FiChevronLeft /></BackBtn>
        <Title>{category ? category.toUpperCase() : 'SHOP'}</Title>
        <SearchBtn onClick={() => setShowSearch(s => !s)}>
          <FiSearch />
        </SearchBtn>
      </Header>

      {showSearch && (
        <SearchBar>
          <SearchInput
            placeholder="Search products..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
          />
        </SearchBar>
      )}

      {loading ? (
        <Grid>
          {[1,2,3,4].map(i => (
            <div key={i} style={{ height: 220, background: '#1a1a1a', borderRadius: 12 }} />
          ))}
        </Grid>
      ) : filtered.length > 0 ? (
        <Grid>
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </Grid>
      ) : (
        <Empty>No products found</Empty>
      )}
    </Page>
  );
}
