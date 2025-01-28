import { Modal, Text } from "react-native-paper";
import { appColors } from "../themes/colors";
import { TouchableOpacity, View, Platform } from "react-native";
import MinMaxPrice from "./MinMaxPrice";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseMaxPrice,
  decreaseMinPrice,
  decreaseNumberOfRooms,
  increaseMaxPrice,
  increaseMinPrice,
  increaseNumberOfRooms,
  resetValues,
  setMaxPrice,
  setMinPrice,
  setNumberOfRooms,
  setSearchMood,
} from "../redux/reducers/publicVariablesSlice";
import { searchUnits } from "../redux/actions/UnitsActions";
import EnterUnitType from "./enter.unit.information/EnterUnitType";

const ModalFromPaper = ({ visible, onDismiss }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.AuthSlice);
  const { maxPrice, minPrice, numberOfRooms, activePage } = useSelector(
    (state) => state.publicVariablesSlice
  );

  const ModalStyle = {
    position: "absolute",
    bottom: Platform.OS === "ios" ? -40 : 0,
    left: 0,
    width: "100%",
    backgroundColor: appColors.whiteColor,
    borderTopStartRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    paddingBottom: 70,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 3,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderStyle: "solid",
    borderColor: appColors.mainColor,
  };

  const setRoomsValue = (mood) => {
    if (mood === "increase") {
      dispatch(increaseNumberOfRooms());
    } else if (mood === "decrease") {
      dispatch(decreaseNumberOfRooms());
    } else {
      dispatch(setNumberOfRooms(mood));
    }
  };
  const setMinPriceVal = (mood) => {
    if (mood === "increase") {
      dispatch(increaseMinPrice());
    } else if (mood === "decrease") {
      dispatch(decreaseMinPrice());
    } else {
      dispatch(setMinPrice(mood));
    }
  };
  const setMaxPriceVal = (mood) => {
    if (mood === "increase") {
      dispatch(increaseMaxPrice());
    } else if (mood === "decrease") {
      dispatch(decreaseMaxPrice());
    } else {
      dispatch(setMaxPrice(mood));
    }
  };

  const submitSearchUnits = () => {
    dispatch(
      searchUnits({
        token: token,
        heighestPrice: maxPrice,
        minimumPrice: minPrice,
        rooms: numberOfRooms,
        page: 1,
      })
    );
    dispatch(resetValues());
    onDismiss(false);
  };
  return (
    <Modal
      visible={visible}
      onDismiss={() => onDismiss(false)}
      contentContainerStyle={ModalStyle}
    >
      {/* DEFINE number and price */}
      <Text>لايزيد عدد غرف عن ٢٠</Text>
      <MinMaxPrice
        title={"عدد الغرف"}
        setValue={setRoomsValue}
        uniqueValue={numberOfRooms}
      />
      <Text>حدد الحد الأدنى للسعر</Text>
      <MinMaxPrice
        title={"الحد الادنى"}
        setValue={setMinPriceVal}
        uniqueValue={minPrice}
      />
      <Text>حدد الحد الأقصى للسعر</Text>
      <MinMaxPrice
        title={"الحد الاقصى"}
        setValue={setMaxPriceVal}
        uniqueValue={maxPrice}
      />
      <EnterUnitType componentInfo={{ title: "حدد نوع الوحدة" }} />
      <View className={`flex-row justify-center items-center my-4`}>
        <TouchableOpacity
          onPress={() => dispatch(resetValues())}
          className={`bg-gray600 p-2 rounded-l-full w-36 flex items-center justify-center`}
        >
          <Text className={`text-whiteColor text-base font-rubikMedium`}>
            مسـح القيم
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => submitSearchUnits()}
          className={`bg-mainColor p-2 rounded-r-full w-36 flex items-center justify-center`}
        >
          <Text className={`text-whiteColor text-base font-rubikMedium`}>
            تطبيق
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default ModalFromPaper;
