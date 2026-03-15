import styled from 'styled-components';

const TOP_TEXTURE = 'https://res.cloudinary.com/drefakuj9/image/upload/v1773616495/Cbc_up-2_jgdzsb.png';
const BOTTOM_TEXTURE = 'https://res.cloudinary.com/drefakuj9/image/upload/v1773616495/cbc_down-2_w8hpnm.png';

const Wrap = styled.div`
  position: relative;
  overflow: hidden;
`;

const TextureTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 220px;
  background-image: url('${TOP_TEXTURE}');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  opacity: 0.18;
  pointer-events: none;
  z-index: 0;
`;

const TextureBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 220px;
  background-image: url('${BOTTOM_TEXTURE}');
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  opacity: 0.18;
  pointer-events: none;
  z-index: 0;
`;

const Inner = styled.div`
  position: relative;
  z-index: 1;
`;

export default function TextureBg({ children, style }) {
  return (
    <Wrap style={style}>
      <TextureTop />
      <TextureBottom />
      <Inner>{children}</Inner>
    </Wrap>
  );
}
