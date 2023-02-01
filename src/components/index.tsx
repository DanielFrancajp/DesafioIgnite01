import React from "react";
import {styles} from './styles'
import IconDelete from "react-native-vector-icons/MaterialIcons";
import IconCircle from "react-native-vector-icons/FontAwesome"

import {
    View,
    Text,
    TouchableOpacity
} from "react-native";

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
