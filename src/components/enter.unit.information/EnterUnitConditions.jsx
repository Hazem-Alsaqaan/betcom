import { Text, View, TextInput } from "react-native";

const EnterUnitConditions = ({ componentInfo, unitInfo, setUnitInfo }) => {
  return (
    <View className={`w-full mt-5`}>
      <Text className={`font-rubikBold text-mainColor text-center`}>
        {componentInfo.title}
      </Text>
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
