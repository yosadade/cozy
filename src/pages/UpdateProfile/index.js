import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {TextInput, Gap, Button} from '../../components';
import {getData, showError, storeData} from '../../utils';
import {launchImageLibrary} from 'react-native-image-picker';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
  });
  const [photo, setPhoto] = useState(null);
  const [photoForDB, setPhotoForDB] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getDataUser();
    getDataPhoto();
  }, []);

  const getDataUser = () => {
    getData('user')
      .then((res) => {
        console.log(res);
        const data = res;
        setProfile(data);

        setPassword(res.password);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDataPhoto = () => {
    getData('photo').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setPhoto(res);
      console.log(res);
    });
  };

  const addPhoto = () => {
    launchImageLibrary(
      {
        quality: 0.5,
        maxWidth: 200,
        maxHeight: 200,
      },
      (response) => {
        if (response.didCancel || response.errorMessage) {
          showError('Anda tidak memilih photo');
        } else {
          const source = {uri: response.uri};
          console.log('res', response);
          const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };
          console.log('data image', dataImage);
          setPhoto(source);

          // dispatch({type: 'SET_PHOTO', value: dataImage});
          // dispatch({type: 'SET_UPLOAD_STATUS', value: true});
        }
      },
    );
  };

  const onUpdate = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showError('Password kurang dari 6 karater');
      } else {
        updatePassword();
        updateProfileData();
      }
    } else {
      updateProfileData();
    }
  };

  const updatePassword = () => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        user.updatePassword(password).catch((err) => {
          showError(err.message);
        });
      }
    });
  };

  const updateProfileData = () => {
    console.log(profile);
    // const data = profile;
    const photoForDB = photo;
    database()
      .ref(`users/${profile.uid}/`)
      .update(profile)
      .then((res) => {
        storeData('user')
          .then(() => {
            navigation.replace('MainApp');
          })
          .catch(() => {
            showError('Terjadi Masalah');
          });
        console.log(res);
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const {fullName, phoneNumber, email} = profile;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={styles.page}>
        <View style={styles.photo}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.borderPhoto}
            onPress={addPhoto}>
            <Image source={photo} style={styles.photoContainer} />
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            title="Full Name"
            placeholder="Full Name"
            value={fullName}
            onChangeText={(value) => changeText('fullName', value)}
          />
          <Gap height={15} />
          <TextInput title="Email" placeholder={email} disable />
          <Gap height={15} />
          <TextInput
            title="Phone Number"
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={(value) => changeText('phoneNumber', value)}
          />
          <Gap height={15} />
          <TextInput
            title="Password"
            placeholder="Password"
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <Gap height={30} />
        </View>
        <View style={styles.button}>
          <Button title="Update" onPress={onUpdate} />
        </View>
      </View>
    </ScrollView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  photo: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
  },
  photoContainer: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    padding: 24,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
  },
  button: {},
});
