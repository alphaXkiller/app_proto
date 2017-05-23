import R from 'ramda'
import { user } from '../actions/index.js'

const reducer = (user_state={}, action) => R.cond([
  [
    R.equals(user.TYPE.signup_succeed),
    R.always({status: user.TYPE.signup_succeed})
  ]
  ,
  [
    R.T, R.always(user)
  ]
])(action.type)

export default reducer
