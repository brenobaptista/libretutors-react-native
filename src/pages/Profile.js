import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Profile({ navigation }) {
  const name = navigation.getParam("name");

  return (
    <View style={styles.container}>
      <Text>There will be a chatroom here in the future!</Text>
      <Text>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
