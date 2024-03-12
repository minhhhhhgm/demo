import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/home-screen';
import NewsScreen from '../screens/news-screen';
import SettingScreen from '../screens/setting-sreem';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="News" component={NewsScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
}
