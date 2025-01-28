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
    <>
      <View
        className={`bg-neutral-100 h-40 w-40 rounded-full flex flex-row items-center justify-center`}
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
            className={`w-32 h-32 rounded-lg z-10`}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text>{currentUser.username}</Text>
      </View>
    </>
  );
};

export default UserPicture;
