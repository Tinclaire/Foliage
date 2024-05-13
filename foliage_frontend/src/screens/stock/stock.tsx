import { NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import addImage from '../../assets/add.png';
import Header from '../../components/Header/Header';
import LogoLeading from '../../components/Header/logoLeading';
import { Stock } from '../../types/stock';
import combineStockData from './application/combineStockData';
import readRtStock from './application/readRtStock';
import readStock from './application/readStock';
import ProfitAndLost from './presentaion/profitAndLost';
import StockOverview from './presentaion/stockOverview';

const StockScreen = ( { navigation } : {navigation: NavigationProp<any>}) => {
    const [stockData, setStockData] = useState<any[]>([]);
    const [ownStockName, setOwnStockName] = useState<string[]>([]);
    const [rtStockData, setRtStockData] = useState([] as any[]);
    const [stock, setStock] = useState<Stock[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const subscriber : any = await readStock();
            await setStockData(subscriber);
            console.log(stockData);

            let ownStockNames : string[] = [];
            stockData.forEach(data => {
                ownStockNames.push(data.codeName);
            })
            setOwnStockName(ownStockNames);
            // Stop listening for updates when no longer required
            setStock(combineStockData(stockData, rtStockData));
            return subscriber;
        }

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const subscriber : any = await readRtStock(ownStockName)
            await setRtStockData(subscriber)
            console.log(rtStockData);
            // setStock(combineStockData(stockData, rtStockData));
            return subscriber;
        }
        fetchData()
    }, []);

    // useEffect(() => {
    //     setStock(combineStockData(stockData, rtStockData));
    // }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Header title='持 股 列 表' leading={<LogoLeading />} action={<Add navigation={navigation}/>}/>
            <ScrollView>
                <ProfitAndLost />
                <StockOverview data={stockData}/>
                {/* <StockOverview data={stock}/> */}
                {/* <Text>希望會成功 {newStock[0]}</Text>
                <Text>這是{newStock[0]} {newStock[0]}的股價{newStock[0]}</Text> */}
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