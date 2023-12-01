import React from 'react'
import NativeModal from 'react-native-modal'
import PropTypes from 'prop-types'
import { View, Text} from 'react-native'
import styles from './styles'

const Modal = ({
    isOpen,
    closeModal,
    children,
}) => (
    <NativeModal
        isVisable={isOpen}
        hasBackdrop={true}
        onBackButtonPress={closeModal}
        onSwipeComplete={closeModal}
        style={styles.body}>
            <View style={styles.modal}>
                {children}
            </View>
    </NativeModal>
);

export default Modal;