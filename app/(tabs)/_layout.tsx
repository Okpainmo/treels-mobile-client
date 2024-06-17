import React from 'react';
import { Tabs } from 'expo-router';
import { TabBarIcons } from '@/constants/Icons';
import {
  background_variant_1,
  background_variant_2,
  text_variant_1,
} from '@/constants/colors';
import {
  useFonts,
  Nunito_200ExtraLight,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
  Nunito_900Black,
} from '@expo-google-fonts/nunito';

export default function TabLayout() {
  let [fontsLoaded] = useFonts({
    Nunito_200ExtraLight,
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
    Nunito_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: `${background_variant_2}`,
        tabBarInactiveTintColor: `${text_variant_1}`,
        // tabBarShowLabel: false,
        headerShown: false,
        tabBarLabelPosition: 'below-icon',
        tabBarLabelStyle: {
          paddingTop: 5,
          paddingBottom: 7,
          // fontFamily: 'Nunito_600SemiBold',
        },
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarStyle: {
          backgroundColor: `${background_variant_1}`,
          borderTopWidth: 1,
          borderTopColor: '#232533',
          minHeight: 55,
          // paddingVertical: 10,
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcons
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='create'
        options={{
          title: 'Create',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcons
              name={focused ? 'add-circle' : 'add-circle-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcons
              name={focused ? 'person' : 'person-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='saved'
        options={{
          title: 'Saved',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcons
              name={focused ? 'bookmark' : 'bookmark-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
