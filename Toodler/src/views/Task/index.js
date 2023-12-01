import React, { useState }from "react";
import { FlatList, SafeAreaView, TouchableOpacity, Text, View } from 'react-native'
import styles from './styles'
import TaskList from "../../components/TaskList";
import {AntDesign} from '@expo/vector-icons'
import AddModalTask from "../../components/AddModalTask";

const Task = ({ route }) =>{
    const {boards, lists, task, updateTasks, listId} = route.params;
    const [tasks, setTasks] = useState(task);
    const [taskCounter, setTaskCounter] = useState(task.length);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const deleteTask =  id =>{
        console.log("deleting task by id '" + id + "'");
        filterdData = tasks.filter((data) => data.id != id);
        setTasks(filterdData);
        updateTasks(filterdData);
    }
    const createTask = (listId, name, description) => {
        console.log("creating new task '" + name + "'");
        setTaskCounter(taskCounter + 1);
        tasks.push({ id: taskCounter + 1, name: name, description: description, isFinished:false, listId:listId});
        setTasks(tasks);
        updateTasks(tasks);
    }
    const updateTask = (id, name, description, listId) =>{
        newTasks = tasks.map(item => {
            if (item.id === id) {
              return {...item, name: name, description:description, listId:listId};
            } else {
             return item;
           }
        });
        setTasks(newTasks);
        updateTasks(newTasks);
    }
    const markDone = id =>{
        newTasks = tasks.map(item => {
            if (item.id === id) {
              return {...item, isFinished: item.isFinished ? false:true};
            } else {
              return item;
            }
        });
        setTasks(newTasks);
        updateTasks(newTasks);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.add} onPress={() => setIsAddModalOpen(true)}>
                <AntDesign name="pluscircle" size={80} />
            </TouchableOpacity>
            <TaskList boards={boards} 
            lists={lists} 
            tasks={tasks} 
            listId={listId} 
            deleteTask={(id) => deleteTask(id)} 
            markDone={(id) => markDone(id)}
            updateTask={(id, name, description, listId ) => updateTask(id, name, description, listId)}/>
            <AddModalTask
                isOpen={isAddModalOpen}
                listId={listId}
                createTask={(name, color, listId) => createTask(name, color, listId)}
                closeModal={()=> setIsAddModalOpen(false)}
                />
        </View>
    );
};
export default Task