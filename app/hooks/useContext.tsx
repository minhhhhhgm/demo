import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, View } from "react-native";
interface IUserContext {
  user: string,
  setUser(value: string): void
}
const UserContext = React.createContext<IUserContext>({} as IUserContext);

function Component1() {

  const userContext = useContext(UserContext)
  const { user } = userContext
  return (
    <View>
      <Text>{`Hello ${user}!`}</Text>
      <Component2 />
    </View>
  );
}

function Component2() {
  return (
    <View>
      <Text>Component 2</Text>
      <Component3 />
    </View>
  );
}

function Component3() {
  return (
    <View>
      <Text>Component 3</Text>
      <Component4 />
    </View>
  );
}

function Component4() {
  return (
    <View>
      <Text>Component 4</Text>
      <Component5 />
    </View>
  );
}

function Component5() {
  const userContext = useContext(UserContext)
  const { user, setUser } = userContext
  return (
    <View style={{ marginTop: 10 }}>
      <Text>Component 5</Text>
      {/* <TouchableOpacity onPress={()=> setUser('okoko')}>
        <Text>
          setUser
        </Text>
      </TouchableOpacity> */}
      <Text>{`Hello ${user} again!`}</Text>
    </View>
  );
}

function User() {
  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Component1 />
    </View>
  );
}
function UseContextScreen() {
  // provide value context 
  const [user, setUser1] = useState("World !!!!!!!!!!!!!");
  const setUser = (value: string) => {
    setUser1(value)
  }
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <User />
    </UserContext.Provider>
  );
}

export default UseContextScreen;
