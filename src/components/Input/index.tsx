import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, Input as TextInput, SearchButton } from './styles';
import { useSearch } from '../../hooks/useSearch';

export const Input = () => {
  const { search } = useSearch();

  const [userName, setUserName] = useState('');

  return (
    <Container>
      <TextInput
        keyboardAppearance="dark"
        placeholder="Search..."
        placeholderTextColor="#666360"
        onChangeText={value => setUserName(value)}
      />
      <SearchButton onPress={() => search(userName)}>
        <Feather name="search" size={24} color="#fff" />
      </SearchButton>
    </Container>
  );
};
