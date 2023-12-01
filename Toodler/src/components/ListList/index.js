import React, {useState} from "react";
import { FlatList, SafeAreaView, Text, RefreshControl, TouchableOpacity, TouchableHighlight, View } from 'react-native'
import styles from './styles'
import ImageThumbnail from '../ImageThumbnail'
import {AntDesign} from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import EditListModal from '../EditListModal'

export const filterDatabyId = (id, data) =>{
  return data.filter((data) => data.boardId == id);
};

const Item = ({navigation: { navigate }, item, boards, lists, tasks, deleteList, updateTasks , updateList}) => {

  const [isEditListModalOpen, setIsEditListModalOpen] = useState(false)
  
  return(
    <TouchableOpacity onPress={() => navigate('Task', {boards:boards, lists:lists, task:tasks, updateTasks:updateTasks, listId:item.id})}>
        <View style={[styles.item]}>
          <TouchableOpacity onPress={()=> deleteList(item.id)}size={32} style={styles.close}>
            <Ionicons name="close-circle-sharp" size={32} style={styles.close} />
          </TouchableOpacity>
          <TouchableOpacity style = {styles.edit} onPress={() =>{setIsEditListModalOpen(true)}}>
              <AntDesign name="edit" size={32} style = {styles.edit} />
          </TouchableOpacity>
          <View style={{backgroundColor: item.color, position: 'absolute', width:50, height:50, alignSelf:'left', left:5, top: 26, borderRadius:90,}}></View>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <EditListModal
          updateList={(id,name,color)=> updateList(id,name,color)}
          id={item.id}
          color={item.color} 
          name={item.name} 
          boardId={item.boardId}
          isOpen={isEditListModalOpen}
          closeModal={()=> setIsEditListModalOpen(false)} />
      </TouchableOpacity>
  )
};
  
const ListList = ({boards, lists, tasks, boardId, deleteList, updateTasks, updateList}) => {
    const navigation = useNavigation();
    const listsDisp = filterDatabyId(boardId, lists);
    return (
      <SafeAreaView>
        <FlatList
          data={listsDisp.map(function(item){
            return{
                id:item.id,
                name:item.name,
                color:item.color,
            }
            })}
          renderItem={({item}) => <Item 
          navigation={navigation} 
          item={item} boards={boards} 
          lists={lists} tasks={tasks} 
          deleteList={(id) => deleteList(id)} 
          updateTasks={(newTasks) => updateTasks(newTasks)}
          updateList={(id,name,color)=> updateList(id,name,color)}/>}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
}

export default ListList