import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import logoImage from '../../assets/logo.png'
import { logout } from '../../screens/auth/application/logout'

const LogoLeading = () => {
    return (
    <TouchableOpacity onPress={() => logout()}>
        <Image source={logoImage} style={{width: 45, height: 45}} />
    </TouchableOpacity>
    )
}

export default LogoLeading;
