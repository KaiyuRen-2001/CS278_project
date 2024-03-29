import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Pressable,
} from "react-native";
import Themes from "../assets/Themes";
import { Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import DatePicker from "react-native-datepicker";

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
import ThankYouScreen from "./ThankYouScreen";
import { supabase } from '@supabase/supabase-js'

const AddEvent = ({ navigation }) => {

    const [event, setEvent] = useState({
        title: 'Write a title...',
        description: 'Write a description...',
        location: '',
        friends: [],
        startTime: 'Today, 10:00 PM',
        hours: 0,
        rsvp: '',
    });

    const handleHoursChange = (hours) => {
        setEvent((prevEvent) => ({
            ...prevEvent,
            hours: hours,
        }));
    };

    const handleTitleChange = (text) => {
        setEvent((prevEvent) => ({
            ...prevEvent,
            title: text,
        }));
    };

    const handleDescriptionChange = (text) => {
        setEvent((prevEvent) => ({
            ...prevEvent,
            description: text,
        }));
    };

    const handleLocationChange = (location) => {
        setEvent((prevEvent) => ({
            ...prevEvent,
            location: location,
        }));
    };

    const handleStartTimeChange = (startTime) => {
        setEvent((prevEvent) => ({
            ...prevEvent,
            startTime: startTime,
        }));
    };
    const handleFriendChange = (friends) => {
        setEvent((prevEvent) => ({
            ...prevEvent,
            friends: friends,
        }));
    };

    const handleEndTimeChange = (endTime) => {
        setEvent((prevEvent) => ({
            ...prevEvent,
            endTime: endTime,
        }));
    };

    return (
        <View style={styles.container}>

            <View>
                {/* Title */}
                {/* Title */}
                <View style={styles.listItemContainer}>
                    <View style={[styles.iconNtitle, styles.bubbleBox]}>
                        <FontAwesomeIcon icon={faPen} style={styles.icon} />
                        <TextInput
                            style={styles.listItemTitle}
                            placeholder="Write a title..."
                            placeholderTextColor="#888"
                            onChangeText={handleTitleChange}
                        />
                    </View>
                </View>

                {/* Description */}
                <View style={styles.listItemContainer}>
                    <View style={[styles.iconNtitle, styles.bubbleBox]}>
                        <FontAwesomeIcon icon={faPen} style={styles.icon} />
                        <TextInput
                            style={styles.listItemTitle}
                            placeholder="Write a description..."
                            placeholderTextColor="#888"
                            onChangeText={handleDescriptionChange}
                        />
                    </View>
                </View>



                {/* Location */}
                <View style={styles.listItemContainer}>
                    <View style={[styles.iconNtitle, styles.bubbleBox]}>
                        <FontAwesomeIcon icon={faLocationDot} style={styles.icon} />
                        <TextInput
                            style={styles.listItemTitle}
                            placeholder="Where will you be meeting?"
                            placeholderTextColor="#888"
                            onChangeText={handleLocationChange}
                        />
                    </View>
                </View>

                {/* START TIME */}
                {/* <Pressable onPress={() => handleStartTimeChange}>
                    <View style={styles.listItemContainer}>
                        <View style={styles.listItemTextContainer}>
                            <View style={styles.iconNtitle}>
                                <FontAwesomeIcon icon={faClock} style={styles.icon} />
                                <Text style={styles.listItemTitle}>Start Time</Text>
                            </View>
                        </View>
                    
                    </View>
                </Pressable> */}
                <View style={styles.listItemContainer}>
                    <View style={[styles.iconNtitle, styles.bubbleBox]}>
                        <FontAwesomeIcon icon={faClock} style={styles.icon} />
                        <TextInput
                            style={styles.listItemTitle}
                            placeholder="Start Time"
                            placeholderTextColor="#888"
                            value={event.startTime}
                            onChangeText={handleStartTimeChange}
                        />
                    </View>
                </View>

                {/* END TIME */}
                <Pressable onPress={() => navigation.navigate('AddEndTime', { handleEndTimeChange })}>
                    <View style={styles.listItemContainer}>
                        <View style={styles.listItemTextContainer}>
                            <View style={styles.iconNtitle}>
                                <FontAwesomeIcon icon={faCircleStop} style={styles.icon} />
                                <Text style={styles.listItemTitle}>Number of hours</Text>
                            </View>
                        </View>
                        <Slider
                            style={{ width: (Dimensions.get('window').width - 300), height: 40 }}
                            value={event.valueHours}
                            onValueChange={handleHoursChange}
                            minimumValue={0}
                            maximumValue={20}
                            step={1}
                            minimumTrackTintColor={Themes.colors.purple}
                            maximumTrackTintColor={Themes.colors.background}
                        />
                        <Text style={styles.listItemDate}>{event.hours} hours</Text>
                    </View>
                </Pressable>
            </View>

            {/* SUBMIT BUTTON */}
            <Pressable
                style={styles.buttonContainer}
                onPress={() => navigation.navigate('ThankYouScreen', { event: event })}
            >
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
        alignItems: "center",
        marginBottom: 50,
        width: 200,
    }
});

export default AddEvent; ``