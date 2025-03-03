import { View, Text, Image, TouchableOpacity } from "react-native";
import CustomButton from "./CustomButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { appColors } from "../themes/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavouritesUnit,
  getFavouritesUnit,
  removeFavouritesUnit,
} from "../redux/actions/favouriteUnitsAction";
import { getAllUnits } from "../redux/actions/UnitsActions";

const SingleCard = ({ item }) => {
  const { token, currentUser } = useSelector((state) => state.AuthSlice);
  const { activePage } = useSelector((state) => state.publicVariablesSlice);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const router = useRoute();
  const viewSpecificUnit = () => {
    navigation.setParams({ unitId: item._id });
    navigation.navigate("unit-tabs", { unitId: item._id });
  };
  const handleClickedFavourites = (id) => {
    if (item.favourites.includes(currentUser?.id)) {
      dispatch(removeFavouritesUnit({ token: token, id: id }));
    } else {
      dispatch(addFavouritesUnit({ token: token, id: id }));
    }
    dispatch(getFavouritesUnit(token));
    dispatch(getAllUnits({ token: token, page: activePage }));
  };
  return (
    <View
      className={`z-0 bg-neutral-100 border-2 border-solid border-gray300 rounded-xl my-2 overflow-hidden`}
    >
      <View className={`w-full h-52 bg-lightColor relative`}>
        {/* ADD & REMOVE FROM FAVOURITES BUTTON */}
        {router.name !== "my-units" && (
          <TouchableOpacity
            className={`absolute right-0 top-0 w-10 h-10 z-10 m-2 p-2 bg-black/50 rounded-full`}
            onPress={() => handleClickedFavourites(item?._id)}
          >
            <Ionicons
              name="heart"
              size={24}
              color={
                item.favourites.includes(currentUser?.id)
                  ? appColors.mainColor
                  : appColors.whiteColor
              }
            />
          </TouchableOpacity>
        )}
        {/* IMAGE */}
        <Image
          source={{
            uri: item?.images[0],
          }}
          alt="UNIT PICTURE"
          className={`w-full h-full`}
        />
      </View>
      {/* CONTENT BOX COMPONENT */}
      <View className={`flex items-center gap-1 p-2`}>
        <Text
          className={`text-center font-rubikSemiBold text-mainColor text-xl mb-1 w-full`}
        >
          إيجار
        </Text>
        <Text className={`font-rubikMedium`}>
          شقة تحتوى على {item?.rooms} غرف و {item?.bathrooms} حمام
        </Text>
        <Text className={`font-rubikMedium`}>
          المساحة : {item?.apartment_area} م
        </Text>
        <Text className={` font-rubikBold text-mainColor`}>
          السعر/ {item?.price}
        </Text>

        {/* <Text className={`font-rubikMedium`}>
          {item?.rating}
          <Ionicons name="star" size={20} color={appColors.mainColor} />
        </Text> */}

        <Text className={`font-rubikMedium`}>
          {/* <Ionicons name="location" size={24} color={appColors.blackColor} /> */}
          {`${item?.city} ${item?.street}`}
        </Text>
        <View className={`w-full flex items-center`}>
          <CustomButton title={"معاينة"} handlePress={viewSpecificUnit} />
        </View>
      </View>
    </View>
  );
};

export default SingleCard;
