import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import OkAndNextButton from '../../../components/okAndNextButton'

const InitStock = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [amount, setAmount] = useState(0)

    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <Text style={styles.inputTitle}>名 稱</Text>
                <TextInput
                  style={styles.inputBox}
                  onChangeText={text => setName(text)}
                  defaultValue={''}
                />
            </View>
            <View style={styles.input}>
                <Text style={styles.inputTitle}>均 價</Text>
                <TextInput
                  style={styles.inputBox}
                  onChangeText={text => setPrice(parseFloat(text))}
                  defaultValue={''}
                />
            </View>
                <View style={styles.input}>
                <Text style={styles.inputTitle}>股 數</Text>
                <TextInput
                  style={styles.inputBox}
                  onChangeText={text => setAmount(parseFloat(text))}
                  defaultValue={''}
                />
            </View>
            <View style={{height: 260}}></View>
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
        flex: 2.5,
        backgroundColor: '#E3EFCF',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 15,
    }
})

export default InitStock