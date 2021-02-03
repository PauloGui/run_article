import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: var(--color-base);
`;

export const Wrapper = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgLogo = styled.img`
  width: 250px;
  height: 80px;
  object-fit: cover;
`;

export const Title = styled.div`
  border-left: 1px solid #fff;
  color: #fff;
  padding: 0 10px;
`;
