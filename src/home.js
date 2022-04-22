import React, {useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import actions from '../redux/actions';
import ProductsList from './components/ProductsList';

const {fetchProducts} = actions;

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.home.products);
  const isFethingProducts = useSelector(state => state.home.isFethingProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isFethingProducts) {
    return (
      <View style={{alignSelf: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} color={'black'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ProductsList data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});
