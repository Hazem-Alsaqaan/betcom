import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ChangePassword = () => {
  return (
    <TouchableOpacity
      className={`w-full py-3 flex flex-row justify-between items-center border-b-2 border-solid border-b-neutral-50`}
    >
      <Entypo name="chevron-small-left" size={24} color="black" />
      <View className={`flex flex-row items-center gap-2`}>
        <Text className={`font-rubikMedium`}>تغيير كلمة المرور</Text>
        <MaterialCommunityIcons
          name="account-lock-outline"
          size={24}
          color="black"
        />
      </View>
    </TouchableOpacity>
  );
};

export default ChangePassword;
