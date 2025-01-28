import Fontisto from "@expo/vector-icons/Fontisto";
import { TouchableOpacity, Text } from "react-native";

const ShowPaperModal = ({ title, showModalHandler }) => {
  return (
    <TouchableOpacity
      onPress={() => showModalHandler(true)}
      className={`w-full flex-row items-center bg-lightColor rounded-lg px-4 py-2 mb-8`}
    >
      <Fontisto
        name="equalizer"
        size={24}
        color="black"
        style={{ transform: [{ rotate: "90deg" }] }}
      />
      <Text className={`flex-1 font-rubikMedium text-center`}>{title}</Text>
    </TouchableOpacity>
  );
};
export default ShowPaperModal;
