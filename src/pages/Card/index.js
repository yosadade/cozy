/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  ILProfile,
  ICLanguage,
  ICProfile,
  ICHelp,
  ICRate,
  ICSignOut,
} from '../../assets';
import ItemListMenu from '../../components/moleculs/ItemListMenu';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Modal} from '../../components';
import {getData} from '../../utils';

const Card = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState(ILProfile);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    getDataUser();
    getPhotoUser();
  }, [getDataUser, getPhotoUser]);

  const getDataUser = () => {
    getData('user')
      .then((res) => {
        console.log(res);
        setFullName(res.fullName);
        setEmail(res.email);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPhotoUser = () => {
    getData('photo').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setPhoto(res);
      console.log(res);
    });
  };

  const onUpdateProfile = () => {
    navigation.navigate('UpdateProfile');
  };

  const onModal = () => {
    setOpen(true);
  };

  const onCancel = () => {
    setOpen(!open);
  };

  const onSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        AsyncStorage.clear();
        navigation.replace('SignIn');
      });
  };
  return (
    <>
      <View style={styles.page}>
        <View style={styles.photo}>
          <View activeOpacity={0.7} style={styles.borderPhoto}>
            <Image source={photo} style={styles.photoContainer} />
          </View>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <View style={styles.itemList}>
          <ItemListMenu
            label="Edit Profile"
            subTitle="Name, Address & Password"
            onPress={onUpdateProfile}
            icon={<ICProfile />}
          />
          <ItemListMenu
            label="Language"
            subTitle="Avaible 3 Languages"
            icon={<ICLanguage />}
          />
          <ItemListMenu
            label="Rate App"
            subTitle="On Google Play Store"
            icon={<ICRate />}
          />
          <ItemListMenu
            label="Help Center"
            subTitle="Read our guidelines"
            icon={<ICHelp />}
          />
          <ItemListMenu
            label="Sign Out"
            subTitle="Sign Out"
            onPress={onModal}
            icon={<ICSignOut />}
          />
        </View>
      </View>
      {open && (
        <Modal
          title="Apakah anda yakin akan keluar?"
          onPressLeft={onSignOut}
          onPressRight={onCancel}
        />
      )}
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  photo: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    paddingVertical: 26,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
  },
  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    padding: 24,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  name: {
    fontSize: 18,
    marginTop: 16,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  email: {
    fontSize: 14,
    marginTop: 6,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  itemList: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
});
