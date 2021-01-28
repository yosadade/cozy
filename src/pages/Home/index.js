import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Gap, Label, KosCard, KosList, TipsList} from '../../components';
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

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Explore Now</Text>
        <Text style={styles.subTitle}>Mencari kosan yang cozy</Text>
        <Gap height={30} />
        <Label title="Popular Cities" />
        <Gap height={16} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <KosCard image={ILCity1} city="Jakarta" />
          <KosCard image={ILCity2} city="Bandung" />
          <KosCard image={ILCity3} city="Surabaya" />
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
          />
          <KosList
            image={IL2}
            name="Roemah Nenek"
            price={11}
            location="Seattle, Bogor"
          />
          <KosList
            image={IL3}
            name="Darrling How"
            price={20}
            location="Jakarta, Indonesia"
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
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    color: '#000000',
  },
  subTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    color: '#82868E',
  },
});
