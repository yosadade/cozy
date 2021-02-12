import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {ILProfile} from '../../../assets';

const MassageList = ({onPress, name, massage}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}>
      <Image source={ILProfile} style={styles.image} />
      <View style={styles.titleWrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.massage}>{massage}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MassageList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    marginBottom: 24,
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
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#000000',
  },
  massage: {
    fontFamily: 'Poppins-Light',
    fontSize: 12,
    color: '#7A7E86',
  },
});
