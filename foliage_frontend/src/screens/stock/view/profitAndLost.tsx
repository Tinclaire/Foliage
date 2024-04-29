import React from 'react'
import { StyleSheet, View } from 'react-native'
import GraySquare from '../../../components/GraySquare'

const ProfitAndLost = () => {
    return (
        <View style={styles.arrange}>
            <GraySquare title='今日損益' number={2000} />
            <GraySquare title='總損益' number={-13000} />
            <GraySquare title='投資報酬率' number={0.2345} />
            <GraySquare title='目前成本' number={67000} />
            <GraySquare title='市值' number={80000} />
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