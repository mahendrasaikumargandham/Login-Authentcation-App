import { StyleSheet, Text, View } from 'react-native'
import React, { useState} from 'react'
import { KeyboardAvoidingView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { authentication } from '../firebase/firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    useEffect(() => {
        const unsubscribe = authentication.onAuthStateChanged(user => {
            if(user) {
                navigation.replace("Home")
            }
        })
        return unsubscribe;
    }, []);

    const handleSignUp = () => {
        createUserWithEmailAndPassword(authentication, email, password).then((userCredential) => {
            const user = userCredential.user;
            console.log('Registered with ',user.email);
        }).catch(error => alert(error.message));
    };

    const handleLogin = () => {
        signInWithEmailAndPassword(authentication, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with ',user.email);
        })
        .catch(error => alert(error.message));
    }
  return (
    <KeyboardAvoidingView
        style = {styles.container}
        behavior = 'padding'
    >
      <View style = {styles.inputContainer}>
        <TextInput 
            placeholder = "Username or Email" 
            value = {email} 
            onChangeText = {text => setEmail(text)} 
            style = {styles.input}
        />
        <TextInput 
            placeholder = "Password" 
            value = {password} 
            onChangeText = {text => setPassword(text)} 
            style = {styles.input}
            secureTextEntry
        />
      </View>
      <View style = {styles.buttonContainer}>
        <TouchableOpacity
            onPress = {handleLogin}
            style = {styles.button}
        >
            <Text style = {styles.buttonText}>Login</Text>
        </TouchableOpacity> 
        <TouchableOpacity
            onPress = {handleSignUp}
            style = {[styles.button, styles.buttonOutline]}
        >
            <Text style = {styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: 'blue',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: '#fff',
        marginTop: 10,
        padding: 10,
        borderColor: 'blue',
        borderWidth: 2,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: 'blue',
        fontWeight: '700',
        fontSize: 16,
    }
})