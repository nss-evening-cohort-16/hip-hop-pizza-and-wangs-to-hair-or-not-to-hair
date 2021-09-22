import firebase from 'firebase/app';
import 'firebase/auth';
// import loginButton from '../../components/buttons/loginButton';
import firebaseConfig from '../../../api/apiKeys';
import startApp from '../../views/startApp';
import homeLoggedOut from '../../views/homeLoggedOut';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp(user);
    } else {
      // person is NOT logged in
      homeLoggedOut();
    }
  });
};

export default checkLoginStatus;
