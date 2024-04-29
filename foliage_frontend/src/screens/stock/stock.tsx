import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header/Header';
import ProfitAndLost from './view/profitAndLost';
import StockOverview from './view/stockOverview';


const StockScreen = ( { navigation }: { navigation: NavigationProp<any> } ) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title='持 股 列 表' navigation={navigation}/>
            <ScrollView>
                <ProfitAndLost />
                <StockOverview />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    }
})

export default StockScreen