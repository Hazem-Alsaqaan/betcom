import { Text, View, TextInput } from "react-native";

const EnterUnitConditions = ({ componentInfo, unitInfo, setUnitInfo }) => {
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
          multiline={true}
          numberOfLines={4}
          className={`bg-neutral-50 border-2 border-solid border-neutral-100 focus:border-[1px] focus:border-solid focus:border-mainColor p-2 rounded-md min-w-[200px] my-1 text-right`}
          //   placeholder="الشروط"
          onChangeText={(e) => setUnitInfo({ ...unitInfo, conditions: e })}
          placeholderTextColor={"rgb(64 64 64)"}
        />
      </View>
    </View>
  );
};
export default EnterUnitConditions;
