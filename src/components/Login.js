import React,{ Component ,useState} from 'react';
import {Dimensions, View, Text, Image, ScrollView, TextInput ,StyleSheet,TouchableOpacity} from 'react-native';
import Main from '../../Navigation'

const window = Dimensions.get('window');


export default class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            step: 0,
        };
      
    }


    componentDidMount = () => {

    }


    render() {

        if (this.state.step === 0) {
            return (
                <ScrollView>
                    <View style={{marginTop:100}}></View>
      <View style={styles.container}>
        <Image style={styles.image}
          source={{
            uri: '/Users/tubanurcatak/Desktop/project/icon4.png',
          }}
          
        />
      </View >
     
       <View style={styles.inputView}>

      <TextInput
        style={styles.textInput}
        placeholder='E mail'
        //onChangeText={(email) => setEmail(email)}

      />
      </View>
      <View style={styles.inputView}>
      <TextInput
        style={styles.textInput}
        placeholder='Password'

      />
       <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>     
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
    </ScrollView>
    
  )
        }
        else if (this.state.step === 1) {
            return (
                <View style={styles.container}>
                                <Text style={styles.text}></Text>

                </View>)
        }
        else if (this.state.step === 2) {
            return (
                <View style={{ width: window.width, height: window.height, alignItems: 'center', backgroundColor: '#fff' }}>
                </View>
            )
        }
        else if (this.state.step === 3) {
            return <Main />
        }
        else {
            return (
                <View style={{ backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', width: window.width, height: window.height }}>
                </View>)
        }
    }
}

const styles = StyleSheet.create(
    {
        container:
        {
            flex: 1,
    backgroundColor: "#fff",      
            alignItems: "center",
            justifyContent:"center",
            //marginBottom: 40,
            

        },
        text:{
            fontSize:30,
            textAlign: 'center'
        },
        image:{     
            flex:1,  
            alignItems: "center",
            height: "100%",
            width: 150,
            height: 150,
            margin:10,
            padding: 20,
            justifyContent:"center",
        },
        textInput:{
            height: 50,
            flex: 1,
            padding: 10,
            marginLeft: 20,
            marginTop:10,
            alignItems: "center",
            justifyContent:"center",
        },
        forgot_button: {
            height: 30,
            padding:10,
            marginBottom: 30,
            textAlign: 'center'

          },
        inputView:
        {
            backgroundColor: "#A9A9A9",
            borderRadius: 40,
            width: "70%",
            height: 45,
            marginLeft:50,   
            marginTop:20,  
            alignItems: "center",
            borderWidth:1,
            
            
        },
        loginBtn:
            {
            width:"80%",
            borderRadius:30,
            height:40,
            alignItems:"center",
            justifyContent:"center",
            marginTop:50,
            backgroundColor:"#A9A9A9",
            borderWidth:1,

  }
    }
)
