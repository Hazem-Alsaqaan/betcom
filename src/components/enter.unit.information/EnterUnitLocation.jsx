import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

const EnterUnitLocation = ({ componentInfo, unitInfo, setUnitInfo }) => {
  const [defaultMarkerLocation, setDefaultMarkerLocation] = useState({
    latitude: 31.03408,
    longitude: 30.46823,
  });
  const [userLocation, setUserLocation] = useState(null);
  const [errorUserLocation, setErrorUserLocation] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorUserLocation("Permission to access location was denied");
        return;
      }
      let location = Location.getCurrentPositionAsync({});
      setUserLocation(location);
    })();
  }, []);
  return (
    <View className={`my-3`}>
      <View className={` p-2 flex flex-row items-center justify-end`}>
        <Text className={`font-rubikBold text-mainColor`}>
          {componentInfo.title}
        </Text>
        <Text className={`mx-1 text-mainColor`}>({componentInfo.num})</Text>
      </View>
      <MapView
        className={`w-full h-96`}
        region={{
          latitude: defaultMarkerLocation.latitude,
          longitude: defaultMarkerLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        loadingEnabled={true}
        showsUserLocation={true}
        // provider="google"
        mapType="standard"
        cameraZoomRange={{ minCenterCoordinateDistance: 12 }}
        zoomControlEnabled={true}
        followsUserLocation={true}
      >
        <Marker
          coordinate={{
            latitude: defaultMarkerLocation.latitude,
            longitude: defaultMarkerLocation.longitude,
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
