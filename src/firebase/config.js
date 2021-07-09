import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyC7Zhq3lPTJq4gybVUgvzxBnwfolzIudhY',
  authDomain: 'photo-gallery-react-2900d.firebaseapp.com',
  projectId: 'photo-gallery-react-2900d',
  storageBucket: 'photo-gallery-react-2900d.appspot.com',
  messagingSenderId: '944841034093',
  appId: '1:944841034093:web:5af1558c7830132d247264',
}
//Initialize Firebase
firebase.initializeApp(firebaseConfig)

//Initialize and Exporting Storage and FireStorage
const projectStorage = firebase.storage()
const projectFireStore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFireStore, timestamp }
