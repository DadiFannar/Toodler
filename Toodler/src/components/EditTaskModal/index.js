import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Modal from "../Modal";
import styles from './styles'


const EditTaskModal=({
    id,
    name,
    description,
    listId,
    isOpen,
    closeModal,
    updateTask,
}) => {


    const [newName, setName] = useState(newName)
    const [newDescription, setDescription] = useState(newDescription)
    const [newListId, setListId] = useState(newListId)

    const onSubmit = (id,name,description, listId) => {
        if (!name) {
            Alert.alert('Fill in the Name')
        }
        else if (!description) {
            Alert.alert('Fill in the Description')
        }
        else if (!listId) {
            Alert.alert('Fill in the ListId')
        }
        else{
            updateTask(id,name,description,listId)
            closeModal()
        }
    }

    return (
        
        <Modal 
        
            isOpen={isOpen}
            closeModal={closeModal}

            >
                <Text style={styles.title}>Edit a List!</Text>
                <Text>Name:</Text>
                <TextInput 
                style={styles.input}
                placeholder={name}
                onChangeText={newName => setName(newName)}
                ></TextInput>

                <Text>Description:</Text> 
                <TextInput 
                style={styles.input}
                placeholder={description}
                onChangeText={newDescription => setDescription(newDescription)}
                ></TextInput>

                <Text>ListId:</Text> 
                <TextInput 
                style={styles.input}
                placeholder={listId}
                onChangeText={newListId => setListId(newListId)}
                ></TextInput>

                <TouchableOpacity style={styles.btn} onPress={() => onSubmit(id,newName,newDescription,newListId)}>
                    <Text style={styles.btn}>
                        Confirm Edit
                    </Text>
                </TouchableOpacity> 
        </Modal>
    )
}
// }

export default EditTaskModal