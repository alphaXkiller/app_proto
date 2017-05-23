import React, { Component } from 'react'
import { Image } from 'react-native'
import {
  Container,
  Content,
  Text
} from 'native-base'

class Sidebar extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
            }}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={{
                uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
              }}
            />
          </Image>
          <Text onPress={() => this.props.navigation.navigate('Home')}>Home</Text>
          <Text onPress={() => this.props.navigation.navigate('Vibe')}>Vibe</Text>
        </Content>
      </Container>
    )
  }
}

export default Sidebar
