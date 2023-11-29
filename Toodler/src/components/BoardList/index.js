import React from "react";
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import ImageThumbnail from '../ImageThumbnail'

const Item = ({item}) => (
    <View style={styles.item}>
      <ImageThumbnail thumbnailPhoto={item.photo}/>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

const BoardList = ({data}) => (
    console.log(data),
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
        
      />
    </SafeAreaView>
)

export default BoardList