import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { styles } from "./profile.style";
import { MaterialIcons } from "@expo/vector-icons";
import TextComponent from "@/src/components/text/text";
import Cards from "@/src/components/cards/cards";
import { useRouter } from "expo-router";

const statusBarHeight = Constants.statusBarHeight;

const Profile = () => {
  const router = useRouter();

  const navigateToLogin = () => {
    console.log("Navigating to Login"); // Debug log
    router.push("/pages/login");
  };
  return (
    <>
      <ScrollView>
        <View style={[styles.container, { paddingTop: statusBarHeight + 20 }]}>
          <View style={{ alignItems: "flex-end" }}>
            <Pressable onPress={navigateToLogin}>
              <MaterialIcons name="logout" size={24} color={"red"} />
            </Pressable>
          </View>
          <View style={styles.profileContainer}>
            <Image source={require("@/assets/avatar.png")} />
            <TextComponent color="#FFFFFF" size={18} weight="bold">
              Boruto
            </TextComponent>
          </View>
          <View style={styles.postsViewsContainer}>
            <View>
              <TextComponent weight="bold" size={20} color="#FFFFFF">
                10
              </TextComponent>
              <TextComponent weight="400" size={14} color="#CDCDE0">
                Posts
              </TextComponent>
            </View>
            <View>
              <TextComponent weight="bold" size={20} color="#FFFFFF">
                1.2K
              </TextComponent>
              <TextComponent weight="400" size={14} color="#CDCDE0">
                Views
              </TextComponent>
            </View>
          </View>
          <View
            style={{ flexDirection: "column", gap: 30, marginVertical: 20 }}
          >
            <Cards
              title="Woman walks down a Tokyo..."
              description="Brandon Etter"
              profileImageSource={require("@/assets/avatar.png")}
              imageSource={require("@/assets/videos/video1.png")}
            />
            <Cards
              title="Woman walks down a Tokyo..."
              description="Brandon Etter"
              profileImageSource={require("@/assets/avatar.png")}
              imageSource={require("@/assets/videos/video2.png")}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
