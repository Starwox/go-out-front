import React from "react";
import { SafeAreaView, FlatList, Text, StyleSheet, View, Image} from "react-native";
import { Item } from "react-native-paper/lib/typescript/components/List/List";

const data = [
    {
        "id": "1",
        "title": "The Best Song",
        "image": "https://cdns-images.dzcdn.net/images/cover/fef4ff195f9a0966324056ed20c87823/264x264.jpg"
    },
    {
        "id": "2",
        "title": "The 2nd Best Song",
        "image": "https://cdns-images.dzcdn.net/images/cover/fef4ff195f9a0966324056ed20c87823/264x264.jpg"
    },
    {
        "id": "3",
        "title": "The 3rd Best Song",
        "image": "https://cdns-images.dzcdn.net/images/cover/fef4ff195f9a0966324056ed20c87823/264x264.jpg"
    },
    {
        "id": "4",
        "title": "The 4th Best Song",
        "image": "https://cdns-images.dzcdn.net/images/cover/fef4ff195f9a0966324056ed20c87823/264x264.jpg"
    },

]

export default class App extends React.Component {
    renderItem = ({item}) => (
        <View style={{flex: 1, marginBottom: 20, marginHorizontal: 20}}>
            <Image source={{uri: item.image}} style={{width: '100%', height: 75}} />
            <Text style={{textAlign: "center", marginTop: 8}}>{item.title}</Text>
        </View>
);


render() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList data={data} renderItem={this.renderItem} keyExtractor={item=>item.id} numColumns ={2} style={{flex: 1}} contentContainerStyle={{paddingVertical: 20}} />
        </SafeAreaView>
    );
}

    }
