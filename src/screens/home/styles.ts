import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#0D0D0D",
        alignItems: "center",
    },

    displayImage: {
        marginVertical: "20%",
        marginBottom: "20%"
    },

    container__body: {
        flex: 1,
        width: "100%",
        backgroundColor: "#1A1A1A",

    },

    Form: {
        flexDirection: "row",
        width: '100%',
        marginHorizontal: 18,
        marginTop: -28
    },
    Input: {
        flex: 1,
        backgroundColor: '#1F1E25',
        color: '#FDFCFE',
        borderRadius: 5,
        padding: 14,
        paddingHorizontal: 16,
        marginRight: 8,
    },
    Button: {
        width: 52,
        height: 52,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginRight: 32
    },
    ButtonText: {
        color: '#FFF',
        fontSize: 24,

    },
    container__names: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 18,
        marginTop: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#333333',
        paddingBottom: 20
    },
    buttonCreate: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4EA8DE',

    },
    TextCreate: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    color_text_number: {
        color: '#FFF',
    },
    borderNumberCreate: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333333',
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginLeft: 10,
        borderRadius: 50
    },
    buttonDone: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#8284FA',

    },
    border__done: {
        color: '#FFF',
    },
    TextDone: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    container__mid: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 250,
    },
    image__clipboard: {
        marginTop: 40,
        marginBottom: 20
    },
    text1: {
        color: '#808080',
        fontWeight: 'bold'
    },
    text2: {
        color: '#808080'
    },
    containerFlat: {
    marginHorizontal: 18,
    padding: 10,
    borderColor: "#333333",
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 10,
    },
    contentFlat:{
        width: "100%",
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    buttonStatus:{
        justifyContent: "center",
        alignItems: "center",
        width: "7%"
    },
    buttonDelete:{
        width: "7%",
        justifyContent: "center",
        alignItems: "center",

    },
    textDescription:{
        color:"#FFFFFF",
        fontWeight: "bold",

    },
    description:{
        alignItems: "center",
        justifyContent: "center",
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: "#333333",
        width: "80%"
    }

})