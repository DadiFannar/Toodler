import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import Modal from '../Modal'



const AddModal =({
    isOpen,
    closeModal,
}) => (
    <Modal 
        isOpen={isOpen}
        closeModal={closeModal}
        style={styles.input}>
            <Text>
                halo
            </Text>
    </Modal>

);

export default AddModal;