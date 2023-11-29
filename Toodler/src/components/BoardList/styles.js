import { StyleSheet, StatusBar} from "react-native";

export default StyleSheet.create({
    boardlist: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
    image: {
        float: 'center',
        width: 50,
        height: 50
      },
    title: {
        fontSize: 32,
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