import React from "react";
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import { useRoute } from "@react-navigation/native"

const Task = ({ route }) =>{
    const {boards, lists, tasks, displayData, listId} = route.params;
    return (
        //TEST CODE REMOVE THIS AND ADD COMPONENT TASKLIST
        <View style={styles.container}>
          <FlatList
          data={displayData.map(function(item){
            return{
                id:item.id,
                name:item.name,
                description:item.description,
                isFinished:item.isFinished
            }
            })}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Text>{item.name}:{item.description}</Text>}
        />
        </View>
    );
};
export default Task