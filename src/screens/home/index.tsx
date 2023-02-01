import React, { useState } from "react";
import {
    Alert,
    FlatList,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,

} from 'react-native'
import IconAdd from 'react-native-vector-icons/AntDesign';
import IconAcept from 'react-native-vector-icons/AntDesign';
import IconDelete from "react-native-vector-icons/MaterialIcons";
import IconCircle from "react-native-vector-icons/FontAwesome"

import { styles } from './styles'

export default function Home() {

    const [phrases, setPhrases] = useState<string[]>([]);
    const [phraseNames, setPhraseNames] = useState('');

    function handlePhraseAdd() {
        if (phrases.includes(phraseNames)) {
            return Alert.alert("Tarefa existente na lista, por favor inclua uma tarefa diferente.")
        }
        setPhrases(prevState => [...prevState, phraseNames])
        console.log('vc clicou aqui bb');

    }

    return (


        <View style={styles.container}>

            <Image
                source={require("../../../assets/Logo.png")}
                style={styles.displayImage}
            />

            <View style={styles.container__body}>
                <View style={styles.Form}>
                    <TextInput
                        style={styles.Input}
                        placeholder={'Adicione uma nova tarefa'}
                        placeholderTextColor="#808080"
                        onChangeText={setPhraseNames}
                        value={phraseNames}
                    />
                    <TouchableOpacity style={styles.Button}>
                        <IconAcept
                            name="pluscircleo"
                            color="white"
                            size={20}
                            onPress={handlePhraseAdd}
                        />

                    </TouchableOpacity>


                </View>

                <View style={styles.container__names}>

                    <View style={styles.TextCreate}>
                        <Text style={styles.buttonCreate}> Criadas</Text>
                        <View style={styles.borderNumberCreate}>
                            <Text style={styles.color_text_number}>0</Text>
                        </View>

                    </View>

                    <View style={styles.TextDone}>

                        <Text style={styles.buttonDone}> Concluidas</Text>
                        <View style={styles.borderNumberCreate}>
                            <Text style={styles.color_text_number}>0</Text>
                        </View>

                    </View>
                </View>


            </View>
        </View>






    )
}