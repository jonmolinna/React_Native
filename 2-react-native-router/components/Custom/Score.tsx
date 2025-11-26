import { Text, View } from "react-native";

export function Score({
  score,
  maxScore,
}: {
  score: number;
  maxScore: number;
}) {
  const getColors = () => {
    const percentage = ((score * 10)/maxScore) * 100;

    if (percentage < 40) return "bg-red-600";
    if (percentage < 65) return "bg-yellow-600";
    return "bg-green-600"
  }

  const className = getColors();


  return (
    <View className={`w-8 h-8 rounded-full justify-center items-center ${className}`}>
      <Text className="text-lg font-bold text-white">{score}</Text>
    </View>
  );
}
