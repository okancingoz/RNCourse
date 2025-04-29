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
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  const addGoalHandler = (enteredText: string) => {
    const newGoal: Goal = {
      id: Math.random().toString(),
      text: enteredText,
    };
    setCourseGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
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

  goalsContainer: {
    flex: 5,
  },
});
