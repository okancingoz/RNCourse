import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import { Goal } from "./types/goal";
import GoalItem from "./components/GoalItem";
import React from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    const newGoal: Goal = {
      id: Math.random().toString(),
      text: enteredGoalText,
    };
    setCourseGoals((prevGoals) => [...prevGoals, newGoal]);
    setEnteredGoalText("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="ADD GOAL" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <GoalItem goal={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#fefae0",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
