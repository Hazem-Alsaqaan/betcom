import {
  Keyboard,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import { useState } from "react";
import EnterUnitAdress from "../components/enter.unit.information/EnterUnitAdress";
import EnterUnitDetails from "../components/enter.unit.information/EnterUnitDetails";
import EnterUnitPrice from "../components/enter.unit.information/EnterUnitPrice";
import EnterUnitConditions from "../components/enter.unit.information/EnterUnitConditions";
import EnterUnitDescription from "../components/enter.unit.information/EnterUnitDescription";
import EnterUnitLocation from "../components/enter.unit.information/EnterUnitLocation";
import EnterUnitImages from "../components/enter.unit.information/EnterUnitImages";
import EnterUnitType from "../components/enter.unit.information/EnterUnitType";

const EnterYourUnitsData = () => {
  const [unitInfo, setUnitInfo] = useState({
    images: [],
    contractImage: [],
    name: "",
    city: "",
    street: "",
    house_num: "",
    code: "",
    conditions: "",
    rooms: 0,
    persons: 0,
    children: 0,
    beds: "",
    bathrooms: "",
    apartment_area: "",
    description: "",
    price: 0,
    about: "",
    lat: 0,
    long: 0,
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDU1MGZhNzk0MWNkNWM2MzFlM2M3MDQiLCJpYXQiOjE3MjM3MjE3Nzl9.cFJMy0jqtDf0PFEf8KvsmNr69Mh0gGgywxKdRL0Rsy0",
  });
  return (
    <ScrollView
      className={`flex-1 px-4 bg-white`}
      //   onTouchStart={Keyboard.dismiss}
      keyboardShouldPersistTaps="handled"
    >
      <EnterUnitAdress
        componentInfo={{ title: "العنوان", num: 1 }}
        unitInfo={unitInfo}
        setUnitInfo={setUnitInfo}
      />
      <EnterUnitDetails
        componentInfo={{ title: "تفاصيل الوحدة", num: 2 }}
        unitInfo={unitInfo}
        setUnitInfo={setUnitInfo}
      />
      <EnterUnitPrice
        componentInfo={{ title: "السعر", num: 3 }}
        unitInfo={unitInfo}
        setUnitInfo={setUnitInfo}
      />
      <EnterUnitType
        componentInfo={{ title: "حدد نوع الوحدة", num: 4 }}
        unitInfo={unitInfo}
        setUnitInfo={setUnitInfo}
      />
      <EnterUnitConditions
        componentInfo={{ title: "الشروط", num: 5 }}
        unitInfo={unitInfo}
        setUnitInfo={setUnitInfo}
      />
      <EnterUnitDescription
        componentInfo={{ title: "وصف الوحدة", num: 6 }}
        unitInfo={unitInfo}
        setUnitInfo={setUnitInfo}
      />
      <EnterUnitLocation
        componentInfo={{ title: "حدد موقع الوحدة", num: 7 }}
        unitInfo={unitInfo}
        setUnitInfo={setUnitInfo}
      />
      <EnterUnitImages
        componentInfo={{ title: "حدد الصورة الأولى للوحدة" }}
        unitInfo={unitInfo}
        setUnitInfo={setUnitInfo}
      />
      <EnterUnitImages
        componentInfo={{ title: "حدد الصورة الثانية للوحدة" }}
        unitInfo={unitInfo}
        setUnitInfo={setUnitInfo}
      />
      <EnterUnitImages
        componentInfo={{ title: "حدد الصورة الثالثة للوحدة" }}
        unitInfo={unitInfo}
        setUnitInfo={setUnitInfo}
      />
      <EnterUnitImages
        componentInfo={{ title: "حدد الصورة الرابعة للوحدة" }}
        unitInfo={unitInfo}
        setUnitInfo={setUnitInfo}
      />
      <View className={`flex items-center justify-center`}>
        <TouchableOpacity
          className={`bg-mainColor p-3 rounded-md flex items-center justify-center my-10 w-52 shadow-md shadow-black`}
          onPress={() => console.log(unitInfo)}
        >
          <Text className={`text-white  text-2xl font-rubikSemiBold`}>
            ادفع الآن
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EnterYourUnitsData;
