import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffa',
        // justifyContent:'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    add: {
        position:'absolute',
        left: 20,
        bottom: 20,
        zIndex: 1,
        color:"green"
    },
});