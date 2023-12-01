import React, {useState} from "react";
import { TouchableOpacity, Text , TextInput, Pressable, Alert} from "react-native";
import styles from "./styles";
import Modal from '../Modal'



const AddModal =({
    isOpen,
    closeModal,
    createBoard,

}) => {

    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')

    const onSubmit = (name,photo) => {
        if (name == '') {
            Alert.alert('Fill in the Name')
        }
        else if (photo == '') {
            Alert.alert('Fill in the Photo')
        }
        else{
            createBoard(name, photo)
            closeModal()

        }
      }
    return (
        <Modal 
            isOpen={isOpen}
            closeModal={closeModal}
            // style={styles.input}
            >
                <Text style={styles.title}>Add a Board!</Text>
                <Text>Name:</Text>
                <TextInput 
                style={styles.input}
                onChangeText={name => setName(name)}
                onSubmitEditing={() => onSubmit(name,photo)}
                ></TextInput>
                <Text>Photo:</Text> 
                <TextInput 
                style={styles.input}
                onChangeText={photo => setPhoto(photo)}
                onSubmitEditing={() => onSubmit(name,photo)}
                ></TextInput>
                <TouchableOpacity style={styles.btn} onPress={() => onSubmit(name,photo)}>
                    <Text style={styles.btn}>
                        Create Board
                    </Text>
                </TouchableOpacity>
        </Modal>
    )
};

export default AddModal;