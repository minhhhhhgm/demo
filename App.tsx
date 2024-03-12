/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/screens/home-screen';
import NewsScreen from './app/screens/news-screen';
import SettingScreen from './app/screens/setting-sreem';
import { NavigationContainer } from '@react-navigation/native';
import { MyBottomTabs } from './app/navigation/bottom-navigation';
import { MyDrawer } from './app/navigation/drawer-navigation';
import { MyTopTabs } from './app/navigation/toptab-navigation';

const Stack = createStackNavigator();
const linking = {
  prefixes: ['newsapp://']
};
function MyStack() {
  return (
    <NavigationContainer linking={linking}
      fallback={<ActivityIndicator color="blue" size="large" />}>
      <Stack.Navigator initialRouteName='TopTab' screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name='BottomTab' component={MyBottomTabs} />
        <Stack.Screen name='MyDrawer' component={MyDrawer} />
        <Stack.Screen name='TopTab' component={MyTopTabs} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}




function App(): React.JSX.Element {
 

  return (
    <MyStack />
  );
}


export default App;
