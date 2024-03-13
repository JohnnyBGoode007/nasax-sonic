import { SafeAreaView, View, TextInput, Platform,ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';

import Sonification from "../../components/Sonification"

export default function SearchSonifications() {
  //Variavel de estado - Importante usar porque quando alteramos o valor automaticamente o ecrã faz refresh
  const [search, setSearch] = useState('');
  const [recipes,setRecipes] = useState([]);

  const data = (search) => {
    //Não pode existir espaços no url então subtituimos pelo caracter especial %20 que significa espaço
    const s = search.replace(" ","%20")
    const url =
      'https://www.nasa.gov/?search=' + s;
    const options = {
      method: 'GET',
      headers: {
        'NASA-API-KEY': '5VEHiyTiFRo52yeOfUdGofDncHS6atOE3fb1yUkD9',
        'NASA-API-Host': 'api.nasa.gov',
      },
    };

    try {
      fetch(url, options).then(response => {
        response.json().then( result =>  setSonifications(result.d))
      });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView
      style={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        paddingTop: Platform.OS === 'android' ? 35 : 0,
      }}>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          borderRadius: 20,
          width: '80%',
          backgroundColor: 'white',
        }}>
        <TextInput
          placeholder="Search a Sonification"
          style={{
            padding: 10,
            height: 50,
          }}
          value={search}
          onChangeText={(txt) => setSearch(txt)}></TextInput>
        <FontAwesome
          name="search"
          size={24}
          color="gray"
          style={{ padding: 10, height: 50 }}
          onPress={()=>{data(search)}}
        />
      </View>
      <ScrollView style={{marginBottom: 30,marginTop: 10}}>
      <View style={{justifyContent: "center",alignItems: "center"}}>
      {recipes.map( element => {
         return( <Sonifications element={element} key={element.id} savebtn={true}></Sonifications>)
      })}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
