import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header, Gap, MassageList, KosList} from '../../components';
import {IL1, IL2, IL3} from '../../assets';

const Favourite = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Favourite" subTitle="Mencari Kosan yang Cozy" />
      <Gap height={30} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
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

export default Favourite;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
    paddingHorizontal: 0,
  },
  content: {
    paddingHorizontal: 24,
  },
});
