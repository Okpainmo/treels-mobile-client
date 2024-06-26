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
          <View>
            <Text
              style={{
                fontFamily: `Nunito_400Regular`,
                marginTop: 25,
                color: `${text_variant_1}`,
                fontSize: 14,
              }}
            >
              Recent
            </Text>
            <View style={{ marginTop: 20, display: 'flex', gap: 20 }}>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                <Ionicons
                  name='time-outline'
                  size={25}
                  color={text_variant_3}
                />
                <Text
                  style={{
                    fontFamily: `Nunito_400Regular`,
                    color: `${text_variant_1}`,
                    fontSize: 14,
                  }}
                >
                  Trending
                </Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                <Ionicons
                  name='time-outline'
                  size={25}
                  color={text_variant_3}
                />
                <Text
                  style={{
                    fontFamily: `Nunito_400Regular`,
                    color: `${text_variant_1}`,
                    fontSize: 14,
                  }}
                >
                  Trending
                </Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                <Ionicons
                  name='time-outline'
                  size={25}
                  color={text_variant_3}
                />
                <Text
                  style={{
                    fontFamily: `Nunito_400Regular`,
                    color: `${text_variant_1}`,
                    fontSize: 14,
                  }}
                >
                  Trending
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontFamily: `Nunito_400Regular`,
                marginTop: 40,
                color: `${text_variant_1}`,
                fontSize: 14,
              }}
            >
              Search Recommendations
            </Text>
            <View style={{ marginTop: 20, display: 'flex', gap: 20 }}>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                <Ionicons name='search' size={25} color={text_variant_3} />
                <Text
                  style={{
                    fontFamily: `Nunito_400Regular`,
                    color: `${text_variant_1}`,
                    fontSize: 14,
                  }}
                >
                  Trending
                </Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                <Ionicons name='search' size={25} color={text_variant_3} />
                <Text
                  style={{
                    fontFamily: `Nunito_400Regular`,
                    color: `${text_variant_1}`,
                    fontSize: 14,
                  }}
                >
                  Trending
                </Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
                <Ionicons name='search' size={25} color={text_variant_3} />
                <Text
                  style={{
                    fontFamily: `Nunito_400Regular`,
                    color: `${text_variant_1}`,
                    fontSize: 14,
                  }}
                >
                  Trending
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
  },
});
