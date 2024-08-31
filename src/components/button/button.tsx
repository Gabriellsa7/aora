import {
  View,
  Text,
  Pressable,
  TextStyle,
  ViewStyle,
  StyleSheet,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

interface ButtonProps {
  onPress?: () => void;
  title?: string;
  style?: ViewStyle; // Pressable Style
  textStyle?: TextStyle; // Style for text inside Pressable
}

const Button = ({ onPress, title, style, textStyle }: ButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        style, // Adiciona estilos personalizados
        { opacity: pressed ? 0.7 : 1 }, // Muda a cor quando pressionado
      ]}
      onPress={onPress}
    >
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 82,
    paddingVertical: 18,
    backgroundColor: "#FF8C00",
    borderRadius: 5,
    alignItems: "center",
  },
});
