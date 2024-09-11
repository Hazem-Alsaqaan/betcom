import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const EnterUnitType = ({ componentInfo, unitInfo, setUnitInfo }) => {
  const [unitType, setUnitType] = useState("ايجار");
  return (
    <View className={`w-full`}>
      <View className={` p-2 flex flex-row items-center justify-end`}>
        <Text className={`font-rubikBold text-mainColor`}>
          {componentInfo.title}
        </Text>
        <Text className={`mx-1 text-mainColor`}>({componentInfo.num})</Text>
      </View>
      <View className={`bg-neutral-50 px-5`}>
        <TouchableOpacity
          className={`flex flex-row justify-end items-center my-2`}
          onPress={() => setUnitType("ايجار")}
        >
          <Text className={`font-rubikSemiBold mx-1 text-base`}>إيجار</Text>
          {unitType === "ايجار" ? (
            <MaterialIcons
              name="radio-button-checked"
              size={24}
              color={"#f74d00"}
            />
          ) : (
            <MaterialIcons
              name="radio-button-unchecked"
              size={24}
              color={"#f74d00"}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex flex-row justify-end items-center my-2`}
          onPress={() => setUnitType("تمليك")}
        >
          <Text className={`font-rubikSemiBold mx-1 text-base`}>تمليك</Text>
          {unitType === "تمليك" ? (
            <MaterialIcons
              name="radio-button-checked"
              size={24}
              color={"#f74d00"}
            />
          ) : (
            <MaterialIcons
              name="radio-button-unchecked"
              size={24}
              color={"#f74d00"}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EnterUnitType;
