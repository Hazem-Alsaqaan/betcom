import { Modal, Text } from "react-native-paper";
import { appColors } from "../themes/colors";
import { TouchableOpacity, View } from "react-native";
import MinMaxPrice from "./MinMaxPrice";
import { useDispatch, useSelector } from "react-redux";
import { decreaseMaxPrice, decreaseMinPrice, decreaseNumberOfRooms, increaseMaxPrice, increaseMinPrice, increaseNumberOfRooms, resetValues, setMaxPrice, setMinPrice, setNumberOfRooms } from "../redux/reducers/publicVariablesSlice";

const ModalFromPaper = ({ visible, onDismiss }) => {
  const dispatch = useDispatch()
  const ModalStyle = {
    backgroundColor: appColors.whiteColor,
    borderTopStartRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 450,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 3,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderStyle: "solid",
    borderColor: appColors.mainColor,
  };
  const {maxPrice, minPrice, numberOfRooms} = useSelector((state)=>state.publicVariablesSlice)

  const setRoomsValue = (mood)=>{
    if(mood === "increase"){
      dispatch(increaseNumberOfRooms())
    }else if (mood === "decrease"){
      dispatch(decreaseNumberOfRooms())
    }else{
      dispatch(setNumberOfRooms(mood))
      
      }
  }
  const setMinPriceVal = (mood)=>{
    if(mood === "increase"){
      dispatch(increaseMinPrice())
    }else if(mood === "decrease"){
      dispatch(decreaseMinPrice())
    }else{
      dispatch(setMinPrice(mood))
    }
  }
  const setMaxPriceVal = (mood)=>{
    if(mood === "increase"){
      dispatch(increaseMaxPrice())
    }else if(mood === "decrease"){
      dispatch(decreaseMaxPrice())
    }else{
      dispatch(setMaxPrice(mood))
    }
  }
  return (
    <Modal
      visible={visible}
      onDismiss={() => onDismiss(false)}
      contentContainerStyle={ModalStyle}
    >
      {/* DEFINE number and price */}
      <Text>لايزيد عدد غرف عن ٢٠</Text>
      <MinMaxPrice title={"عدد الغرف"}  setValue={setRoomsValue} uniqueValue={numberOfRooms}/>
      <MinMaxPrice title={"الحد الادنى"} setValue={setMinPriceVal} uniqueValue={minPrice}/>
      <MinMaxPrice title={"الحد الاقصى"} setValue={setMaxPriceVal} uniqueValue={maxPrice}/>
      <View className={`flex-row justify-center items-center my-4`}>
      <TouchableOpacity onPress={()=>dispatch(resetValues())} className={` bg-neutral-600 p-2 rounded-l-full w-36 flex items-center justify-center`}>
        <Text className={`text-whiteColor text-base font-rubikMedium`}>مسـح القيم</Text>
      </TouchableOpacity>
      <TouchableOpacity className={`bg-mainColor p-2 rounded-r-full w-36 flex items-center justify-center`}>
        <Text className={`text-whiteColor text-base font-rubikMedium`}>تطبيق</Text>
      </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default ModalFromPaper;


