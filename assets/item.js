import {View, Text, StyleSheet} from 'react-native';
import styles from './styles'

const Item = ({text}) => {
    return(
    <View style={styles.item}>
    <Text style={styles.text}>{text}</Text>
    </View>
    );
    }

export default Item