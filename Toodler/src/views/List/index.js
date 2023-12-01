import React from "react";
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import { useRoute } from "@react-navigation/native"
import ListList from '../../components/ListList'

const List = ({ route }) =>{
    const {boards, lists, tasks, displayData, boardId} = route.params;
    return (
        <View style={styles.container}>
            <ListList boards={boards} lists={lists} tasks={tasks} displayData={displayData}/>
        </View>
    );
};
export default List