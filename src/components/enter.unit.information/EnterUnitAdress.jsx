import { Text, TextInput, View } from "react-native";

const EnterUnitAdress = ({ componentInfo, unitInfo, setUnitInfo }) => {
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
