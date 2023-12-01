import React from "react";
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import TaskList from "../../components/TaskList";

const Task = ({ route }) =>{
    const {boards, lists, tasks, displayData, listId} = route.params;
    return (
        <View style={styles.container}>
            <TaskList boards={boards} lists={lists} tasks={tasks} displayData={displayData}/>
        </View>
    );
};
export default Task