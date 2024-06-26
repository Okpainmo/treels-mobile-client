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
  FlatList,
} from 'react-native';
import {
  background_variant_1,
  background_variant_2,
  background_variant_3,
  background_variant_4,
  text_variant_1,
  text_variant_2,
  text_variant_3,
  border_variant_1,
} from '@/constants/colors';
import { Link, router } from 'expo-router';
const mockAvatar1 = require('../../assets/images/img-4.png');
const mockAvatar2 = require('../../assets/images/img-5.png');
const mockAvatar3 = require('../../assets/images/img-6.png');
const mockAvatar4 = require('../../assets/images/img-8.jpg');
const mockPostImage1 = require('../../assets/images/img-9.jpg');
const mockPostImage2 = require('../../assets/images/img-7.png');
import Ionicons from '@expo/vector-icons/Ionicons';

function SearchPage() {
  const [searchForm, setSearchForm] = useState({
    searchText: '',
  });

  const handleSearch = async (e: any) => {
    e.preventDefault();

    console.log(searchForm);
  };

  return (
    <SafeAreaView style={styles.safeAreaWrapper}>
      <StatusBar
        backgroundColor={background_variant_1}
        barStyle={'light-content'}
      />
      <View style={{ position: 'absolute', bottom: 40, right: 30, zIndex: 40 }}>
        <Link href='/add-chat'>
          <View
            // href='/start-chat'
            style={{
              backgroundColor: `${background_variant_2}`,
              width: 55,
              height: 55,
              borderRadius: 50,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Ionicons
              name='chatbox-ellipses'
              size={30}
              color={text_variant_2}
            />
          </View>
        </Link>
      </View>
      <ScrollView style={[styles.safePadding]}>
        <View style={{ paddingHorizontal: 12 }}>
          <View
            style={{
              marginTop: 15,
              display: 'flex',
              flexDirection: 'row',
              // gap: 10,
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* <Pressable
              onPress={handleSearch}
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                // backgroundColor: 'white',
              }}
            >
              <Ionicons name='search' size={25} color={text_variant_3} />
            </Pressable> */}
            <View style={{ width: '10%' }}>
              <Pressable onPress={() => router.back()}>
                <Ionicons
                  name='arrow-back-outline'
                  size={32}
                  color={text_variant_1}
                />
              </Pressable>
            </View>
            <View style={{ width: '85%' }}>
              <TextInput
                placeholder='Search'
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 12,
                  backgroundColor: `${background_variant_3}`,
                  borderRadius: 7,
                  color: `${text_variant_1}`,
                  fontSize: 14,
                  fontFamily: 'Nunito_400Regular',
                }}
                placeholderTextColor={text_variant_1} // Set the placeholder color here
                value={searchForm.searchText}
                onChangeText={(text) => {
                  // console.log('password input in progress...');

                  setSearchForm({
                    ...searchForm,
                    searchText: text,
                  });

                  console.log(searchForm);
                }}
              />
            </View>
          </View>
          <Text
            style={{
              fontFamily: `Nunito_600SemiBold`,
              color: `${text_variant_1}`,
              fontSize: 16,
              marginTop: 20,
            }}
          >
            Chats
          </Text>
          <View style={{ marginTop: 25, display: 'flex', gap: 20 }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'center',
                width: '60%',
                gap: 20,
              }}
            >
              <Image
                style={{
                  width: 60,
                  objectFit: 'contain',
                  height: 60,
                  borderRadius: 50,
                }}
                source={mockAvatar1}
                // resizeMethod='scale'

                // accessibilityLabel={`${name} pokemon`}
              />
              <View
                style={{
                  display: 'flex',
                  gap: 3,
                  flexDirection: 'column',
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Nunito_600SemiBold',
                    color: `${text_variant_1}`,
                  }}
                >
                  Ugo
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Nunito_400Regular',
                    color: `${text_variant_1}`,
                  }}
                >
                  Hello Sam, are you on...
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'center',
                width: '60%',
                gap: 20,
              }}
            >
              <Image
                style={{
                  width: 60,
                  objectFit: 'contain',
                  height: 60,
                  borderRadius: 50,
                }}
                source={mockAvatar1}
                // resizeMethod='scale'

                // accessibilityLabel={`${name} pokemon`}
              />
              <View
                style={{
                  display: 'flex',
                  gap: 3,
                  flexDirection: 'column',
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Nunito_600SemiBold',
                    color: `${text_variant_1}`,
                  }}
                >
                  Ugo
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Nunito_400Regular',
                    color: `${text_variant_1}`,
                  }}
                >
                  Hello Sam, are you on...
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'center',
                width: '60%',
                gap: 20,
              }}
            >
              <Image
                style={{
                  width: 60,
                  objectFit: 'contain',
                  height: 60,
                  borderRadius: 50,
                }}
                source={mockAvatar1}
                // resizeMethod='scale'

                // accessibilityLabel={`${name} pokemon`}
              />
              <View
                style={{
                  display: 'flex',
                  gap: 3,
                  flexDirection: 'column',
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Nunito_600SemiBold',
                    color: `${text_variant_1}`,
                  }}
                >
                  Ugo
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Nunito_400Regular',
                    color: `${text_variant_1}`,
                  }}
                >
                  Hello Sam, are you on...
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'center',
                width: '60%',
                gap: 20,
              }}
            >
              <Image
                style={{
                  width: 60,
                  objectFit: 'contain',
                  height: 60,
                  borderRadius: 50,
                }}
                source={mockAvatar1}
                // resizeMethod='scale'

                // accessibilityLabel={`${name} pokemon`}
              />
              <View
                style={{
                  display: 'flex',
                  gap: 3,
                  flexDirection: 'column',
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Nunito_600SemiBold',
                    color: `${text_variant_1}`,
                  }}
                >
                  Ugo
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Nunito_400Regular',
                    color: `${text_variant_1}`,
                  }}
                >
                  Hello Sam, are you on...
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                // justifyContent: 'center',
                width: '60%',
                gap: 20,
              }}
            >
              <Image
                style={{
                  width: 60,
                  objectFit: 'contain',
                  height: 60,
                  borderRadius: 50,
                }}
                source={mockAvatar1}
                // resizeMethod='scale'

                // accessibilityLabel={`${name} pokemon`}
              />
              <View
                style={{
                  display: 'flex',
                  gap: 3,
                  flexDirection: 'column',
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: 'Nunito_600SemiBold',
                    color: `${text_variant_1}`,
                  }}
                >
                  Ugo
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'Nunito_400Regular',
                    color: `${text_variant_1}`,
                  }}
                >
                  Hello Sam, are you on...
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SearchPage;

const styles = StyleSheet.create({
  safeAreaWrapper: {
    flex: 1,
    backgroundColor: background_variant_1,
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
    paddingTop: Platform.OS === 'android' ? 50 : 0,
    flex: 1,
    position: 'relative',
    zIndex: 30,
  },
});
