import { Text, View, TextInput } from "react-native";

const EnterUnitPrice = ({ componentInfo, unitInfo, setUnitInfo }) => {
  return (
    <View className={`w-full`}>
      <View className={` p-2 flex flex-row items-center justify-end`}>
        <Text className={`font-rubikBold text-mainColor`}>
          {componentInfo.title}
        </Text>
        <Text className={`mx-1 text-mainColor`}>({componentInfo.num})</Text>
      </View>
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
