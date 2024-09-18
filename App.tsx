import React from 'react';
import { Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/Home';

// #region Shared components and props
const iconImages = {
  homeCircle: require('./src/asset/homeCircle.png'),
  accountCircle: require('./src/asset/accountCircle.png'),
  bell: require('./src/asset/bell.png'),
  message: require('./src/asset/message.png'),
  settings: require('./src/asset/settings.png'),
};

const RenderTabBarIcon = ({ focused, route }: any): JSX.Element => {
  const iconName = {
    'Tab A': 'homeCircle',
    'Tab B': 'accountCircle',
    'Tab C': 'bell',
    'Tab D': 'message',
    'Tab E': 'settings',
  }[route.name] || '';

  return (
    <View style={{ backgroundColor: focused ? '#00BA6B' : 'transparent', borderRadius: 20, width: 64, height: 32 }}>
      <Image source={iconImages[iconName]} style={{ height: 20, width: 20, alignSelf: 'center', marginTop: 5 }} resizeMode='cover'/>
    </View>
  );
};

const createStack = (initialRouteName: string): JSX.Element => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRouteName}>
      <Stack.Screen name={initialRouteName} component={Home} />
      <Stack.Screen name={`${initialRouteName}Details`} component={Home} />
    </Stack.Navigator>
  );
};

const HomeTabAStack = () => createStack('TabA');
const HomeTabBStack = () => createStack('TabB');
const HomeTabCStack = () => createStack('TabC');
const HomeTabDStack = () => createStack('TabD');
const HomeTabEStack = () => createStack('TabE');

const HomeTab = (): JSX.Element => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }: any) => ({
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'transparent',
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarIcon: (tabBarIconProps: any) => RenderTabBarIcon({ ...tabBarIconProps, route }),
        tabBarLabel: () => null, 
        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 0, 
          elevation: 0, 
          paddingBottom:20
        },
      })}
    >
      <Tab.Screen name="Tab A" component={HomeTabAStack} />
      <Tab.Screen name="Tab C" component={HomeTabCStack} />
      <Tab.Screen name="Tab B" component={HomeTabBStack} />
      <Tab.Screen name="Tab D" component={HomeTabDStack} />
      <Tab.Screen name="Tab E" component={HomeTabEStack} />
    </Tab.Navigator>
  );
};

const App = (): JSX.Element => (
  <NavigationContainer>
    <HomeTab />
  </NavigationContainer>
);

export default App;
