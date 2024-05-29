import { TextInput } from "react-native"


const AuthForms = ({ placeholder, onChange, secure }) => {
    return (
        <TextInput
            className={`bg-whiteColor px-4 py-2 mb-3 border-[1px] border-solid border-gray300 rounded-full`}
            placeholder={placeholder}
            secureTextEntry={secure}
        />
    )
}

export default AuthForms