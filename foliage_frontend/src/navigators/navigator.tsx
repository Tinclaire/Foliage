import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import bitcoinImage from '../assets/bitcoin.png';
import bitcoinGray from '../assets/bitcoin_gray.png';
import homeImage from '../assets/home.png';
import homeGray from '../assets/home_gray.png';
import stockImage from '../assets/stock.png';
import stockGray from '../assets/stock_gray.png';
import walletImage from '../assets/wallet.png';
import walletGray from '../assets/wallet_gray.png';
import HomeScreen from '../screens/home/home';
import InitAccount from '../screens/home/presentation/initAccount';
import NonePage from '../screens/nonePage';
import StockTrading from '../screens/stock/presentaion/stockTrading';
import StockScreen from '../screens/stock/stock';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const NavigatorProvider = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
          tabBarStyle: styles.navBarBg,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            let tabImg;
            let routeName = route.name
            let label;

            //TODO change tabbarImg to outlined version (different color)
            if (routeName == 'HomeScreen') {
              tabImg = focused ? homeImage : homeGray
              label = 'Main'
            } else if (routeName == 'CashScreen') {
              tabImg = focused ? walletImage : walletGray
              label = 'Cash'
            } else if (routeName == 'Stock') {
              tabImg = focused ? stockImage : stockGray
              label = 'Stock'
            } else {
              tabImg = focused ? bitcoinImage : bitcoinGray
              label = 'Crypto'
            }

            return (
              <TouchableOpacity style={styles.barItem} onPress={() => { navigation.navigate(routeName) }}>
                <Image source={tabImg} style={styles.icon} />
                <Text style={{fontSize: 10, color: focused ? '#9BCF53' : '#D9D9D9'}}>{label}</Text>
              </TouchableOpacity>
            )
          }
        })
        }>
        <Tab.Screen name="HomeScreen">
          {() => (
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
              />
              <Stack.Screen
                name='InitAccountScreen'
                component={InitAccount}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="CashScreen"
          component={NonePage}
        />
        <Tab.Screen name="Stock">
          {() => (
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen
                name='StockScreen'
                component={StockScreen}
              />
              <Stack.Screen
                name='StockTradingScreen'
                component={StockTrading}
              />
            </Stack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen
          name="BitcoinScreen"
          component={NonePage}
        />
      </Tab.Navigator>
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
    fontSize: 10
  }
})

export default NavigatorProvider;
