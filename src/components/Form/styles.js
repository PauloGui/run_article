import styled, { css } from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  margin-top: 80px;
`;

export const ContainerBox = styled.div`
  margin: 10px;
  background-color: #eee;
  height: 150px;
  padding: 20px;

  ${(props) =>
    props.articleRead &&
    css`
      display: flex;
      padding: 10px 20px;
    `}
`;

export const ImgArticle = styled.img``;

export const Title = styled.h2`
  ${(props) =>
    props.titleArticle &&
    css`
      font-weight: 500;
      padding-bottom: 5px;
    `}
`;

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

export const TextsBox = styled.div`
  padding: 0 10px;
  flex: 1;
`;

export const Text = styled.span`
  flex-wrap: wrap;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 10px;
  text-align: justify;
`;
