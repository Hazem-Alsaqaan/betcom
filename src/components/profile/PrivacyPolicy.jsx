import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";

const PrivacyPolicy = () => {
  return (
    <TouchableOpacity
      className={`w-full py-3 flex flex-row justify-between items-center border-b-2 border-solid border-b-neutral-50`}
    >
      <Entypo name="chevron-small-left" size={24} color="black" />
      <View className={`flex flex-row items-center gap-2`}>
        <Text className={`font-rubikMedium`}>سياسة الخصوصية</Text>
        <MaterialIcons name="privacy-tip" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default PrivacyPolicy;
