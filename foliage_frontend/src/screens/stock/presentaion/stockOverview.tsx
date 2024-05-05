import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Stock } from '../../../types/stock';

const mockData = [
    {
        codeName: '台積電',
        code: 2330,
        price: 750,
        marketCap: 30000,
        plPercent: 0.2345,
        plNum: 9000,
    },
    {
        codeName: '台積電',
        code: 2330,
        price: 750,
        marketCap: 30000,
        plPercent: -0.2345,
        plNum: -9000,
    },
    {
        codeName: '台積電',
        code: 2330,
        price: 750,
        marketCap: 30000,
        plPercent: 0.2345,
        plNum: 9000,
    }
]

const StockItem = (props:{ 
    codeName: string,
    code: number,
    price: number,
    marketCap: number, //下面還有一個小數字不知道是啥意思
    plPercent: number,
    plNum: number }) => {
        let plColor;
        if (props.plNum > 0) {
            plColor = 'red';
        } else {
            plColor = 'green';
        }

        return (
            <View style={styles.row}>
                <View style={styles.cellCode}>
                    <Text>{props.codeName}</Text>
                    <Text>{props.code}</Text>
                </View>
                <Text style={styles.cell}>{props.price}</Text>
                <Text style={styles.cell}>{props.marketCap}</Text>
                <View style={styles.cell}>
                    <Text style={{color: plColor}}>{props.plPercent*100} %</Text>
                    <Text style={{color: plColor}}>{props.plNum}</Text>
                </View>
            </View>
        )
}

const StockOverview = ({data} : {data: Stock[]}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>股 票 總 覽</Text>

            <View style={styles.header}>
                <Text style={styles.headerCode}>股票代號</Text>
                <Text style={styles.headerCell}>股價</Text>
                <Text style={styles.headerCell}>市值</Text>
                <Text style={styles.headerCell}>損益</Text>
            </View>
            {/* {mockData.map((item, index) => (
                <StockItem key={index} codeName={item.codeName} code={item.code} price={item.price}
                marketCap={item.marketCap} plPercent={item.plPercent} plNum={item.plNum} />
            ))} */}
            {data.map((item, index) => (
                <StockItem key={index} codeName={item.codeName} code={item.price} price={item.price}
                marketCap={item.amount*item.price} plPercent={item.amount} plNum={item.price} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 26,
        marginVertical: 10,
    },
    title: {
        color: '#416D19',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 5,
        marginBottom: 15,
    },
    header: {
        flexDirection: 'row',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#FFFFFF',
        backgroundColor: '#C8E6C9',
        padding: 10,
        // paddingVertical: 10,
        // justifyContent: 'space-around'
    },
    headerCell: {
        flex: 1,
        fontWeight: 'bold',
        color: '#1B5E20',
        justifyContent: 'flex-start'
    },
    headerCode: {
        flex: 1.3,
        fontWeight: 'bold',
        color: '#1B5E20',
        justifyContent: 'flex-start'
    },
    row: {
        flexDirection: 'row',
        backgroundColor: '#E8F5E9',
        borderBottomWidth: 2,
        borderBottomColor: '#FFFFFF',
        padding: 10,
    },
    cell: {
        flex: 1,
        // color: '#1B5E20',
        // justifyContent: 'center',
    },
    cellCode: {
        flex: 1.3,
        color: '#1B5E20',
    }
})

export default StockOverview