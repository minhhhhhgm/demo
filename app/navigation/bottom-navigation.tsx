import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home-screen';
import NewsScreen from '../screens/news-screen';
import SettingScreen from '../screens/setting-sreem';

const Tab = createBottomTabNavigator();

 export function MyBottomTabs() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown : false
    }}>
       <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}
