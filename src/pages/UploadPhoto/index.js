import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import database from '@react-native-firebase/database';
import {Gap, Button, Link, Header} from '../../components';
import {showError, storeData} from '../../utils';

const UploadPhoto = ({route, navigation}) => {
  const {fullName, email, uid} = route.params;
  const [photo, setPhoto] = useState('');
  const [photoForDB, setPhotoForDB] = useState('');

  const uploadAndContinue = () => {
    database()
      .ref('users/' + uid + '/')
      .update({photo: photoForDB});

    const data = route.params;
    data.photo = photoForDB;

    storeData('user', data);

    console.log(data);
    navigation.replace('MainApp');
  };

  const onSkip = () => {
    navigation.replace('MainApp');
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
          const dataImage = {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          };
          setPhotoForDB(`data:${response.type};base64, ${response.data}`);
          setPhoto(source);
          // dispatch({type: 'SET_PHOTO', value: dataImage});
          // dispatch({type: 'SET_UPLOAD_STATUS', value: true});
        }
      },
    );
  };
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" subTitle="Select a photo to upload" />
      <View>
        <TouchableOpacity style={styles.containerPhoto} onPress={addPhoto}>
          <View style={styles.photo}>
            {photo ? (
              <Image source={photo} style={styles.photo} />
            ) : (
              <Text style={styles.subTitle}>Add Photo</Text>
            )}
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>{fullName}</Text>
        <Text style={styles.subTitle}>{email}</Text>
      </View>
      <View>
        <Gap height={30} />
        <Button title="Upload & Continue" onPress={uploadAndContinue} />
        <Gap weight={30} />
        <Link title="Skip for" titleBtn="this" onPress={onSkip} />
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
    justifyContent: 'center',
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
