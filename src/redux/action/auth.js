import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {setLoading} from './global';
import {storeData} from '../../utils';

export const signInAction = (form, navigation) => (dispatch) => {
  dispatch(setLoading(true));
  auth()
    .createUserWithEmailAndPassword(form.email, form.password)
    .then((success) => {
      console.log('success', success);
      // setForm('reset');
      const data = {
        fullName: form.fullName,
        email: form.email,
        password: form.password,
        uid: success.user.uid,
      };
      dispatch(setLoading(false));
      database()
        .ref('users/' + success.user.uid + '/')
        .set(data);
      storeData('user', data);
      navigation.replace('MainApp', data);
    })
    .catch((error) => {
      dispatch(setLoading(false));
      console.log(error);
    });
};
