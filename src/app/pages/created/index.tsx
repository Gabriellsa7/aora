import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import { styles } from "./created.style";
import TextComponent from "@/src/components/text/text";
import Input from "@/src/components/input/input";
import Button from "@/src/components/button/button-component";

const statusBarHeight = Constants.statusBarHeight;

const Created = () => {
  const [videoTitle, setVideoTitle] = useState("");
  return (
    <>
      {/* <ScrollView style={{ backgroundColor: "#161622", width: "100%" }}> */}
      <View style={[styles.container, { paddingTop: statusBarHeight + 50 }]}>
        <View>
          <TextComponent color="#FFFFFF" weight="bold" size={24}>
            Upload Videos
          </TextComponent>
        </View>
        <View>
          <Input
            value={videoTitle}
            placeholder="Give your video a catchy title..."
            placeholderTextColor={"#7B7B8B"}
            onChangeText={setVideoTitle}
          />
          <Input
            label="Upload Video"
            value={videoTitle}
            style={{
              width: "100%",
              height: 119,
              backgroundColor: "#1E1E2D",
              borderRadius: 8,
              padding: 10,
            }}
            placeholder="Give your video a catchy title..."
            placeholderTextColor={"#7B7B8B"}
            onChangeText={setVideoTitle}
          />
          <Input
            label="Thumbnail Image"
            value={videoTitle}
            placeholder="Choose a file"
            placeholderTextColor={"#7B7B8B"}
            onChangeText={setVideoTitle}
          />
          <Input
            label="AI Prompt"
            value={videoTitle}
            placeholder="Give your video a catchy title..."
            placeholderTextColor={"#7B7B8B"}
            onChangeText={setVideoTitle}
          />
        </View>
        <Button
          title="Submit & Publish"
          style={{ width: "100%" }}
          textStyle={styles.buttonText}
        />
      </View>
      {/* </ScrollView> */}
    </>
  );
};

export default Created;
