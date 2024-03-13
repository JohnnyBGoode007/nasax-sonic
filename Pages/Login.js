import {
  ImageBackground,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import BackButton from '../components/BackButton';
import NasaXLogo from '../components/NasaXLogo';

export default function Login({ navigation }) {
  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/736x/91/98/a9/9198a9aba2b16ddd75b9bc487c973803.jpg',
      }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      resizeMode="fit">
      <NasaXLogo />
      <BackButton navigation={navigation}></BackButton>
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={styles.txtInput}
          placeholder="Username"
          inputMode="email"></TextInput>
        <TextInput
          style={styles.txtInput}
          placeholder="Password"
          secureTextEntry={true}></TextInput>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>
        <Text
          style={[styles.btnTxt3, { fontSize: 16, marginTop: 10 }]}
          onPress={() => navigation.navigate('PassRecover')}>
          Forgot your password? Click here
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '50%',
    backgroundColor: '#32FF00',
    color: '#32FF00',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  btnTxt: {
    color: 'black',
    fontSize: 20,
  },
   btnTxt3: {
    color: '#32FF00',
    fontSize: 20,
  },
  txtInput: {
    width: '80%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: '#32FF00',
    textDecorationColor: '#32FF00',
    height: 40,
    borderRadius: 15,
    paddingLeft: 10,
    margin: 10,
  },
});
