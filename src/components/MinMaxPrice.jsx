import { View, TouchableOpacity, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { appColors } from "../themes/colors";
import AntDesign from "@expo/vector-icons/AntDesign";

const MinMaxPrice = ({ title , setValue, uniqueValue}) => {

  return (
    <View
      className={`flex-row justify-between items-center w-full  py-5 border-b-2 border-solid border-lightColor`}
    >
      <View className={`flex-row justify-center items-center gap-2`}>
        <TouchableOpacity onPress={()=>setValue("decrease")}>
          <AntDesign name="minuscircle" size={28} color={appColors.mainColor} />
        </TouchableOpacity>
        <TextInput
          mode="outlined"
          label={uniqueValue.toString()}
          className={`w-28`}
          outlineColor={appColors.mainColor}
          activeOutlineColor={appColors.mainColor}
          contentStyle={{ fontWeight: "bold" }}
          keyboardType="numeric"
          value={uniqueValue}
          onChangeText={(text)=>setValue(text)}
        />
        <TouchableOpacity onPress={()=>setValue("increase")}>
          <AntDesign name="pluscircle" size={28} color={appColors.mainColor} />
        </TouchableOpacity>
      </View>
      <Text className={`font-rubikMedium text-base`}>{title}</Text>
    </View>
  );
};
export default MinMaxPrice;
