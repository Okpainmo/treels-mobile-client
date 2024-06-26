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

function Home() {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const handleLogIn = async (e: any) => {
    e.preventDefault();

    console.log(loginForm);
  };

  return (
    <SafeAreaView style={styles.safeAreaWrapper}>
      <StatusBar
        backgroundColor={background_variant_1}
        barStyle={'light-content'}
      />
      <View style={{ position: 'absolute', bottom: 20, right: 20, zIndex: 40 }}>
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
            <Ionicons name='add' size={30} color={text_variant_2} />
          </View>
        </Link>
      </View>
      <ScrollView style={[styles.safePadding]}>
        <View
          style={{
            flex: 1,
            height: '100%',
            minHeight: 60,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 12,
          }}
        >
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              // justifyContent: 'center',
              width: '60%',
              gap: 15,
            }}
          >
            <Image
              style={{
                width: 40,
                objectFit: 'contain',
                height: 40,
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
                  fontSize: 14,
                  fontFamily: 'Nunito_400Regular',
                  color: `${text_variant_1}`,
                }}
              >
                Welcome back
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Nunito_800ExtraBold',
                  color: `${text_variant_1}`,
                }}
              >
                Ugo
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 30,
            }}
          >
            <Link href='/search'>
              <Ionicons name='search' size={25} color={text_variant_1} />
            </Link>
            <Link href='/chat'>
              <View style={{ position: 'relative' }}>
                <View
                  style={{
                    backgroundColor: `${background_variant_2}`,
                    position: 'absolute',
                    zIndex: 20,
                    width: 25,
                    height: 25,
                    borderRadius: 50,
                    top: -7,
                    left: -10,
                  }}
                >
                  <Text
                    style={{
                      color: `${text_variant_2}`,
                      // zIndex: 10,
                      fontSize: 12,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 3,
                    }}
                  >
                    90+
                  </Text>
                </View>
                <Ionicons name='chatbubble' size={32} color={text_variant_1} />
              </View>
            </Link>
          </View>
        </View>
        <ScrollView
          scrollEnabled={true}
          horizontal={true}
          style={{
            marginTop: 15,
            minWidth: '100%',
            overflow: 'scroll',
          }}
        >
          <Image
            style={{
              marginHorizontal: 10,
              width: 80,
              objectFit: 'contain',
              height: 80,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: `${border_variant_1}`,
            }}
            source={mockAvatar1}
            // resizeMethod='scale'

            // accessibilityLabel={`${name} pokemon`}
          />
          <Image
            style={{
              marginHorizontal: 10,
              width: 80,
              objectFit: 'contain',
              height: 80,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: `${border_variant_1}`,
            }}
            source={mockAvatar2}
            // resizeMethod='scale'

            // accessibilityLabel={`${name} pokemon`}
          />
          <Image
            style={{
              marginHorizontal: 10,
              width: 80,
              objectFit: 'contain',
              height: 80,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: `${border_variant_1}`,
            }}
            source={mockAvatar3}
            // resizeMethod='scale'

            // accessibilityLabel={`${name} pokemon`}
          />
          <Image
            style={{
              marginHorizontal: 10,
              width: 80,
              objectFit: 'contain',
              height: 80,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: `${border_variant_1}`,
            }}
            source={mockAvatar4}
            // resizeMethod='scale'

            // accessibilityLabel={`${name} pokemon`}
          />
          <Image
            style={{
              marginHorizontal: 10,
              width: 80,
              objectFit: 'contain',
              height: 80,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: `${border_variant_1}`,
            }}
            source={mockAvatar3}
            // resizeMethod='scale'

            // accessibilityLabel={`${name} pokemon`}
          />
          <Image
            style={{
              marginHorizontal: 10,
              width: 80,
              objectFit: 'contain',
              height: 80,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: `${border_variant_1}`,
            }}
            source={mockAvatar2}
            // resizeMethod='scale'

            // accessibilityLabel={`${name} pokemon`}
          />
          <Image
            style={{
              marginHorizontal: 10,
              width: 80,
              objectFit: 'contain',
              height: 80,
              borderRadius: 50,
              borderWidth: 2,
              borderColor: `${border_variant_1}`,
            }}
            source={mockAvatar1}
            // resizeMethod='scale'

            // accessibilityLabel={`${name} pokemon`}
          />
        </ScrollView>
        <View style={{ display: 'flex' }}>
          <View
            style={{
              paddingTop: 15,
              paddingBottom: 22,
              borderBottomWidth: 0.5,
              borderBottomColor: `${border_variant_1}`,
            }}
          >
            <View
              style={{
                flex: 1,
                height: '100%',
                minHeight: 60,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  // justifyContent: 'center',
                  width: '60%',
                  gap: 15,
                }}
              >
                <Image
                  style={{
                    width: 40,
                    objectFit: 'contain',
                    height: 40,
                    borderRadius: 50,
                  }}
                  source={mockAvatar4}
                  // resizeMethod='scale'

                  // accessibilityLabel={`${name} pokemon`}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Nunito_600SemiBold',
                    color: `${text_variant_1}`,
                  }}
                >
                  Mentee Ugo
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    color: `${text_variant_1}`,
                    fontSize: 12,
                    fontFamily: 'Nunito_400Regular',
                  }}
                >
                  June 24
                </Text>
                <Ionicons
                  name='ellipsis-vertical'
                  size={22}
                  color={text_variant_1}
                />
              </View>
            </View>
            <View style={{ display: 'flex' }}>
              <Text
                style={{
                  paddingBottom: 5,
                  color: `${text_variant_1}`,
                  fontFamily: 'Nunito_400Regular',
                  paddingHorizontal: 12,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                perspiciatis fugit, repudianda...
              </Text>
              <Text
                style={{
                  color: `${text_variant_3}`,
                  fontFamily: 'Nunito_400Regular',
                  paddingHorizontal: 12,
                  marginBottom: 10,
                }}
              >
                Read more
              </Text>
              <Image
                resizeMode='cover'
                style={{
                  // objectFit: 'contain',
                  // resizeMode: 'cover',
                  height: 250,
                  width: '100%',
                }}
                source={mockPostImage1}
                // resizeMethod='scale'

                // accessibilityLabel={`${name} pokemon`}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                paddingHorizontal: 12,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                <Ionicons
                  name='chatbubble-outline'
                  size={22}
                  color={text_variant_1}
                />
                <Text style={{ color: `${text_variant_1}` }}>178</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                <Ionicons
                  name='arrow-redo-outline'
                  size={22}
                  color={text_variant_1}
                />
                <Text style={{ color: `${text_variant_1}` }}>12</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                <Ionicons
                  name='heart-outline'
                  size={22}
                  color={text_variant_1}
                />
                <Text style={{ color: `${text_variant_1}` }}>12</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                <Ionicons
                  name='bookmark-outline'
                  size={22}
                  color={text_variant_1}
                />
                <Text style={{ color: `${text_variant_1}` }}>12</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                <Ionicons
                  name='share-social-outline'
                  size={22}
                  color={text_variant_1}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              paddingTop: 15,
              paddingBottom: 22,
              borderBottomWidth: 0.5,
              borderBottomColor: `${border_variant_1}`,
            }}
          >
            <View
              style={{
                flex: 1,
                height: '100%',
                minHeight: 60,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  // justifyContent: 'center',
                  width: '60%',
                  gap: 15,
                }}
              >
                <Image
                  style={{
                    width: 40,
                    objectFit: 'contain',
                    height: 40,
                    borderRadius: 50,
                  }}
                  source={mockAvatar4}
                  // resizeMethod='scale'

                  // accessibilityLabel={`${name} pokemon`}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Nunito_600SemiBold',
                    color: `${text_variant_1}`,
                  }}
                >
                  Mentee Ugo
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    color: `${text_variant_1}`,
                    fontSize: 12,
                    fontFamily: 'Nunito_400Regular',
                  }}
                >
                  June 24
                </Text>
                <Ionicons
                  name='ellipsis-vertical'
                  size={22}
                  color={text_variant_1}
                />
              </View>
            </View>
            <View style={{ display: 'flex' }}>
              <Text
                style={{
                  paddingBottom: 5,
                  color: `${text_variant_1}`,
                  fontFamily: 'Nunito_400Regular',
                  paddingHorizontal: 12,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                perspiciatis fugit, repudianda...
              </Text>
              <Text
                style={{
                  color: `${text_variant_3}`,
                  fontFamily: 'Nunito_400Regular',
                  paddingHorizontal: 12,
                  marginBottom: 10,
                }}
              >
                Read more
              </Text>
              <Image
                resizeMode='cover'
                style={{
                  // objectFit: 'contain',
                  // resizeMode: 'cover',
                  height: 250,
                  width: '100%',
                }}
                source={mockPostImage1}
                // resizeMethod='scale'

                // accessibilityLabel={`${name} pokemon`}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                paddingHorizontal: 12,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                <Ionicons
                  name='chatbubble-outline'
                  size={22}
                  color={text_variant_1}
                />
                <Text style={{ color: `${text_variant_1}` }}>178</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                <Ionicons
                  name='arrow-redo-outline'
                  size={22}
                  color={text_variant_1}
                />
                <Text style={{ color: `${text_variant_1}` }}>12</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                <Ionicons
                  name='heart-outline'
                  size={22}
                  color={text_variant_1}
                />
                <Text style={{ color: `${text_variant_1}` }}>12</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                <Ionicons
                  name='bookmark-outline'
                  size={22}
                  color={text_variant_1}
                />
                <Text style={{ color: `${text_variant_1}` }}>12</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                <Ionicons
                  name='share-social-outline'
                  size={22}
                  color={text_variant_1}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              paddingTop: 15,
              paddingBottom: 22,
              borderBottomWidth: 0.5,
              borderBottomColor: `${border_variant_1}`,
            }}
          >
            <View
              style={{
                flex: 1,
                height: '100%',
                minHeight: 60,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 12,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  // justifyContent: 'center',
                  width: '60%',
                  gap: 15,
                }}
              >
                <Image
                  style={{
                    width: 40,
                    objectFit: 'contain',
                    height: 40,
                    borderRadius: 50,
                  }}
                  source={mockAvatar4}
                  // resizeMethod='scale'

                  // accessibilityLabel={`${name} pokemon`}
                />
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'Nunito_600SemiBold',
                    color: `${text_variant_1}`,
                  }}
                >
                  Mentee Ugo
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    color: `${text_variant_1}`,
                    fontSize: 12,
                    fontFamily: 'Nunito_400Regular',
                  }}
                >
                  June 24
                </Text>
                <Ionicons
                  name='ellipsis-vertical'
                  size={22}
                  color={text_variant_1}
                />
              </View>
            </View>
            <View style={{ display: 'flex' }}>
              <Text
                style={{
                  paddingBottom: 5,
                  color: `${text_variant_1}`,
                  fontFamily: 'Nunito_400Regular',
                  paddingHorizontal: 12,
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                perspiciatis fugit, repudianda...
              </Text>
              <Text
                style={{
                  color: `${text_variant_3}`,
                  fontFamily: 'Nunito_400Regular',
                  paddingHorizontal: 12,
                  marginBottom: 10,
                }}
              >
                Read more
              </Text>
              <Image
                resizeMode='cover'
                style={{
                  // objectFit: 'contain',
                  // resizeMode: 'cover',
                  height: 250,
                  width: '100%',
                }}
                source={mockPostImage1}
                // resizeMethod='scale'

                // accessibilityLabel={`${name} pokemon`}
              />
            </View>
            <View
              style={{
                marginTop: 10,
                paddingHorizontal: 12,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                <Ionicons
                  name='chatbubble-outline'
                  size={22}
                  color={text_variant_1}
                />
                <Text style={{ color: `${text_variant_1}` }}>178</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                <Ionicons
                  name='arrow-redo-outline'
                  size={22}
                  color={text_variant_1}
                />
                <Text style={{ color: `${text_variant_1}` }}>12</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                <Ionicons
                  name='heart-outline'
                  size={22}
                  color={text_variant_1}
                />
                <Text style={{ color: `${text_variant_1}` }}>12</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                <Ionicons
                  name='bookmark-outline'
                  size={22}
                  color={text_variant_1}
                />
                <Text style={{ color: `${text_variant_1}` }}>12</Text>
              </View>
              <View style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
                <Ionicons
                  name='share-social-outline'
                  size={22}
                  color={text_variant_1}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

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
