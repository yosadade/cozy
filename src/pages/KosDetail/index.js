import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {
  IL1,
  ICBack,
  ICLove,
  ICLoveActive,
  ILDetail1,
  ILDetail3,
  ILDetail2,
  IL2,
  ICLocation,
} from '../../assets';
import {
  Button,
  Gap,
  RatingDetail,
  FasilitiesDetail,
  KosCard,
  Label,
} from '../../components';

const KosDetail = ({navigation}) => {
  const [icon, setIcon] = useState(false);
  const [modal, setModal] = useState(false);

  const onFavourite = () => {
    setIcon(!icon);
  };

  const onBook = () => {
    Linking.openURL(
      'whatsapp://send?text=Hello cozy house&phone=+62895811052010',
    );
  };

  const onLocation = () => {
    setModal(true);
  };

  const onBack = () => {
    setModal(false);
  };

  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground source={IL2} style={styles.image}>
            <View style={styles.header}>
              <Button
                type="icon"
                icon={<ICBack />}
                onPress={() => navigation.goBack()}
              />
              <Button
                type="icon"
                icon={icon ? <ICLoveActive /> : <ICLove />}
                onPress={onFavourite}
              />
            </View>
          </ImageBackground>
          <View style={styles.content}>
            <RatingDetail />
            <Gap height={30} />
            <FasilitiesDetail />
            <Gap height={30} />
            <Label title="Photos" />
            <Gap height={12} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <KosCard type="detail" image={ILDetail1} />
              <KosCard type="detail" image={ILDetail2} />
              <KosCard type="detail" image={ILDetail3} />
            </ScrollView>
            <Gap height={30} />
            <Label title="Location" />
            <Gap height={12} />
            <TouchableOpacity
              style={styles.lcoation}
              activeOpacity={0.7}
              onPress={onLocation}>
              <View>
                <Text style={styles.titleLocation}>
                  Jln. Kappan Sukses No. 20
                </Text>
                <Text style={styles.titleLocation}>Palembang</Text>
              </View>
              <View style={styles.iconLocation}>
                <ICLocation />
              </View>
            </TouchableOpacity>
            <View style={styles.button}>
              <Button title="Book Now" onPress={onBook} />
            </View>
          </View>
        </ScrollView>
      </View>
      {modal && (
        <View style={styles.webView}>
          <View style={styles.headerWebView}>
            <TouchableOpacity onPress={onBack}>
              <ICBack />
            </TouchableOpacity>
            <View>
              <Text style={styles.title}>Location</Text>
              <Text style={styles.subTitle}>Mencari kosan yang cozy</Text>
            </View>
          </View>

          <Gap height={30} />
          {/* <WebView source={{uri: 'https://reactnative.dev/'}} />; */}
        </View>
      )}
    </>
  );
};

export default KosDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    height: 350,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 30,
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    top: -20,
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  lcoation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleLocation: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#7A7E86',
  },
  iconLocation: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#F6F7F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    paddingTop: 40,
    // paddingBottom: 10,
  },
  webView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    paddingTop: 24,
  },
  headerWebView: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    marginLeft: 24,
    color: '#000000',
  },
  subTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    marginLeft: 24,
    color: '#82868E',
  },
});
