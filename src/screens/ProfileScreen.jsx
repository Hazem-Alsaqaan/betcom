import { ScrollView, View } from "react-native";
import SignOutButton from "../components/SignOutButton";
import UserPicture from "../components/profile/UserPicture";
import ManageAccount from "../components/profile/ManageAccount";
import ChangePassword from "../components/profile/ChangePassword";
import PrivacyPolicy from "../components/profile/PrivacyPolicy";
import TermsOfUse from "../components/profile/TermsOfUse";
const ProfileScreen = () => {
  return (
    <View className={`bg-white  flex-1 items-center justify-center`}>
      <UserPicture />
      <ScrollView className={`flex-1 px-4 mt-4`}>
        <ManageAccount />
        <ChangePassword />
        <TermsOfUse />
        <PrivacyPolicy />
        <SignOutButton />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
