import React from "react";
import { FlatList, View } from 'react-native'
import styles from './styles'
import ImageThumbnail from '../ImageThumbnail'

const BoardList = ({images}) => (
    console.log(images), 
    <View style={styles.boardlist}>
        <FlatList 
            numColumns={3}
            data={images}
            renderItem={({item}) => (
                <ImageThumbnail{...item}/>
            )}
            keyExtractor={item=>item.id} />
    </View>
)

export default BoardList