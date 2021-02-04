import styled from 'styled-components';
import { shade } from 'polished';
import { FaHome, FaNewspaper } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  top: 80px;
  width: 250px;
  padding: 10px;
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: var(--color-base);
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
`;

export const Button = styled.button`
  height: 45px;
  background-color: var(--color-base);
  border: 0;
  color: #fff;
  font-size: 18px;
  font-weight: 500;

  display: flex;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  transition: 0.2s;

  :hover {
    background-color: ${shade(0.2, '#1675AA')};
  }
`;

export const IconHome = styled(FaHome)`
  margin: 0 10px;
`;

export const IconArticle = styled(FaNewspaper)`
  margin: 0 10px;
`;
