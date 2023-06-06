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
    faMagnifyingGlass,
    faLocationArrow,
    faUserPlus,
    faXmark
} from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ name, detail }) => {
    return (
        <View style={styles.listItemContainer}>
            <View style={styles.listItemTextContainer}>
                    <Text style={styles.listItemTitle}>{name}</Text>
                    <Text style={styles.listItemLocation}>{detail}</Text>
            </View>
            
            <View style={styles.iconNtitle}>
            {/* <Text style={styles.listItemLocation}>{detail}</Text> */}
                {/* <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate(AddEvent)}>
                    <Text style={styles.heading}>Invite</Text>
                </Pressable>
                
                <FontAwesomeIcon icon={faXmark} style={styles.icon} /> */}
            </View>
        </View>
    );
};

const AddLocation = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View>
                {/* Title */}
                <View style={styles.listItemContainer}>
                    <View style={[styles.iconNtitle, styles.bubbleBox]}>
                        <View style={[styles.iconNtitle]}>
                        <FontAwesomeIcon icon={faLocationArrow} style={styles.icon} />
                        <Text style={styles.listItemTitle}>Search Location</Text>
                        </View>
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={styles.icon} />
                    </View>
                </View>

                {/* LOCATIONSS */}
                <ListItem
                    name="Stanford Package Center"
                    detail="459 Lagunita Drive, Stanford 94305"
                />
                <ListItem
                    name="Stanford Package Center"
                    detail="459 Lagunita Drive, Stanford 94305"
                />
                <ListItem
                    name="Stanford Package Center"
                    detail="459 Lagunita Drive, Stanford 94305"
                />
                <ListItem
                    name="Stanford Package Center"
                    detail="459 Lagunita Drive, Stanford 94305"
                />
                <ListItem
                    name="Stanford Package Center"
                    detail="459 Lagunita Drive, Stanford 94305"
                />
                <ListItem
                    name="Stanford Package Center"
                    detail="459 Lagunita Drive, Stanford 94305"
                />
                
            </View>
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
        // alignItems: "center",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        paddingVertical: 15,
    },
    iconNtitle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 5,
    },
    bubbleBox: {
        backgroundColor: "#000",
        width: "94%",
        borderRadius: 15,
        padding: 5,
        margin: 10,
        justifyContent: "space-between",
    },
    icon: {
        marginHorizontal: 10,
        color: Themes.colors.lightpurple,
    },
    heading: {
        fontWeight: "bold",
        fontSize: 15,
        color: "#fff",
        marginLeft: 0,
        textAlign: "center",
    },
    listItemTextContainer: {
        marginLeft: 15,
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
        paddingHorizontal: 10,
        padding: 5,
        justifyContent: "center",
        alignItem: "center",
    }
});

export default AddLocation;
