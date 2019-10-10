import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import CurrencyInput from './components/CurrencyInput';

export default function App() {
  const [value, setValue] = useState(0);
  const handleValueChange = useCallback(val => {
    // eslint-disable-next-line
    console.log(val);
    setValue(val);
  }, []);


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <CurrencyInput
        max={100000000}
        onValueChange={handleValueChange}
        style={styles.input}
        value={value}
      />
      <Text>Validating bottom margin.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20,
    marginBottom: 20,
    marginTop: 20,
    padding: 20,
    textAlign: 'right',
    width: 300,
  },
});
