import { TextInput } from "react-native"
import { useSelector } from "react-redux"


const AuthForms = ({ placeholder, setValue, secure, value }) => {
    const { english } = useSelector((state) => state.publicVariablesSlice)
    return (
        <TextInput
            className={`bg-whiteColor px-4 py-2 mx-3 my-1 border-[1px] border-solid border-gray300 rounded-full ${english ? "text-left" : "text-right"}`}
            placeholder={placeholder}
            secureTextEntry={secure}
            value={value}
            onChangeText={(e) => setValue(e)}
        />
    )
}

export default AuthForms