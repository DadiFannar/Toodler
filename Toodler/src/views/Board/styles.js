import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexBasis: 'auto',
        // flex:1,
        // height:700,
        backgroundColor:'#ffa',
        justifyContent:'center',
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