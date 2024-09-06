import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import { styles } from "./home.style";
import TextComponent from "@/src/components/text/text";
import Input from "@/src/components/input/input";
import { Ionicons } from "@expo/vector-icons";
import PagerViewComponent from "./components/pager-view";
import Cards from "@/src/components/cards/cards";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../profile";
import Created from "../created";
import Saved from "../saved";
import { FontAwesome5 } from "@expo/vector-icons";

const statusBarHeight = Constants.statusBarHeight;

export const Home = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      {/* Adicionando a StatusBar */}
      <StatusBar barStyle="light-content" backgroundColor="#161622" />
      <ScrollView
        style={{ backgroundColor: "#161622" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.container, { paddingTop: statusBarHeight + 40 }]}>
          <View style={styles.titleComponent}>
            <View>
              <TextComponent color="#CDCDE0" size={14} weight="500">
                Welcome Back
              </TextComponent>
              <TextComponent color="#FFFFFF" size={24} weight="bold">
                Boruto
              </TextComponent>
            </View>
            <Image source={require("@/assets/logo-without-name.png")} />
          </View>
          <View style={styles.searchContainer}>
            <Input
              value={search}
              placeholder="Search for a video topic"
              placeholderTextColor={"#CDCDE0"}
              onChangeText={setSearch}
            />
            <View
              style={{
                position: "absolute",
                right: 20,
                paddingTop: 20,
              }}
            >
              <Ionicons name="search" size={20} color={"#FFFFFF"} />
            </View>
          </View>
          <TextComponent color="#CDCDE0" size={14}>
            Trending Videos
          </TextComponent>
          {/* try to add video functionality  */}
          <PagerViewComponent />
          <View
            style={{ flexDirection: "column", gap: 30, marginVertical: 20 }}
          >
            <Cards
              title="Woman walks down a Tokyo..."
              description="Brandon Etter"
              profileImageSource={require("@/assets/card-image-profile/avatar1.png")}
              imageSource={require("@/assets/card-images/video1.png")}
            />
            <Cards
              title="Woman walks down a Tokyo..."
              description="Brandon Etter"
              profileImageSource={require("@/assets/card-image-profile/avatar2.png")}
              imageSource={require("@/assets/card-images/video2.png")}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
// Tab Navigator
const Tab = createBottomTabNavigator();

const HomeWithTabs = () => {
  return (
    <Tab.Navigator
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
  );
};

export default HomeWithTabs;
