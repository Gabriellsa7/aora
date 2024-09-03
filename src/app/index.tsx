import { Image, StatusBar, View } from "react-native";
import Constants from "expo-constants";
import Logo from "../components/logo/logo";
import TextComponent from "../components/text/text";
import Button from "../components/button/button-component";
import { styles } from "./index.style";
import { Link, useRouter } from "expo-router";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  const router = useRouter();
  return (
    <>
      <StatusBar translucent backgroundColor="#161622" barStyle="default" />
      <View style={styles.container}>
        <View style={[styles.section, { paddingTop: statusBarHeight + 40 }]}>
          <Logo />
          <View>
            <Image
              source={require("../../assets/initial-page-images/initial-banner.png")}
            />
          </View>
          <View style={styles.textContainer}>
            <TextComponent
              size={30}
              weight="bold"
              color="#FFFFFF"
              style={styles.text}
            >
              Discover Endless Possibilities with Aora
            </TextComponent>
            <TextComponent size={14} style={styles.text} color="#FFFFFF">
              Where Creativity Meets Innovation: Embark on a Journey of
              Limitless Exploration with Aora
            </TextComponent>
          </View>
          <Button
            title="Login"
            textStyle={styles.buttonText}
            onPress={() => router.push("./pages/login")}
          />
          <Button
            title="Sign up"
            textStyle={styles.buttonText}
            onPress={() => router.push("./pages/sign-up")}
          />
          {/* Temporary */}
          <Link href={"./pages/home"}>
            <TextComponent color="#FFFFFF" size={16}>
              Home
            </TextComponent>
          </Link>
        </View>
      </View>
    </>
  );
}
