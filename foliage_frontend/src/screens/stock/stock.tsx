import { NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import addImage from '../../assets/add.png';
import Header from '../../components/Header/Header';
import LogoLeading from '../../components/Header/logoLeading';
import db from '../../firestore/firestore';
import { Stock } from '../../types/stock';
import combineStockData from './application/combineStockData';
import ProfitAndLost from './presentaion/profitAndLost';
import StockOverview from './presentaion/stockOverview';

const StockScreen = ( { navigation } : {navigation: NavigationProp<any>}) => {
    const [stockData, setStockData] = useState<any[]>([]);
    const [ownStockName, setOwnStockName] = useState<string[]>([]);
    const [rtStockData, setRtStockData] = useState([] as any[]);
    const [stock, setStock] = useState<Stock[]>([]);

    // get user's stock
    useEffect(() => {
        let stock = {};
        const subscriber = db
        .collection('stock')
        .onSnapshot(snapshots => {
            const stocks : any[] = []
            const ownStockNames : string[] = []; // get 名字
            if(!snapshots.empty) {
                snapshots.forEach((snapshot) => {
                    const data = snapshot.data();
                    stocks.push(
                        stock = {
                            accountId: data.accountId,
                            amount: data.amount,
                            codeName: data.codeName,
                            createdAt: new Date(data.createdAt * 1000,),
                            price: data.price,
                        }
                    );
                    ownStockNames.push(data.codeName);
                })
                console.log(stocks);
                setStockData(stocks); // 回傳stock data
                setOwnStockName(ownStockNames);
            } else {
                console.log('No such collection');
                setStockData(stocks); // 回傳空的
                setOwnStockName(ownStockNames);
            }
        });
        // Stop listening for updates when no longer required
        return () => subscriber();
    }, []);

    // get realtime stock
    useEffect(() => {
        console.log('Fetching real-time stock data...')
        const fetchRtData = async (codeName : string[]) => {
            let currentStock = {};
            const subscriber = await db.collection('rt_stock').doc('current_stock_data').onSnapshot(
                snapshot => {
                    const data = snapshot.data()
                    if(data != null) {
                        const currentStocks : any[] = [];
                        codeName.forEach(name => {
                            for(var i = 0; i < data.MsgArray.length; i++){
                                const stockData = data.MsgArray[i]
                                if(stockData.Name == name){
                                    currentStocks.push(
                                        currentStock = {
                                            codeName: stockData.Name,
                                            code: stockData.Code,
                                            zPrice: Number(stockData.ZPrice),
                                        }
                                    )
                                    console.log('this is rtStock:(((((((((((((((')
                                    console.log(currentStock)
                                    console.log(currentStocks)
                                    console.log(rtStockData)
                                }
                            }
                        })
                        setRtStockData(currentStocks)
                    } else {
                        setRtStockData([])
                        console.log('this is null')
                    }
                }, error => {
                    console.log(error)
                    return;
                }
            )
            return subscriber;
        }

        fetchRtData(ownStockName);
    }, [ownStockName])

    useEffect(() => {
        const fetchData = async() => {
            try {
                console.log('Fetching combine userStock and rtStock...')
                console.log(stockData)
                console.log(rtStockData)
                const combinedStocks = await combineStockData(stockData, rtStockData);
                setStock(combinedStocks)
            } catch(error) {
                console.error(error);
            }
        }
        fetchData()
    }, [stockData, rtStockData])

    return (
        <SafeAreaView style={styles.container}>
            <Header title='持 股 列 表' leading={<LogoLeading />} action={<Add navigation={navigation}/>}/>
            <ScrollView>
                <ProfitAndLost data={stock}/>
                <StockOverview data={stock}/>
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