import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { WebView } from 'react-native-webview';

const data = [
  { id: '1', image: require('./assets/imagem3.png') },
  { id: '2', image: require('./assets/imagem1.png') },
  { id: '3', image: require('./assets/imagem2.png') },
  { id: '4', image: require('./assets/imagem.png') },

];

const renderItem = ({ item }) => (
  <Image source={item.image} style={styles.Sliderimagens} />
);

export default function App() {
  return (

    <SafeAreaView style={styles.container}>  
     <ScrollView >
          <View style={styles.containerImagem}>
            <Image style={styles.Banner} source={require('./assets/Banner.png')}/>
          </View>
          <View style={styles.containerinfo}>
            <Text style={styles.Titulo}>PC · Windows</Text>
            <TouchableOpacity style={styles.Botão}>
                  <Text style={styles.BotãoTitulo}>PRE-ORDER</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.parágrafo}>Experience the epic storytelling and unforgettable
                chacracters in Elden Ring™, winner of over 200 Game of the Year awards.</Text>
            </View>
            <Text style={styles.lançamento}>Coming Feb 25, 2022</Text>
          </View>
          <View style={styles.containerVideo}>
          <WebView
           style={{flex: 1, width:350, height:450,}}
           javaScriptEnabled={true}
           mediaPlaybackRequiresUserAction={false}
           allowsInlineMediaPlayback={true}
           allowsFullscreenVideo={true}
          source={{ uri: 'https://www.youtube.com/embed/K_03kFqWfqs' }}
            />
          </View>
          <View>
            <Text style={styles.TituloScreen}>ScreenShots</Text>
            <FlatList
               data={data}
               renderItem={renderItem}
               keyExtractor={(item) => item.id}
               horizontal={true}
               showsHorizontalScrollIndicator={false}
             />
          </View>
          <View style={styles.containerStory}>
            <Text style={styles.parágrafoStory}>The game takes place in the world of The Lands Between,
               a mystical realm ruled by the Elden Ring, which has been 
               shattered into pieces. The player takes on the role of
                the Tarnished, a character who has been exiled from 
                their homeland and must venture into The Lands Between 
                to find the fragments of the Elden Ring and restore it 
                to its former glory.
            </Text>
          </View>
          <View style={styles.containerSystem} >
            <Text style={styles.TituloSystem}>System Requirements</Text>
            <View style={styles.containerInfoSystem}>
                <View style={styles.SubContainers}>
                  <Text style={styles.TituloRequisitos}>OS</Text>
                  <Text style={styles.SubRequisitos}>Windows 10</Text>
                </View>
                <View style={{ width:'90%', top:-30, borderBottomWidth: 1, borderBottomColor: 'gray' }}/>
                <View style={styles.SubContainers}>
                  <Text style={styles.TituloRequisitos}>Processor</Text>
                  <Text style={styles.SubRequisitos}>I5-8400 or  RYZEN 3 3300X</Text>
                </View>
                <View style={{ width:'90%', top:-30, borderBottomWidth: 1, borderBottomColor: 'gray' }}/>
                <View style={styles.SubContainers}>
                  <Text style={styles.TituloRequisitos}>Memory</Text>
                  <Text style={styles.SubRequisitos}>12 GB RAM</Text>
                </View>
                <View style={{ width:'90%', top:-30, borderBottomWidth: 1, borderBottomColor: 'gray' }}/>
                <View style={styles.SubContainers}>
                  <Text style={styles.TituloRequisitos}>Graphics</Text>
                  <Text style={styles.SubRequisitos}>GTX 1060 3 GB or RX 580 4 GB.</Text>
                </View>
                <View style={{ width:'90%', top:-30, borderBottomWidth: 1, borderBottomColor: 'gray' }}/>
                <View style={styles.SubContainers}>
                  <Text style={styles.TituloRequisitos}>Storage</Text>
                  <Text style={styles.SubRequisitos}>60 GB</Text>
                </View>
            </View>
          </View>
            <StatusBar style='light' />
      </ScrollView> 
    </SafeAreaView>
  );
}



//Make Styled
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',
    backgroundColor: '#000',
  },

  containerImagem:{
    marginTop:40,
    width:'100%',
    height:200,
    backgroundColor:'#fff',
  },

  Banner:{
    width:400,
    height:400,
    alignItems: 'center',
    alignSelf:'center',
    marginBottom:40,
  },

  containerinfo:{
    top:201,
    width:'90%',
    height: 400,
    marginBottom:100,
    alignItems: 'center',
    alignSelf:'center',  
  },

  Titulo:{
    fontSize:20,
    color:'#fff',
    top:10,
    alignItems: 'center',
    alignSelf:'center',
  },

  Botão:{
    backgroundColor: "#FFD369",
    top:-20,
    width:'100%',
    height:50, 
    borderRadius:10,
    padding: 10,
    marginBottom:70,
    marginTop:50,
    alignItems: 'center',
    justifyContent:'center',
  },

  BotãoTitulo:{
    fontSize:17,
    color:'#000',
  },


  parágrafo:{
    fontSize:15,
    top:-70,
    color:'#fff',
    textAlign:'justify'
  },

  lançamento:{
    fontSize:16,
    top:-50,
    color:'#fff',
  },

  containerVideo:{
    width:'90%',
    height: 250,
    marginBottom:100,
    alignItems: 'center',
    alignSelf:'center', 
    backgroundColor:'#fff',
  },

  video:{
    width:'100%',
    height:250,
  },


  TituloScreen:{
    fontSize:20,
    color:'#fff',
    top:-20,
    left:5,

  },

  containerSlider:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,

  },

  Sliderimagens:{
    width: 200,
    height: 200,
    marginHorizontal: 10,
    borderRadius: 10,
  },


  containerStory:{
    top:110,
    width:'95%',
    height: 400,
    marginBottom:100,
    alignItems: 'center',
    alignSelf:'center', 
  },

  parágrafoStory:{
    fontSize:15,
    top:-70,
    color:'#fff',
    textAlign:'justify'
  },

  containerSystem:{
    width:'99%',
    height: 400,
    marginBottom:100,
 
  },

  TituloSystem:{
    fontSize:20,
    color:'#fff',
    top:-250,
    left:10,
  },


  containerInfoSystem:{
    top:-220,
    width:"95%",
    height:310,
    alignItems: 'center',
    alignSelf:'center', 
  },

  SubContainers:{
    width:'100%',
    height:50,
    marginBottom:30,
  },

  TituloRequisitos:{
    fontSize:17,
    width:'30%',
    height:50,
    color:'#cccc',
    textAlign:'left', 
  },

  SubRequisitos:{ 
    fontSize:16,
    width:'70%',
    height:50,
    alignSelf:'flex-end',
    color:'#fff',
    top:-50,
    textAlign:'right', 

  },


});
