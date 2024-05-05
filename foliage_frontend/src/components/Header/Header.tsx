import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HeaderProps {
  title: string;
}

// TODO: Custom header (back add go...)
// const Header: React.FC<HeaderProps> = (props) => {
const Header = ( props : {title: string, leading?: JSX.Element, action?: JSX.Element}) => {
  return (
    <View style={styles.header}>
      {props.leading}
      <View style={styles.titleContainer}>
        {/* title */}
        <Text style={styles.title}>{props.title}</Text>
      </View>
      {props.action}
      {/* <TouchableOpacity onPress={() => {props.navigation.navigate('BitcoinScreen')}}>
        <Image source={initImage} style={styles.initButton} />
      </TouchableOpacity> */}
    </View>
  );
};

const EmptyView = () => {
  return (
    <View />
  )
}

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
