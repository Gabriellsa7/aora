import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import { styles } from "./saved.style";
import TextComponent from "@/src/components/text/text";
import Input from "@/src/components/input/input";
import Cards from "@/src/components/cards/cards";
import { Ionicons } from "@expo/vector-icons";

const statusBarHeight = Constants.statusBarHeight;

const Saved = () => {
  const [search, setSearch] = useState<any>("");
  return (
    <>
      <ScrollView style={{ backgroundColor: "#161622" }}>
        <View style={[styles.container, { paddingTop: statusBarHeight + 40 }]}>
          <View>
            <TextComponent color="#FFFFFF" weight="bold" size={24}>
              Saved Videos
            </TextComponent>
          </View>
          <View style={styles.searchContainer}>
            <Input
              value={search}
              placeholder="Search your saved videos"
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
          <View
            style={{
              flexDirection: "column",
              gap: 30,
              marginVertical: 20,
            }}
          >
            <Cards
              title="The camera follows behind a white..."
              description="Johnson"
              profileImageSource={require("@/assets/avatar2.png")}
              imageSource={require("@/assets/videos/video4.png")}
            />
            <Cards
              title="Close up on cartoon character boy..."
              description="Christopher"
              profileImageSource={require("@/assets/avatar3.png")}
              imageSource={require("@/assets/videos/video5.png")}
            />
            <Cards
              title="Close up on cartoon character boy..."
              description="Christopher"
              profileImageSource={require("@/assets/avatar.png")}
              imageSource={require("@/assets/videos/video1.png")}
            />
            <Cards
              title="Close up on cartoon character boy..."
              description="Christopher"
              profileImageSource={require("@/assets/card-image-profile/avatar2.png")}
              imageSource={require("@/assets/videos/video2.png")}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Saved;
