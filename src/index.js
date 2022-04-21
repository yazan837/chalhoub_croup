import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text
        style={{fontSize: 25}}
        onPress={() => navigation.navigate('Profile')}>
        Hello World
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    borderWidth: 0.5,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
  },
  containerList: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    margin: 20,
  },
});
