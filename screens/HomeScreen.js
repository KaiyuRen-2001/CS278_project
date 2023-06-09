import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import Themes from "../assets/Themes";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faUser,
  faPlus,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-native-elements";

const ListItem = ({ imageSource, title, location, date, time }) => {
  return (
    <View style={styles.listItemContainer}>
      <Image source={imageSource} style={styles.profileImage} />
      <View style={styles.listItemTextContainer}>
        <Text style={styles.listItemTitle}>{title}</Text>
        <Text style={styles.listItemLocation}>{location}</Text>
      </View>

      <View style={styles.listItemText2Container}>
        <Text style={styles.listItemDate}>{date}</Text>
        <Text style={styles.listItemTime}>{time}</Text>
      </View>
      <TouchableOpacity style={styles.listItemEditButton}>
        <FontAwesomeIcon icon={faEllipsis} size={20} color="#888" />
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/map.jpeg")} style={styles.image} />
      </View>
      <Text style={styles.heading}>Friends and Events</Text>
      <ScrollView style={styles.scrollView}>
        <ListItem
          imageSource={require("../assets/stanford.png")}
          title="Wilbur Dinner!"
          location="Wilbur Dining"
          date="May 1, 2023"
          time="6:30pm"
        />
        <ListItem
          imageSource={require("../assets/stanford.png")}
          title="Cinco de Mayo Stern Dining"
          location="Stern Dining"
          date="May 5, 2023"
          time="11:30am"
        />
        <ListItem
          imageSource={require("../assets/stanford.png")}
          title="Cinco de Mayo Party"
          location="Mirrielees Dorm"
          date="May 1, 2023"
          time="10:30am"
        />
        <ListItem
          imageSource={require("../assets/stanford.png")}
          title="SVSA Field Day"
          location="Wilbur Field"
          date="May 6, 2023"
          time="2:30pm"
        />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesomeIcon icon={faHome} size={30} color="#888" />
          <Text style={styles.iconLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Pressable onPress={() => navigation.navigate("AddEvent")}>
            <FontAwesomeIcon icon={faPlus} size={30} color="#888" />
            <Text style={styles.iconLabel}>Add Event</Text>
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Pressable onPress={() => navigation.navigate("UserProfile")}>
            <FontAwesomeIcon icon={faUser} size={30} color="#888" />
            <Text style={styles.iconLabel}>Profile</Text>
          </Pressable>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.darkpurple,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: 380,
    height: 380,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  listItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    paddingVertical: 10,
  },
  heading: {
    fontWeight: "bold",
    //flex: 1,
    fontSize: 20,
    color: "#fff",
    marginLeft: 10,
  },
  listItemTextContainer: {
    marginRight: 10,
    textAlign: "left",
  },

  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  listItemText: {
    fontWeight: "bold",
    //flex: 1,
    color: "#fff",
    marginRight: 10,
  },
  listItemTitle: {
    color: "#fff",
    marginRight: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  listItemLocation: {
    fontSize: 10,
    color: "#F5DEB3",
  },
  listItemDate: {
    color: "#fff",
    marginRight: 10,
    color: "#F5DEB3",
  },
  listItemTime: {
    color: "#fff",
    marginRight: 10,
    color: "#F5DEB3",
  },
  listItemDots: {
    color: "#fff",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingVertical: 10,
  },
  iconButton: {
    alignItems: "center",
  },
  iconLabel: {
    fontSize: 12,
    color: "#888",
    marginTop: 5,
  },
});

export default HomeScreen;
