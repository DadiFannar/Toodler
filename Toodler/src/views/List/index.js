import React from "react";
import { View, Text } from "react-native";
import styles from './styles'

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