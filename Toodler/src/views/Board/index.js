import React, {useState} from "react";
import { View, Text} from "react-native";
import styles from './styles'
import BoardList from "../../components/BoardList";
import data from '../../resources/data.json'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Board = () =>{
    const [boards, setBoards] = useState(data.boards);
    const [lists, setLists] = useState(data.lists);
    const [tasks, setTasks] = useState(data.tasks);
    const [boardCounter, setBoardCounter] = useState(boards.length)

    const deleteBoard = id =>{
        console.log("deleting by id '" + id + "'");
        filterdData = boards.filter((data) => data.id != id);
        setBoards(filterdData);
      };
    const createBoard = (name, thumbnail) =>{
        console.log("creating new board '" + name + "'");
        setBoardCounter(boardCounter + 1);
        boards.push({ id: boardCounter + 1, name: name, thumbnailPhoto: thumbnail});
    }
    const updateBoard = (id) =>{
        console.log("updating board with id '" + id + "'");
    }
    return (
        <View style={styles.container}>
        <AntDesign name="pluscircle" size={80} style={styles.add}/>
        {/* <Text style= {styles.text}>Board</Text> */}
        <BoardList boards={boards} 
        lists={lists} 
        tasks={tasks}  
        deleteBoard={(id) => deleteBoard(id)} 
        createBoard={(name, thumbnail) => createBoard(name, thumbnail)}/>
        </View> 
    )
};

export default Board