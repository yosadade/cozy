import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Gap, Button, Link, Header} from '../../components';

const UploadPhoto = ({route, navigation}) => {
  const {fullName, email} = route.params;

  const onContinue = () => {
    navigation.replace('MainApp');
  };

  const onSignIn = () => {
    navigation.navigate('SignIn');
  };
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" subTitle="Select a photo to upload" />
      <View>
        <TouchableOpacity style={styles.containerPhoto}>
          <Image style={styles.photo} />
          <Text style={styles.subTitle}>Add Photo</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{fullName}</Text>
        <Text style={styles.subTitle}>{email}</Text>
      </View>
      <View>
        <Gap height={30} />
        <Button title="Upload & Continue" onPress={onContinue} />
        <Gap weight={30} />
        <Link title="Skip for" titleBtn="this" onPress={onSignIn} />
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    padding: 24,
  },
  containerPhoto: {
    width: 130,
    height: 130,
    borderRadius: 130,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
  },
  photo: {
    width: 110,
    height: 110,
    borderRadius: 110,
    backgroundColor: '#F0F0F0',
    alignSelf: 'center',
    position: 'absolute',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    marginTop: 26,
    color: '#000000',
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    color: '#82868E',
    textAlign: 'center',
  },
});
