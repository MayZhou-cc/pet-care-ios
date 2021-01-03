import React, { useState, useEffect } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import * as firebase from 'firebase'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Auth from 'components/auth/SigninAndSignup.js'
import * as variables from '../var.json'

import { getBackgroundImage } from '../components/images'
import Header from 'components/Header'
import Moments from 'screens/MomentsScreen'

const AuthScreen = ({ navigation }) => {
    const background = getBackgroundImage(2)
    const [loggedin, setLoggedin] = useState(false)

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: variables.API,
        authDomain: variables.authDomain,
        projectId: variables.projectId,
        storageBucket: variables.storageBucket,
        messagingSenderId: variables.messagingSenderId,
        appId: variables.appId,
        measurementId: variables.measurementId
    };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    };

    useEffect(
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setLoggedin(true)
            } else {
                setLoggedin(false)
            }
        }), []
    )

    if (!loggedin) {
        return (
            <View>
                <ImageBackground source={background} style={styles.backgroundImage}>
                    <Header navigation={navigation} />
                    <Auth navigation={navigation} />
                </ImageBackground>
            </View>
        )
    } else {
        return (
            <Moments navigation={navigation} />
        )
    }
}


const styles = StyleSheet.create({

    backgroundImage: {
        height: hp('100%'),
        width: wp('100%'),
        justifyContent: "center",
    },
})

export default AuthScreen