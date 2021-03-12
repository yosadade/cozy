import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {IL1, IL2, IL3, IL4, IL5} from '../../assets';
import {Gap, Label, KosList, Header, TextInput} from '../../components';

const kos = [
  {
    id: 1,
    image: IL1,
    name: 'Kuretakeso Hott',
    price: 52,
    rating: 4,
    location: 'Selokan Mataram, Yogyakarta',
  },
  {
    id: 2,
    image: IL2,
    name: 'Roemah Nenek',
    price: 11,
    rating: 5,
    location: 'Seattle, Yogyakarta',
  },
  {
    id: 3,
    image: IL3,
    name: 'Darling How',
    price: 20,
    rating: 3,
    location: 'Giwangan, Yogyakarta ',
  },
  {
    id: 4,
    image: IL4,
    name: 'Drang Crown',
    price: 52,
    rating: 5,
    location: 'Malioboro, Yogyakarta ',
  },
  {
    id: 5,
    image: IL5,
    name: 'City of Cactus',
    price: 20,
    rating: 3,
    location: 'Tamansari, Yogyakarta ',
  },
];

const PopularCitiesDetail = ({navigation, route}) => {
  const data = route.params;
  const [search, setSearch] = useState('');

  const filterData = kos.filter((item) => {
    return item.name.indexOf(search) >= 0;
  });

  return (
    <View style={styles.page}>
      <Header
        back
        title="Explore Now"
        subTitle={`Mencari kos di kota ${data.name}`}
        onPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={0} />
        <TextInput
          placeholder="Search kos"
          onChangeText={(value) => setSearch(value)}
        />
        {/* <Label title="Recommended Place" /> */}
        <Gap height={32} />
        {filterData.map((item, index) => {
          return (
            <KosList
              key={index}
              image={item.image}
              name={item.name}
              rating={item.rating}
              price={item.price}
              location={item.location}
              onPress={() => navigation.navigate('KosDetail')}
            />
          );
        })}
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
