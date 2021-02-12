import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {IL1, IL2, IL3} from '../../assets';
import {Gap, Label, KosList, Header} from '../../components';

const PopularCitiesDetail = ({navigation, route}) => {
  console.log('route', route.params);
  const data = route.params;
  return (
    <View style={styles.page}>
      <Header
        back
        title="Explore Now"
        subTitle={`Mencari kos di kota ${data.name}`}
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
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
    padding: 24,
    paddingBottom: 0,
  },
});
