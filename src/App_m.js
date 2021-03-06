import React, { useState }  from 'react';  
import { SafeAreaView,Image,StyleSheet,View,Text,FlatList,ScrollView, Dimensions } from "react-native";
import news_data_m from './news_data_m.json'; 
import NewsCard2 from './components/NewsCard/NewsCard2';
import SearchBar from "./components/SearchBar";
import Screen from './components/NewsCard/Screen';


function App_m()
{
    const [list,setList] = useState(news_data_m);
    const renderNews2 = ({item})=><NewsCard2 products={item}/>;
    const isTrue = ({items})=> <NewsCard2 products={items}/>;

    const handleSearch = text => {
        const filteredList = news_data_m.filter(song => {
            const searchedText= text.toLowerCase();
            const currentTitle= song.title.toLowerCase();

            return currentTitle.indexOf(searchedText) > -1;
        });
        setList(filteredList);
    }

    return (
        
        <SafeAreaView style={styles.container}>
    

         <Text style={styles.headerText}>PATIKASTORE</Text>
         <SearchBar onSearch={handleSearch}/>

         <SafeAreaView style={styles.inner}>
         <FlatList horizontal={false} 
         numColumns={2}
            keyExtractor={item=>item.u_id.toString}
             data={list}
             renderItem={renderNews2}
             />
        
        </SafeAreaView>
    
     </SafeAreaView>
    );
};

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'white'
        },
      headerText:{
          fontSize:60,
          fontStyle:'normal',
          color:'purple'
      },
      inner_container:{
        padding:5,
        backgroundColor:'#eceff1'

    }

    }
);
export default App_m;
