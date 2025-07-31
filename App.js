import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Screens/Home/Home';
import Navigators from './components/Navigators';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigators />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 28,
    backgroundColor: 'antiquewhite',

  },
});
