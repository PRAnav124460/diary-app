import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCPj7dLblQBZRIxXyInu3eiNrHckUDtsmY',
  authDomain: 'dairy-6aaf5.firebaseapp.com',
  projectId: 'dairy-6aaf5',
  storageBucket: 'dairy-6aaf5.appspot.com',
  messagingSenderId: '969024844121',
  appId: '1:969024844121:web:a36961de6c8c188f9e1c48',
};
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
