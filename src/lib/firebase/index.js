import Bluebird from 'bluebird'
import * as Firebase from 'firebase'
import Config from '../../config/firebase.js'

class LibApp {
  _app = Firebase.initializeApp(Config.SETUP, Config.Name)
  _provider = {
    fb: new Firebase.auth.FacebookAuthProvider()
  }

  signup = (email, password) => Bluebird.resolve(
    this._app.auth().createUserWithEmailAndPassword(email, password)
  )

  facebookLogin = token => Bluebird
    .resolve(Firebase.auth.FacebookAuthProvider.credential(token))

    .then( cred => this._app.auth().signInWithCredential(cred))
}

export default new LibApp
