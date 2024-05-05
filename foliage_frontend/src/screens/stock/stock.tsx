import { NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import addImage from '../../assets/add.png';
import Header from '../../components/Header/Header';
import LogoLeading from '../../components/Header/logoLeading';
import db from '../../firestore/firestore';
import { Stock } from '../../types/stock';
import ProfitAndLost from './presentaion/profitAndLost';
import StockOverview from './presentaion/stockOverview';

const StockScreen = ( { navigation } : {navigation: NavigationProp<any>}) => {
    const [stockData, setStockData] = useState([] as Stock[]);

    useEffect(() => {
        const subscriber = db
        .collection('stock')
        .onSnapshot(snapshots => {
            const stocks : Stock[] = [] 
            if(!snapshots.empty) {
                snapshots.forEach((snapshot) => {
                    const data = snapshot.data();
                    stocks.push(
                        Stock.parse({
                            accountId: data.accountId,
                            amount: data.amount,
                            codeName: data.codeName,
                            createdAt: new Date(data.createdAt * 1000,),
                            price: data.price,
                        })
                    )
                })
                console.log(stocks);
                setStockData(stocks); // 回傳stock data
            } else {
                console.log('No such collection');
                setStockData(stocks); // 回傳空的
            }
        });
        // Stop listening for updates when no longer required
        return () => subscriber();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Header title='持 股 列 表' leading={<LogoLeading />} action={<Add navigation={navigation}/>}/>
            <ScrollView>
                <ProfitAndLost />
                <StockOverview data={stockData}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const Add = ( { navigation } : {navigation: NavigationProp<any>} ) => {
    return (
        <TouchableOpacity onPress={() => {navigation.navigate('StockTradingScreen')}}>
            <Image source={addImage} style={{width: 40, height: 40, paddingRight: 10}}></Image>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    }
})

export default StockScreen