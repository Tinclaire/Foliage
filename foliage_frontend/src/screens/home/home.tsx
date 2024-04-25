import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import OverviewChart from '../../components/Chart/OverviewChart';
import OverviewList from '../../components/List/OverviewList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="資產總覽" />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        <OverviewChart />
        <OverviewList />
      </ScrollView>
      <NavBar />
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
