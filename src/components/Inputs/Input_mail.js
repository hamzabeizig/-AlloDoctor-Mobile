import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import {Dimensions } from "react-native";
import Mail from '../icons/mail';
const screenWidth = Math.round(Dimensions.get('window').width);

function Input_mail(props) {
    return (
        <View style={[styles.container, props.style]}>
            <Mail style={styles.iconStyle}/>
            <TextInput placeholder={'Email'} style={styles.inputStyle} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center"
    },
    iconStyle: {
        height: 20,
        width: 40,
        marginTop: 20,


    },
    inputStyle: {
        width: screenWidth - 100 ,
        height: 40,
        color: "#000",
        alignSelf: "stretch",
        marginLeft: 1,
        marginRight : 20 ,
        paddingTop: 0,
        paddingRight: 5,
        paddingBottom: 8,
        borderColor: "rgba(0,0,0,1)",
        borderBottomWidth: 2,
        fontSize: 16,
        fontFamily: "roboto-regular",
        lineHeight: 16
    }
});

export default Input_mail;
