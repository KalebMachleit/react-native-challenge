import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9ef1c1',
    },
    header: {
      display: 'flex',
      backgroundColor: "#26e67a",
      height: 'auto',
      flexDirection: "column",
      alignContent: "flex-start",
      padding: 50,
    },
    headerText: {
      fontSize: 30,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    text: {
      fontSize: 24,
    },
  });

  export default styles;