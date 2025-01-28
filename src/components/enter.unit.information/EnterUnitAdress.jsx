import { Text, TextInput, View } from "react-native";
const EnterUnitAdress = ({ componentInfo, unitInfo, setUnitInfo }) => {
  return (
    <View className={`w-full mt-5`}>
      <Text className={`font-rubikBold text-mainColor text-center`}>
        {componentInfo.title}
      </Text>
      <View>
        <TextInput
          className={`bg-neutral-50 border-2 border-solid border-neutral-100 focus:border-[1px] focus:border-solid focus:border-mainColor p-2 rounded-full min-w-[200px] my-1 text-right`}
          placeholder="المدينة"
          onChangeText={(e) => setUnitInfo({ ...unitInfo, city: e })}
          placeholderTextColor={"rgb(64 64 64)"}
        />
        <TextInput
          className={`bg-neutral-50 border-2 border-solid border-neutral-100 focus:border-[1px] focus:border-solid focus:border-mainColor p-2 rounded-full min-w-[200px] my-1 text-right`}
          placeholder="اسم الشارع"
          onChangeText={(e) => setUnitInfo({ ...unitInfo, street: e })}
          placeholderTextColor={"rgb(64 64 64)"}
        />
        <TextInput
          className={`bg-neutral-50 border-2 border-solid border-neutral-100 focus:border-[1px] focus:border-solid focus:border-mainColor p-2 rounded-full min-w-[200px] my-1 text-right`}
          placeholder="رقم الطابق"
          onChangeText={(e) => setUnitInfo({ ...unitInfo, house_num: e })}
          placeholderTextColor={"rgb(64 64 64)"}
        />
      </View>
    </View>
  );
};

export default EnterUnitAdress;
