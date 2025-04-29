import { View, Text, Pressable, StyleSheet } from "react-native";
import { Goal } from "../types/goal";
import React from "react";

type Props = {
  goal: Goal;
  onDelete: (id: string) => void;
};

export default function GoalItem({ goal, onDelete }: Props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#8098a4" }}
        onLongPress={() => onDelete(goal.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{goal.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    backgroundColor: "#668392",
    borderRadius: 16,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "#fdf0d5",
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 16,
  },
});
