import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {setLoading} from './global';
import {storeData, showError} from '../../utils';

export const signInAction = (form, navigation) => (dispatch) => {
  if (form.email.length === 0 && form.fullName.length === 0) {
    showError('Please complete your personal data !!');
  } else if (form.password !== form.confirm_password) {
    showError('Password and confirm password are not the same');
  } else if (form.password.length < 6 && form.confirm_password.length < 6) {
    showError('should be at least 6 characters !!');
  } else if (form.confirm_password === form.password) {
    dispatch({type: 'SET_LOADING', value: true});
    auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        dispatch({type: 'SET_LOADING', value: false});
        // setForm('reset');
        const data = {
          fullName: form.fullName,
          email: form.email,
          password: form.password,
          uid: success.user.uid,
        };
        database()
          .ref('users/' + success.user.uid + '/')
          .set(data);

        storeData('user', data);
        navigation.reset({index: 0, route: [{name: 'UploadPhoto'}]});
        console.log('sukses');
      })
      .catch((error) => {
        dispatch({type: 'SET_LOADING', value: false});
        console.log(error.code);
        showError(error.message);
      });
  }
};
