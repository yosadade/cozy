import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {
  Gap,
  Label,
  KosCard,
  KosList,
  TipsList,
  HomeProfile,
} from '../../components';
import {
  ILGuidelines,
  ILFairship,
  IL1,
  IL2,
  IL3,
  ILCity1,
  ILCity2,
  ILCity3,
} from '../../assets';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeProfile />
        <Gap height={30} />
        <Label title="Popular Cities" />
        <Gap height={16} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <KosCard
            image={ILCity1}
            city="Jakarta"
            onPress={() => navigation.navigate('KosDetail')}
          />
          <KosCard
            image={ILCity2}
            city="Bandung"
            onPress={() => navigation.navigate('KosDetail')}
          />
          <KosCard
            image={ILCity3}
            city="Surabaya"
            onPress={() => navigation.navigate('KosDetail')}
          />
        </ScrollView>
        <Gap height={30} />
        <Label title="Recommended Place" />
        <Gap height={16} />
        <ScrollView showsVerticalScrollIndicator={false}>
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
        <Label title="Tips & Guidance" />
        <Gap height={16} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <TipsList
            title="City Guidelines"
            subTitle="Updated 20 Apr"
            image={ILGuidelines}
          />
          <TipsList
            title="Jakarta Fairship"
            subTitle="Updated 11 Dec"
            image={ILFairship}
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
    paddingRight: 0,
  },
});
