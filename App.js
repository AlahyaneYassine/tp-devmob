import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Inputs from './inputs.js';
import Operations from './Operation.js';
import { Pressable } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [op, setOp] = useState("");
  const [result, setResult] = useState(null);
  
    const calculer = () => {
    const n1 = parseFloat(val1);
    const n2 = parseFloat(val2);

    if (isNaN(n1) || isNaN(n2) || op === "") {
      setResult("Erreur");
      return;
    }
    let r = 0;
     if (op === "+") r = n1 + n2;
    if (op === "-") r = n1 - n2;
    if (op === "*") r = n1 * n2;

    setResult(r);
  };
   const clear = () => {
    setVal1("");
    setVal2("");
    setOp("");
    setResult(null);
  };

return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculatrice Simple</Text>

      <Inputs
        val1={val1}
        setVal1={setVal1}
        val2={val2}
        setVal2={setVal2}
      />

      <Operations op={op} setOp={setOp} />

      <Pressable style={styles.btn} onPress={calculer}>
        <Text style={styles.btnText}>Calculer</Text>
      </Pressable>

      {result !== null && (
        <Text style={styles.result}>Résultat : {result}</Text>
      )}

      <Pressable style={styles.clear} onPress={clear}>
        <Text style={styles.btnText}>Clear</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { textAlign: "center", fontSize: 28, marginBottom: 20 },
  btn: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
  },
  clear: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  btnText: { textAlign: "center", color: "white", fontSize: 20 },
  result: { textAlign: "center", fontSize: 22, marginTop: 20 },
});

