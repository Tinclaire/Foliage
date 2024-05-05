import { NavigationProp } from '@react-navigation/native'
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../../components/Header/Header'
import BackLeading from '../../../components/Header/backLeading'
import InitCash from './initCash'
import InitStock from './initStock'

const InitAccount = (prop : {navigation: NavigationProp<any>}) => {
    const [cashMode, setCashMode] = useState(true)
    const [stockMode, setStockMode] = useState(false)
    const [bitcoinMode, setBitcoinMode] = useState(false)

    let cashButtonStyle = cashMode ? styles.focusedButton : styles.unfocusedButton
    let stockButtonStyle = stockMode ? styles.focusedButton : styles.unfocusedButton
    let bitcoinButtonStyle = bitcoinMode ? styles.focusedButton : styles.unfocusedButton
    return (
        <SafeAreaView style={styles.container}>
            <Header title='初 始 化 帳 戶' leading={<BackLeading navigation={prop.navigation}/>} action={<View style={{width: 45, height: 45}}/>}></Header>
            <ScrollView>
                <View style={styles.typeBar}>
                    <TouchableOpacity
                      style={cashButtonStyle}
                      onPress={() => {setCashMode(true); setStockMode(false); setBitcoinMode(false)}}>
                        <Text>一般</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={stockButtonStyle}
                      onPress={() => {setCashMode(false); setStockMode(true); setBitcoinMode(false)}}>
                        <Text>股票</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={bitcoinButtonStyle}
                      onPress={() => {setCashMode(false); setStockMode(false); setBitcoinMode(true)}}>
                        <Text>虛擬貨幣</Text>
                    </TouchableOpacity>
                </View>

                {cashMode ? <InitCash /> : <View />}
                {stockMode ? <InitStock /> : <View />}
                {/* TODO 比特幣目前跟股票的長一樣 */}
                {bitcoinMode ? <InitStock /> : <View />}
            </ScrollView>
        </SafeAreaView>
    )
}

function yes() {
    console.log('yes')
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    typeBar: {
        flexDirection: 'row',
        backgroundColor: '#E3EFCF',
        borderRadius: 15,
        justifyContent: 'space-around',
        paddingVertical: 10,
        marginHorizontal: 26,
        marginBottom: 10,
    },
    focusedButton: {
        backgroundColor: '#FFFFFF',
        width: 100,
        height: 40,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    unfocusedButton: {
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default InitAccount