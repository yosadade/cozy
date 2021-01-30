import React from 'react';
import {StyleSheet, View, TextInput as TextInputRN} from 'react-native';
import Label from '../Label';

const TextInput = ({placeholder, title, ...restProps}) => {
  return (
    <View style={styles.container}>
      <Label title={title} />
      <TextInputRN
        {...restProps}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {},
  input: {
    fontFamily: 'Poppins-Light',
    backgroundColor: '#F1F1F1',
    borderRadius: 17,
    padding: 11,
    paddingHorizontal: 17,
    marginTop: 8,
  },
});
