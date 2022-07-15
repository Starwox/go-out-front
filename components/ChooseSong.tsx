import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, View, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import CountDown from 'react-native-countdown-component';
var _ = require('lodash');
import SpotifyWebApi from "spotify-web-api-node";
const spotifyApi = new SpotifyWebApi();

function player(codeMusic,token) {
    axios.post('https://127.0.0.1:8000/fr/api/get-winner-music', {
        codeRoom: codeMusic
    })
    .then((response) => {
        if(response.data[1] == 200) {
            let data = response.data[0];
            axios.post('https://127.0.0.1:8000/fr/api/player', {
                uri: data.uri,
                token: token
            }).then((response) => {
                console.log(response.data)
            })
        }
      }, (error) => {
        console.log(error);
      });
}

function voteAction(idMusic, codeMusic, setDisabledButton) {

    axios.post('https://127.0.0.1:8000/fr/api/vote-music', {
        codeRoom: codeMusic,
        idMusic: idMusic,
    })
    .then((response) => {
        if(response.data == 200) {
            setDisabledButton(true);
        }
      }, (error) => {
        console.log(error);
      });
}

function SongItem({ item, codeMusic }) {
    const [disabledButton, setDisabledButton] = React.useState(false);

  return (
    <View style={style.container}>
      <Image
        source={{ uri: item.img_music[1].url }}
        style={{ width: "100%", height: 300 }}
      />
      <Button
        style={
            (!disabledButton)
            ? style.btn
            : style.btnDisabled
          } 
        testID={"btn"}
        onPress={() => {
            voteAction(item.id_music, codeMusic, setDisabledButton)
        }}
        disabled={disabledButton}
      >
        <Text style={{ marginTop: 8, fontSize: 12 }} variant="labelMedium">
          {item.song}
        </Text>
      </Button>
    </View>
  );
}

export default function ChooseSongScreen({idPlaylist}) {

    const token = useSelector((state) => state.token.token);
    const [musics, setMusics] = React.useState();
    const [code, setCode] = React.useState();
    const [roomId, setRoomId] = React.useState();
    const [codeMusic, setCodeMusic] = React.useState();
    const [timer, setTimer] = React.useState(15102);
    spotifyApi.setAccessToken(token);

    React.useEffect(async () => {
      axios.post('https://127.0.0.1:8000/fr/api/spotify-playlist?'+ 'spotifyToken='+ token + '&idPlaylist='+idPlaylist)
      .then((response) => {
        let randomizer = _.shuffle(response.data[0]);
        let fourMusic = randomizer?.slice(0,4)
        setMusics(fourMusic)
        setCode(response.data[1][0])
        setRoomId(response.data[1][1])
      }, (error) => {
        console.log(error);
      });
    }, []);

    React.useEffect(() => {
        if(musics && roomId) {
            axios.post('https://127.0.0.1:8000/fr/api/music-init', {
                roomId: roomId,
                musics: musics,
            })
            .then((response) => {
                setCodeMusic(response.data[0])
              }, (error) => {
                console.log(error);
              });
            console.log(musics);
        }
      }, [musics, roomId]);
    return (
    <SafeAreaView style={style.area}>
        <View style={style.containerText}>
        <Text style={style.textCode} variant="labelMedium">
          Code du salon
        </Text>        
        <Text style={style.textCode} variant="labelMedium">
          {code}
        </Text>
        <CountDown
        until={timer / 1000}
        timeToShow={['M', 'S']}
        digitStyle={{backgroundColor: '#96527A'}}
        digitTxtStyle={{color: '#FFF'}}
        onFinish={() => player(codeMusic, token)}
        size={20}
      />
        </View>
            <FlatList
            data={musics}
            renderItem={({item}) => <SongItem item={item} codeMusic={codeMusic}/>}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 80
  },
  area: {
    textAlign: 'center',
    flex: 1,
    minWidth: '110%',
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
  textCode: {
    fontSize: 25, 
    color: "white",
    alignItems: 'center',
  },
  btnDisabled: {
    minWidth: '110%',
    borderRadius: 25,
    
    height:50,
    // alignItems:"center",
    // justifyContent:"center",
    marginTop: 8,
    backgroundColor: '#B8B8B8'
  }
});
