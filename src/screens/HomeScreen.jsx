import { ScrollView, Text, View } from "react-native";
import ShowPaperModal from "../components/ShowPaperModale";
import { useState } from "react";
import ModalFromPaper from "../components/ModalFromPaper";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const { english } = useSelector((state) => state.publicVariablesSlice)
  const [showModal, setShowModal] = useState(false);
  return (
    <View className={`flex-1 items-center bg-whiteColor px-4`}>
      <ScrollView className={`flex-1 w-full`}>
        <View className={`flex items-center p-4`}>
          <Text className={`text-mainColor font-rubikMedium text-xl`}>{ english ? "betcom" : "بيتكم"}</Text>
        </View>
        <ShowPaperModal
          title={english ? "Choose And Price Number Of Rooms" : "حدد السعر وعدد الغرف"}
          showModalHandler={setShowModal}
        />
      </ScrollView>
      <ModalFromPaper visible={showModal} onDismiss={setShowModal} />
    </View>
  );
};

export default HomeScreen;
