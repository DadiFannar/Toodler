import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Modal from "../Modal";
import styles from './styles'


const EditBoardModal=({
    name,
    isOpen,
    closeModal,
    photo,
}) => {


    // const [names, setName] = useState(names)
    // const [photo, setPhoto] = useState(photo)

    // const onSubmit = (name,photo) => {
    //     if (name == '') {
    //         Alert.alert('Fill in the Name')
    //     }
    //     else if (photo == '') {
    //         Alert.alert('Fill in the Photo')
    //     }
    //     else{
    //         EditBoard(name, photo)
    //         closeModal()

    //     }

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
                // onChangeText={name => setName(name)}
                value={name}
                // onSubmitEditing={() => onSubmit(name,photo)}
                ></TextInput>
                <Text>Photo:</Text> 
                <TextInput 
                style={styles.input}
                value={photo}
                // onChangeText={photo => setPhoto(photo)}
                // onSubmitEditing={() => onSubmit(name,photo)}
                ></TextInput>
                <TouchableOpacity style={styles.btn} onPress={() => Alert.alert(name)}>
                    <Text style={styles.btn}>
                        Confirm Edit
                    </Text>
                </TouchableOpacity>
        </Modal>
    )
}
// }

export default EditBoardModal