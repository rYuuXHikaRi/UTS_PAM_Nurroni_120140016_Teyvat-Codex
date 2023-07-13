import React from 'react';
import { StyleSheet, Pressable, Text, SafeAreaView, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native';
import axios  from 'axios';


// local
import Header from '../Header';


// main
const CharacterInfo = ({navigation}) => {
  const route = useRoute();
  const genshinAPI = route.params.genshinAPI;
  const character = route.params.character;

  console.log(genshinAPI);
  console.log(character);

    return (
        <LinearGradient colors={['#2D8CD0', '#2D82D0' ,'#2DA9D0']} style={{flex:1}}>
            <Pressable style={{width:"100%", marginBottom: 96}}
                  onPress={() => navigation.goBack()}
            >
                <Header headerTitle="Teyvat-Codex" whichPage="DetailPage"/>
            </Pressable>
        </LinearGradient>
    )

};

export default CharacterInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
