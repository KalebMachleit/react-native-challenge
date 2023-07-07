import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import DATA from './assets/text-info';
import Item from './assets/item';
import styles from './assets/styles';

const renderItem = ({item})=>(
  <Item text={item.text}/>
  );


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Kaleb Machleit - Lead Developer</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}


