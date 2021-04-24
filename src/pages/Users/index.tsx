import React, { useCallback, useState } from 'react';
import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { useFecth } from '../../hooks/useFetch';

import {
  Container,
  Content,
  Title,
  UserCard,
  UserImage,
  Button,
  TextButton,
  PaginationContainer,
  PaginateButton,
} from './styles';
import { useSearch } from '../../hooks/useSearch';

interface UserFromGithub {
  avatar_url: string;
  login: string;
  id: string;
}

export const Users = () => {
  const navigation = useNavigation();

  const { setUsername } = useSearch();

  const [page, setPage] = useState(0);

  const { data: users } = useFecth<UserFromGithub[]>(
    `https://api.github.com/users?since=${page}&per_page=200`,
  );

  const handleGoToDetails = useCallback(
    username => {
      setUsername(username);
      navigation.navigate('UserDetails');
    },
    [setUsername, navigation],
  );

  if (!users) {
    return (
      <Container>
        <Header />

        <Content>
          <Title>Loading...</Title>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <Header />

      <Content>
        <Title>Users</Title>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={users}
          style={{
            maxHeight: 570,
          }}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <UserCard key={item.id}>
              <UserImage
                source={{
                  uri: item.avatar_url,
                }}
              />

              <Button onPress={() => handleGoToDetails(item.login)}>
                <TextButton>Ver detalhes</TextButton>
              </Button>
            </UserCard>
          )}
        />

        <PaginationContainer>
          <PaginateButton
            onPress={() => setPage(prevState => prevState - 21)}
            disabled={page === 0}
          >
            <TextButton>Anterior</TextButton>
          </PaginateButton>
          <PaginateButton onPress={() => setPage(prevState => prevState + 21)}>
            <TextButton>Proxima</TextButton>
          </PaginateButton>
        </PaginationContainer>
      </Content>
    </Container>
  );
};
