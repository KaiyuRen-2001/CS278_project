import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  Button,
  Image,
  View,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
//import { auth } from '../firebase'
//import {signInWithEmailAndPassword} from 'firebase/auth';
import { supabase } from "../supabase";

import Themes from "../assets/Themes";

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /*
  const handlePress = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        //console.log("Registered with:", user.email);
        navigation.navigate('HomeScreen');
      })
      .catch((error) => alert(error.message));
  };
  */
  const handlePress = () => {
    supabase.auth
      .signIn({ email, password })
      .then((response) => {
        if (response.error) {
          Alert.alert("Error", response.error.message);
        } else {
          const user = response.user;
          navigation.navigate("HomeScreen");
        }
      })
      .catch((error) => Alert.alert("Error", error.message));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/logo.png")} style={styles.image} />
      </View>
      <Text style={styles.appName}>Log In</Text>
      <Text style={styles.appDescription}>Please sign in to continue:</Text>
      <View style={styles.buttonsContainer}>
        <Text style={styles.appDescription}>Email: </Text>
        <View style={styles.roundedButton}>
          <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="user@email.com"
            onChangeText={(text) => setEmail(text)}
            value={email}
            placeholderTextColor="gray"
          />
        </View>
        <Text style={styles.appDescription}>Password: </Text>
        <View style={styles.roundedButton}>
          <FontAwesomeIcon icon={faLock} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gray"
            onChangeText={(text) => setPassword(text)}
            value={password}
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <View style={styles.signupButtonContainer}>
        <Button title="Log In ->" onPress={handlePress} color="#FFFFFF" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Themes.colors.darkpurple,
  },
  appName: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    alignSelf: "flex-start",
  },
  appDescription: {
    fontSize: 16,
    marginTop: 10,
    color: "white",
    alignSelf: "flex-start",
  },
  logo: {
    width: 300,
    height: 100,
    marginBottom: 10,
    resizeMode: "contain",
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: "column",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
  },
  icon: {
    marginRight: 10,
    color: "white",
  },

  roundedButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "white",
    width: "100%",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 0,
    borderColor: "gray",
    padding: 10,
    marginVertical: 10,
    width: "80%",
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: "80%",
    fontWeight: "bold",
    fontSize: 18,
  },
  signupButtonContainer: {
    width: "40%",
    backgroundColor: Themes.colors.lightpurple,
    borderRadius: 20,
    marginBottom: 10,
  },
});

export default LogInScreen;
