import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

const TermsOfUse = () => {
  return (
    <TouchableOpacity
      className={`w-full py-3 flex flex-row justify-between items-center border-b-2 border-solid border-b-neutral-50`}
    >
      <Entypo name="chevron-small-left" size={24} color="black" />
      <View className={`flex flex-row items-center gap-2`}>
        <Text className={`font-rubikMedium`}>شروط الإستخدام</Text>
        <MaterialCommunityIcons name="marker-check" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default TermsOfUse;
