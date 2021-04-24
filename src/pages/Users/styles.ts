import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #cfd6d7;
  align-items: center;
`;

export const Content = styled.View`
  align-items: center;
  padding: 16px 24px;

  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #232129;
  font-family: 'Poppins_400Regular';
  align-self: flex-start;
`;

export const UserCard = styled.View`
  width: 327px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;

  margin-top: 16px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserImage = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;

export const Button = styled.TouchableOpacity`
  width: 173px;
  height: 23px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: #2b4f96;
`;

export const TextButton = styled.Text`
  font-size: 12px;
  line-height: 16px;
  font-family: 'Poppins_400Regular';

  color: #f4ede8;
`;

export const PaginationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 327px;

  margin-top: 24px;
`;

export const PaginateButton = styled.TouchableOpacity`
  width: 150px;
  padding: 8px;
  border-radius: 8px;
  background-color: ${({ disabled }) => (disabled ? '#b2b2b2' : '#2b4f96')};

  display: flex;
  align-items: center;
  justify-content: center;
`;
