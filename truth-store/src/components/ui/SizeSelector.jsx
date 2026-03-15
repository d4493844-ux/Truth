import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

const SizeBtn = styled.button`
  padding: 10px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ $active, theme }) => $active ? 'white' : theme.colors.border};
  background: ${({ $active, theme }) => $active ? 'white' : 'transparent'};
  color: ${({ $active }) => $active ? 'black' : 'white'};
  transition: all 0.2s;
  &:hover {
    border-color: white;
    background: ${({ $active }) => $active ? 'white' : 'rgba(255,255,255,0.1)'};
  }
`;

const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

export default function SizeSelector({ selected, onSelect }) {
  return (
    <Grid>
      {sizes.map(s => (
        <SizeBtn key={s} $active={selected === s} onClick={() => onSelect(s)}>
          {s}
        </SizeBtn>
      ))}
    </Grid>
  );
}
