import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Logo = require('../../../assets/logo.png')

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            NavigationActivation.replace('Menu')
        }, 3000)
    }, [])
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />
            <Text style={styles.title}>Carregando...</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#ffffff",
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    },
    logo: {
        width: '70%',
        height: '70%',
        resizeMode: 'contain',
    },

})
export default Splash