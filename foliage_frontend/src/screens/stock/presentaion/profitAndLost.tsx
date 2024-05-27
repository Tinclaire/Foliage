import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import GraySquare from '../../../components/GraySquare'
import { Stock } from '../../../types/stock'
import { totalCapital, totalCost, totalPl, totalPlPercent } from '../application/combineStockData'

const screenWidth = Dimensions.get('window').width

const ProfitAndLost = (prop: {data: Stock[]}) => {
    return (
        <View style={styles.arrange}>
            <GraySquare title='今日損益' number={2000} />
            <GraySquare title='總損益' number={totalPl(prop.data)} />
            <GraySquare title='投資報酬率' number={totalPlPercent(prop.data)} />
            <GraySquare title='目前成本' number={totalCost(prop.data)} />
            <GraySquare title='市值' number={totalCapital(prop.data)} />
        </View>
    )
}

const styles = StyleSheet.create({
    arrange: {
        // backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingVertical: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'center',
    },
})

export default ProfitAndLost