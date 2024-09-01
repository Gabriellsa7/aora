import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import { styles } from "./register.styles";
import TextComponent from "@/src/components/text/text";
import Input from "@/src/components/input/input";
import Button from "@/src/components/button/button-component";
import { Link } from "expo-router";

const statusBarHeight = Constants.statusBarHeight;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  //Button submit
  const handleSubmit = () => {
    if (email.trim() === "" || password.trim() === "") {
      setError("All fields are required");
    } else {
      setError(null);
      // Handle valid input
    }
  };

  return (
    <View style={[styles.container, { paddingTop: statusBarHeight + 60 }]}>
      <StatusBar translucent backgroundColor="#161622" barStyle="default" />
      <Image source={require("@/assets/initial-page-images/logo.png")} />
      <View style={{ flexDirection: "column", gap: 20 }}>
        <TextComponent color="#FFFFFF" size={22} weight="bold">
          Sign up
        </TextComponent>
        <View style={styles.inputContainer}>
          <Input
            label="Username"
            value={userName}
            onChangeText={setUserName}
            error={error || ""}
            placeholderTextColor={"#7B7B8B"}
            placeholder="Your unique username"
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChangeText={setEmail}
            error={error || ""}
            placeholder="example@example.com"
          />
          <View>
            <Input
              label="Password"
              value={password}
              type="password"
              onChangeText={setPassword}
              error={
                password.length < 6
                  ? "Password must be at least 6 characters long"
                  : ""
              }
              placeholder="*********"
              secureTextEntry={!showPassword}
            />
          </View>
        </View>

        <Button
          onPress={handleSubmit}
          title="Sign Up"
          style={styles.button}
          textStyle={styles.buttonText}
        />
        <View style={{ alignItems: "center" }}>
          <TextComponent color="#FFFFFF">
            Already have an account?{" "}
            <Link href={"../login"}>
              <Text style={{ color: "#FF9001" }}>Login</Text>
            </Link>
          </TextComponent>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
