import R from 'ramda'
import FireB from '../lib/firebase/index.js'

const TYPE = {
  signup_succeed: 'user_signup_succeed',
  fbLogin_succeed: 'user_facebook_login_succeed'
}

const emailSignupSuccessfully = () => ({ type: TYPE.signup_succeed })
const facebookLoginSuccessfully = payload => ({
  type: TYPE.fbLogin_succeed, payload
})


const emailSignup = (email, password) => (dispatch, getState) => FireB
  .signup(email, password)

  .then(() => dispatch(emailSignupSuccessfully()))


const facebookLogin = token => (dispatch, getState) => FireB
  .facebookLogin(token)
  
  .then(payload => dispatch(facebookLoginSuccessfully(payload)))


export default {
  TYPE,

  emailSignup,
  facebookLogin
}
