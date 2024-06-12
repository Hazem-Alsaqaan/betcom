import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SpecificUnitScreen from "../screens/SpecificUnitScreen"
import InSideAppNavigation from "./InSideAppNavigation"

const Stack = createNativeStackNavigator()
const UnitStack = createNativeStackNavigator()

const SpecificUnitStack = ()=>{
    return(
        <UnitStack.Navigator>
            <UnitStack.Screen name="specific-unit" component={SpecificUnitScreen}/>
        </UnitStack.Navigator>
    )
}


const StackWithUser = ()=>{
    return(
        <Stack.Navigator>
        <Stack.Screen name="root-tabs" component={InSideAppNavigation} options={{headerShown: false}}/>
        <Stack.Screen name="unit-stack" component={SpecificUnitStack}/>
        </Stack.Navigator>
    )
}
export default StackWithUser