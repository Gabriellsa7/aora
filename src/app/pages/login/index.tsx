import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import { styles } from "./login.styles";
import TextComponent from "@/src/components/text/text";
import Input from "@/src/components/input/input";
import Button from "@/src/components/button/button-component";
import { Link } from "expo-router";

const statusBarHeight = Constants.statusBarHeight;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  // button submit
  const handleSubmit = () => {
    if (email.trim() === "" || password.trim() === "") {
      setError("All fields are required");
    } else {
      setError(null);
      // Handle valid input
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={[styles.container, { paddingTop: statusBarHeight + 122 }]}>
      <StatusBar translucent backgroundColor="#161622" barStyle="default" />
      <Image source={require("@/assets/initial-page-images/logo.png")} />
      <View style={{ flexDirection: "column", gap: 20 }}>
        <TextComponent color="#FFFFFF" size={22} weight="bold">
          Sign in
        </TextComponent>
        <View style={styles.inputContainer}>
          <Input
            label="Email"
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
          <View style={styles.passwordText}>
            <TextComponent color="#FFFFFF">Forgot Password</TextComponent>
          </View>
        </View>

        <Button
          onPress={handleSubmit}
          title="Log in"
          style={styles.button}
          textStyle={styles.buttonText}
        />

        <View style={{ alignItems: "center" }}>
          <TextComponent color="#FFFFFF">
            Don’t have an account?{" "}
            <Link href={"../sign-up"}>
              <Text style={{ color: "#FF9001" }}>Signup</Text>
            </Link>
          </TextComponent>
        </View>
      </View>
    </View>
  );
};

export default Login;
