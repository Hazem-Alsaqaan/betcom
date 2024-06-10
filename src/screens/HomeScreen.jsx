import {  Text, View } from "react-native";
import ShowPaperModal from "../components/ShowPaperModale";
import { useState } from "react";
import ModalFromPaper from "../components/ModalFromPaper";
import { useSelector } from "react-redux";
import ShowUnitsOnPagination from "../components/ShowUnitsOnPagination";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { english } = useSelector((state) => state.publicVariablesSlice)
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView className={`flex-1 items-center bg-whiteColor px-4`}>
        <View className={`flex items-center p-4`}>
          <Text className={`text-mainColor font-rubikMedium text-xl`}>{ english ? "betcom" : "بيتكم"}</Text>
        </View>
        <ShowPaperModal
          title={english ? "Choose And Price Number Of Rooms" : "حدد السعر وعدد الغرف"}
          showModalHandler={setShowModal}
        />
      <ShowUnitsOnPagination/>
      <ModalFromPaper visible={showModal} onDismiss={setShowModal} />
    </SafeAreaView>
  );
};

export default HomeScreen;
