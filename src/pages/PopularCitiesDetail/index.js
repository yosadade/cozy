import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ICBack, IL1, IL2, IL3} from '../../assets';
import {Gap, Label, KosList} from '../../components';

const PopularCitiesDetail = ({navigation, route}) => {
  console.log('route', route.params);
  const data = route.params;
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerWebView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ICBack />
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>Explore Now</Text>
            <Text style={styles.subTitle}>Mencari Kos di Kota Yogyakarta</Text>
          </View>
        </View>
        <Gap height={30} />
        <Label title="Recommended Place" />
        <Gap height={16} />

        <KosList
          image={IL1}
          name="Kuretakeso Hott"
          price={52}
          location="Bandung, Germany"
          onPress={() => navigation.navigate('KosDetail')}
        />
        <KosList
          image={IL2}
          name="Roemah Nenek"
          price={11}
          location="Seattle, Bogor"
          onPress={() => navigation.navigate('KosDetail')}
        />
        <KosList
          image={IL3}
          name="Darrling How"
          price={20}
          location="Jakarta, Indonesia"
          onPress={() => navigation.navigate('KosDetail')}
        />
        <KosList
          image={IL1}
          name="Kuretakeso Hott"
          price={52}
          location="Bandung, Germany"
          onPress={() => navigation.navigate('KosDetail')}
        />
        <KosList
          image={IL2}
          name="Roemah Nenek"
          price={11}
          location="Seattle, Bogor"
          onPress={() => navigation.navigate('KosDetail')}
        />
        <KosList
          image={IL3}
          name="Darrling How"
          price={20}
          location="Jakarta, Indonesia"
          onPress={() => navigation.navigate('KosDetail')}
        />
      </ScrollView>
    </View>
  );
};

export default PopularCitiesDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 0,
  },
  headerWebView: {
    paddingTop: 10,
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
