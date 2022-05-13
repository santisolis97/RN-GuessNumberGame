import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 36,
    elevation: 4,
    backgroundColor: Colors.primary800,
    shadowColor: "black",
    shadowOffset: { width: 6, height: 6 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});
