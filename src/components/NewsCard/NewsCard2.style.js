import { Dimensions, StyleSheet } from "react-native"; 

export default StyleSheet.create(
    {
        container:
        {
            backgroundColor:'white',
            margin:10,
            borderRadius:10,
            height:200,
            width:180,
            marginRight:2
        },
        image:{
            height: Dimensions.get('window').height / 4,
            borderRadius:10,
            height: 100, width: 100,
            alignItems:'center',
            marginLeft:40,
            marginTop:5
        },
        title:{
            fontStyle:'normal',
            fontSize:18
        },
        inner_container:{
            padding:5,
            backgroundColor:'#eceff1'

        }
    }
)