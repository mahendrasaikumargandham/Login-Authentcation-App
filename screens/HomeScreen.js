import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { authentication } from '../firebase/firebase-config';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const signOut = () => {
    authentication
    .signOut()
    .then(() => {
      navigation.replace("Login");
    })
    .catch(error => alert(error.message));
  }
  return (
    <View style = {styles.container}>
      <Text>Email: {authentication.currentUser?.email}</Text>
      <TouchableOpacity
        style = {styles.button}
        onPress = {signOut}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    width: '60%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
},
buttonText: {
  color: '#fff',
  fontWeight: '700',
  fontSize: 16,
},  
})