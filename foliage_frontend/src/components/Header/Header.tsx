import React from 'react';
import {Image, View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import logoImage from '../../assets/logo.png';
import initImage from '../../assets/init.png';

interface HeaderProps {
  title: string;
}

// TODO: Make initButton touchable
// TODO: Make title as props
const Header: React.FC<HeaderProps> = () => {
  return (
    <View style={styles.header}>
      <Image source={logoImage} style={styles.logo} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>資 產 總 覽</Text>
      </View>
      <Image source={initImage} style={styles.initButton} />
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
