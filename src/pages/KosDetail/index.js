import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  Text,
} from 'react-native';
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

  const onFavourite = () => {
    setIcon(!icon);
  };

  return (
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
          <View style={styles.lcoation}>
            <View>
              <Text style={styles.titleLocation}>
                Jln. Kappan Sukses No. 20
              </Text>
              <Text style={styles.titleLocation}>Palembang</Text>
            </View>
            <View style={styles.iconLocation}>
              <ICLocation />
            </View>
          </View>
          <View style={styles.button}>
            <Button title="Book Now" />
          </View>
        </View>
      </ScrollView>
    </View>
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
});
