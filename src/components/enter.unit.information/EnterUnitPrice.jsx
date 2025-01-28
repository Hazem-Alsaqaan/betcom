import { Text, View, TextInput } from "react-native";

const EnterUnitPrice = ({ componentInfo, unitInfo, setUnitInfo }) => {
  return (
    <View className={`w-full mt-5`}>
      <Text className={`font-rubikBold text-mainColor text-center`}>
        {componentInfo.title}
      </Text>
      <View>
        <TextInput
          className={`bg-neutral-50 border-2 border-solid border-neutral-100 focus:border-[1px] focus:border-solid focus:border-mainColor p-2 rounded-full min-w-[200px] my-1 text-right `}
          placeholder="حدد السعر المطلوب"
          onChangeText={(e) => setUnitInfo({ ...unitInfo, price: parseInt(e) })}
          placeholderTextColor={"rgb(64 64 64)"}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
};
export default EnterUnitPrice;
