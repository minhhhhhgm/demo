import React from "react";
import { Button, View, Text } from "react-native";

export default function SettingScreen({ navigation }: {navigation : any}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>SettingScreen</Text>
      <Button
        title="Go to Setting"
        onPress={() => navigation.navigate("Setting")}
      />
    </View>
  );
}