import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from './styles'
import BoardList from "../../components/BoardList";
import data from '../../resources/data.json'
import ImageThumbnail from "../../components/ImageThumbnail";

const Board = () => {
    return (
        <View>
            <BoardList images={data.boards} />
        </View>
    )
};

export default Board