import React from "react";
import { View,Image ,Text} from "react-native";
import styles from "./NewsCard2.style";
import SearchBar from "./SearchBar";
import Screen from "./Screen";

const NewsCard2 = ({products}) =>
{
    return( <View style={styles.container}>
        <View style={styles.inner_container}><Image style={styles.image}
         source={
            {uri: products.imgURL
        }}/>
         <Text style={styles.title}>{products.title} </Text>
        <Text> {products.price}</Text>
        <Text>{products.inStock}</Text></View>
        
       
       
        </View>
    
        
        );
    
   
    
};
export default NewsCard2;