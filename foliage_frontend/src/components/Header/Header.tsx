import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import initImage from '../../assets/init.png';
import logoImage from '../../assets/logo.png';

interface HeaderProps {
  title: string;
}

// TODO: Custom header (back add go...)
const Header = ( {title, navigation} : {title: string, navigation: NavigationProp<any>}) => {
  return (
    <View style={styles.header}>
      <Image source={logoImage} style={styles.logo} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <TouchableOpacity onPress={() => {navigation.navigate('BitcoinScreen')}}>
        <Image source={initImage} style={styles.initButton} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 45,
    height: 45,
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#416D19',
  },
  initButton: {
    width: 45,
    height: 45,
  },
});

export default Header;
