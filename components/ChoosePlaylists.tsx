import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";

type SongItemProps = {
  // Replace any to the real type
  item: any;
};

function SongItem({ item }: SongItemProps) {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Image
        source={{ uri: item.img_music[0].url }}
        style={{ width: "100%", height: 300 }}
      />
      <Button
        style={style.btn}
        onPress={() => {
          navigation.navigate("Songs", {idPlaylist: item.id_playlist})
        }}
      >
        <Text style={{ marginTop: 8, fontSize: 12 }} variant="labelMedium">
          {item.name}
        </Text>
      </Button>
    </View>
  );
}

export default function ChooseSongScren() {
  const playlists = useSelector((state) => state.playlists.playlists);
  return (
    <SafeAreaView style={style.area}>
    <FlatList
      data={playlists}
      renderItem={({item}) => <SongItem item={item} />}
      keyExtractor={(item, index) => String(index)}
      numColumns={2}
      style={style.list}
    />
  </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
    
  },
  area: {
    marginTop: 105,
    textAlign: 'center',
    flex: 1,
  },
  list: {
    flex: 1,
    paddingVertical: 20,
  },
  btn: {
    minWidth: '110%',
    borderRadius: 25,
    
    height:50,
    // alignItems:"center",
    // justifyContent:"center",
    marginTop: 8,
    backgroundColor: '#96527A',
  },
});
