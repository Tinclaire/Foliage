import { NavigationProp } from '@react-navigation/native'
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import Header from '../../../components/Header/Header'

const StockTrading = ({navigation} : { navigation: NavigationProp<any> }) => {
    const [buyMode, setBuyMode] = useState(true)
    const [sellMode, setSellMode] = useState(false)
    const [stock, setStock] = useState('')
    const [amount, setAmount] = useState(0)
    const [price, setPrice] = useState(0)
    // const [stock, setStock] = useState('')

    let buyButtonStyle = buyMode ? styles.focusedButton : styles.unfocusedButton
    let sellButtonStyle = sellMode ? styles.focusedButton : styles.unfocusedButton

    return (
        <>
        <Header title='股 票' navigation={navigation}/>
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.tradeModeContainer}>
                    <TouchableOpacity
                      style={buyButtonStyle}
                      onPress={() => {setBuyMode(true); setSellMode(false)}}>
                        <Text>買入</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={sellButtonStyle}
                      onPress={() => {setSellMode(true); setBuyMode(false)}}>
                        <Text>賣出</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                  style={styles.textInput}
                  placeholder='股 票 名 稱'
                  onChangeText={text => setStock(text)}
                  defaultValue={stock}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder='股 數'
                  onChangeText={text => setAmount(parseFloat(text))}
                  defaultValue={''}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder='均 價'
                  onChangeText={text => setPrice(parseFloat(text))}
                  defaultValue={''}
                />
            </ScrollView>
        </SafeAreaView>
        </>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        paddingHorizontal: 26,
    },
    tradeModeContainer: {
        backgroundColor: '#E3EFCF',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        // alignItems: 
        paddingVertical: 10,
        marginBottom: 10,
    },
    focusedButton: {
        backgroundColor: '#FFFFFF',
        width: 150,
        height: 40,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    unfocusedButton: {
        width: 150,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        backgroundColor: '#E3EFCF',
        borderRadius: 15,
        paddingVertical: 15,
        paddingHorizontal: 20,
        fontSize: 15,
        marginVertical: 10,
    },
})

export default StockTrading