import React from "react";
import { Image, View } from 'react-native'
import styles from './styles'

const ImageThumbnail = ({ id, name, thumbnailPhoto }) =>(
    console.log(thumbnailPhoto),
    <View>
        <Image 
            style={styles.image}
            resizeMode="cover"
            source={{ uri : thumbnailPhoto}}
        />
    </View>
);

export default ImageThumbnail