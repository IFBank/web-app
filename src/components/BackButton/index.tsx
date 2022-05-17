import React from 'react';

import MaterialIcon from '../MaterialIcon';

import {
  Container
} from './styles'

interface BackButtonProps {
};

const BackButton: React.FC<BackButtonProps> = ({ ... rest }) => {
  
  return (
    <Container { ... rest } > 
      <MaterialIcon name="arrow_back" color="black" size={36} />
    </Container> 
  );

};

export default BackButton;

