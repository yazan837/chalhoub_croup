import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProfileDetailes = ({data}) => {
  return (
    <>
      <View style={{alignItems: 'center'}}>
        <Image source={{uri: data.image}} style={style.image} />
      </View>
      <View style={style.container}>
        <Text style={{fontSize: 20}}>Name :</Text>
        <Text style={{fontSize: 20}}>{data.name}</Text>
      </View>
      <View style={style.container}>
        <Text style={{fontSize: 20}}>status:</Text>
        <Text style={{fontSize: 20}}>{data.status}</Text>
      </View>
      <View style={style.container}>
        <Text style={{fontSize: 20}}>species:</Text>
        <Text style={{fontSize: 20}}>{data.species}</Text>
      </View>
      <View style={style.container}>
        <Text style={{fontSize: 20}}>gender:</Text>
        <Text style={{fontSize: 20}}>{data.gender}</Text>
      </View>
      <View style={style.container}>
        <Text style={{fontSize: 20}}>location:</Text>
        <Text style={{fontSize: 20}}>{data.location?.name}</Text>
      </View>
      <View style={style.container}>
        <Text style={{fontSize: 20}}>created:</Text>
        <Text style={{fontSize: 20}}>{data?.created?.slice(0, 10)}</Text>
      </View>
    </>
  );
};

export default ProfileDetailes;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  image: {width: 125, height: 125, borderRadius: 60},
});
