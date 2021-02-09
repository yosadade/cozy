import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';

const Favourite = () => {
  return (
    <View style={styles.page}>
      <WebView source={{uri: 'https://infinite.red'}} style={{marginTop: 20}} />
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
