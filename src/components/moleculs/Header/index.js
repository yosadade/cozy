import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {ICBack} from '../../../assets';

const Header = ({onPress, title, subTitle, back}) => {
  return (
    <View style={styles.container}>
      {back && (
        <TouchableOpacity onPress={onPress}>
          <ICBack />
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 24,
    marginLeft: 24,
    color: '#000000',
  },
  subTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    marginLeft: 24,
    color: '#82868E',
  },
});
