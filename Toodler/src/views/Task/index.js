import React, { useState }from "react";
import { FlatList, SafeAreaView, TouchableOpacity, Text, View } from 'react-native'
import styles from './styles'
import TaskList from "../../components/TaskList";
import {AntDesign} from '@expo/vector-icons'

const Task = ({ route }) =>{
    const {boards, lists, task, updateTasks, listId} = route.params;
    const [tasks, setTasks] = useState(task);
    const [taskCounter, setTaskCounter] = useState(task.length);

    const deleteTask =  id =>{
        console.log("deleting task by id '" + id + "'");
        filterdData = tasks.filter((data) => data.id != id);
        setTasks(filterdData);
        updateTasks(filterdData);
    }
    const createTask = (listId, name, description) => {
        console.log("creating new task '" + name + "'");
        setTaskCounter(boardCounter + 1);
        tasks.push({ id: boardCounter + 1, name: name, description: description, isFinished:false, listId:listId});
        updateTasks(tasks);
    }
    const markDone = id =>{
        newTasks = tasks.map(item => {
            if (item.id === id) {
              return {...item, isFinished: true};
            } else {
              return item;
            }
        });
        setTasks(newTasks);
        updateTasks(newTasks);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.add}>
                <AntDesign name="pluscircle" size={80} />
            </TouchableOpacity>
            <TaskList boards={boards} lists={lists} tasks={tasks} listId={listId} deleteTask={(id) => deleteTask(id)} markDone={(id) => markDone(id)}/>
        </View>
    );
};
export default Task