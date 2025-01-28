import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const EnterUnitType = ({ componentInfo, unitInfo, setUnitInfo }) => {
  const [unitType, setUnitType] = useState("ايجار");
  return (
    <View className={`w-full mt-5`}>
      <Text className={`font-rubikBold text-mainColor text-center`}>
        {componentInfo.title}
      </Text>
      <View className={`w-full bg-neutral-50 p-5 flex-row justify-center`}>
        <TouchableOpacity
          className={`flex flex-row justify-center items-center my-2`}
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
          className={`flex flex-row justify-center items-center my-2`}
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
