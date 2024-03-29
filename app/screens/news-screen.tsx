import React from "react";
import { Button, View, Text } from "react-native";

export default function NewsScreen({ navigation }: {navigation : any}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>NewsScreen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}