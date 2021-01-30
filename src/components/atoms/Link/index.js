import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Link = ({title, titleBtn, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Text style={styles.titleBtn}>{titleBtn}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  title: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    marginRight: 5,
    color: '#82868E',
  },
  titleBtn: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    color: '#5843BE',
  },
});
