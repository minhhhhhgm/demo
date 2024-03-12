import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/home-screen';
import NewsScreen from '../screens/news-screen';
import SettingScreen from '../screens/setting-sreem';

const Tab = createMaterialTopTabNavigator();

 export function MyTopTabs() {
  return (
    <Tab.Navigator>
       <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}