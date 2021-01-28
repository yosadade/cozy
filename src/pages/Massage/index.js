import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Massage = () => {
  return (
    <View style={styles.page}>
      <Text>Massage</Text>
    </View>
  );
};

export default Massage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
