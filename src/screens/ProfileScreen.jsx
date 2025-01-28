import { Text, View } from "react-native";
import SignOutButton from "../components/SignOutButton";
import UserPicture from "../components/profile/UserPicture";
const ProfileScreen = () => {
  return (
    <View className={`flex-1 items-center justify-center`}>
      <UserPicture />
      <Text>Profile Screen</Text>
      <SignOutButton />
    </View>
  );
};

export default ProfileScreen;
