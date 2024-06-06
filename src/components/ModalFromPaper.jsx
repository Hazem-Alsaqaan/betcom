import { Portal, Modal, Text } from "react-native-paper"
import { appColors } from "../themes/colors"

const ModalFromPaper = ({visible, onDismiss})=>{
    const ModalStyle = { backgroundColor: appColors.whiteColor, borderTopStartRadius: 28, borderTopRightRadius: 28, padding: 20, position:"absolute", bottom:0, left:0, width:"100%", height: "70%", display: "flex", alignItems: "center", justifyContent: "center",}
    return(
            // <Portal>
                <Modal visible={visible} onDismiss={()=>onDismiss(false)} contentContainerStyle={ModalStyle} >
                    <Text>Modal Content Is Avilible Now From React Native Paper</Text>
                </Modal>
            // </Portal>
    )
}
export default ModalFromPaper