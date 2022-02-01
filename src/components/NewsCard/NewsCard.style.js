import {Dimensions, StyleSheet, View } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        margin:10,
        borderRadius:10,
    },
    image:{
        height: Dimensions.get('window').height /4,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,

    },
    title:{
        fontWeight:'oblique',
        fontSize:18,
    },
    description:{
        marginTop:3,
    },
    inner_container:{
    padding:5,
    },
    author:{
        fontStyle:'italic',
        textAlign:'right',
    }
}
);