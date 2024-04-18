import {Text, TouchableOpacity } from "react-native";
import React from 'react'

const CustomButton = () => {
  return (
    <TouchableOpacity  className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center`}>
      <Text>CustomButton</Text>
    </TouchableOpacity>
  )
}

export default CustomButton