import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Themes from "../assets/Themes";
import { getDatabase, ref, onValue } from "firebase/database";
import { auth } from "../firebase";

const UserProfile = ({ navigation }) => {
  const [createdEvents, setCreatedEvents] = useState([]);
  const [rsvpedEvents, setRsvpedEvents] = useState([]);

  // Fetching user data on component mount
  useEffect(() => {
    const database = getDatabase();
    const userRef = ref(database, `Users/${auth.currentUser.uid}`);

    // This listener will trigger whenever the user data changes
    const unsubscribe = onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      if (userData) {
        setCreatedEvents(Object.keys(userData.createdEvents || {}));
        setRsvpedEvents(Object.keys(userData.rsvpedEvents || {}));
      }
    });

    // Cleanup function to remove the listener
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Your Profile</Text>
      </View>

      <View>
        <Text style={styles.subheading}>Events You Created:</Text>
        {createdEvents.map((eventId) => (
          <Text key={eventId} style={styles.eventId}>
            {eventId}
          </Text>
        ))}
      </View>

      <View>
        <Text style={styles.subheading}>Events You RSVPed To:</Text>
        {rsvpedEvents.map((eventId) => (
          <Text key={eventId} style={styles.eventId}>
            {eventId}
          </Text>
        ))}
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
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  subheading: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginTop: 20,
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
    marginTop: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default UserProfile;