import React, { useState } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, TouchableHighlight, RefreshControl, View, Alert } from 'react-native'
import styles from './styles'
import ImageThumbnail from '../ImageThumbnail'
import {AntDesign} from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import EditBoardModal from "../EditBoardModal";



export const filterDatabyId = (id, data) =>{
  return data.filter((data) => data.boardId == id);
}; 


const Item = ({navigation: { navigate }, item, boards, lists, tasks, displayData, deleteBoard}) => {

const [isEditBoardModalOpen, setIsEditBoardModalOpen] = useState(false)

  return (
    
    <TouchableOpacity onPress={() => navigate('List', {boards:boards, lists:lists, tasks:tasks, displayData:displayData, boardId: item.id})}>
      
      <View style={styles.item}>
          <TouchableOpacity onPress={() => deleteBoard(item.id) } style={styles.close}>
              <Ionicons name="close-circle-sharp" size={32} style={styles.close} />
          </TouchableOpacity>
          <TouchableOpacity style = {styles.edit} onPress={() =>{setIsEditBoardModalOpen(true)}}>
              <AntDesign name="edit" size={32} style = {styles.edit} />
          </TouchableOpacity>
          <ImageThumbnail thumbnailPhoto={item.photo}/> 
          <Text style={styles.title}>{item.name}</Text>            
        
      </View>
      <EditBoardModal
      photo={item.photo}
      name={item.name}
      isOpen={isEditBoardModalOpen}
      closeModal={()=> setIsEditBoardModalOpen(false)} />
    </TouchableOpacity>
  )
  };

const BoardList = ({boards, lists, tasks, deleteBoard}) => {
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
            displayData={filterDatabyId(item.id, lists)} 
            deleteBoard={(id) => deleteBoard(id)}
            />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
}

export default BoardList