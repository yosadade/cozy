import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';

const KosCard = ({type, onPress, city, image}) => {
  if (type === 'detail') {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={styles.container(type)}>
        <Image source={image} style={styles.image(type)} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container(type)}>
      <Image source={{uri: image}} style={styles.image(type)} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{city}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default KosCard;

const styles = StyleSheet.create({
  container: (type) => ({
    width: type === 'detail' ? 110 : 120,
    height: type === 'detail' ? 80 : 150,
    borderRadius: 20,
    backgroundColor: '#F6F7F8',
    marginRight: type === 'detail' ? 18 : 20,
  }),
  image: (type) => ({
    width: type === 'detail' ? 110 : 120,
    height: type === 'detail' ? 80 : 102,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: type === 'detail' ? 20 : 0,
    borderBottomRightRadius: type === 'detail' ? 20 : 0,
    backgroundColor: '#FFFFFF',
  }),
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
