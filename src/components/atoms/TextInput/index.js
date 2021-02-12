import React, {useState} from 'react';
import {StyleSheet, View, TextInput as TextInputRN} from 'react-native';
import Label from '../Label';

const TextInput = ({placeholder, title, ...restProps}) => {
  const [border, setBorder] = useState('#FFFFFF');

  const onFocus = () => {
    setBorder('#5843BE');
  };

  const onBlur = () => {
    setBorder('#FFFFFF');
  };

  return (
    <View style={styles.container}>
      <Label title={title} />
      <TextInputRN
        {...restProps}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder={placeholder}
        style={styles.input(border)}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: (border) => ({
    fontFamily: 'Poppins-Light',
    backgroundColor: '#F1F1F1',
    borderRadius: 17,
    padding: 11,
    paddingHorizontal: 17,
    marginTop: 8,
    borderWidth: 1,
    borderColor: border,
  }),
});
