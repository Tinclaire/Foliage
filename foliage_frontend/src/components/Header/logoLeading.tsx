import React from 'react'
import { Image } from 'react-native'
import logoImage from '../../assets/logo.png'

const LogoLeading = () => {
    return (
        <Image source={logoImage} style={{width: 45, height: 45}} />
    )
}

export default LogoLeading