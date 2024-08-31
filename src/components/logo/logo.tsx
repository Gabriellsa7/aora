import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Logo = () => {
  return (
    <View>
      <Image source={require("../../../assets/initial-page-images/logo.png")} />
    </View>
  );
};

export default Logo;
