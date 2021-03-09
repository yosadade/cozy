/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header, TextInput, Button, Gap, MassageBubble} from '../../components';
import {useForm} from '../../utils';

const Chatting = ({navigation}) => {
  const [send, setSend] = useState(true);
  const [form, setForm] = useForm({
    chat: '',
  });
  const onMassage = () => {
    setSend(true);
    setForm('reset');
  };
  return (
    <View style={styles.page}>
      <Header
        back
        title="Roemah Nenek"
        subTitle="Sewon, Bantul"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.time}>Senin 21 Maret</Text>
        <MassageBubble
          message="Selamat siang, apakah kos masih tersedia?"
          time="4.20 AM"
        />
        <MassageBubble
          type="kos owner"
          message="Selamat siang, masih ada"
          time="4.20 AM"
        />
      </View>
      <View style={styles.button}>
        <View style={{flex: 1}}>
          <TextInput
            placeholder="Tulis pesan untuk Roemah Nenek"
            value={form.chat}
            onChangeText={(value) => {
              setForm('chat', value);
              value.length >= 1 ? setSend(false) : setSend(true);
            }}
          />
        </View>
        <Gap width={10} />
        <Button type="send" disable={send} onPress={onMassage} />
      </View>
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  content: {
    flex: 1,
    marginTop: 20,
  },
  time: {
    fontSize: 11,
    fontFamily: 'Poppins-Light',
    color: '#82868E',
    textAlign: 'center',
  },
  cointainerOurMesssage: {
    marginLeft: 'auto',
  },
  ourMessage: {
    padding: 12,
    width: 180,
    marginTop: 20,
    backgroundColor: '#EDFCFD',
    justifyContent: 'center',
    marginLeft: 'auto',
    borderRadius: 8,
    borderBottomRightRadius: 0,
  },
  ourText: {
    fontSize: 11,
    fontFamily: 'Poppins-Light',
    color: '#222222',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
