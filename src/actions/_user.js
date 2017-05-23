import R from 'ramda'
import FireB from '../lib/firebase/index.js'

const TYPE = {
  signup_succeed: 'user_signup_succeed'
}

const emailSignupSuccessfully = () => ({ type: TYPE.signup_succeed })


const emailSignup = (email, password) => (dispatch, getState) => FireB
  .signup(email, password)

  .then(() => dispatch(emailSignupSuccessfully()))


export default {
  TYPE,

  emailSignup
}
