import React from "react";
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import { useRoute } from "@react-navigation/native"

export const filterDatabyId = (id, data) =>{
    return data.filter((data) => data.id == id);
};
const List = ({navigation: { navigate }}) =>(
    console.log("this.props.route.params.id")

);

export default List