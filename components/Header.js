import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// local

import SafeViewAndroid from "./SafeViewAndroid";

class Header extends Component {
    render() {
        return (
            <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, {
                                  backgroundColor: this.props.whichPage === "AboutDev" ? "#FFF9CF" : "#FFFDF2",}]
            }>
                {this.props.whichPage === "HomePage" ? (
                    <View style={styles.container}>
                        <View style={styles.dummyItem}></View>
                        <Text style={[styles.headerText]}>{this.props.headerTitle}</Text>
                        <MaterialCommunityIcons name="information" size={30} style={{color: "#A49747"}}/>
                    </View>
                ) : this.props.whichPage === "AboutDev" ? (
                    <View style={[styles.container, {backgroundColor: "#FFF9CF"}]}>
                        <Ionicons name="arrow-back-circle" size={30} style={{color: "#A49747"}}/> 
                        <Text style={styles.headerText}>{this.props.headerTitle}</Text>
                    <View style={styles.dummyItem}></View>   
                </View>
                ) : (
                    <View style={styles.container}>
                        <Ionicons name="arrow-back-circle" size={30} style={{color: "#A49747"}}/> 
                        <Text style={styles.headerText}>{this.props.headerTitle}</Text>
                        <View style={styles.dummyItem}></View>   
                    </View> 
                )}
            </SafeAreaView>
        );
    }
}
export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection : 'row',
        height: 59,
        alignItems : "center",
        justifyContent: 'space-between',
        backgroundColor: "#FFFDF2",

        paddingRight: 13,
        paddingLeft: 13,
    },
    headerText:{
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 12,
        color: "#A49747",

        alignSelf: "center",
    },
    dummyItem : {
        width: 30,
        height: 30,
    },
});