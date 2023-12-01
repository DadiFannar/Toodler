import React , {useState}from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, TouchableHighlight, View } from 'react-native'
import styles from './styles'
import ImageThumbnail from '../ImageThumbnail'
import {AntDesign} from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import EditTaskModal from "../EditTaskModal";

const getTitleStyle = (isFinished) =>{
  if(isFinished){
    return styles.titleDone;
  }
  else{
    return styles.title;
  }
}
const getDescriptionStyle = (isFinished) =>{
  if(isFinished){
    return styles.descriptionDone;
  }
  else{
    return styles.description;
  }
}

export const filterDatabyId = (id, data) =>{
  return data.filter((data) => data.listId == id);
};

const Item = ({navigation: { navigate }, item, boards, lists, tasks, deleteTask, markDone}) => {

  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false)

  return (

    <TouchableOpacity onPress={() => markDone(item.id)}>
      <View style={[styles.item]}>
        <TouchableOpacity onPress={()=> deleteTask(item.id)}size={32} style={styles.close}>
          <Ionicons name="close-circle-sharp" size={32} style={styles.close} />
        </TouchableOpacity>
        <TouchableOpacity style = {styles.edit} onPress={() =>{setIsEditTaskModalOpen(true)}}>
              <AntDesign name="edit" size={32} style = {styles.edit} />
          </TouchableOpacity>
        <Text style={getTitleStyle(item.isFinished)}>{item.name}</Text>
        <Text style={getDescriptionStyle(item.isFinished)}>{item.description}</Text>
      </View>
      <EditTaskModal
            updateTask={(id,name,description, listId)=> updateTask(id,name,description, listId)}
            id={item.id}
            description={item.description} 
            name={item.name} 
            ListId={item.ListId}
            isOpen={isEditTaskModalOpen}
            closeModal={()=> setIsEditTaskModalOpen(false)} />
    </TouchableOpacity>
  )
};

const TaskList = ({boards, lists, tasks, listId, deleteTask, markDone}) => {
    const navigation = useNavigation();
    const taskDisp = filterDatabyId(listId, tasks)
    return (
      <SafeAreaView>
        <FlatList
          data={taskDisp.map(function(item){
            return{
                id:item.id,
                name:item.name,
                description:item.description,
                isFinished:item.isFinished,
                listId:item.listId
            }
            })}
          renderItem={({item}) => <Item navigation={navigation} item={item} boards={boards} lists={lists} tasks={tasks} deleteTask={(id) => deleteTask(id)} markDone={(id) => markDone(id)}/>}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
}

export default TaskList