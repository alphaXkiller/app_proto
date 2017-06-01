import R from 'ramda'
import { user } from '../actions/index.js'

const getUser = R.applySpec({
  uid: R.prop('uid'),
  name: R.prop('displayName'),
  email: R.prop('email'),
  email_verified: R.prop('emailVerified'),
  profile_image: R.propOr('', 'photoURL')
})

const reducer = (user_state={}, action) => R.cond([
  [
    R.equals(user.TYPE.fbLogin_succeed),
    status => R.merge(getUser(action.payload), { status })
  ]
  ,
  [
    R.equals(user.TYPE.signup_succeed),
    R.always({status: user.TYPE.signup_succeed})
  ]
  ,
  [
    R.T, R.always(user_state)
  ]
])(action.type)

export default reducer
