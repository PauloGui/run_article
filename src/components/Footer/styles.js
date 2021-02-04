import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 3;
  position: relative;
  padding: 0 10px;
  width: 100%;
  justify-content: flex-end;
`;

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  padding-right: 10px;
  bottom: 0;
  left: 250px;
  right: 0;
  background-color: #ccc;
  align-items: center;
  justify-content: flex-end;
`;
