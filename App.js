import { StyleSheet, SafeAreaView, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogoScreen from "./screens/LogoScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import LogInScreen from "./screens/LogInScreen";
import HomeScreen from "./screens/HomeScreen";
import AddEvent from "./screens/AddEvent";
import AddFriends from "./screens/AddFriends";
import AddLocation from "./screens/AddLocation";
import InviteFriends from "./screens/InviteFriends";
import { supabase } from './env/supabase';
import "react-native-gesture-handler";
import ThankYouScreen from "./screens/ThankYouScreen";
import UserProfile from "./screens/UserProfile";
import EventRSVP from "./screens/EventRSVP"


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LogoScreen" component={LogoScreen} />
        <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddEvent" component={AddEvent} />
        <Stack.Screen name="ThankYouScreen" component={ThankYouScreen} />
        <Stack.Screen name="AddFriends" component={AddFriends} />
        <Stack.Screen name="AddLocation" component={AddLocation} />
        <Stack.Screen name="InviteFriends" component={InviteFriends} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name ="EventRSVP" component={EventRSVP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
