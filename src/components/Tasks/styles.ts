import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        marginTop: 10,
        marginBottom: -10        
    },
    containerFlat: {
        marginHorizontal: 18,
        marginVertical: 10,
        marginRight: 20,
        padding: 10,
        backgroundColor: '#262626',
        borderColor: "#333333",
        borderRadius: 8,
        borderWidth: 2,
    },
    name: {
        fontSize: 16,
        color: '#FFF',
        paddingLeft: 15,
        paddingRight: 20
    },

    contentFlat: {
        width: "100%",
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    buttonStatus: {
        justifyContent: "center",
        alignItems: "center",
        width: "7%",

    },
    buttonDelete: {
        width: "7%",
        justifyContent: "center",
        alignItems: "center",
    },



})

