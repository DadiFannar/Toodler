import React, { useState }from "react";
import { FlatList, SafeAreaView, RefreshControl, Text, View } from 'react-native'
import styles from './styles'
import { useRoute } from "@react-navigation/native"
import ListList from '../../components/ListList'

const List = ({ route }) =>{
    const {boards, lists, tasks, boardId} = route.params;

    return (
        <View style={styles.container}>
            <ListList boards={boards} lists={lists} tasks={tasks} boardId={boardId}/>
        </View>
    );
};
export default List