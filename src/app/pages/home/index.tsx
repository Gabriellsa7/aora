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

const statusBarHeight = Constants.statusBarHeight;

const Home = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      {/* Adicionando a StatusBar */}
      <StatusBar barStyle="light-content" backgroundColor="#161622" />
      <ScrollView style={{ backgroundColor: "#161622" }}>
        <View style={[styles.container, { paddingTop: statusBarHeight + 72 }]}>
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

export default Home;
