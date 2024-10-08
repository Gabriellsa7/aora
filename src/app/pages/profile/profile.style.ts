import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "100%",
    paddingHorizontal: 24,
    gap: 20,
    backgroundColor: "#161622",
  },
  profileContainer: {
    alignItems: "center",
    gap: 12,
  },
  postsViewsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 23,
  },
});
