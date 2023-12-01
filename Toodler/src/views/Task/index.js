import React, { useState }from "react";
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import TaskList from "../../components/TaskList";

const Task = ({ route }) =>{
    const {boards, lists, task, updateTasks, listId} = route.params;
    const [tasks, setTasks] = useState(task);
    const [listCounter, setListCounter] = useState(task.length);

    const deleteTask = id =>{
        console.log("deleting list by id '" + id + "'");
        filterdData = tasks.filter((data) => data.id != id);
        setTasks(filterdData);
        updateTasks(filterdData);
    }
    return (
        <View style={styles.container}>
            <TaskList boards={boards} lists={lists} tasks={tasks} listId={listId} deleteTask={(id) => deleteTask(id)}/>
        </View>
    );
};
export default Task