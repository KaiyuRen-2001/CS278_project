import React, { useEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Themes from "../assets/Themes";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { supabase } from '../env/supabase';

const ThankYouScreen = ({ navigation, route }) => {
    console.log(route.params);
  const { event } = route.params;

  useEffect(() => {
    insertTask();
    updateTask();
  }, []);

  async function insertTask() {
    try {
      const { data, error } = await supabase
        .from("Events")
        .insert({ Title: event.title });
      if (error) {
        console.error("Error inserting event:", error);
      } else {
        console.log("Event inserted successfully:", data);
      }
    } catch (error) {
      console.error("Error inserting event:", error);
    }
  }
  
  async function updateTask() {
    try {
      const { data, error } = await supabase
        .from("Tasks")
        .update({
          Friends: event.friends,
          Date: event.startTime,
          Hours: event.hours,
          Description: event.description,
          Location: event.location,
        })
        .eq("Title", event.title);
      if (error) {
        console.error("Error updating task:", error);
      } else {
        console.log("Task updated successfully:", data);
      }
    } catch (error) {
      console.error("Error updating task:", error);
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
