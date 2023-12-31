import { StyleSheet, StatusBar} from "react-native";

export default StyleSheet.create({
    boardlist: {
        backgroundColor:'red',
        flex: 1,
    },
    container: {
        backgroundColor: 'blue',
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        alignItems: 'center',
        backgroundColor: '#5f9afa',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 24,
        borderWidth: 4,
        borderRadius: 20,

    },
    close: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: 'red',
    },
    description:{
      textAlign: 'left',
    },
    descriptionDone: {
      textDecorationLine: 'line-through',
      textAlign: 'left'
    },
    title: {
        justifyContent: 'center',
        fontSize: 28,
        borderBottomWidth: 4,
    },
    titleDone: {
      textDecorationLine: 'line-through',
      justifyContent: 'center',
      fontSize: 28,
      borderBottomWidth: 4,
    },
    deleteButton:{
        float: 'right',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addbutton:{
        float: 'center',
    }
})