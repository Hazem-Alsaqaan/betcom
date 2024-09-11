import { Image, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";

const EnterUnitImages = ({ unitInfo, setUnitInfo, componentInfo }) => {
  const [imageSelected, setImageSelected] = useState();
  // handle function to picker images with using external library called expo-image-picker
  const imagePickerHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImageSelected(result.assets[0].uri);
      setUnitInfo({
        ...unitInfo,
        images: [...unitInfo.images, result.assets[0].uri],
      });
    }
  };
  // handle function to remove the selected image and also it's handle removing from the basic array
  const removeUploadedImage = (selected) => {
    setImageSelected(null);
    setUnitInfo({
      ...unitInfo,
      images: unitInfo.images.filter((item) => item !== selected),
    });
  };

  return (
    <View className={`my-3`}>
      <View className={` p-2 flex flex-row items-center justify-end`}>
        <Text className={`font-rubikBold text-mainColor`}>
          {componentInfo.title}
        </Text>
      </View>
      <View
        className={`bg-neutral-100 h-40 flex flex-row items-center justify-center`}
      >
        {!imageSelected ? (
          <TouchableOpacity
            className={`flex items-center p-5 border-2 border-solid border-neutral-500 m-1`}
            onPress={() => imagePickerHandler()}
          >
            <Octicons name="image" size={64} color={"#f74d00"} />
          </TouchableOpacity>
        ) : (
          <View className={`relative bg-slate-100 `}>
            <TouchableOpacity
              className={`absolute w-8 h-8 -top-4 -right-4 z-20`}
              onPress={() => removeUploadedImage(imageSelected)}
            >
              <FontAwesome name="remove" size={32} color={"#f74d00"} />
            </TouchableOpacity>
            <Image
              source={{ uri: imageSelected }}
              className={`w-32 h-32 rounded-lg z-10`}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default EnterUnitImages;
