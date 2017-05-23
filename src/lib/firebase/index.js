import * as Firebase from 'firebase'
import Config from '../../config/firebase.js'

class LibApp {
  constructor() {
    this.app = Firebase.initializeApp(Config.SETUP, Config.Name)
  }

  signup = (email, password) => this.app.auth()
    .createUserWithEmailAndPassword(email, password)
}

export default new LibApp
