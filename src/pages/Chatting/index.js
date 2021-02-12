import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, TextInput, Button, Gap} from '../../components';
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
      <View style={styles.content} />
      <View style={styles.button}>
        <TextInput
          placeholder="Tulis pesan untuk Roemah Nenek"
          value={form.chat}
          onChangeText={(value) => {
            setForm('chat', value);
            value.length >= 1 ? setSend(false) : setSend(true);
          }}
        />
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
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
