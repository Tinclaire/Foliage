import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// 不知道要取啥名字
const GraySquare = ( props : { title: string, number: number }) => {
    let numResult;
    let numColor;

    if(props.title == '投資報酬率') {
        numResult = `${(props.number * 100).toFixed(2)} %`
    } else {
        numResult = props.number
    }
    
    if(props.number > 0) {
        numColor = 'red';
    }else {
        numColor= 'green';
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={{color: numColor}}>{numResult}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        paddingHorizontal: 10,
        margin: 5,
        justifyContent: 'center',
        width: 110,
        height: 65,
    },
    title: {
        color: '#000000',
        // fontWeight: '500',
    },
})

export default GraySquare