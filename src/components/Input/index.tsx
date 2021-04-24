import React, { useState, useCallback } from 'react';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { Container, Input as TextInput, SearchButton } from './styles';
import { useSearch } from '../../hooks/useSearch';

export const Input = () => {
  const { setUsername } = useSearch();

  const [user, setUser] = useState('');

  const navigation = useNavigation();

  const handleGoToDetails = useCallback(() => {
    setUsername(user);
    navigation.navigate('UserDetails');
  }, [setUsername, navigation, user]);

  return (
    <Container>
      <TextInput
        keyboardAppearance="dark"
        placeholder="Search..."
        placeholderTextColor="#666360"
        onChangeText={value => setUser(value)}
      />
      <SearchButton onPress={handleGoToDetails}>
        <Feather name="search" size={24} color="#fff" />
      </SearchButton>
    </Container>
  );
};
