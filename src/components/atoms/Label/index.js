import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Label = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Label;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#000000',
  },
});
