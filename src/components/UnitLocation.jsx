import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import LoadingData from "./LoadingData";

const UnitLocation = () => {
  const { specificUnit, specificUnitLoading } = useSelector(
    (state) => state.UnitsSlice
  );

  return (
    <View className={`flex-1 px-4`}>
      {specificUnitLoading ? (
        <LoadingData />
      ) : (
        <View className={`p-10`}>
          <MapView
            className={`w-full h-full`}
            region={{
              latitude: specificUnit?.location.coordinates[0],
              longitude: specificUnit?.location.coordinates[1],
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            // provider={PROVIDER_GOOGLE}
            mapType="standard"
            loadingEnabled={true}
          >
            <Marker
              coordinate={{
                latitude: specificUnit?.location.coordinates[0],
                longitude: specificUnit?.location.coordinates[1],
              }}
            />
          </MapView>
        </View>
      )}
    </View>
  );
};
export default UnitLocation;
