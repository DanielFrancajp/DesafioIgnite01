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

interface phrasesType {
    id: number;
    phrase: string;
    status: boolean;
}

export default function Home() {

    const [phrases, setPhrases] = useState<phrasesType[]>([]);
    const [phrases2, setPhrases2] = useState('');
    const [id, setId] = useState(0)
    const [countCreated, setCountCreated ] = useState(0)
    const [countConcluds, setCountConcluds ] = useState(0)


    function handlePhraseAdd() {

      /*  if (phrases.map(item => phrases2 !== item.phrase)) {
            return Alert.alert("Frase Existente .", " Já existe uma frase da mesma maneira, por favor escreva novamente :)")

        }*/
        setCountCreated(countCreated + 1)
        setId(id + 1)
        const dataPhrases = {
            id: id,
            phrase: phrases2,
            status: false
        }
        setPhrases(prevState => [...prevState, dataPhrases]);
        setPhrases2('');
    }

    function handlePhraseRemove(name: string) {


        Alert.alert("Remover frase", `deseja remover a frase ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setPhrases(prevState => prevState.filter(phrases => 
                    phrases.phrase !== name
                    
                    ))

            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    function handleButtonCheck(index: number){
        const check = phrases[index]
        if(check.status === true && phrases[index].status){
            setCountConcluds(countConcluds -1)
            setCountCreated(countCreated + 1)
            const dataPhrases = {
                id: check.id,
                phrase: check.phrase,
                status: false
            }
            phrases[index] = dataPhrases
            setPhrases(prevState => [...prevState]);
        }else{
            setCountConcluds(countConcluds + 1)
            setCountCreated(countCreated - 1 )
            const dataPhrases = {
                id: check.id,
                phrase: check.phrase,
                status: true
            }
            
            phrases[index] = dataPhrases
            setPhrases(prevState => [...prevState]);
        }
        
        //setPhrases(prevState => prevState.filter(phrases => phrases.phrase !== name))
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
                            <Text style={styles.color_text_number}>{countCreated}</Text>
                        </View>

                    </View>

                    <View style={styles.TextDone}>

                        <Text style={styles.buttonDone}> Concluidas</Text>
                        <View style={styles.borderNumberCreate}>
                            <Text style={styles.color_text_number}>{countConcluds}</Text>
                        </View>

                    </View>
                </View>

                <FlatList
                    keyExtractor={item => item.phrase}
                    data={phrases}
                    renderItem={({ item, index }) => (
                        <Tasks
                            key={item.id}
                            phrase={item}
                            onCheck={() => handleButtonCheck(index)}
                            onRemove={() => handlePhraseRemove(item.phrase)} />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (

                        <View style={{alignItems: "center"}} >
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
                        </View>
                    )}

                />
            </View>

        </View>






    )
}