import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

// local
import SafeViewAndroid from '../SafeViewAndroid';

// main
const AboutDev = ({navigation}) => {
    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <View style={styles.container}>
                <Text>AboutDev</Text>
            </View>
        </SafeAreaView>
    )

};

export default AboutDev;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
