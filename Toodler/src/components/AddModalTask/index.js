import React, {useState} from "react";
import { TouchableOpacity, Text , TextInput, Pressable, Alert} from "react-native";
import styles from "./styles";
import Modal from '../Modal'



const AddModalTask =({
    isOpen,
    listId,
    closeModal,
    createTask,

}) => { 

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (name,photo) => {
        if (name == '') {
            Alert.alert('Fill in the Name')
        }
        else if (photo == '') {
            Alert.alert('Fill in the Description')
        }
        else{
            createTask(listId, name, description)
            closeModal()
        }
      }
    return (
        <Modal 
            isOpen={isOpen}
            closeModal={closeModal}
            // style={styles.input}
            >
                <Text style={styles.title}>Add a task!</Text>
                <Text>Name:</Text>
                <TextInput 
                style={styles.input}
                onChangeText={name => setName(name)}
                onSubmitEditing={() => onSubmit(name,description)}
                ></TextInput>
                <Text>description:</Text> 
                <TextInput 
                style={styles.input}
                onChangeText={color => setDescription(color)}
                onSubmitEditing={() => onSubmit(name,description)}
                ></TextInput>
                <TouchableOpacity style={styles.btn} onPress={() => onSubmit(name,description)}>
                    <Text style={styles.btn}>
                        Create task
                    </Text>
                </TouchableOpacity>
        </Modal>
    )
};

export default AddModalTask;