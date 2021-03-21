/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  RefreshControl,
} from 'react-native';
import database from '@react-native-firebase/database';
import {
  Gap,
  Label,
  KosCard,
  KosList,
  TipsList,
  HomeProfile,
} from '../../components';
import {ILGuidelines, ILFairship, IL1, IL2, IL3} from '../../assets';

const Home = ({navigation}) => {
  const [recommended, setRecommended] = useState([]);
  const [popularCities, setPopularCities] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getPopularCities();
    getRecommendedPlace();
    // console.log(popularCities);
  }, []);

  const getPopularCities = () => {
    database()
      .ref('kos_cities/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter((el) => el !== null);
          setPopularCities(filterData);
          console.log('========================1');
          console.log(filterData);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRecommendedPlace = () => {
    database()
      .ref('kos_cities')
      .orderByChild('rating')
      .limitToLast(3)
      .once('value')
      .then((res) => {
        // const oldData = res.val();
        // const data = [];
        // Object.keys(oldData).map((key) => {
        //   data.push({
        //     id: key,
        //     data: oldData(key),
        //   });
        // });
        // setRecommended(res);
        console.log('res recomended', res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onRefresh = () => {
    setRefreshing(true);
    getRecommendedPlace();
    getPopularCities();
    setRefreshing(false);
  };

  return (
    <View style={styles.page}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <HomeProfile />
        <Gap height={30} />
        <Label title="Popular Cities" />
        <Gap height={16} />
        {popularCities.length ? (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {popularCities?.map((item) => {
              return (
                <KosCard
                  key={item.id}
                  image={item.image}
                  city={item.name}
                  onPress={() =>
                    navigation.navigate('PopularCitiesDetail', item)
                  }
                />
              );
            })}
          </ScrollView>
        ) : (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <KosCard type="skeleton" />
          </ScrollView>
        )}

        <Gap height={30} />
        <Label title="Recommended Place" />
        <Gap height={16} />
        {popularCities.length <= 2 ? (
          <KosList type="skeleton" />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <KosList
              image={IL1}
              name="Kuretakeso Hott"
              price={52}
              rating={5}
              location="Bandung, Germany"
              onPress={() => navigation.navigate('KosDetail')}
            />
            <KosList
              image={IL2}
              name="Roemah Nenek"
              price={11}
              rating={4}
              location="Seattle, Bogor"
              onPress={() => navigation.navigate('KosDetail')}
            />
            <KosList
              image={IL3}
              name="Darrling How"
              price={20}
              rating={3}
              location="Jakarta, Indonesia"
              onPress={() => navigation.navigate('KosDetail')}
            />
          </ScrollView>
        )}
        <Label title="Tips & Guidance" />
        <Gap height={16} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.tipsList}>
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
    paddingBottom: 0,
    paddingRight: 0,
  },
  tipsList: {
    paddingBottom: 24,
  },
});
