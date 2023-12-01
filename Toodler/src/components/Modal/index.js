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
        isVisible={isOpen}
        hasBackdrop={true}
        onBackButtonPress={closeModal}
        onSwipeComplete={closeModal}
        swipeDirection={['down','left','right','up']}
        style={styles.modal}>
            <View style={styles.body}>
                {children}
            </View>
    </NativeModal>
);

export default Modal;