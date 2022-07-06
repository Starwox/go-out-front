import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '1',
    title: 'Luv u',
    image:
      'https://cdns-images.dzcdn.net/images/cover/fef4ff195f9a0966324056ed20c87823/264x264.jpg',
    artist: 'Nekfeu',
  },
  {
    id: '2',
    title: 'The 2nd Best Song',
    image:
      'https://cdns-images.dzcdn.net/images/cover/fef4ff195f9a0966324056ed20c87823/264x264.jpg',
    artist: 'Nekfeu',
  },
  {
    id: '3',
    title: 'The 3rd Best Song',
    image:
      'https://cdns-images.dzcdn.net/images/cover/fef4ff195f9a0966324056ed20c87823/264x264.jpg',
    artist: 'Alpha Wann',
  },
  {
    id: '4',
    title: 'The 4th Best Song',
    image:
      'https://cdns-images.dzcdn.net/images/cover/fef4ff195f9a0966324056ed20c87823/264x264.jpg',
    artist: 'Alpha Wann',
  },
];
type SongItemProps = {
  // Replace any to the real type
  item: any;
};

function SongItem({ item }: SongItemProps) {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Image
        source={{ uri: item.image }}
        style={{ width: "100%", height: 133 }}
      />
      <Button
        style={style.btn}
        onPress={() => navigation.navigate("Code")}
      >
        <Text style={{ marginTop: 8, fontSize: 12 }} variant="labelMedium">
          {item.title} {item.artist}
        </Text>
      </Button>
    </View>
  );
}

export default function ChooseSongScren() {
  return (
    <SafeAreaView style={style.area}>
      <FlatList
        data={data}
        renderItem={SongItem}
        keyExtractor={(item) => item.id}
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
