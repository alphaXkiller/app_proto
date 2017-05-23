import React from 'react'
import {
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right
} from 'native-base'


const ModalHeader = ({title, onPressClose}) => {
  return (
    <Header>
      <Left>
        <Button
          transparent
          onPress={onPressClose}
        >
          <Icon name='close'/>
        </Button>
      </Left>
      <Body><Title>{title}</Title></Body>
      <Right />
    </Header>
  )
}

export default ModalHeader
