import React, { useState }from "react";
import { FlatList, SafeAreaView, RefreshControl, Text, View } from 'react-native'
import styles from './styles'
import { useRoute } from "@react-navigation/native"
import ListList from '../../components/ListList'

const List = ({ route }) =>{
    const {boards, list, tasks, boardId} = route.params;
    const [lists, setLists] = useState(list);
    console.log(route);
    
    const deleteList = id =>{
        console.log("deleting list by id '" + id + "'");
        filterdData = lists.filter((data) => data.id != id);
        setLists(filterdData);
        route
    }
    
    return (
        <View style={styles.container}>
            <ListList boards={boards} lists={lists} tasks={tasks} boardId={boardId} deleteList={(id) => deleteList(id)}/>
        </View>
    );
};
export default List