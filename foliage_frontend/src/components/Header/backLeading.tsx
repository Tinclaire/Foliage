import { NavigationProp } from '@react-navigation/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const BackLeading = ({navigation} : {navigation: NavigationProp<any>}) => {
    return (
        <TouchableOpacity
          onPress={() => {navigation.goBack()}}>
            <AntDesign name='left' size={30} color='#9BCF53' />
        </TouchableOpacity>
    )
}

export default BackLeading