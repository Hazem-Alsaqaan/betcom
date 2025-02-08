import { TextInput } from "react-native";
import { useSelector } from "react-redux";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { appColors } from "../themes/colors";

const AuthForms = ({ placeholder, setValue, secure, value }) => {
  const { english } = useSelector((state) => state.publicVariablesSlice);
  const resetValue = useSharedValue("#C2D2E3");
  const defaultValue = useSharedValue("#C2D2E3");
  const changedValue = useSharedValue(appColors.mainColor);
  const animateStyle = useAnimatedStyle(() => ({
    borderColor: defaultValue.value,
    borderStyle: "solid",
    borderTopWidth: 1,
  }));
  const handleAnimate = (stateClicked) => {
    if (stateClicked === "focus") {
      defaultValue.value = withTiming(changedValue.value, {
        duration: 300,
        easing: Easing.bounce,
      });
    } else if (stateClicked === "blur") {
      defaultValue.value = withTiming(resetValue.value, {
        duration: 300,
        easing: Easing.bounce,
      });
    }
  };
  return (
    <Animated.View
      className={`bg-whiteColor px-4 py-2 mx-3 my-1 border-[1px] border-solid border-gray300 rounded-full relative`}
      style={animateStyle}
    >
      <TextInput
        className={`  ${english ? "text-left" : "text-right"}`}
        placeholder={placeholder}
        secureTextEntry={secure}
        value={value}
        onChangeText={setValue ? (e) => setValue(e.trim()) : null}
        onFocus={() => handleAnimate("focus")}
        onBlur={() => handleAnimate("blur")}
      />
    </Animated.View>
  );
};

export default AuthForms;
