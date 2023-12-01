import React from "react";
import { FlatList, SafeAreaView, Text, TouchableHighlight, View } from 'react-native'
import styles from './styles'
import ImageThumbnail from '../ImageThumbnail'
import {AntDesign} from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

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
const Item = ({navigation: { navigate }, item, boards, lists, tasks}) => (
  console.log(tasks),
  <TouchableOpacity onPress={() => markTask(item)}>
    <View style={[styles.item]}>
      <Ionicons name="close-circle-sharp" size={32} style={styles.close} />
      <Text style={getTitleStyle(item.isFinished)}>{item.name}</Text>
      <Text style={getDescriptionStyle(item.isFinished)}>{item.description}</Text>
    </View>
  </TouchableOpacity>
);

const TaskList = ({boards, lists, tasks, displayData}) => {
    const navigation = useNavigation();
    return (
      <SafeAreaView>
        <FlatList
          data={displayData.map(function(item){
            return{
                id:item.id,
                name:item.name,
                description:item.description,
                isFinished:item.isFinished,
                listId:item.listId
            }
            })}
          renderItem={({item}) => <Item navigation={navigation} item={item} boards={boards} lists={lists} tasks={tasks}/>}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
}

export default TaskList