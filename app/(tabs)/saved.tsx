import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

function SavedPage() {
  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
      }}
    >
      <Text>Saved Content page</Text>
      <Link href='/log-in' style={{ textDecorationLine: 'underline' }}>
        Login
      </Link>
      <Link href='/sign-up' style={{ textDecorationLine: 'underline' }}>
        Sign up
      </Link>
      <Link href='/' style={{ textDecorationLine: 'underline' }}>
        Onboarding Page
      </Link>
    </View>
  );
}

export default SavedPage;
