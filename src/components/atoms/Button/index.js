import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICSend, ICSendActive} from '../../../assets';

const Button = ({
  type,
  icon,
  onPress,
  title,
  width,
  disable,
  backgroundColor,
  color,
}) => {
  if (type === 'modal') {
    return (
      <TouchableOpacity
        style={styles.containerModal(backgroundColor)}
        activeOpacity={0.7}
        onPress={onPress}>
        <Text style={styles.titleModal(color)}>{title}</Text>
      </TouchableOpacity>
    );
  }
  if (type === 'send') {
    return (
      <TouchableOpacity
        style={styles.containerSend(disable)}
        activeOpacity={0.7}
        onPress={onPress}>
        {disable ? <ICSend /> : <ICSendActive />}
      </TouchableOpacity>
    );
  }
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
  containerSend: (disable) => ({
    backgroundColor: disable ? '#F1F1F1' : '#5843BE',
    borderRadius: 17,
    padding: 9,
    justifyContent: 'center',
    alignItems: 'center',
    top: 13,
  }),
  containerModal: (backgroundColor) => ({
    width: 120,
    paddingVertical: 11,
    borderRadius: 8,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }),
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
  titleModal: (color) => ({
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    color: color,
  }),
  icon: {
    marginBottom: 3,
    marginRight: 10,
  },
});
