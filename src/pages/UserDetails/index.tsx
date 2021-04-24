import React from 'react';

import { Header } from '../../components/Header';
import { UserCard } from '../../components/UserCard';
import { UserCardFallback } from '../../components/UserCardFallback';
import { useFecth } from '../../hooks/useFetch';
import { UserProps, useSearch } from '../../hooks/useSearch';

import { Container, Content, Title } from './styles';

export const UserDetails = () => {
  const { username } = useSearch();

  const { data: user, loading } = useFecth<UserProps>(
    `https://api.github.com/users/${username}`,
  );

  return (
    <Container>
      <Header />

      <Content>
        <Title>User Detail</Title>

        {loading ? (
          <UserCardFallback userName="User" />
        ) : (
          <UserCard user={user} />
        )}
      </Content>
    </Container>
  );
};
