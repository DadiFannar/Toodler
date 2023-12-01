import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import Modal from "../Modal";
import styles from './styles'


const EditListModal=({
    id,
    name,
    isOpen,
    closeModal,
    color,
    updateList,
}) => {


    const [newName, setName] = useState(newName)
    const [newColor, setColor] = useState(newColor)

    const onSubmit = (id,name,color) => {
        if (!name) {
            Alert.alert('Fill in the Name')
        }
        else if (!color) {
            Alert.alert('Fill in the Color')
        }
        else{
            updateList(id,name,color)
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

                <Text>Color:</Text> 
                <TextInput 
                style={styles.input}
                placeholder={color}
                onChangeText={newColor => setColor(newColor)}
                ></TextInput>

                <TouchableOpacity style={styles.btn} onPress={() => onSubmit(id,newName,newColor)}>
                    <Text style={styles.btn}>
                        Confirm Edit
                    </Text>
                </TouchableOpacity> 
        </Modal>
    )
}
// }

export default EditListModal