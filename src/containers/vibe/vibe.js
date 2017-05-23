import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Text
} from 'react-native'
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Button,
} from 'native-base'

import HeaderMain from '../../components/header/header-main.js'

class Vibe extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: HeaderMain({
      title: 'Vibe',
      navigation
    })
  })

  componentDidMount() {
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Button
            full
            rounded
            primary
            onPress={() => this.props.navigation.navigate('VibeDetails')}
          >
            <Text>To Vibe One</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default Vibe

AppRegistry.registerComponent('Vibe', () => Vibe)
