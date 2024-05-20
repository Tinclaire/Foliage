import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import {AuthContext, AuthProvider} from '../context/AuthProvider';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import bitcoinImage from '../assets/bitcoin.png';
import homeImage from '../assets/home.png';
import initImage from '../assets/init.png';
import stockImage from '../assets/stock.png';
import walletImage from '../assets/wallet.png';
import HomeScreen from '../screens/home/home';
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/register';
import InitAccount from '../screens/home/presentation/initAccount';
import NonePage from '../screens/nonePage';
import StockTrading from '../screens/stock/presentaion/stockTrading';
import StockScreen from '../screens/stock/stock';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        tabBarStyle: styles.navBarBg,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => {
          let tabImg;
          let routeName = route.name;
          let label;

          //TODO change tabbarImg to outlined version (different color)
          if (routeName == 'HomeScreen') {
            tabImg = focused ? homeImage : initImage;
            label = 'Main';
          } else if (routeName == 'CashScreen') {
            tabImg = focused ? walletImage : initImage;
            label = 'Cash';
          } else if (routeName == 'Stock') {
            tabImg = focused ? stockImage : initImage;
            label = 'Stock';
          } else {
            tabImg = focused ? bitcoinImage : initImage;
            label = 'Crypto';
          }

          return (
            <TouchableOpacity
              style={styles.barItem}
              onPress={() => {
                navigation.navigate(routeName);
              }}>
              <Image source={tabImg} style={styles.icon} />
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? '#9BCF53' : '#D9D9D9',
                }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        },
      })}>
      <Tab.Screen name="HomeScreen">
        {() => (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="InitAccountScreen" component={InitAccount} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="CashScreen" component={NonePage} />
      <Tab.Screen name="Stock">
        {() => (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="StockScreen" component={StockScreen} />
            <Stack.Screen
              name="StockTradingScreen"
              component={StockTrading}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="BitcoinScreen" component={NonePage} />
    </Tab.Navigator>
  );
};

const NavigatorProvider = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    // TODO: loading spinner
    return null;
  }

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  navBarBg: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E7E7E7',
    height: 60,
  },
  barItem: {
    flex: 1,
    alignItems: 'center',
    verticalAlign: 'middle',
    marginTop: 10,
    marginBottom: 10,
  },
  icon: {
    width: 25,
    height: 25,
    marginBottom: 3,
  },
  label: {
    fontSize: 10,
  },
});

export default NavigatorProvider;
