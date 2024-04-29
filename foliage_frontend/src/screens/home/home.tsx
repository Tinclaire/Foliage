import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import OverviewChart from '../../components/Chart/OverviewChart';
import Header from '../../components/Header/Header';
import OverviewList from '../../components/List/OverviewList';

const HomeScreen = ({navigation} : { navigation: NavigationProp<any> }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="資 產 總 覽" navigation={navigation} />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        <OverviewChart />
        <OverviewList />
      </ScrollView>
      {/* <NavBar /> */}
    </SafeAreaView>
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
