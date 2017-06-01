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
import LoginModal from '../components/modal/login.js'
import HeaderMain from '../components/header/header-main.js'

import { user } from '../actions/index.js'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      show_signup_modal: false,
      show_login_modal: false
    }
  }


  toggleSignupModal = () => this.setState({
    show_signup_modal: !this.state.show_signup_modal
  })


  toggleLoginModal = () => this.setState({
    show_login_modal: !this.state.show_login_modal
  })


  render() {
    const { show_signup_modal, show_login_modal } = this.state

    return (
      <Container>
        <SignupModal
          visible={show_signup_modal}
          onPressClose={this.toggleSignupModal}
        />
        <LoginModal
          visible={show_login_modal}
          onPressClose={this.toggleLoginModal}
        />
        { HeaderMain({title: 'Home', navigation: this.props.navigation}) }
        <Content padder>
          <Card>
            <CardItem>
              <Text onPress={() => this.toggleSignupModal()}>
                Signup
              </Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text onPress={() => this.toggleLoginModal()}>
                Login
              </Text>
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
