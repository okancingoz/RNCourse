import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

type GoalInputProps = {
  onAddGoal: (text: string) => void;
  onCancel: () => void;
  visible: boolean;
};

export default function ({ onAddGoal, onCancel, visible }: GoalInputProps) {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  const handleAddGoal = () => {
    if (!enteredGoalText.trim()) return;
    onAddGoal(enteredGoalText.trim());
    setEnteredGoalText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          placeholderTextColor={"#aaa"}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={handleAddGoal}
              color={"#66937b"}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color={"#bc4749"} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#1b2845",
  },
  image: {
    width: 100,
    height: 100,
    margin: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    backgroundColor: "#e6e6e6",
    borderRadius: 8,
    width: "100%",
    padding: 16,
    color: "#444",
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 16,
    padding: 16,
    gap: 24,
  },
  button: {
    width: 100,
  },
});
