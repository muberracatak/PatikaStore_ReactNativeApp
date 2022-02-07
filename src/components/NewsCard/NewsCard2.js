import React from "react";
import { View,Image ,Text} from "react-native";
import styles from "./NewsCard2.style";
import SearchBar from "../SearchBar";
import Screen from "./Screen";

const NewsCard2 = ({products}) =>
{
    return( <View style={styles.container}>
        <View style={styles.inner_container}><Image style={styles.image}
         source={
            {uri: products.imgURL
        }}/>
         <Text style={styles.title}>{products.title} </Text>
         <View style={styles.info_conainer}>
                <Text>{products.price}</Text>
                </View>
                {products.inStock ? (<View style={styles.soldoutContainer}>
                    <Text style={styles.soldoutTitle}>Stokta yok</Text>
                </View>): null }
                </View>
        </View>
        );    
};
export default NewsCard2;
