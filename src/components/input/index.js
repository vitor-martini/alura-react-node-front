import styled from 'styled-components';

const Input = styled.input`
  order: 1px solid #FFF;
  background: transparent;
  border: 1px solid #FFF;
  border-radius: 50px;
  width: 600px;
  color: #FFF;
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center;
  line-height: 50px;

  &::placeholder {
    color: #FFF;
    font-size: 16px;
  }
`;

export default Input