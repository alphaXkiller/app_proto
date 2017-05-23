import React, { Component } from 'react'
import {
  Container,
  Card,
  CardItem,
  Body,
  Text,
  Content,
  Header,
  Left,
  Right,
  Button,
  Icon,
  Title
} from 'native-base'

class VibeDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body><Title>Vibe Details</Title></Body>
        <Right/>
      </Header>
    )
  })

  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>Vibe Details Page</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

export default VibeDetails
