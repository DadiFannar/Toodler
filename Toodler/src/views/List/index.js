import React from "react";
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import { useRoute } from "@react-navigation/native"

export const filterDatabyId = (id, data) =>{
    return data.filter((data) => data.id == id);
};
const List = ({ route }) =>{
    const { boardId } = route.params;
    console.log(boardId);
    return (
        <View style={styles.container}>
            <Text>Lists!</Text>
        </View>
    );
};

export default List