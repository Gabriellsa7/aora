import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { styles } from "./pager-view.style";
import PagerView from "react-native-pager-view";

const PagerViewComponent = () => {
  return (
    <View style={styles.pagerViewComponent}>
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        {/* <Pressable
              style={styles.pagerView}
              key="1"
              onPress={() => console.log("Clicou no banner 1")}
            >
              <Image
                source={require("@/assets/pager-view-home/Card1.png")}
                style={styles.pagerViewImage}
              />
            </Pressable> */}

        <Pressable
          style={styles.pagerView}
          key="21"
          onPress={() => console.log("Clicou no banner 1")}
        >
          <Image
            source={require("@/assets/pager-view-home/Card2.png")}
            style={styles.pagerViewImage}
          />
        </Pressable>

        <Pressable
          style={styles.pagerView}
          key="2"
          onPress={() => console.log("Clicou no banner 1")}
        >
          <Image
            source={require("@/assets/pager-view-home/Card3.png")}
            style={styles.pagerViewImage}
          />
        </Pressable>
      </PagerView>
    </View>
  );
};

export default PagerViewComponent;
