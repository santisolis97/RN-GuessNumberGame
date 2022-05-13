import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  const styles = StyleSheet.create({
    buttonOutterContainer: {
      borderRadius: 28,
      margin: 4,
      overflow: "hidden",
    },
    buttonInnerContainer: {
      backgroundColor: Colors.primary500,
      paddingVertical: 8,
      paddingHorizontal: 16,
      elevation: 2,
    },
    buttonText: {
      color: "white",
      textAlign: "center",
    },
    pressed: {
      opacity: 0.75,
    },
  });
  return (
    <View style={styles.buttonOutterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
