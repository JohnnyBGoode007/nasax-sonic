import { TouchableOpacity, Image,  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const nasaxlogoimg = require('../assets/nasax_logo_black_sonifications.png'); // Replace with your image path



export default function nasaxlogo({navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.nasaxlogo}>
      <Image source={nasaxlogoimg} style={styles.nasaxlogo} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  nasaxlogo: {
    paddingTop: 70, // Adjust padding if needed
    alignItems: "center", // Horizontal centering
    height: '10%',
    width: '80%', 
    resizeMode: 'contain',
  },
  nasaxlogoImage: { // A5dd styles for the image itself
    width: 50, // Adjust the image width as desired
    height: 50, // Adjust the image height as desired
    resizeMode: 'contain', // Maintain aspect ratio
  },
});

