import firestore from '@react-native-firebase/firestore';
import { Picker } from '@react-native-picker/picker';
import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from '../../../components/Header/Header';
import BackLeading from '../../../components/Header/backLeading';
import OkAndNextButton from '../../../components/okAndNextButton';
import db from '../../../firestore/firestore';

const items = [
    { label: "郵局", value: 700 },
    { label: "國泰", value: 13 },
    { label: "選項3", value: 999 },
];

const StockTrading = ({navigation} : { navigation: NavigationProp<any> }) => {
    const [buyMode, setBuyMode] = useState(true)
    const [sellMode, setSellMode] = useState(false)
    const [stock, setStock] = useState('')
    const [amount, setAmount] = useState(0)
    const [price, setPrice] = useState(0)
    const [selected, setSelected] = useState(null)

    const pickerMode = Platform.OS === 'android' ? 'dropdown' : undefined;
    let buyButtonStyle = buyMode ? styles.focusedButton : styles.unfocusedButton
    let sellButtonStyle = sellMode ? styles.focusedButton : styles.unfocusedButton

    async function writeStock (button:string) {
      const docNumber = await db.collection('stock').get();
      console.log(docNumber.size)
      const nextId = docNumber.size +1;
      if(buyMode){
        const data = {
          accountId: selected,
          amount: amount,
          codeName: stock,
          createdAt: firestore.Timestamp.now(),
          price: price,
        }
        console.log(data)
        // TODO 買了同一支股票
        // await db.collection('stock').doc(nextId.toString()).set(data)
        await db.collection('stock').add(data)
        .then(() => {console.log('successfully buy stock')})
        .catch(err => console.error(err))

        if(button == 'ok'){
          // back to stockScreen
          navigation.goBack();
        }
        if(button == 'next'){
          setStock('')
          setAmount(0)
          setPrice(0)
          setSelected(null)
        }
      }
    }

    async function okButton(){
      await writeStock('ok')
    }
    async function nextButton(){
      await writeStock('next')
    }

    return (
        <>
        <SafeAreaView style={styles.container}>
            <Header title='股 票' leading={<BackLeading navigation={navigation} />} action={<View style={{width: 45, height: 45}} />}/>
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
                  defaultValue=''
                  value={resetTextInput(amount)}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder='均 價'
                  onChangeText={text => setPrice(parseFloat(text))}
                  defaultValue=''
                  value={resetTextInput(price)}
                />
                <View style={styles.pickerContainer}>
                    <Picker
                      selectedValue={selected}
                      mode={pickerMode}
                      onValueChange={(itemValue, itemIndex) => {
                        setSelected(itemValue);
                        console.log(`this is state: ${selected}`)
                        console.log(`this is itemValue: ${itemValue}`)
                      }}
                    >
                        <Picker.Item label='帳 戶' value={null} style={styles.pickerLabel}/>
                        {items.map((item, index) => (
                            <Picker.Item key={index} label={item.label} value={item.value} style={styles.pickerLabel}/>
                        ))}
                    </Picker>
                </View>
                {/* <Text>{selected}</Text> */}
                <View style={{height: 140}}></View>
                <View style={styles.submitContainer}>
                    <OkAndNextButton ok={okButton} next={nextButton}></OkAndNextButton>
                </View>
            </ScrollView>
        </SafeAreaView>
        </>
        
    )
}

function resetTextInput(num:number){
  if(num == 0){
    const defaultValue = '';
    return defaultValue;
  }
  return
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    tradeModeContainer: {
        backgroundColor: '#E3EFCF',
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'space-around',
        // alignItems: 
        paddingVertical: 10,
        marginHorizontal: 26,
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
        marginHorizontal: 26,
    },
    leading: {
        width: 45,
        height: 45,
    },
    pickerContainer: {
        marginVertical: 10,
        marginHorizontal: 26,
        borderRadius: 15,
        backgroundColor: '#E3EFCF',
        overflow: 'hidden',
        paddingVertical: 3,
        paddingHorizontal: 3,
    },
    pickerLabel: {
        fontSize: 15,
    },
    submitContainer: {
        marginVertical: 10,
        marginHorizontal: 26,
    }
})

export default StockTrading