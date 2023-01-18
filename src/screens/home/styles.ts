import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0D0D0D",
        padding: 24,
    },
       EventName1: {
        color: "#4EA8DE",
        alignItems: 'center',
        fontSize: 32,
        fontWeight: 'bold'
    },
    EventName2: {
        color: "#5E60CE",
        fontSize: 32,
        fontWeight: 'bold',

    },
    Form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42

    },
    Input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FDFCFE',
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },
    Button: {
        width: 52,
        height: 52,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonText: {
        color: '#FFF',
        fontSize: 24,

    },
    Space:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
     Maids: {
        color: "#4EA8DE",
        textAlign:'left'
    },
    Concluded: {
        color: '#8284FA',
        textAlign:'right'

    }
})