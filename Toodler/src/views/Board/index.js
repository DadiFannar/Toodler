import React from "react";
import { View, Text } from "react-native";
import styles from './styles'
import BoardList from "../../components/BoardList";
import data from '../../resources/data.json'


const Board = () =>(
    <View>
        {/* <Text style= {styles.text}>Board</Text> */}
        <BoardList images = {data.boards} />
    </View> 
);

export default Board