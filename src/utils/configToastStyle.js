
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { appColors } from "../themes/colors";

export const toastConfig = {
    success: (props) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: 'pink' }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 15,
                fontWeight: '400'
            }}
        />
    ),

    error: (props) => (
        <ErrorToast
            {...props}
            style={{ backgroundColor: appColors.lightColor }}
            text1Style={{
                fontSize: 17,
                color: appColors.mainColor
            }}
            text2Style={{
                fontSize: 15,
                color: appColors.gray600
            }}
        />
    ),
    tomatoToast: ({ text1, props }) => (
        <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
            <Text>{text1}</Text>
            <Text>{props.uuid}</Text>
        </View>
    )
};