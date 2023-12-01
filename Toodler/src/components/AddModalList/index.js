import React, {useState} from "react";
import { TouchableOpacity, Text , TextInput, Pressable, Alert} from "react-native";
import styles from "./styles";
import Modal from '../Modal'



const AddModalList =({
    isOpen,
    boardId,
    closeModal,
    createList,

}) => { 

    const [name, setName] = useState('')
    const [color, setColor] = useState('')

    const onSubmit = (name,photo) => {
        if (name == '') {
            Alert.alert('Fill in the Name')
        }
        else if (photo == '') {
            Alert.alert('Fill in the Photo')
        }
        else{
            createList(name, color, boardId)
            closeModal()
        }
      }
    return (
        <Modal 
            isOpen={isOpen}
            closeModal={closeModal}
            // style={styles.input}
            >
                <Text style={styles.title}>Add a List!</Text>
                <Text>Name:</Text>
                <TextInput 
                style={styles.input}
                onChangeText={name => setName(name)}
                onSubmitEditing={() => onSubmit(name,color)}
                ></TextInput>
                <Text>color:</Text> 
                <TextInput 
                style={styles.input}
                onChangeText={color => setColor(color)}
                onSubmitEditing={() => onSubmit(name,color)}
                ></TextInput>
                <TouchableOpacity style={styles.btn} onPress={() => onSubmit(name,color)}>
                    <Text style={styles.btn}>
                        Create List
                    </Text>
                </TouchableOpacity>
        </Modal>
    )
};

export default AddModalList;