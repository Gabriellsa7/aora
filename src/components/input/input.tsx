import {
  TextInput,
  TextInputProps,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { styles } from "./input.style";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  secureTextEntry?: boolean; // Adicione a propriedade para esconder o texto
  type?: "password" | "email"; // Tipo padrão é 'email'
  value: string;
  onChangeText: (text: string) => void;
}

const Input = ({
  label,
  error,
  secureTextEntry = false,
  type = "email",
  value,
  onChangeText,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor={"#FFFFFF"}
          secureTextEntry={type === "password" ? showPassword : false}
          value={value}
          onChangeText={onChangeText}
          keyboardType={type === "email" ? "email-address" : "default"}
          {...props}
        />
        {type === "password" && (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={handleTogglePasswordVisibility}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default Input;
