import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header, Gap, MassageList} from '../../components';

const Massage = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Messages" subTitle="Mencari Kosan yang Cozy" />
      <Gap height={30} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MassageList
          name="Roemah Nenek"
          massage="Baik ibu, terima kasih banyak atas wakt..."
          onPress={() => navigation.navigate('Chatting')}
        />
        <MassageList
          name="Roemah Nenek"
          massage="Baik ibu, terima kasih banyak atas wakt..."
          onPress={() => navigation.navigate('Chatting')}
        />
        <MassageList
          name="Roemah Nenek"
          massage="Baik ibu, terima kasih banyak atas wakt..."
          onPress={() => navigation.navigate('Chatting')}
        />
        <MassageList
          name="Roemah Nenek"
          massage="Baik ibu, terima kasih banyak atas wakt..."
          onPress={() => navigation.navigate('Chatting')}
        />
      </ScrollView>
    </View>
  );
};

export default Massage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
    paddingHorizontal: 0,
  },
  messages: {
    paddingHorizontal: 24,
  },
  list: {
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  titleWrapper: {
    justifyContent: 'center',
  },
});
