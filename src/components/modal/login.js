import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Text, View } from 'react-native'
import { LoginButton, AccessToken } from 'react-native-fbsdk'
import Firebase from '../../lib/firebase/index.js'
import {
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
  Card,
  CardItem,
  Body,
} from 'native-base'

import ModalHeader from '../shared-components/header-modal.js'

import { user } from '../../actions/index.js'

class LoginModal extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.user.uid && !prevProps.user.uid)
      this.props.onPressClose()
  }

  onLoginFb = (err, result) => {
    if (err) {
      alert('Login error' + result.error)
      return
    }

    if (result.isCancelled) {
      console.log('cancel handler')
      return
    }

    AccessToken
      .getCurrentAccessToken()
      .then( data => this.props.facebookLogin(data.accessToken))
  }

  render() {
    return (
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={this.props.visible}
      >
        { ModalHeader({title: 'Login', onPressClose: this.props.onPressClose})}
        <View>
          <LoginButton
            publishPermissions={["publish_actions"]}
            onLoginFinished={this.onLoginFb}
            onLogoutFinished={() => alert("logout.")}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Button primary bordered>
            <Text>Google Login</Text>
          </Button>
        </View>
      </Modal>
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: state.user
})


const mapDispatchToProps = (dispatch, props) => ({
  facebookLogin: token => dispatch(user.facebookLogin(token)),
  googleLogin: () => {}
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginModal)
