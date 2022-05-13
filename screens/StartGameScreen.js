import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

import Colors from "../constants/colors";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //Show Alert
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: () => {
            setEnteredNumber("");
          },
        },
      ]);
      return;
    }
    onPickNumber(enteredNumber);
  };
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>

      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType={"number-pad"}
          autoCapitalize={"none"}
          value={enteredNumber}
          onChangeText={(value) => setEnteredNumber(value)}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={() => {
                setEnteredNumber("");
              }}
            >
              Reset
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    fontSize: 32,
    width: 50,
    textAlign: "center",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
export default StartGameScreen;
