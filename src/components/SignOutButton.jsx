import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { signOutCurrentUser } from "../redux/reducers/AuthSlice";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const SignOutButton = () => {
  const dispatch = useDispatch();
  const signOuthandler = () => {
    dispatch(signOutCurrentUser());
  };
  return (
    <TouchableOpacity
      onPress={() => signOuthandler()}
      className={`w-full  py-3 flex flex-row justify-end items-center border-b-2 border-solid border-b-neutral-50`}
    >
      <View className={`flex flex-row items-center gap-2`}>
        <Text className={`font-rubikMedium text-mainColor`}>تسجيل الخروج</Text>
        <SimpleLineIcons name="logout" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default SignOutButton;
