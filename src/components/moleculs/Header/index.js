import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Header</Text>
      <Text style={styles.subTitle}>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {},
});
