import React from "react";
import { FlatList, SafeAreaView, Text, TouchableHighlight, View } from 'react-native'
import styles from './styles'
import ImageThumbnail from '../ImageThumbnail'
import {AntDesign} from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';


export const filterDatabyId = (id, data) =>{
  return data.filter((data) => data.listId == id);
};

const Item = ({navigation: { navigate }, item, boards, lists, tasks, displayData}) => (
  <TouchableOpacity onPress={() => navigate('Task', {boards:boards, lists:lists, tasks:tasks, displayData:displayData, listId: item.id})}>
    <View style={[styles.item]}>
      <View style={{backgroundColor: item.color, position: 'absolute', width:50, height:50, alignSelf:'left', left:5, top:10}}></View>
      <Ionicons name="close-circle-sharp" size={32} style={styles.close} />
      <Text style={styles.title}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

const ListList = ({boards, lists, tasks, displayData, markTask}) => {
    const navigation = useNavigation();
    return (
      <SafeAreaView>
        <FlatList
          data={displayData.map(function(item){
            return{
                id:item.id,
                name:item.name,
                color:item.color
            }
            })}
          renderItem={({item}) => <Item navigation={navigation} item={item} boards={boards} lists={lists} tasks={tasks} displayData={filterDatabyId(item.id, tasks)}/>}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
}

export default ListList