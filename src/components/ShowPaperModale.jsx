import { Button } from "react-native-paper";
import { appColors } from "../themes/colors";

const ShowPaperModal = ({ title, showModalHandler }) => {
  return (
    <Button
      onPress={() => showModalHandler(true)}
      icon={"arrow-down-drop-circle-outline"}
      mode="outlined"
      style={{ borderWidth: 0, borderRadius: 8, width: "100%", marginBottom: 10 }}
      contentStyle={{
        backgroundColor: appColors.lightColor,
        justifyContent: "space-between",
      }}
      textColor={appColors.gray400}
      labelStyle={{ fontWeight: "bold" }}
    >
      {title}
    </Button>
  );
};
export default ShowPaperModal;
