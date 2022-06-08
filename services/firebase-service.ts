import type { FirebaseApp } from 'firebase/app'
import { initializeApp } from 'firebase/app'
import type { Database } from 'firebase/database'
import { getDatabase } from 'firebase/database'

export class Firebase {
  firebaseConfig: any
  firebaseApp: FirebaseApp
  firebaseDatabase: Database

  constructor(apiKey: string) {
    this.firebaseConfig = {
      apiKey,
      authDomain: 'wk-hackathon-2022.firebaseapp.com',
      databaseURL: 'https://wk-hackathon-2022-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'wk-hackathon-2022',
      storageBucket: 'wk-hackathon-2022.appspot.com',
      messagingSenderId: '227903843338',
      appId: '1:227903843338:web:8f9e51aaa1b6b84fe803f3',
    }

    this.firebaseApp = initializeApp(this.firebaseConfig)
    this.firebaseDatabase = getDatabase(this.firebaseApp)
  }
}

export default Firebase
