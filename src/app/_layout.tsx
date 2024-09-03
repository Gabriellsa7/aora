import { Slot } from "expo-router";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Created from "./pages/created";
import Saved from "./pages/saved";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function TabLayout() {}

export default function RootLayout() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Index"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Profile") {
              iconName = focused ? "user" : "user";
            } else if (route.name === "Created") {
              iconName = focused ? "plus-circle" : "plus-circle";
            } else {
              iconName = focused ? "bookmark" : "bookmark";
            }

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarStyle: { backgroundColor: "#161622", borderTopWidth: 0 },
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Created" component={Created} />
        <Tab.Screen name="Saved" component={Saved} />
      </Tab.Navigator>
      {/* <Slot /> */}
    </NavigationContainer>
  );
}
