import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
// import * as Location from "expo-location";
// import { useEffect, useState } from "react";

const EnterUnitLocation = ({ componentInfo, unitInfo, setUnitInfo }) => {
  // const [defaultMarkerLocation, setDefaultMarkerLocation] = useState({
  //   latitude: 31.03408,
  //   longitude: 30.46823,
  // });
  // const [userLocation, setUserLocation] = useState(null);
  // const [errorUserLocation, setErrorUserLocation] = useState(null);
  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== "granted") {
  //       setErrorUserLocation("Permission to access location was denied");
  //       return;
  //     }
  //     let location = Location.getCurrentPositionAsync({});
  //     setUserLocation(location);
  //   })();
  // }, []);
  return (
    <View className={`w-full mt-5 px-5`}>
      <Text className={`font-rubikBold text-mainColor text-center`}>
        {componentInfo.title}
      </Text>
      <MapView
        className={`w-full h-96`}
        region={{
          latitude: 31.03408,
          longitude: 30.46823,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        loadingEnabled={true}
        showsUserLocation={true}
        // provider={PROVIDER_GOOGLE}
        mapType="standard"
        cameraZoomRange={{ minCenterCoordinateDistance: 12 }}
        zoomControlEnabled={true}
        followsUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: 31.03408,
            longitude: 30.46823,
          }}
          draggable={true}
          onDragEnd={(e) =>
            setUnitInfo({
              ...unitInfo,
              lat: e.nativeEvent.coordinate.latitude,
              long: e.nativeEvent.coordinate.longitude,
            })
          }
        />
      </MapView>
    </View>
  );
};

export default EnterUnitLocation;
