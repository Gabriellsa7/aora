import {
  View,
  Text,
  Pressable,
  Image,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import TextComponent from "../text/text";
import { styles } from "./cards.style";

interface CardProps {
  title?: string;
  description?: string;
  imageSource?: ImageSourcePropType; // Tipo para a propriedade `source` da imagem
  profileImageSource?: ImageSourcePropType;
}

const Cards = ({
  title,
  imageSource,
  description,
  profileImageSource,
}: CardProps) => {
  return (
    <Pressable>
      <View style={styles.container}>
        <View style={styles.topCardContainer}>
          <View style={styles.profileTitleContainer}>
            <Image source={profileImageSource} />
            <View style={styles.titleComponent}>
              <TextComponent color="#FFFFFF">{title}</TextComponent>
              <TextComponent color="#CDCDE0">{description}</TextComponent>
            </View>
          </View>
          {/* 3 Dots Icon */}
          <Ionicons name="ellipsis-vertical" size={24} color="#FFFFFF" />
        </View>
        <View>
          <Image source={imageSource} />
        </View>
      </View>
    </Pressable>
  );
};

export default Cards;
