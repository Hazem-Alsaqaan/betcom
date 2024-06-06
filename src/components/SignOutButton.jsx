import { Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import {signOutCurrentUser} from "../redux/reducers/AuthSlice";

const SignOutButton = () => {
  const dispatch = useDispatch();
  const signOuthandler = () => {
    dispatch(signOutCurrentUser());
  };
  return (
    <TouchableOpacity
      onPress={() => signOuthandler()}
      className={` bg-mainColor px-8 py-1 rounded shadow-2xl my-5`}
    >
      <Text className={`text-whiteColor`}>Sign Out</Text>
    </TouchableOpacity>
  );
};

export default SignOutButton;
