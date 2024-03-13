import { TouchableOpacity, Image,  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const backArrowImage = require('../assets/back_arrow.png'); // Replace with your image path



export default function BackButton({navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Image source={backArrowImage} style={styles.backIcon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    paddingTop: 50,
    justifyContent: 'flex-start', // Or adjust styling as needed
    width: '100%',
    padding: 20,
  },
  backIcon: {
    width: 34,
    height: 34, // Adjust image dimensions
  },
});

