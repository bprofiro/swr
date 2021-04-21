import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  width: 327px;
  border-radius: 10px;

  padding-bottom: 32px;

  align-items: center;
`;

export const Cover = styled.View`
  background: #2b4f96;
  width: 100%;
  height: 88px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const UserImage = styled.Image`
  width: 187px;
  height: 187px;
  border-radius: 93.5px;

  margin-top: -60px;
`;

export const Username = styled.Text`
  margin-top: 24px;
  font-size: 20px;
  color: #232129;
  font-family: 'Poppins_600SemiBold';
`;

export const UserDescription = styled.Text`
  margin: 24px 24px 43px;

  font-size: 16px;
  line-height: 21px;
  text-align: center;

  color: #232129;
  font-family: 'Poppins_400Regular';
`;

export const UserDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 148px;
`;

export const Item = styled.View`
  justify-content: center;
`;

export const ItemText = styled.Text`
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  font-family: 'Poppins_400Regular';

  color: #232129;
`;
