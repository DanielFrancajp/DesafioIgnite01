import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import IconCircle from 'react-native-vector-icons/Entypo';
import IconDelete from "react-native-vector-icons/AntDesign";

type Props = {
    phrase: string;
    onRemove: () => void;
}


export function Tasks({ phrase, onRemove }: Props) {
    return (
        <View style={styles.container}>

            <View style={styles.containerFlat}>

                <View style={styles.contentFlat}>
                    <TouchableOpacity style={styles.buttonStatus}>
                        <IconCircle
                            name="circle"
                            color="#4EA8DE"
                            size={20}
                        />
                    </TouchableOpacity>

                    <View >
                        <Text style={styles.name}>{phrase}</Text>
                    </View>

                    <View style={styles.contentFlat}>
                        <TouchableOpacity style={styles.buttonDelete} onPress={onRemove}>
                            <IconDelete
                                name="delete"
                                color="#808080"
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>

                </View>




            </View>

        </View >
    )
}