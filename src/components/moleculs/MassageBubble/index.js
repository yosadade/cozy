import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ILProfile} from '../../../assets';

const MassageBubble = ({type, message, time}) => {
  if (type === 'kos owner') {
    return (
      <View Style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <Image source={ILProfile} style={styles.image} />
          <View>
            <View style={styles.wrapperMessage(type)}>
              <Text style={styles.message(type)}>{message}</Text>
            </View>
            <Text style={styles.time(type)}>{time}</Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View Style={styles.container}>
      <View style={styles.wrapperMessage(type)}>
        <Text style={styles.message(type)}>{message}</Text>
      </View>
      <Text style={styles.time(type)}>{time}</Text>
    </View>
  );
};

export default MassageBubble;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 8,
    top: 38,
    marginRight: 10,
  },
  wrapperMessage: (type) => ({
    padding: 12,
    width: 180,
    marginTop: 20,
    backgroundColor: type === 'kos owner' ? '#0BCAD4' : '#EDFCFD',
    justifyContent: 'center',
    marginLeft: type === 'kos owner' ? null : 'auto',
    borderRadius: 8,
    borderBottomRightRadius: type === 'kos owner' ? 8 : 0,
    borderBottomLeftRadius: type === 'kos owner' ? 0 : 8,
  }),
  message: (type) => ({
    fontSize: 11,
    fontFamily: 'Poppins-Light',
    color: type === 'kos owner' ? '#FFFFFF' : '#222222',
  }),
  time: (type) => ({
    fontSize: 11,
    marginTop: 8,
    fontFamily: 'Poppins-Light',
    color: '#82868E',
    textAlign: type === 'kos owner' ? null : 'right',
  }),
});
