import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

export const ContainerSearch = styled.div`
  margin: 10px;
  background-color: #eee;
  height: 150px;
  padding: 20px;
`;

export const Title = styled.h2``;

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Input = styled.input.attrs({
  placeholderColor: '#aaa',
})`
  height: 45px;
  width: 100%;
  border: 0;
  padding: 0 10px;
`;

export const Button = styled.button`
  height: 45px;
  width: 45px;
  background-color: #fff;
  border: 0;
`;

export const IconSearch = styled(FaSearch)`
  width: 20px;
  height: 20px;
  color: #aaa;
`;
