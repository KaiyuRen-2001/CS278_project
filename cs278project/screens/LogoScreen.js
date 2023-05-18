import React from "react";
import { View, Text, Button, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEnvelope,
  FaGoogle,
  faApple,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import Themes from "../assets/Themes";

const LogoScreen = ({ navigation }) => {
  const handleCreatePress = () => {
    navigation.navigate("CreateAccountScreen");
  };

  const handleLogInPress = () => {
    navigation.navigate("LogInScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/logo.png")} style={styles.image} />
      </View>
      <Text style={styles.appName}>Frevent</Text>
      <Text style={styles.appDescription}>The friend event exploring app</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.roundedButton}>
          <FontAwesomeIcon
            icon={faEnvelope}
            style={styles.icon}
            color="white"
          />
          <Button
            title="Log in with email"
            onPress={handleLogInPress}
            color="white"
          />
        </View>
        <View style={styles.roundedButton}>
          <Icon name="google" style={styles.icon} color="white" />
          <Button
            title="Log in with google"
            onPress={handleLogInPress}
            color="white"
          />
        </View>
        <View style={styles.roundedButton}>
          <Icon name="apple" style={styles.icon} color="white" />
          <Button
            title="Log in with apple"
            onPress={handleLogInPress}
            color="white"
          />
        </View>
      </View>
      <Text style={styles.createAccountText} onPress={handleCreatePress}>
        Create Account
      </Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Themes.colors.darkpurple,
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  appName: {
    fontSize: 56,
    fontWeight: "bold",
    color: "white",
  },
  appDescription: {
    fontSize: 16,
    marginTop: 10,
    color: "white",
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
  createAccountText: {
    marginTop: 20,
    textDecorationLine: "underline",
    color: "gray",
  },
};

export default LogoScreen;
