import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    gap: 20,
    backgroundColor: "#161622",
    // alignItems: "center",
  },
  titleComponent: {
    flexDirection: "column",
    // alignItems: "center",
    gap: 2,
  },
  topCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
});
