import React from "react";
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import { useRoute } from "@react-navigation/native"
import ListList from '../../components/ListList'

const List = ({ route }) =>{
    const { data, boardId } = route.params;
    console.log(data);
    console.log(boardId);
    return (
        <View style={styles.container}>
            <ListList data={data} />
        </View>
    );
};
export default List