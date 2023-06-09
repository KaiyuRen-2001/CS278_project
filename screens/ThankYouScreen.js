import React, { useEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Themes from "../assets/Themes";
import { getDatabase, ref, set } from "firebase/database";
import { auth } from "../firebase";


const ThankYouScreen = ({ navigation, route }) => {
    console.log(route.params);
  const { event } = route.params;

  useEffect(() => {
    insertTask();
  }, []);

  async function insertTask() {
    try {
      const database = getDatabase();
      const newEvent = {
        Title: event.title,
        Friends: event.friends,
        Date: event.startTime,
        Hours: event.hours,
        Description: event.description,
        Location: event.location,
        CreatedBy: auth.currentUser.uid,
      };
      if (event.title == "Write a title..."){
        event.title = "null";
      }
      await set(ref(database, `Events/${event.title}`), newEvent);
      console.log("Event added successfully");
    } catch (error) {
      console.error("Error adding event:", error);
    }
  }
  
  
  

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>New event created!</Text>
      </View>

      {/* HOME BUTTON */}
      <Pressable
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={styles.buttonText}>Home</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.darkpurple,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    color: Themes.colors.lightpurple,
    marginBottom: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  eventId: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: Themes.colors.lightpurple,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginBottom: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ThankYouScreen;
