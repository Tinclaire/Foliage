import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { login } from './application/login';

const LoginScreen = ({ navigation }:{navigation: NavigationProp<any>}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foliage</Text>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <TextInput
        placeholder="帳號"
        style={styles.input}
        placeholderTextColor="#7D9A5B"
        onChange={(e) => setEmail(e.nativeEvent.text)}
      />
      <TextInput
        placeholder="密碼"
        style={styles.input}
        placeholderTextColor="#7D9A5B"
        secureTextEntry
        onChange={(e) => setPassword(e.nativeEvent.text)}
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => login(email, password)}>
        <Text style={styles.loginButtonText}>
          登入
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require('../../assets/google.png')}
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>以 Google 帳號登入</Text>
      </TouchableOpacity>

      <Text style={styles.registerText}>
        還沒有帳號嗎？
        <Text
          style={styles.registerLink}
          onPress={() => navigation.navigate('RegisterScreen')}>
          首次註冊
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#52734D',
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 40,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#D5E8C1',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 18,
    color: '#52734D',
    marginBottom: 20,
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#D5E8C1',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 18,
    color: '#52734D',
  },
  googleButton: {
    width: '80%',
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#EDEDED',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 18,
    color: '#52734D',
  },
  registerText: {
    fontSize: 16,
    color: '#52734D',
  },
  registerLink: {
    fontSize: 16,
    color: '#52734D',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
