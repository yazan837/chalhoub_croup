import React, {useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import actions from '../redux/actions';

import ProfileDetailes from './components/ProfileDetailes';

const {fetchProfile} = actions;

export default function Profile() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.profile.profile);
  const isFethingProfile = useSelector(state => state.profile.isFethingProfile);

  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  if (isFethingProfile) {
    return (
      <View style={{alignSelf: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} color={'black'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ProfileDetailes data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});
