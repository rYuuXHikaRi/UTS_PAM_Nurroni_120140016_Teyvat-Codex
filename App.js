import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// local



import HomeScreen from './components/screens/HomeScreen';
import CharacterInfo from './components/screens/CharacterInfo';
import AboutDev from './components/screens/AboutDev';

// main
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="MainPage"
        component={HomeScreen}
        options={{ headerShown: false}}
      />
      <Stack.Screen
        name="DetailPage"
        component={CharacterInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AboutPage"
        component={AboutDev}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#404040", 
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
