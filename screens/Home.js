import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'


export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/bg.png')} style={styles.bg}>
                    <View style={styles.titlebarr}> <Text style={styles.title}> Iss Tracker App </Text></View>
                    <View style={styles.buttonsContainer}>
                    <TouchableOpacity style={styles.button} onPress={this.props.navigation.navigate('IssLocation')}>
                        <Text style={styles.digit}>1</Text>
                            <Text style={styles.text}>Iss Location</Text>
                            <Text style={styles.knowMore}>{'Know More --->'}</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={this.props.navigation.navigate('Meteor')}>

                            <Text style={styles.text}> Meteors</Text>
                            <Text style={styles.knowMore}>{'Know More --->'}</Text>
                            <Text style={styles.digit}>2</Text>

                        </TouchableOpacity>
                    </View>
                </ImageBackground>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center'

    },
    bg: {
        flex: 1,
        resizeMode: 'cover'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:35

    },
    titlebarr: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.1
    },
    buttonsContainer: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',

    },
    button: {
        borderRadius: 10,
        backgroundColor: 'white',
        flex: 0.25,
        margin: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: 35,
        paddingLeft: 20,
        marginTop: 25,

    },
    knowMore: {
        fontSize: 10,
        color: 'red',
        paddingLeft: 20,


    },
    digit: {
        position: 'absolute',
        color: "rgba(183,183,183,0.6)",
        fontSize: 100,
        right: 20,
        bottom:-15,
        zIndex:-1
        

    }

})