import React from 'react';

import { UserProps } from '../../hooks/useSearch';

import {
  Container,
  Cover,
  Item,
  ItemText,
  UserDescription,
  UserDetails,
  UserImage,
  Username,
} from './styles';

interface UserCardProps {
  user: UserProps | undefined;
}

export const UserCard = ({ user }: UserCardProps) => (
  <Container>
    <Cover />
    <UserImage source={{ uri: user?.avatar_url }} />

    <Username>{user?.name}</Username>

    <UserDescription>{user?.bio}</UserDescription>

    <UserDetails>
      <Item>
        <ItemText>{user?.followers}</ItemText>
        <ItemText>Followers</ItemText>
      </Item>

      <Item>
        <ItemText>{user?.public_repos}</ItemText>
        <ItemText>Repos</ItemText>
      </Item>
    </UserDetails>
  </Container>
);
