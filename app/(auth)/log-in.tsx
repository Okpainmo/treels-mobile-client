import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import {
  background_variant_1,
  background_variant_2,
  background_variant_3,
  text_variant_1,
  text_variant_2,
  text_variant_3,
} from '@/constants/colors';
import { Link, router } from 'expo-router';
const logo = require('../../assets/images/aora-logo.png');

function LoginInPage() {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const handleLogIn = async (e: any) => {
    e.preventDefault();

    console.log(loginForm);
  };

  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      style={styles.safeAreaWrapper}
    >
      <StatusBar
        backgroundColor={background_variant_1}
        barStyle={'light-content'}
      />
      <ScrollView style={[styles.safePadding]}>
        <View
          style={{
            flex: 1,
            height: '100%',
            // alignItems: 'center',

            // justifyContent: 'center',
          }}
        >
          <Image
            style={{ width: 100, objectFit: 'contain' }}
            source={logo}
            resizeMode='cover'

            // accessibilityLabel={`${name} pokemon`}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Nunito_800ExtraBold',
            color: `${text_variant_1}`,
          }}
        >
          Log in
        </Text>
        <View
          style={{ width: '100%', display: 'flex', gap: 10, marginTop: 30 }}
        >
          <Text style={styles.normalText_Light}>Email</Text>
          <TextInput
            placeholder='enter your email'
            style={{
              width: '100%',
              paddingHorizontal: 15,
              paddingVertical: 12,
              backgroundColor: `${background_variant_3}`,
              borderRadius: 7,
              color: `${text_variant_1}`,
              fontSize: 14,
              fontFamily: 'Nunito_400Regular',
            }}
            placeholderTextColor={text_variant_1} // Set the placeholder color here
            value={loginForm.email}
            onChangeText={(text) => {
              // console.log('email input in progress...');

              setLoginForm({
                ...loginForm,
                email: text,
              });
            }}
          />
        </View>
        <View
          style={{ width: '100%', display: 'flex', gap: 10, marginTop: 30 }}
        >
          <Text style={styles.normalText_Light}>Password</Text>
          <TextInput
            placeholder='enter your password'
            style={{
              width: '100%',
              paddingHorizontal: 15,
              paddingVertical: 12,
              backgroundColor: `${background_variant_3}`,
              borderRadius: 7,
              color: `${text_variant_1}`,
              fontSize: 14,
              fontFamily: 'Nunito_400Regular',
            }}
            placeholderTextColor={text_variant_1} // Set the placeholder color here
            secureTextEntry
            value={loginForm.password}
            onChangeText={(text) => {
              // console.log('password input in progress...');

              setLoginForm({
                ...loginForm,
                password: text,
              });
            }}
          />
        </View>
        <Pressable onPress={(): any => router.push('/complete-sign-up')}>
          <Text
            style={{
              // width: '100%',
              color: `${text_variant_1}`,
              marginTop: 10,
              textAlign: 'right',
              textDecorationLine: 'underline',
              cursor: 'pointer',
            }}
          >
            Forgot password
          </Text>
        </Pressable>
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity
            style={{
              backgroundColor: background_variant_2,
              paddingVertical: 17,
              display: 'flex',
              alignItems: 'center',
              borderRadius: 7,
              width: '100%',
              cursor: 'pointer',
            }}
            onPress={handleLogIn}
          >
            <Text
              style={{ fontFamily: 'Nunito_800ExtraBold', textAlign: 'center' }}
            >
              Log in
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}
        >
          <Text
            style={{
              // width: '100%',
              color: `${text_variant_1}`,
              // marginTop: 10,
              textAlign: 'center',
            }}
          >
            Don't have an account yet?
          </Text>
          <Link
            href='/sign-up'
            style={{
              color: `${text_variant_3}`,
              // textDecorationLine: 'underline',
              fontFamily: 'Nunito_600SemiBold',
              cursor: 'pointer',
            }}
          >
            Sign-Up
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default LoginInPage;

const styles = StyleSheet.create({
  safeAreaWrapper: {
    flex: 1,
    backgroundColor: background_variant_1,
    paddingHorizontal: 15,
  },

  normalText_Light: {
    color: text_variant_1,
    fontFamily: 'Nunito_400Regular',
  },

  normalText_Dark: {
    color: text_variant_2,
    fontFamily: 'Nunito_400Regular',
  },

  button: {
    backgroundColor: background_variant_2,
    color: text_variant_2,
    paddingVertical: 17,
    fontSize: 18,
    display: 'flex',
    fontFamily: 'Nunito_800ExtraBold',
    // alignItems: 'center',
    textAlign: 'center',
    borderRadius: 7,
    width: '100%',
    // marginTop: -150,
  },

  safePadding: {
    paddingTop: Platform.OS === 'android' ? 60 : 0,
    flex: 1,
  },
});
