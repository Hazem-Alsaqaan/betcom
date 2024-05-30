import { Text, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/reducers/publicVariablesSlice";

const ChangeLanguage = () => {
  const dispatch = useDispatch()
  const { english } = useSelector((state) => state.publicVariablesSlice)
  const changeLanguageHandler = () => {
    dispatch(setLanguage())
  }
  return (
    <TouchableOpacity onPress={() => changeLanguageHandler()} className={`flex-row items-center justify-center gap-0.5`}>
      <MaterialIcons name="language" size={24} color="#C2D2E3" />
      {<Text className={`text-gray400 text-base font-rubikSemiBold`}>{english ? "العربية" : "En"}</Text>}
    </TouchableOpacity>
  );
};
export default ChangeLanguage;
