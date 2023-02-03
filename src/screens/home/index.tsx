import React, { useState } from "react";
import {
    FlatList,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert

} from 'react-native'

import { Tasks } from "../../components/Tasks";


import IconAcept from 'react-native-vector-icons/AntDesign';
import IconDelete from "react-native-vector-icons/MaterialIcons";
import IconCircle from "react-native-vector-icons/FontAwesome"

import { styles } from './styles'

export default function Home() {

    const [phrases, setPhrases] = useState<string[]>([""]);
    const [phrases2, setPhrases2] = useState('');

    function handlePhraseAdd() {

        if (phrases.includes(phrases2)) {
            return Alert.alert("Frase Existente .", " Já existe uma frase da mesma maneira, por favor escreva novamente :)")

        }
        setPhrases(prevState => [...prevState, phrases2]);
        setPhrases2('');
    }

    function handlePhraseRemove(name: string) {


        Alert.alert("Remover frase", `deseja remover a frase ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setPhrases(prevState => prevState.filter(phrases => phrases !== name))

            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function handleButtonCheck(ckeck: boolean) 
    {
       
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
                        onChangeText={setPhrases2}
                        value={phrases2}

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

                <FlatList
                    keyExtractor={item => item}
                    data={phrases}
                    renderItem={({ item }) => (
                        <Tasks
                            key={item}
                            phrase={item}
                            onRemove={() => handlePhraseRemove(item)} />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (

                        <>
                            <View style={styles.contentFlat}>
                                <Image
                                    source={require("../../../assets/Clipboard.png")}
                                    style={styles.image__clipboard}
                                />
                            </View>

                            <Text style={styles.text1}>
                                Você ainda não tem tarefas cadastradas

                            </Text>
                            <Text style={styles.text2}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </>
                    )}

                />
            </View>

        </View>






    )
}