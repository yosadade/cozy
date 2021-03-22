import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../../atoms';

const Modal = ({type, onPressLeft, onPressRight, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.button}>
          {type !== 'forgot-password' && (
            <>
              <Button
                type="modal"
                title="ya"
                width={100}
                backgroundColor="#F1F1F1"
                color="#82868E"
                onPress={onPressLeft}
              />
              <Gap width={10} />
            </>
          )}
          <Button
            type="modal"
            title={type === 'forgot-password' ? 'Done' : 'tidak'}
            width={100}
            backgroundColor="#5843BE"
            color="#FFFFFF"
            onPress={onPressRight}
          />
        </View>
      </View>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: 'absolute',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  modal: {
    padding: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
