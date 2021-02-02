import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import {GoogleSignin} from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId:
    '927870616403-2s1g1sj90d45arjesid8taua5kabko5m.apps.googleusercontent.com',
  offlineAccess: true,
});

const firebaseConfig = {
  apiKey: 'AIzaSyAi6J07btyNXGepydyoq7Cbsi-1GdHrr90',
  authDomain: 'cozy-9de4a.firebaseapp.com',
  projectId: 'cozy-9de4a',
  storageBucket: 'cozy-9de4a.appspot.com',
  messagingSenderId: '927870616403',
  appId: '1:927870616403:web:ac25f91a8007b15464d7a6',
  measurementId: 'G-EE2P2MDX1T',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default () => {
  return {firebase, auth, database, storage};
};
