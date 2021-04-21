import React from 'react';

import { Header } from '../../components/Header';
import { UserCard } from '../../components/UserCard';
import { UserCardFallback } from '../../components/UserCardFallback';
import { useSearch } from '../../hooks/useSearch';

import { Container, Content, Title } from './styles';

export const Users = () => {
  const { user, loading } = useSearch();

  if (!user.name && !loading) {
    return (
      <Container>
        <Header />

        <Content>
          <Title>Submit User</Title>
        </Content>
      </Container>
    );
  }

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
