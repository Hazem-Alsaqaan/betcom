import { Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";

import { I18nManager } from "react-native";
import {
  decreaseActivePage,
  increaseActivePage,
  setActivePage,
} from "../redux/reducers/UnitsSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { activePage, totalPagesArray } = useSelector(
    (state) => state.UnitsSlice
  );
  let maxPagesToShow = 5;
  let startPage = Math.max(1, activePage - Math.floor(maxPagesToShow / 2));
  let endPage = Math.min(
    totalPagesArray.length,
    startPage + maxPagesToShow - 1
  );
  if (endPage - startPage < maxPagesToShow - 1) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  const PressNumberPage = (item) => {
    dispatch(setActivePage(item));
  };
  // increase page
  const handleIncrease = () => {
    dispatch(increaseActivePage());
  };
  // decrease page
  const handleDecrease = () => {
    dispatch(decreaseActivePage());
  };

  return (
    <View className={`flex-row items-center justify-center my-1`}>
      <TouchableOpacity className={`mx-2`} onPress={() => handleDecrease()}>
        <AntDesign
          name={`${I18nManager.isRTL ? "rightcircleo" : "leftcircleo"}`}
          size={28}
          color="black"
        />
      </TouchableOpacity>
      <View className={`flex-row items-center bg-white  overflow-hidden`}>
        {totalPagesArray.slice(startPage - 1, endPage).map((item) => (
          <TouchableOpacity
            onPress={() => PressNumberPage(item)}
            className={`px-2 py-1 rounded-xl ${
              activePage === item ? "bg-mainColor" : "bg-blackColor"
            } mx-1`}
            key={item}
          >
            <Text className={`text-whiteColor`}>{item}</Text>
          </TouchableOpacity>
        ))}
        {endPage < totalPagesArray.length && <Text>...</Text>}
      </View>
      <TouchableOpacity className={`mx-2`} onPress={() => handleIncrease()}>
        <AntDesign
          name={`${I18nManager.isRTL ? "leftcircleo" : "rightcircleo"}`}
          size={28}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
