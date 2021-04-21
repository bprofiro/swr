import React from 'react';
import { Image } from 'react-native';

import logoImg from '../../assets/logo.png';

import { Input } from '../Input';

import { Container } from './styles';

export const Header = () => (
  <Container>
    <Image source={logoImg} />

    <Input />
  </Container>
);
