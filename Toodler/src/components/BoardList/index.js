import React from "react";
import PropTypes, { arrayOf } from 'prop-types';
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import ImageThumbnail from '../ImageThumbnail'
import data from '../../resources/data.json'

const BoardList = ({ images }) => (
    <View style={styles.item}>
      <FlatList
        numColumns={3}
        data={images}
        renderItem={({ item }) => (
          <ImageThumbnail {...item} />
        )}
        keyExtractor={image => image.id}
      />
    </View>
)

export default BoardList