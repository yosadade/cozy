import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({type, icon, onPress, title, width}) => {
  if (type === 'login') {
    return (
      <TouchableOpacity
        style={styles.containerLogin}
        activeOpacity={0.7}
        onPress={onPress}>
        <View style={styles.icon}>{icon}</View>
        <Text style={styles.titleLogin}>{title}</Text>
      </TouchableOpacity>
    );
  }
  if (type === 'icon') {
    return (
      <TouchableOpacity
        style={styles.containerIcon}
        activeOpacity={0.7}
        onPress={onPress}>
        {icon}
      </TouchableOpacity>
    );
  }
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
  containerIcon: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLogin: {
    width: 160,
    paddingVertical: 11,
    borderRadius: 8,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#FFFFFF',
  },
  titleLogin: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    color: '#82868E',
  },
  icon: {
    marginBottom: 3,
    marginRight: 10,
  },
});
