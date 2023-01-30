import React, { useState } from "react";
import {
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



    const data = [
        {
            id: "1",
            description: "teste de exibicao de texto 1",
            status: false,
            delete: false,
        },
        {
            id: "2",
            description: "teste de exibicao de texto 2",
            status: false,
            delete: false
        },
        {
            id: "3",
            description: "teste de exibicao de texto 3",
            status: false,
            delete: false
        },
        {
            id: "4",
            description: "teste de exibicao de texto 4 ",
            status: true,
            delete: false
        },
        {
            id: "5",
            description: "teste de exibicao de texto 5 ",
            status: true,
            delete: false
        },
    ]

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
                    />
                    <TouchableOpacity style={styles.Button}>
                        <IconAcept
                            name="pluscircleo"
                            color="white"
                            size={20}
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
                    data={data}
                    extraData={data}
                    ListEmptyComponent={
                        <View style={styles.container__mid}>


                            <Image
                                source={require("../../../assets/Clipboard.png")}
                                style={styles.image__clipboard}

                            />
                            <Text style={styles.text1}> Você ainda não tem tarefas cadastradas</Text>
                            <Text style={styles.text2}> Crie tarefas e organize seus itens a fazer</Text>

                        </View>
                    }
                    renderItem={({ item }) => (
                        <>
                            {item.delete === false &&
                                <View style={styles.containerFlat} >
                                    <View style={styles.contentFlat} >
                                        <View style={styles.buttonStatus} >
                                            {item.status === false ?
                                                <TouchableOpacity >
                                                    <IconCircle
                                                        name="circle-thin"
                                                        color="purple"
                                                        size={25}
                                                    />

                                                </TouchableOpacity>
                                                :
                                                <View >
                                                    <IconAcept
                                                        name="checkcircle"
                                                        color="purple"
                                                        size={20}
                                                    />

                                                </View>
                                            }
                                        </View>
                                        <View style={styles.description} >
                                            <Text style={styles.textDescription} >{item.description}</Text>
                                        </View>
                                        <View style={styles.buttonDelete} >
                                            <TouchableOpacity >
                                                <IconDelete
                                                    name="delete-outline"
                                                    color="red"
                                                    size={25}
                                                />

                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            }
                        </>
                    )}
                    keyExtractor={item => item.id}
                />

            </View>
        </View>


    )
}