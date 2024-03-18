import React, { useState } from "react";
import { Text, View } from "react-native";

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <View>
      <Text>{`Hello ${user}!`}</Text>
      <Component2 user={user} />
    </View>
  );
}

function Component2({ user } : any ) {
  return (
    <View>
      <Text>Component 2</Text>
      <Component3 user={user} />
    </View>
  );
}

function Component3({ user }: any) {
  return (
    <View>
      <Text>Component 3</Text>
      <Component4 user={user} />
    </View>
  );
}

function Component4({ user } : any) {
  return (
    <View>
      <Text>Component 4</Text>
      <Component5 user={user} />
    </View>
  );
}

function Component5({ user }: any) {
  return (
    <View style={{marginTop : 50}}>
      <Text>Component 5</Text>
      <Text>{`Hello ${user} again!`}</Text>
    </View>
  );
}

export default function NoUseContext() {
  return (
    <View style={{
      alignItems : 'center',
      justifyContent : 'center'
    }}>
      <Component1 />
    </View>
  );
}
