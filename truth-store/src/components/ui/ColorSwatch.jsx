import styled from 'styled-components';

const Wrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Dot = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  border: 2px solid ${({ $active, theme }) => $active ? 'white' : theme.colors.border};
  transition: all 0.2s;
  transform: ${({ $active }) => $active ? 'scale(1.2)' : 'scale(1)'};
  &:hover { transform: scale(1.15); }
`;

export default function ColorSwatch({ colorways, selected, onSelect }) {
  return (
    <Wrap>
      {colorways.map((c, i) => (
        <Dot
          key={i}
          $color={c.hex}
          $active={selected === c.name}
          onClick={() => onSelect(c.name)}
          title={c.name}
        />
      ))}
    </Wrap>
  );
}
