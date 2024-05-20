import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import initImage from '../../assets/init.png';
import OverviewChart from '../../components/Chart/OverviewChart';
import Header from '../../components/Header/Header';
import LogoLeading from '../../components/Header/logoLeading';
import OverviewList from '../../components/List/OverviewList';

const HomeScreen = ({navigation} : { navigation: NavigationProp<any> }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="資 產 總 覽"
        leading={<LogoLeading />}
        action={<InitButton navigation={navigation} />}
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        <OverviewChart />
        <OverviewList />
      </ScrollView>
    </SafeAreaView>
  );
};

const InitButton = ( {navigation} : {navigation: NavigationProp<any>}) => {
  return (
    <TouchableOpacity onPress={() => {navigation.navigate('InitAccountScreen')}}>
      <Image source={initImage} style={{width: 45, height: 45}} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 60,
  },
});

export default HomeScreen;
