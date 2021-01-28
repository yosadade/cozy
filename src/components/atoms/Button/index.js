import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, title, width}) => {
  return (
    <TouchableOpacity
      style={styles.container(width)}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (width) => ({
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5843BE',
    paddingVertical: 11,
    borderRadius: 17,
    width: width,
  }),
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#FFFFFF',
  },
});
