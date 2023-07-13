import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, 
         FlatList, View,Image, Pressable, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import axios  from 'axios';

// local
import Header from '../Header';


// main

const HomeScreen = ({navigation}) => {
    const genshinAPI = "https://api.genshin.dev/characters/"
    const [characters, setChar] = useState([]);

    useEffect(() => {
        axios.get(genshinAPI)
        .then(response => {
            setChar(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const numColumns = 3;
    return (  
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
                              style={styles.container}
        >
            <LinearGradient colors={['#2D8CD0', '#2D82D0' ,'#2DA9D0']} style={{flex:1}}>
                <Pressable style={{width:"100%", marginBottom: 96}} 
                           onPress={() => navigation.navigate("AboutPage")}
                >
                    <Header headerTitle="Teyvat-Codex" whichPage="HomePage"/>
                </Pressable>

                <View style={styles.characterContainer}> 
                    <FlatList
                        data={characters}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => 
                            <Pressable style={styles.charCards}
                                       onPress={()=> navigation.navigate("DetailPage",{
                                                                          genshinAPI: genshinAPI,
                                                                          character: item,
                                       })}
                            >
                                <Image source={{uri: genshinAPI + item +"/icon-big.webp"}} 
                                       style={{resizeMode:"contain", width: 88, height:84}}
                                />
                                <Text style={styles.charName}>{item}</Text>
                            </Pressable>}
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
        paddingLeft: 15,
        paddingBottom: 17,

        backgroundColor: "#FFFDF2",
    },
    charCards: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "space-between", 
        marginTop: 17, 
        marginRight: 15,
        borderRadius: 10,

        backgroundColor: "#FFD028",
        borderColor: "#CEB62E",
    },
    charName :{
        flex: 1,
        backgroundColor: "#FFFBE8",
        borderColor: "#CEB62E",

        borderRadius: 1,
        
        width: "100%",
        height: 25,
        paddingTop: 5,
        paddingBottom: 5,
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
