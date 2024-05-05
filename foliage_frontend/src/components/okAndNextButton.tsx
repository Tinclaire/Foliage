import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const OkAndNextButton = (prop :{ok: Function, next: Function}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {prop.ok()}}>
                <Text style={styles.text}>完 成</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {prop.next()}}>
                <Text style={styles.text}>下 一 筆</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        backgroundColor: '#E3EFCF',
        borderRadius: 20,
        width: 150,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 17,
    }
})

export default OkAndNextButton