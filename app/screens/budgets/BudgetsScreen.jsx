import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Slider from '@react-native-community/slider';
import { useWindowDimensions } from 'react-native';

const BudgetScreen = () => {
  const [budgetValue, setBudgetValue] = useState(400);
  const totalBudget = 1000;
  const { width } = useWindowDimensions();

  const handleBudgetChange = (value) => {
    setBudgetValue(value);
  };

  return (
    <View className="flex-1 bg-black p-4">
      <View className="mb-4">
        <Text className="text-white font-bold text-lg">Set up a monthly budget goal</Text>
        <Text className="text-white">Total budget is ${totalBudget}</Text>
      </View>
      <View className="flex-row items-center mb-4 bg-purple-600 rounded-lg p-2">
        <Icon name="silverware-variant" size={24} color="white" className="mr-2" />
        <Text className="text-white font-bold mr-auto">Food</Text>
        <Text className="text-white font-bold text-xl">${budgetValue}</Text>
      </View>
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-white font-bold text-2xl">${budgetValue}</Text>
        <View className="flex-row items-center">
          <Icon name="square-edit-outline" size={24} color="white" className="mr-2" />
          <Icon name="close" size={24} color="white" />
        </View>
      </View>
      <View className="mb-4">
        <Slider
          style={{ width: width - 32, height: 40 }}
          minimumValue={0}
          maximumValue={totalBudget}
          value={budgetValue}
          onValueChange={handleBudgetChange}
          minimumTrackTintColor="#8b5cf6"
          maximumTrackTintColor="#e5e7eb"
        />
        <View className="flex-row justify-between mt-2">
          <Text className="text-white">$0</Text>
          <Text className="text-white">${totalBudget}</Text>
        </View>
      </View>
      <View className="mb-4">
        <Text className="text-white font-bold text-base">Normal</Text>
        <Text className="text-white">It's ok! This amount is just within your budget!</Text>
      </View>
      <View className="bg-purple-600 rounded-lg p-3 items-center">
        <Text className="text-white font-bold text-base">Save</Text>
      </View>
    </View>
  );
};

export default BudgetScreen;