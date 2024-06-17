import { Link } from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import {
  background_variant_1,
  background_variant_2,
  text_variant_1,
  text_variant_2,
  text_variant_3,
} from '@/constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
const onboardingScreenLargeImage = require('../assets/images/img-1.png');
const logo = require('../assets/images/aora-logo.png');
const stylishLineImage = require('../assets/images/img-2.png');

function OnboardingPage() {
  return (
    <SafeAreaView style={styles.safeAreaWrapper}>
      <StatusBar
        backgroundColor={background_variant_1}
        barStyle={'light-content'}
      />
      <ScrollView style={[styles.safePadding, styles.fullFlex]}>
        <View
          style={{
            flex: 1,
            height: '100%',
            alignItems: 'center',

            // justifyContent: 'center',
          }}
        >
          <Image
            style={{ width: 150, objectFit: 'contain' }}
            source={logo}
            // resizeMethod='scale'

            // accessibilityLabel={`${name} pokemon`}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: '100%',
            alignItems: 'center',
            marginTop: -300,
            // display: 'none',
          }}
        >
          <Image
            style={{ width: '100%', objectFit: 'contain' }}
            source={onboardingScreenLargeImage}
            // resizeMethod='scale'
            // accessibilityLabel={`${name} pokemon`}
          />
        </View>
        <View
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            marginTop: -30,
            // display: 'none',
          }}
        >
          <Text style={styles.boldOnboardingText}>
            <Text>Discover endless possibilities with</Text>
            <Text style={{ color: text_variant_3 }}> Aora</Text>
          </Text>
        </View>
        <View style={{ width: '100%', position: 'relative' }}>
          <Image
            style={{
              width: 60,
              objectFit: 'contain',
              position: 'absolute',
              left: 292,
              bottom: 160,
            }}
            source={stylishLineImage}
            // resizeMethod='scale'

            // accessibilityLabel={`${name} pokemon`}
          />
        </View>
        <View></View>
        <View style={{ marginTop: -155 }}>
          <Text
            style={{
              fontFamily: 'Nunito_400Regular',
              color: 'white',
              fontSize: 16,
              textAlign: 'center',
              marginBottom: 35,
              // color: `${text_variant_1}`,
            }}
          >
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora.
          </Text>
          <Link href='/log-in' style={styles.button}>
            Get Started
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default OnboardingPage;

const styles = StyleSheet.create({
  fullFlex: {
    flex: 1,
  },

  safeAreaWrapper: {
    flex: 1,
    backgroundColor: background_variant_1,
    paddingHorizontal: 15,
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

  boldOnboardingText: {
    color: text_variant_1,
    marginTop: -250,
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 30,
    width: '90%',
    textAlign: 'center',
    lineHeight: 40,
    letterSpacing: 0.5,
    fontWeight: 'bold',
  },

  safePadding: {
    paddingTop: Platform.OS === 'android' ? 60 : 0,
    flex: 1,
  },
});
