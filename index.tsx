import { Text, View, StyleSheet } from "react-native";

import Varscreen from "./sloop";

export default function Index() {
  return (
    <View style={styles.container}>
      <Varscreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      alignItems: "center",
      justifyContent: "top",
  },
});
