import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, 
         FlatList, View,Image, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios  from 'axios';

// local
import Header from '../Header';


// main



const HomeScreen = ({navigation}) => {
    const genshinAPI = "https://api.genshin.dev/characters/"
    const [characters, setChar] = useState([]);
    const [icon, setIcon] = useState([]);

    const addIcon = () => {
        const updatedIcon = [...icon];
        characters.forEach((item) => {
            updatedIcon.push(genshinAPI + item +"/icon-big.png");
        });
        setIcon(updatedIcon);
    }

    useEffect(() => {
        axios.get(genshinAPI)
        .then(response => {
            setChar(response.data);
        })
        .catch(error => {
            console.log(error);
        });
        addIcon();
        console.log(icon);
    }, []);

    const numColumns = 3;
    return (  
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <LinearGradient colors={['#2D8CD0', '#2D82D0' ,'#2DA9D0']} style={{flex:1}}>
                <View style={{width:"100%", marginBottom: 96}}>
                    <Header headerTitle="Teyvat-Codex" whichPage="HomePage"/>
                </View>

                <View style={styles.characterContainer}> 
                    <FlatList
                        data={icon}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <View>
                            <Image source={{uri: item}} style={{width: 88, height:84}}/></View>}
                        numColumns={numColumns}
                    />
                </View>
                <View style={styles.searchContainer}>
                        <TextInput placeholder="Search" style={styles.searchInput}/>
                </View>
            </LinearGradient>
        </KeyboardAvoidingView>
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: '100%',
    },
    characterContainer: {
        flex : 1,
        height: '63%',
        borderRadius: 10,

        marginTop: 96,
        marginLeft: 13,
        marginRight: 13,
        marginBottom: 34,
        paddingTop : 17,
        paddingLeft: 15,
        paddingRight : 15,
        paddingBottom: 17,

        backgroundColor: "#FFFDF2",
    },
    searchContainer: {
        width: '100%',
        paddingHorizontal: 13,
        marginBottom: 13,
    },
    searchInput: {
        backgroundColor: "#FFFDF2",
        borderRadius: 25,
        height: 49,
        elevation: 5,

        paddingTop: 17,
        paddingBottom: 11,
        paddingLeft: 25,
    },
});
