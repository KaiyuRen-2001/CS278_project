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
    faLocationDot,
    faUserGroup,
    faAngleRight,
    faClock,
    faCircleStop,
    faPen,
    faUser,
    faPlus,
    faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-native-elements";
import HomeScreen from "./HomeScreen";

const AddEvent = ({navigation}) => {
    return (
        <View style={styles.container}>

            <View>
                {/* Title */}
                <View style={styles.listItemContainer}>
                    <View style={[styles.iconNtitle, styles.bubbleBox]}>
                        <FontAwesomeIcon icon={faPen} style={styles.icon} />
                        <Text style={styles.listItemTitle}>Write a title...</Text>
                    </View>
                </View>

                {/* Description */}
                <View style={styles.listItemContainer}>
                    <View style={[styles.iconNtitle, styles.bubbleBox]}>
                        <FontAwesomeIcon icon={faPen} style={styles.icon} />
                        <Text style={styles.listItemTitle}>Write a description...</Text>
                    </View>
                </View>


                {/* Location */}
                <Pressable onPress={() => navigation.navigate('AddLocation')}>
                <View style={styles.listItemContainer}>
                    <View style={styles.listItemTextContainer}>
                        <View style={styles.iconNtitle}>
                            <FontAwesomeIcon icon={faLocationDot} style={styles.icon} />
                            <Text style={styles.listItemTitle}>Add location</Text>
                        </View>
                    </View>
                    <View style={styles.listItemText2Container}>
                        <FontAwesomeIcon icon={faAngleRight} style={styles.icon} />
                    </View>
                </View></Pressable>

                {/* FRIENDS */}
                <Pressable onPress={() => navigation.navigate('AddFriends')}><View style={styles.listItemContainer}>
                    <View style={styles.listItemTextContainer}>
                        <View style={styles.iconNtitle}>
                            <FontAwesomeIcon icon={faUserGroup} style={styles.icon} />
                            <Text style={styles.listItemTitle}>Add friends</Text>
                        </View>
                    </View>
                    <View style={styles.listItemText2Container}>
                        <FontAwesomeIcon icon={faAngleRight} style={styles.icon} />
                    </View>
                </View></Pressable>
                {/* START TIME */}
                <View style={styles.listItemContainer}>
                    <View style={styles.listItemTextContainer}>
                        <View style={styles.iconNtitle}>
                            <FontAwesomeIcon icon={faClock} style={styles.icon} />
                            <Text style={styles.listItemTitle}>Start Time</Text>
                        </View>
                    </View>
                    <View style={styles.listItemText2Container}>
                        <Text style={styles.listItemDate}>Today, 10:00 PM</Text>
                    </View>
                </View>
                {/* END TIME */}
                <View style={styles.listItemContainer}>
                    <View style={styles.listItemTextContainer}>
                        <View style={styles.iconNtitle}>
                            <FontAwesomeIcon icon={faCircleStop} style={styles.icon} />
                            <Text style={styles.listItemTitle}>End Time</Text>
                        </View>
                    </View>
                    <View style={styles.listItemText2Container}>
                        <Text style={styles.listItemDate}>Today, 10:30 PM</Text>
                    </View>
                </View>

                
            </View>


            {/* SUBMIT BUTTON */}

            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate(HomeScreen)}>
                        <Text style={styles.heading}>Create Event</Text>
                </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Themes.colors.darkpurple,
        justifyContent: "space-between",
        alignItems: "center",
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
    iconNtitle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    bubbleBox: {
        backgroundColor: "#000",
        width: "94%",
        borderRadius: 15,
        padding: 10,
        paddingVertical: 20,
        margin: 10,
        justifyContent: "flex-start",
    },
    icon: {
        marginHorizontal: 10,
        color: Themes.colors.lightpurple,
    },
    heading: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#fff",
        marginLeft: 0,
        textAlign: "center",
    },
    listItemTextContainer: {
        marginRight: 10,
        textAlign: "left",
    },
    listItemTitle: {
        color: "#fff",
        marginRight: 10,
        fontSize: 16,
    },
    listItemLocation: {
        fontSize: 10,
        color: "#F5DEB3",
    },
    listItemDate: {
        color: "#fff",
        marginRight: 10,
        color: Themes.colors.secondary,
    },
    buttonContainer: {
        backgroundColor: Themes.colors.lightpurple,
        borderRadius: 15,
        padding: 10,
        paddingVertical: 20,
        margin: 10,
        justifyContent: "center",
        alignItem: "center",
        marginBottom: 50,
        width: 200,
    }
});

export default AddEvent;
