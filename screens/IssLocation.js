import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ImageBackground } from 'react-native';
import MapView from 'react-native-maps'

export default class IssLocation extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/bg.png')} style={styles.bg}>
                    <View style={styles.titlebarr}>
                        <Text style={styles.title}> Iss Location </Text>
                    </View>
                    <View>
                        <MapView
                            region={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        />
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
        fontSize: 35

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
        bottom: -15,
        zIndex: -1


    }

})