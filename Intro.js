import React, { Component } from 'react';
import { Image, View, Text,Dimensions, TouchableOpacity } from 'react-native';
import AsyncBus from './Business/AsyncBus'
import Swiper from 'react-native-swiper'
import App_m from './src/App_m'
import RightSVG from './Image/SVG/RightSVG'

const window = Dimensions.get('window');


export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      introNumber: 0,
    };
  }

  completeIntro = async () => {
    // await AsyncBus.SetLocalStorage("IsIntro", "1")
  }

  render() {
    if (this.state.introNumber === 0) {
      return (
        <View style={{ height: window.height, backgroundColor: "#fff", borderColor: 'transparent' }}>
          <TouchableOpacity onPress={() => { this.setState({ introNumber: 1 }); this.completeIntro().done() }} style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', backgroundColor: '#FFBC00', height: 60, width: 60, zIndex: 100, borderRadius: 15, bottom: 30, right: 30 }}><RightSVG color={'#fff'} size={50} /></TouchableOpacity>

          <View style={{ width: window.width, height: window.height, flex: 1, marginTop: 50 }}>
            <Swiper showsButtons={false} style={{ justifyContent: 'center' }} height={window.height} activeDotColor={'#FFBC00'} dotStyle={{ width: window.width / 20, height: 7, marginBottom: 20 }} activeDotStyle={{ width: window.width / 20, height: 7, marginBottom: 20 }} dotColor={'#f1f1f1'} loop={false} paddingTop={30} paddingBottom={18} showsPagination={true}  >
              <View style={{ width: window.width, alignItems: 'center' }}>
                <Image style={{ resizeMode: 'contain', height: window.height / 3 }} source={require('./Image/Intro/intro1.png')} />
                <View style={{ width: window.width, height: 250, justifyContent: 'center' }}>
                  <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 30, padding: 30 }}>Aylık gelirini %15’ e kadar artır.</Text>
                  <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 20, paddingLeft: 30, paddingRight: 30 }}>Poyi’ nin avantajlı dünyasına hemen giriş yap!</Text>
                </View>
              </View>
              <View style={{ width: window.width, alignItems: 'center' }}>
                <Image style={{ resizeMode: 'contain', height: window.height / 3 }} source={require('./Image/Intro/intro2.png')} />
                <View style={{ width: window.width, height: 250, justifyContent: 'center' }}>
                  <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 30, padding: 30 }}>Fenomenini Seç.</Text>
                  <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 20, paddingLeft: 30, paddingRight: 30 }}>Yaşam tarzını sevdiğin bir influencer seç. Seçtiğin influencer sana özel fırsatlar sunacak.</Text>
                </View>
              </View>
              <View style={{ width: window.width, alignItems: 'center' }}>
                <Image style={{ resizeMode: 'contain', height: window.height / 3 }} source={require('./Image/Intro/intro3.png')} />
                <View style={{ width: window.width, height: 250, justifyContent: 'center' }}>
                  <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 30, padding: 30 }}>Poyi ile Öde.</Text>
                  <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 20, paddingLeft: 30, paddingRight: 30 }}>Alışverişlerini tamamladıktan sonra ödeme yöntemi olarak Poyi’ yi tercih et. QR Kod ile ödemeni gerçekleştirebilirsin.</Text>
                </View>
              </View>
              <View style={{ width: window.width, alignItems: 'center' }}>
                <Image style={{ resizeMode: 'contain', height: window.height / 3 }} source={require('./Image/Intro/intro4.png')} />
                <View style={{ width: window.width, height: 250, justifyContent: 'center' }}>
                  <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 30, padding: 30 }}>Anında nakit kazanmaya başla!</Text>
                  <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 20, paddingLeft: 30, paddingRight: 30 }}>Ödemeden hemen sonra kazandığın nakitler hemen cüzdanına tanımlanacak. İster biriktir, ister harca!</Text>
                </View>
              </View>
            </Swiper>
          </View>
        </View>
      )
    }
    else {
      return (<App_m />)
    }

  }
}