import { defineNuxtPlugin } from 'nuxt/app'
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

export default defineNuxtPlugin(() => {
// Import the functions you need from the SDKs you need

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'wk-hackathon-2022.firebaseapp.com',
    databaseURL: 'https://wk-hackathon-2022-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'wk-hackathon-2022',
    storageBucket: 'wk-hackathon-2022.appspot.com',
    messagingSenderId: '227903843338',
    appId: '1:227903843338:web:8f9e51aaa1b6b84fe803f3',
  }

  const app = initializeApp(firebaseConfig)

  return {
    provide: {
      firebase: app,
      fbDatabase: getDatabase(app),
    },
  }
})
