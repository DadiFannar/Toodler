import React from "react";
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import { useRoute } from "@react-navigation/native"

const List = ({ route }) =>{
    const { data, boardId } = route.params;
    console.log(data);
    console.log(boardId);
    return (
        <View style={styles.container}>
            <FlatList
          data={data.map(function(item){
            return{
                id:item.id,
                name:item.name,
                photo:item.thumbnailPhoto
            }
            })}
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={item => item.id}
        />
        </View>
    );
};

export default List