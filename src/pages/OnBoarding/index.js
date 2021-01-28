import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ICLogo, ILBottom} from '../../assets';
import {Button} from '../../components';

const OnBoarding = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.top}>
        <ICLogo />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Find Cozy House</Text>
          <Text style={styles.title}>to Stay and Happy</Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Stop membuang banyak waktu</Text>
          <Text style={styles.subTitle}>pada tempat yang tidak habitable</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Explore Now"
            width={220}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
      <Image source={ILBottom} style={styles.ilustration} />
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  top: {
    paddingTop: 50,
    paddingBottom: 23,
    paddingHorizontal: 30,
  },
  titleContainer: {
    paddingTop: 30,
    paddingBottom: 10,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#000000',
  },
  subTitleContainer: {
    paddingBottom: 40,
  },
  subTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    color: '#82868E',
  },
  buttonContainer: {
    paddingBottom: 23,
  },
  ilustration: {
    width: '100%',
    height: 433,
  },
});
