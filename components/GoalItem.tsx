import { View, Text, StyleSheet } from "react-native";
import { Goal } from "../types/goal";
import React from "react";

type Props = {
  goal: Goal;
};

export default function GoalItem({ goal }: Props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{goal.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 4,
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: "#003049",
    borderRadius: 16,
  },
  goalText: {
    color: "#fdf0d5",
  },
});
