import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

function ProfilePage() {
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
      <Text>Profile Page</Text>
      <Link href='/log-in' style={{ textDecorationLine: 'underline' }}>
        Login
      </Link>
      <Link href='/sign-up' style={{ textDecorationLine: 'underline' }}>
        Sign up
      </Link>
      <Link href='/' style={{ textDecorationLine: 'underline' }}>
        Onboarding Pages
      </Link>
    </View>
  );
}

export default ProfilePage;
