import React from "react";
import { FlatList, SafeAreaView, Text, TouchableHighlight, View } from 'react-native'
import styles from './styles'
import ImageThumbnail from '../ImageThumbnail'
import {AntDesign} from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';


export const filterDatabyId = (id, data) =>{
    return data.filter((data) => data.boardId == id);
};

const Item = ({navigation: { navigate }, item, data, displayData}) => (
  <TouchableOpacity onPress={() => navigate('List', {data: data, displayData:displayData, boardId: item.id})}>
    <View style={styles.item}>
      <Ionicons name="close-circle-sharp" size={32} style={styles.close} />
      <ImageThumbnail thumbnailPhoto={item.photo}/>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  </TouchableOpacity>
  );

const BoardList = ({data}) => {
    const navigation = useNavigation();
    return (
      <SafeAreaView>
        <FlatList
          data={data.boards.map(function(item){
            return{
                id:item.id,
                name:item.name,
                photo:item.thumbnailPhoto
            }
            })}
          renderItem={({item}) => <Item navigation={navigation} item={item} data={data} displayData={filterDatabyId(item.id, data.lists)}/>}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
}

export default BoardList