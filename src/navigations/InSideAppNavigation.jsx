import { useSelector } from "react-redux"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screens/HomeScreen.jsx"
import BookingScreen from "../screens/BookingScreen"
import FavouriteScreen from "../screens/FavouriteScreen"
import ProfileScreen from "../screens/ProfileScreen"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { appColors } from "../themes/colors.js"
import { Text } from "react-native"
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


const ButtomTab = createBottomTabNavigator()

const InSideAppNavigation = () => {
    const { english } = useSelector((state) => state.publicVariablesSlice)
    return (
        <ButtomTab.Navigator screenOptions={{ tabBarStyle: { height: 65, paddingBottom: 10, paddingHorizontal: 5 } }}>
            <ButtomTab.Screen name="home" component={HomeScreen} options={{
                // headerTitle: english ? "betcom" : "بيتكم",
                // headerTitleAlign: "center",
                // headerTitleStyle: { fontWeight: "bold", color: appColors.mainColor },
                headerShown: false,
                tabBarLabel: ({ focused }) => <Text className={`font-bold ${focused ? "text-mainColor" : "text-gray400"}`}>{english ? "home" : "الصفحة الرئيسية"}</Text>,
                tabBarIcon: ({ focused }) => <FontAwesome name="home" size={24} color={focused ? appColors.mainColor : appColors.gray300} />
            }} />
            <ButtomTab.Screen name="booking" component={BookingScreen} options={{ 
                headerTitle: english ? "booking" : "حجوزاتي", 
                headerTitleAlign: "center", 
                headerTitleStyle: { fontWeight: "bold", color: appColors.mainColor }, 
                tabBarLabel: ({ focused }) => <Text className={`font-bold ${focused ? "text-mainColor" : "text-gray400"}`}>{english ? "booking" : "حجوزاتي"}</Text>,
                tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="bookmark-multiple" size={24} color={focused ? appColors.mainColor : appColors.gray300} />
            }} />
            <ButtomTab.Screen name="favourite" component={FavouriteScreen} options={{ 
                headerTitle: english ? "favourite" : "مفضلتي", 
                headerTitleAlign: "center", 
                headerTitleStyle: { fontWeight: "bold", color: appColors.mainColor }, 
                tabBarLabel: ({ focused }) => <Text className={`font-bold ${focused ? "text-mainColor" : "text-gray400"}`}>{english ? "favourite" : "مفضلتي"}</Text>,
                tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="cards-heart-outline" size={24} color={focused ? appColors.mainColor : appColors.gray300} />
                }} />
            <ButtomTab.Screen name="profile" component={ProfileScreen} options={{ 
                headerTitle: english ? "profile" : "الحساب", 
                headerTitleAlign: "center", 
                headerTitleStyle: { fontWeight: "bold", color: appColors.mainColor }, 
                tabBarLabel: ({ focused }) => <Text className={`font-bold ${focused ? "text-mainColor" : "text-gray400"}`}>{english ? "profile" : "الحساب"}</Text>,
                tabBarIcon: ({ focused }) => <FontAwesome6 name="circle-user" size={24} color={focused ? appColors.mainColor : appColors.gray300} />
                }} />
        </ButtomTab.Navigator>
    )
}
export default InSideAppNavigation