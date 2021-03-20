import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {TextInput, Gap, Button} from '../../components';
import {getData} from '../../utils';

const UpdateProfile = ({navigation}) => {
  const [photo, setPhoto] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getDataUser();
    getDataPhoto();
  }, []);

  const getDataUser = () => {
    getData('user')
      .then((res) => {
        console.log(res);
        setEmail(res.email);
        setFullName(res.fullName);
        setPassword(res.password);
        setPhoneNumber(res.phoneNumber);
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

  const onUpdate = () => {
    navigation.replace('MainApp');
  };

  return (
    <View style={styles.page}>
      <View style={styles.photo}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.borderPhoto}
          onPress={() => {}}>
          <Image source={photo} style={styles.photoContainer} />
        </TouchableOpacity>
      </View>
      <View>
        <TextInput title="Full Name" placeholder="Full Name" value={fullName} />
        <Gap height={15} />
        <TextInput title="Email" placeholder={email} disable />
        <Gap height={15} />
        <TextInput
          title="Phone Number"
          placeholder="Phone Number"
          value={phoneNumber}
        />
        <Gap height={15} />
        <TextInput title="Password" placeholder="Password" value={password} />
        <Gap height={30} />
      </View>
      <View style={styles.button}>
        <Button title="Update" onPress={onUpdate} />
      </View>
    </View>
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
