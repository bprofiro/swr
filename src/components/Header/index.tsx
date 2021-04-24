import React from 'react';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import logoImg from '../../assets/logo.png';

import { Input } from '../Input';

import { Container } from './styles';

export const Header = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate('Users')}>
        <Image source={logoImg} />
      </TouchableOpacity>

      <Input />
    </Container>
  );
};
