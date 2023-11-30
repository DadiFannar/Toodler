import React, {useState} from "react";
import { View, Text} from "react-native";
import styles from './styles'
import BoardList from "../../components/BoardList";
import data from '../../resources/data.json'
import { AntDesign } from '@expo/vector-icons';



const Board = () =>{
    const [currentData, setCurrentData] = useState(data);

    return (
        <View>
        <AntDesign name="pluscircle" size={80} style={styles.add}/>
        {/* <Text style= {styles.text}>Board</Text> */}
        <BoardList data={currentData.boards.map(function(item){
            return{
                id:item.id,
                name:item.name,
                photo:item.thumbnailPhoto
            }
        })} />
        </View> 
    )
};

export default Board