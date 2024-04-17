import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Aora!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={() => console.log('Navigate to Profile')} className="mt-4">
        <Text className="text-blue-500">Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
