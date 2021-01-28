import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';

const KosCard = ({type, onPress, city, image}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{city}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default KosCard;

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 150,
    borderRadius: 20,
    backgroundColor: '#F6F7F8',
    marginRight: 20,
  },
  image: {
    width: 120,
    height: 102,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#000000',
  },
});
