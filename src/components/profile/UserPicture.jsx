import { Image, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const UserPicture = () => {
  const { currentUser } = useSelector((state) => state.AuthSlice);
  const [ProfileImage, setProfileImage] = useState("");
  const uploadProfilePicture = async () => {
    let results = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.mediaType,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
    });
    if (!results.canceled) {
      setProfileImage(results.assets[0].uri);
    }
  };

  return (
    <View className={`flex-1 items-center justify-center`}>
      <View
        className={`bg-neutral-100 h-40 w-40 rounded-3xl flex flex-row items-center justify-center border-2 border-solid border-mainColor overflow-hidden`}
      >
        <TouchableOpacity
          className={`flex items-center m-1`}
          onPress={() => uploadProfilePicture()}
        >
          <Image
            source={{
              uri: !currentUser?.photo
                ? "https://res.cloudinary.com/dkhu7rt8n/image/upload/v1737907250/betcom/user_profile_phodu9.png"
                : currentUser?.photo,
            }}
            className={`w-40 h-40 rounded-lg z-10`}
          />
        </TouchableOpacity>
      </View>
      <View className={`py-3 flex flex-row gap-1`}>
        <Text className={`capitalize`}>you are welcome</Text>
        <Text className={`capitalize text-mainColor`}>
          {currentUser.username}
        </Text>
      </View>
    </View>
  );
};

export default UserPicture;
