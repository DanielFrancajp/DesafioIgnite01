import React from "react";
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import { styles } from './styles'

export default function Home() {
    return (


        <View style={styles.container}>


            <Text style={styles.EventName1}> to</Text>
            <Text style={styles.EventName2}> do</Text>




            <View style={styles.Form}>
                <TextInput style={styles.Input}
                    placeholder={'Adicione uma nova tarefa'}
                    placeholderTextColor="#808080"

                />

                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.ButtonText}> + </Text>

                </TouchableOpacity>
            </View>

            <View style={styles.Space}>

                <Text style={styles.Maids}> Criadas </Text>
                <Text style={{paddingRight: 180}}>0</Text>
                <Text style={styles.Concluded}> Concluídas</Text>
                <Text >0</Text>

            </View>




        </View>


    )
}