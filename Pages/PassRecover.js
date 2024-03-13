
import React from 'react';
import { ImageBackground, View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/BackButton';
import NasaXLogo from '../components/NasaXLogo';


export default function PassRecover() {
  const navigation = useNavigation();

  const handleNavigateToLogin = () => {
    navigation.navigate('../Pages/Login.js'); // Assuming 'Login' is the name of your login screen
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/736x/91/98/a9/9198a9aba2b16ddd75b9bc487c973803.jpg' }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      resizeMode="fit">
      <NasaXLogo />
      <BackButton navigation={navigation} />
      
      <View style={styles.container}>
        <TextInput
          style={styles.txtInput}
          placeholder="Email"
          inputMode="email"
        />
        <TouchableOpacity style={styles.btn} onPress={handleNavigateToLogin}>
          <Text style={styles.btnTxt}>Recover Password</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: '70%',
    backgroundColor: '#32FF00',
    color: 'black',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  btnTxt: {
    color: 'black',
    fontSize: 20,
  },
  txtInput: {
    width: '80%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#32FF00',
    height: 40,
    borderRadius: 15,
    paddingLeft: 10,
    margin: 10,
  },
});
