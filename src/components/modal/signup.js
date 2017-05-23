import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal, Text } from 'react-native'
import {
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
  Card,
  CardItem,
  Body
} from 'native-base'

import ModalHeader from '../shared-components/header-modal.js'

import { user } from '../../actions/index.js'

class SignupModal extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  updateEmail = email => this.setState({email})


  updatePassword = password => this.setState({password})


  submit = () => this.props.emailSignup(this.state.email, this.state.password)


  render() {
    return (
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={this.props.visible}
      >
        { ModalHeader({title: 'Signup', onPressClose: this.props.onPressClose})}
        {
          this.props.user.status === user.TYPE.signup_succeed ?
            <Card>
              <CardItem>
                <Body>
                  <Text>
                    Signup successfully! Please go login
                  </Text>
                </Body>
              </CardItem>
            </Card>
          : <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input onChangeText={this.updateEmail}/>
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input onChangeText={this.updatePassword} secureTextEntry/>
              </Item>
              <Button full rounded bordered primary inconLeft onPress={this.submit}>
                <Icon name='beer' />
                <Text>Signup</Text>
              </Button>
            </Form>
        }
      </Modal>
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: state.user
})


const mapDispatchToProps = (dispatch, props) => ({
  emailSignup: (email, password) => dispatch(user.emailSignup(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal)
