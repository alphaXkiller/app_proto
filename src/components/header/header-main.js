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


const HeaderMain = ({navigation, title}) => {
  return (
    <Header>
      <Left>
        <Button
          transparent
          onPress={() => navigation.navigate('DrawerOpen')}
        >
          <Icon name='menu'/>
        </Button>
      </Left>
      <Body><Title>{title}</Title></Body>
      <Right />
    </Header>
  )
}

export default HeaderMain
