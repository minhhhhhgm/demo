import React from "react";
import { Button, View, Text } from "react-native";

export default function HomeScreen({ navigation }: {navigation : any}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("News")}
      />
    </View>
  );
}