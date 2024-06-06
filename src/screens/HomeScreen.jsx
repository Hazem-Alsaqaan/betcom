import { ScrollView, View } from "react-native";
import ShowPaperModal from "../components/ShowPaperModale";
import { useState } from "react";
import ModalFromPaper from "../components/ModalFromPaper";

const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View className={`flex-1 items-center bg-whiteColor px-4`}>
      <ScrollView className={`flex-1 w-full`}>
        <ShowPaperModal
          title={"حدد عدد الغرف"}
          showModalHandler={setShowModal}
        />
      </ScrollView>
      <ModalFromPaper visible={showModal} onDismiss={setShowModal} />
    </View>
  );
};

export default HomeScreen;
