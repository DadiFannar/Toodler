import React from "react";
import { FlatList, SafeAreaView, Text, TouchableHighlight, View } from 'react-native'
import styles from './styles'
import ImageThumbnail from '../ImageThumbnail'
import {AntDesign} from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';

const Item = ({navigation, item}) => (
  <TouchableOpacity onPress={() => navigation.navigate('List')}>
    <View style={styles.item}>
      <Ionicons name="close-circle-sharp" size={32} style={styles.close} />
      <ImageThumbnail thumbnailPhoto={item.photo}/>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  </TouchableOpacity>
  );

const BoardList = ({data}) => {
    const navigation = useNavigation();
    console.log(data);
    return (
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={({item}) => <Item navigation={navigation} item={item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
}

export default BoardList