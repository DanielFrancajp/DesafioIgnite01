import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import IconCircle from 'react-native-vector-icons/Entypo';
import IconDelete from "react-native-vector-icons/AntDesign";
import IconCheckTrue from "react-native-vector-icons/AntDesign";


interface phrasesType {
    id: number;
    phrase: String;
    status: boolean;
}

type Props = {
    phrase: phrasesType;
    onRemove: () => void;
    onCheck: () => void;
}


export function Tasks({ phrase, onRemove, onCheck }: Props) {
    console.log(phrase)
    return (
        <View style={styles.container}>

            <View style={styles.containerFlat}>

                <View style={styles.buttonContainer}>
                    {phrase.status?
                    <TouchableOpacity onPress={onCheck} >
                        <IconCheckTrue
                            name="checkcircle"
                            color="#4EA8DE"
                            size={20}
                        />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={onCheck} >
                        <IconCircle
                            name="circle"
                            color="#4EA8DE"
                            size={20}
                        />
                    </TouchableOpacity>
                }

                </View>
                <View style={styles.text} >
                <Text style={[styles.name, phrase.status && {textDecorationLine: 'line-through', color: "#333333"}]}>{phrase.phrase}</Text>    
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={onRemove}>
                        <IconDelete
                            name="delete"
                            color="#808080"
                            size={20}
                        />
                    </TouchableOpacity>
                </View>





            </View>

        </View >
    )
}