import React, { useState }from "react";
import { FlatList, SafeAreaView, TouchableOpacity, RefreshControl, Text, View } from 'react-native'
import styles from './styles'
import { useRoute } from "@react-navigation/native"
import ListList from '../../components/ListList'
import { AntDesign } from '@expo/vector-icons';
import AddModalList from "../../components/AddModalList";

const List = ({ route }) =>{
    const {board, list, task, boardId, updateLists, updateTasks} = route.params;
    const [lists, setLists] = useState(list);
    const [tasks, setTasks] = useState(task);
    const [listCounter, setListCounter] = useState(list.length);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const deleteList = id =>{
        console.log("deleting list by id '" + id + "'");
        filterdData = lists.filter((data) => data.id != id);
        setLists(filterdData);
        updateLists(filterdData);
    }
    const createList = (name, color, boardId) =>{
        console.log("creating new list '" + name + "'");
        setListCounter(listCounter + 1);
        lists.push({ id: listCounter + 1, name: name, color: color, boardId:boardId});
        setLists(lists);
        updateLists(lists);
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.add} onPress={() => setIsAddModalOpen(true)}>
                <AntDesign name="pluscircle" size={80} />
            </TouchableOpacity>
            <ListList boards={board} 
            lists={lists} 
            tasks={task} 
            boardId={boardId}
            deleteList={(id) => deleteList(id)}
            updateTasks={(newTasks) => updateTasks(newTasks)}/>
            <AddModalList
                isOpen={isAddModalOpen}
                boardId={boardId}
                createList={(name, color, boardId) => createList(name, color, boardId)}
                closeModal={()=> setIsAddModalOpen(false)}
                />
        </View>
        
    );
};
export default List