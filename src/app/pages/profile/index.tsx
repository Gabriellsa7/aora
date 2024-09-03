import { View, Text, Image } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { styles } from "./profile.style";
import { MaterialIcons } from "@expo/vector-icons";
import TextComponent from "@/src/components/text/text";

const statusBarHeight = Constants.statusBarHeight;

const Profile = () => {
  return (
    <View style={[styles.container, { paddingTop: statusBarHeight + 8 }]}>
      <View style={{ alignItems: "flex-end" }}>
        <MaterialIcons name="logout" size={24} color={"red"} />
      </View>
      <View style={styles.profileContainer}>
        <Image source={require("@/assets/avatar.png")} />
        <TextComponent color="#FFFFFF" size={18} weight="bold">
          Boruto
        </TextComponent>
      </View>
    </View>
  );
};

export default Profile;
