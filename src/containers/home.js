import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  AppRegistry,
  ScrollView,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native'
import { Container, Content, Card, CardItem, Body } from 'native-base'

import SignupModal from '../components/modal/signup.js'
import HeaderMain from '../components/header/header-main.js'

import { user } from '../actions/index.js'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      show_modal: false
    }
  }


  toggleModal = () => this.setState({show_modal: !this.state.show_modal})


  render() {
    const { show_modal } = this.state

    return (
      <Container>
        <SignupModal visible={show_modal} onPressClose={this.toggleModal} />
        { HeaderMain({title: 'Home', navigation: this.props.navigation}) }
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text onPress={() => this.toggleModal()}>
                  Signup
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}


const mapStateToProps = (state, props) => ({

})


const mapDispatchToProps = (dispatch, props) => ({
  signup: (email, password) => dispatch(user.emailSignup(email, password))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home)


AppRegistry.registerComponent('Home', () => Home)
