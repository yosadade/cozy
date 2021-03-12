import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {kos} from '../../assets';
import {KosList, Header, TextInput} from '../../components';

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
      <TextInput
        placeholder="Search kos"
        onChangeText={(value) => setSearch(value)}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
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
  content: {
    marginTop: 32,
  },
});
