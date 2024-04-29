import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import bitcoinImage from '../../assets/bitcoin.png';
import homeImage from '../../assets/home.png';
import stockImage from '../../assets/stock.png';
import walletImage from '../../assets/wallet.png';

// TODO: refactor
// interface NavBarProps {

// }

// const NavBar: React.FC<NavBarProps> = () => {
const NavBar = () => {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.barItem} >
        <Image source={homeImage} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.barItem}>
        <Image source={walletImage} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.barItem}>
        <Image source={stockImage} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.barItem}>
        <Image source={bitcoinImage} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    borderTopWidth: 1,
    borderTopColor: '#E7E7E7',
    height: 60,
    bottom: 20,
    left: 0,
    right: 0,
  },
  barItem: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    marginBottom: 10,
    marginTop: 10,
  },
});

export default NavBar;
