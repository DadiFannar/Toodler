import React from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, TouchableHighlight, RefreshControl, View } from 'react-native'
import styles from './styles'
import ImageThumbnail from '../ImageThumbnail'
import {AntDesign} from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Item = ({navigation: { navigate }, item, boards, lists, tasks, deleteBoard, updateLists, updateTasks}) => (
  <TouchableOpacity onPress={() => navigate('List', {board:boards, list:lists, task:tasks, boardId: item.id, updateLists:updateLists, updateTasks:updateTasks})}>
    <View style={styles.item}>
        <TouchableOpacity onPress={() => deleteBoard(item.id) } style={styles.close}>
            <Ionicons name="close-circle-sharp" size={32} style={styles.close} />
        </TouchableOpacity>
        <ImageThumbnail thumbnailPhoto={item.photo}/>
        <Text style={styles.title}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

const BoardList = ({boards, lists, tasks, deleteBoard, updateLists, updateTasks}) => {
    const navigation = useNavigation();
    return (
      <SafeAreaView>
        <FlatList
          data={boards.map(function(item){
            return{
                id:item.id,
                name:item.name,
                photo:item.thumbnailPhoto
            }
            })}
          renderItem={({item}) => <Item 
            navigation={navigation} 
            item={item} 
            boards={boards} 
            lists={lists} 
            tasks={tasks} 
            deleteBoard={(id) => deleteBoard(id)}
            updateLists={(newLists) => updateLists(newLists)}
            updateTasks={(newTasks) => updateTasks(newTasks)}
            />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
}

export default BoardList