import React from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import {navigate} from '../../navigation/NavigationService';

const renderItem = ({item}) => {
  return (
    <TouchableOpacity
      onPress={() => navigate('ProductDetailes', {item: item})}
      style={{
        flex: 1,
        margin: 10,
        borderWidth: 10,
        alignItems: 'center',
        borderColor: '#2f2f2f',
        borderRadius: 20,
      }}>
      <Image
        source={{uri: item.image}}
        style={{width: 100, height: 200}}
        resizeMode="center"
      />
    </TouchableOpacity>
  );
};

const ProductsList = ({data}) => {
  return (
    <View>
      <FlatList
        data={data}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
};

export default ProductsList;
