import React from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, TouchableHighlight, RefreshControl, View } from 'react-native'
import styles from './styles'
import ImageThumbnail from '../ImageThumbnail'
import {AntDesign} from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Item = ({navigation: { navigate }, item, boards, lists, tasks, deleteBoard, deleteList}) => (
  <TouchableOpacity onPress={() => navigate('List', {boards:boards, lists:lists, tasks:tasks, boardId: item.id, deleteList:deleteList})}>
    <View style={styles.item}>
        <TouchableOpacity onPress={() => deleteBoard(item.id) } style={styles.close}>
            <Ionicons name="close-circle-sharp" size={32} style={styles.close} />
        </TouchableOpacity>
        <ImageThumbnail thumbnailPhoto={item.photo}/>
        <Text style={styles.title}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

const BoardList = ({boards, lists, tasks, deleteBoard, createBoard, deleteList}) => {
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
            item={item} boards={boards} 
            lists={lists} tasks={tasks} 
            deleteBoard={(id) => deleteBoard(id)}
            deleteList={(id) => deleteList(id)}
            />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
}

export default BoardList