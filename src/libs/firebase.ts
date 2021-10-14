import { initializeApp} from 'firebase/app'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCF4-jN7NQaX_RzyjLNfxqrEjj9VXk807I',
    authDomain: 'react-gallery-f20d8.firebaseapp.com',
    projectId: 'react-gallery-f20d8',
    storageBucket: 'react-gallery-f20d8.appspot.com',
    messagingSenderId: '67011403952',
    appId: '1:67011403952:web:71bc3a52cb3cfd1e9ddb75'
  };
  

const firebaseapp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseapp);