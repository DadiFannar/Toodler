import React, {useState} from "react";
import { View, Text, TouchableHighlight, Alert, TouchableOpacity} from "react-native";
import styles from './styles'
import BoardList from "../../components/BoardList";
import data from '../../resources/data.json'
import { AntDesign } from '@expo/vector-icons';
import AddModal from "../../components/AddModal";

const Board = () =>{
    const [boards, setBoards] = useState(data.boards);
    const [lists, setLists] = useState(data.lists);
    const [tasks, setTasks] = useState(data.tasks);
    const [boardCounter, setBoardCounter] = useState(boards.length)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
 
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

    const updateBoard = (id, name, thumbnail) =>{
        newBoards = boards.map(item => {
            if (item.id === id) {
              return {...item, name: name, thumbnailPhoto:thumbnail};
            } else {
              return item;
            }
        });
        setBoards(newBoards);
    }
    const updateLists = (newLists) =>{
        setLists(newLists);
    }
    const updateTasks = (newTasks) =>{
        setTasks(newTasks);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.add} onPress={() => setIsAddModalOpen(true)}>
                <AntDesign name="pluscircle" size={80} />
            </TouchableOpacity>
            
            {/* <Text style= {styles.text}>Board</Text> */}
            <BoardList 
            updateBoard={(id, name, thumbnail)=>updateBoard(id, name, thumbnail)}
            boards={boards} 
            lists={lists} 
            tasks={tasks}
            deleteBoard={(id) => deleteBoard(id)}
            updateLists={(newLists) => updateLists(newLists)}
            updateTasks={(newTasks) => updateTasks(newTasks)}/>
            <AddModal
                isOpen={isAddModalOpen}
                createBoard={(name, thumbnail) => createBoard(name, thumbnail)}
                closeModal={()=> setIsAddModalOpen(false)}
                />
        </View> 
    )
};

export default Board