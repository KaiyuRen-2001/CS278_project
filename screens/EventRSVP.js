// Import necessary modules and components
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Themes from "../assets/Themes";
import { getDatabase, ref, set, auth } from "firebase/database";

// Define the EventRSVP component
const EventRSVP = ({ navigation, route }) => {
  const [event, setEvent] = useState(null); // State to hold the event's data
  const { eventId } = route.params; // Extract the eventId from the route parameters

  // Use an effect to fetch event data when the component mounts
  useEffect(() => {
    const database = getDatabase(); // Get a reference to the Firebase database
    const eventRef = ref(database, `Events/${eventId}`); // Define a reference to this specific event

    // Set up a listener to fetch the event's data
    const unsubscribe = onValue(eventRef, (snapshot) => {
      const eventData = snapshot.val(); // Get the event's data from the snapshot
      setEvent(eventData); // Update the event state with the fetched data
    });

    // Return a cleanup function to remove the listener when the component unmounts
    return () => unsubscribe();
  }, [eventId]);

  // Define a function to handle the RSVP action
  const handleRSVP = async () => {
    const database = getDatabase(); // Get a reference to the Firebase database
    const rsvpRef = ref(database, `Events/${eventId}/rsvp/${auth.currentUser.uid}`); // Define a reference to this user's RSVP for this event

    // Set the RSVP value to true in the database
    await set(rsvpRef, true);

    // Navigate back to the previous screen
    navigation.goBack();
  };

  // Show a loading message while the event data is being fetched
  if (!event) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading event...</Text>
      </View>
    );
  }

  // Render the event's details and the RSVP button
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.name}</Text>
      <Text style={styles.text}>{event.description}</Text>

      <Pressable style={styles.buttonContainer} onPress={handleRSVP}>
        <Text style={styles.buttonText}>RSVP</Text>
      </Pressable>
    </View>
  );
};

// Define the styles for this component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.darkpurple,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: Themes.colors.lightpurple,
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

// Export the EventRSVP component as the default export
export default EventRSVP;