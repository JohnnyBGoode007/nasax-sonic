import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {

  let result = await AsyncStorage.getItem('mysonifications');

  if (result != null) {
    let parsed = JSON.parse(result);
    let find = false;
    parsed.forEach((element) => {
      if (element['id'] == value['id']) {
        find = true;
      }
    });
    if (!find) {
      parsed.push(value);
      let jsonValue = JSON.stringify(parsed);
      await AsyncStorage.setItem('mysonifications', jsonValue);
    }
  } else {
    let jsonValue = JSON.stringify(value);
    jsonValue = '[' + jsonValue + ']';
    await AsyncStorage.setItem('mysonifications', jsonValue);
  }
  console.log(await AsyncStorage.getItem('mysonifications'));
};

function renderIngredients(element) {
  var num = 1;
  var elements = [];
  while (element.Sonifications[num] != undefined) {
    elements.push(
      <Text>
        {num} - {element.Sonifications[num]}
      </Text>
    );
    num++;
  }
  return elements;
}

export default function Sonifications(props) {
  const element = props.element;
  const key = props.key;
  const saveVisible = props.savebtn

  return (
    <View
      key={key}
      onPress={renderIngredients(element)}
      style={{
        width: '90%',
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 10,
      }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 5 }}>
        {element.Title}
      </Text>
      <Image
        source={{ uri: element.Image }}
        style={{
          borderRadius: 20,
          alignSelf: 'center',
          width: 0.7 * Dimensions.get('window').width,
          height: 0.7 * Dimensions.get('window').width,
        }}></Image>
      <Text style={{ fontWeight: 'bold', fontSize: 14, marginTop: 5 }}>
        Ingredients:
      </Text>
      {renderIngredients(element)}
      <Text style={{ fontWeight: 'bold', fontSize: 14, marginTop: 5 }}>
        Instructions:
      </Text>
      <Text>{element.Instructions}</Text>
      { saveVisible ? 
      <TouchableOpacity
        style={{
          width: '70%',
          backgroundColor: '#fc8c03',
          color: 'white',
          height: 50,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => storeData(element)}>
        <Text style={{ color: 'white', fontSize: 20 }}>Save</Text>
      </TouchableOpacity>
      : <></>}
    </View>
  );
}
