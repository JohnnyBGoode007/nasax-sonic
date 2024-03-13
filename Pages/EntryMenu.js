//Importar componentes nativos que são "traduzidos" em código oem swift(IOS) ou kotlin/java(Android)
import {
  ImageBackground,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import NasaXLogo from '../components/NasaXLogo';


//Quando queremos usar a navegação entre páginas temos que incluir a parametro {navigation} na function
export default function EntryMenu({ navigation }) {
  return (
    //@ImageBackground -> Componente usado para colocar uma imagem de fundo na app


    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/736x/91/98/a9/9198a9aba2b16ddd75b9bc487c973803.jpg',
      }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      resizeMode="fit">
      {/*@View -> Parecido com o div do html*/}
<NasaXLogo />
      
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/*@TouchableOpacity -> Componente utilizado para garantir que os botões têm o mesmo formato no android e ios. O componente button não garante.
        //Para navegar para outro ecrã que sabemos o name. () => navigation.navigate("NAME do ecrã que está a APP.JS")
        */}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnTxt}>Sign in</Text>
        </TouchableOpacity>

        <Text
          style={[styles.btnTxt2, { fontSize: 16, marginTop: 10 }]}
          onPress={() => navigation.navigate('Register')}>
          Sign up
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '70%',
    backgroundColor: '#32FF00',
    color: 'black',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    color: 'black',
    fontSize: 20,
  },
    btnTxt2: {
    color: '#32FF00',
    fontSize: 20,
  },
});
