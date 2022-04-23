import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {navigate} from '../../navigation/NavigationService';

const ProductDetailes = item => {
  const data = item.route.params.item;
  const allImages = useSelector(state => state.home.products);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image source={require('../../assets/Logo.png')} style={styles.logo} />
        <View style={styles.HeadLine}>
          <Text style={{fontSize: 16}}>MEN</Text>
          <Text style={{fontSize: 16}}>WOMEN</Text>
          <Text style={{fontSize: 16}}>KIDS</Text>
          <Text style={{fontSize: 16}}>FTW</Text>
          <Text style={{fontSize: 16}}>ACCESSORIES</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="search"
            style={{flex: 1, alignSelf: 'flex-start', width: '100%'}}
          />
        </View>
        <View style={styles.ImageContainer}>
          <Image source={{uri: data.image}} style={styles.productImage} />
          <TouchableOpacity style={styles.ResizeContainer}>
            <Image
              source={require('../../assets/resize.png')}
              style={styles.resizeImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.TitleContainer}>
          <Text style={{fontSize: 20}}>{data.title}</Text>
          <Text style={{fontSize: 14}}>{data.price} $</Text>
        </View>
        <View style={styles.TitleContainer}>
          <Text style={{fontSize: 20, color: 'grey'}}>
            Avalibale Size : M L XL XXL
          </Text>
        </View>
        <View style={styles.TitleContainer}>
          <Text style={{fontSize: 20, color: 'grey'}}>COLORS</Text>
          <View style={styles.colorContainer}>
            <TouchableOpacity
              style={{borderWidth: 20, borderColor: 'red', borderRadius: 1}}
            />
            <TouchableOpacity
              style={{borderWidth: 20, borderColor: 'black', borderRadius: 1}}
            />
            <TouchableOpacity
              style={{borderWidth: 20, borderColor: 'blue', borderRadius: 1}}
            />
            <TouchableOpacity
              style={{borderWidth: 20, borderColor: 'green', borderRadius: 1}}
            />
          </View>
        </View>
        <View style={styles.boxContainer} />
        <View style={styles.TitleContainer}>
          <Text style={{fontSize: 20, color: 'grey', fontWeight: 'bold'}}>
            DESCRIPTION
          </Text>
          <Text style={styles.descriptionText}>{data.description}</Text>
        </View>
        <View style={{width: '95%', borderWidth: 0.6, marginTop: 10}} />
        <View style={styles.TitleContainer}>
          <Text
            style={{fontSize: 20, color: 'grey', fontWeight: 'bold'}}
            onPress={() => navigate('Home')}>
            SEE MORE PRODUCTS
          </Text>
          <FlatList
            data={allImages}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={{margin: 10}}>
                  <Image
                    source={{uri: item.image}}
                    style={{width: 100, height: 200}}
                    resizeMode="center"
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetailes;

const styles = StyleSheet.create({
  container: {alignItems: 'center', backgroundColor: 'white'},
  logo: {width: 200, height: 200, resizeMode: 'center'},
  HeadLine: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'space-between',
  },
  searchContainer: {
    alignItems: 'center',
    width: '95%',
    height: 40,
    borderWidth: 0.8,
    margin: 10,
  },
  ImageContainer: {
    borderWidth: 0.9,
    width: '95%',
    alignItems: 'center',
  },
  productImage: {width: 300, height: 400, resizeMode: 'center'},
  ResizeContainer: {alignSelf: 'flex-end', borderWidth: 0.5},
  resizeImage: {width: 25, height: 25, resizeMode: 'center'},
  TitleContainer: {width: '95%', alignItems: 'flex-start', marginTop: 20},
  colorContainer: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
  },
  boxContainer: {
    height: 30,
    borderRadius: 10,
    width: '95%',
    backgroundColor: 'grey',
    marginTop: 10,
  },
  descriptionText: {fontSize: 16, color: 'grey', marginTop: 10},
});
