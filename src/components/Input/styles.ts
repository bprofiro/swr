import styled from 'styled-components/native';

export const Container = styled.View`
  width: 260px;
  height: 40px;
  background: #fff;
  border-radius: 10px;
  padding-left: 8px;
  border: 2px;
  border-color: #2b4f96;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  flex: 1;
  color: #666360;
  font-size: 14px;
  font-family: 'Poppins_400Regular';
`;

export const SearchButton = styled.TouchableOpacity`
  background: #2b4f96;
  height: 40px;
  width: 40px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
