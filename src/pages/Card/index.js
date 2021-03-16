import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ILProfile} from '../../assets';
import ItemListMenu from '../../components/moleculs/ItemListMenu';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Modal} from '../../components';

const Card = ({navigation}) => {
  const [open, setOpen] = useState(true);

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
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.borderPhoto}
            onPress={() => {}}>
            <Image source={ILProfile} style={styles.photoContainer} />
          </TouchableOpacity>
          <Text style={styles.name}>Hanidah Zakiya</Text>
          <Text style={styles.email}>hanidahzakiya@mail.com</Text>
        </View>
        <View style={styles.itemList}>
          <ItemListMenu
            label="Edit Profile"
            subTitle="Name, Address & Password"
          />
          <ItemListMenu label="Language" subTitle="Avaible 3 Languages" />
          <ItemListMenu label="Rate App" subTitle="On Google Play Store" />
          <ItemListMenu label="Help Center" subTitle="Read our guidelines" />
          <ItemListMenu
            label="Sign Out"
            subTitle="Sign Out"
            onPress={onModal}
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
