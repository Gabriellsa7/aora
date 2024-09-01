import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  inputContainer: {
    position: "relative",
  },
  label: {
    marginBottom: 8,
    color: "#FFFFFF",
    fontSize: 16,
  },
  input: {
    borderWidth: 0,
    borderRadius: 4,
    borderColor: "transparent",
    borderBlockColor: "#232533",
    padding: 16,
    backgroundColor: "#1E1E2D",
    fontSize: 16,
    color: "#FFFFFF",
  },
  defaultInput: {
    borderColor: "#ccc",
  },
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    marginTop: 4,
  },
  iconContainer: {
    position: "absolute",
    right: 23,
    top: 20,
  },
});
