import { Text, View } from "react-native";

export function Score({
  score,
  maxScore,
}: {
  score: number;
  maxScore: number;
}) {
  return (
    <View>
      <Text>{score}</Text>
    </View>
  );
}
