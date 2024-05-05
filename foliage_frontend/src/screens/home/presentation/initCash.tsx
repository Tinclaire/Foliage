import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import OkAndNextButton from '../../../components/okAndNextButton'

const InitCash = () => {
    const [cashMode, setCashMode] = useState(true)
    const [bankMode, setBankMode] = useState(false)
    const [name, setName] = useState('')
    const [initAmount, setInitAmount] = useState(0)
    const [currency, setCurrency] = useState('')

    let cashButtonStyle = cashMode ? styles.focusedButton : styles.unfocusedButton
    let stockButtonStyle = bankMode ? styles.focusedButton : styles.unfocusedButton

    return (
        <View style={styles.container}>
            <View style={styles.typeBar}>
                <TouchableOpacity
                  style={cashButtonStyle}
                  onPress={() => {setCashMode(true); setBankMode(false)}}>
                    <Text>現金</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={stockButtonStyle}
                  onPress={() => {setCashMode(false); setBankMode(true)}}>
                    <Text>銀行</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.input}>
                <Text style={styles.inputTitle}>名 稱</Text>
                <TextInput
                  style={styles.inputBox}
                  onChangeText={text => setName(text)}
                  defaultValue={''}
                />
            </View>
            <View style={styles.input}>
                <Text style={styles.inputTitle}>初 始 金 額</Text>
                <TextInput
                  style={styles.inputBox}
                  onChangeText={text => setInitAmount(parseFloat(text))}
                  defaultValue={''}
                />
            </View>
                <View style={styles.input}>
                <Text style={styles.inputTitle}>股 數</Text>
                <TextInput
                  style={styles.inputBox}
                  onChangeText={text => setCurrency(text)}
                  defaultValue={''}
                />
            </View>
            <View style={{height: 190}}></View>
            <View>
                <OkAndNextButton ok={yes} next={yes}></OkAndNextButton>
            </View>
        </View>
        
    )
}

function yes() {
    console.log('yes')
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 26,
        marginBottom: 10,
    },
    typeBar: {
        flexDirection: 'row',
        backgroundColor: '#E3EFCF',
        borderRadius: 15,
        justifyContent: 'space-around',
        paddingVertical: 10,
        marginVertical: 10,
    },
    focusedButton: {
        backgroundColor: '#FFFFFF',
        width: 150,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    unfocusedButton: {
        width: 150,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    inputTitle: {
        flex: 1,
        fontSize: 17,
        paddingLeft: 10,
    },
    inputBox: {
        flex: 2,
        backgroundColor: '#E3EFCF',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 15,
    }
})

export default InitCash