import React, { useRef } from 'react';
import { UserCard } from '../UserCard';

interface UserCardFallbackProps {
  userName: string;
}

export const UserCardFallback = ({ userName }: UserCardFallbackProps) => {
  const initialName = useRef(userName).current;

  const fallbackData = {
    followers: 0,
    public_repos: 0,
    name: initialName,
    bio: 'loading...',
    avatar_url: '/img/github.png',
  };

  return <UserCard user={fallbackData} />;
};
