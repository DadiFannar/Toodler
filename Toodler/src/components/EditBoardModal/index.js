import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Modal from "../Modal";
import styles from './styles'


const EditBoardModal=({
    id,
    name,
    isOpen,
    closeModal,
    photo,
    updateBoard,
}) => {


    const [newName, setName] = useState(newName)
    const [newPhoto, setPhoto] = useState(newPhoto)

    const onSubmit = (id,name,photo) => {
        if (!name) {
            Alert.alert('Fill in the Name')
        }
        else if (!photo) {
            Alert.alert('Fill in the Photo')
        }
        else{
            updateBoard(id,name,photo)
            closeModal()

        }
    }

    return (
        
        <Modal 
        
            isOpen={isOpen}
            closeModal={closeModal}
            // style={styles.input}
            >
                <Text style={styles.title}>Edit a Board!</Text>
                <Text>Name:</Text>
                <TextInput 
                style={styles.input}
                placeholder={name}
                onChangeText={newName => setName(newName)}
                // onSubmitEditing={() => onSubmit(name,photo)}
                ></TextInput>
                <Text>Photo:</Text> 
                <TextInput 
                style={styles.input}
                placeholder={photo}
                onChangeText={newPhoto => setPhoto(newPhoto)}
                // onSubmitEditing={() => onSubmit(name,photo)}
                ></TextInput>
                <TouchableOpacity style={styles.btn} onPress={() => onSubmit(id,newName,newPhoto)}>
                    <Text style={styles.btn}>
                        Confirm Edit
                    </Text>
                </TouchableOpacity>
        </Modal>
    )
}
// }

export default EditBoardModal