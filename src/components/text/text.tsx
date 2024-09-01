import React from "react";
import { Text, TextStyle, StyleSheet } from "react-native";

interface TextComponentProps {
  children: React.ReactNode;
  style?: TextStyle; // Allows you to add custom styles
  weight?: "regular" | "bold" | "500"; // Example of style variation
  size?: number; // font size
  color?: string; // text color
}

const TextComponent: React.FC<TextComponentProps> = ({
  children,
  style,
  weight = "regular",
  size = 14,
  color = "#000",
}) => {
  return (
    <Text
      style={[
        styles.text,
        {
          fontWeight: weight === "bold" ? "bold" : "normal",
          fontSize: size,
          color: color,
        },
        style, // Allows you to add custom styles
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    //choose some font
    fontFamily: "System",
  },
});

export default TextComponent;
