import React from "react";
import { TouchableOpacity, Text , TextInput} from "react-native";
import styles from "./styles";
import Modal from '../Modal'



const AddModal =({
    isOpen,
    closeModal,
}) => (
    <Modal 
        isOpen={isOpen}
        closeModal={closeModal}
        // style={styles.input}
        >
            <Text style={styles.title}>bull1:</Text>

            <Text>Name:</Text>
            <TextInput style={styles.input}>
                
            </TextInput>
            <Text>Photo:</Text>
            <TextInput style={styles.input}>
            
            </TextInput>
    </Modal>

);

export default AddModal;