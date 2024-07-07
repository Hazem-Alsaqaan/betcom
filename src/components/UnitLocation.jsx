import { Text, View } from "react-native"
import { useSelector } from "react-redux"
import MapView, { Marker } from 'react-native-maps';
import LoadingData from "./LoadingData";


const UnitLocation = () => {
    const { specificUnit, specificUnitLoading } = useSelector((state) => state.UnitsSlice)

    return (
        <View className={`flex-1 px-4`}>
            <Text>UnitLocation</Text>
            {specificUnitLoading ? <LoadingData /> :
                <>
                    <Text>{specificUnit?.city}</Text>
                    <MapView className={`w-full h-full`}
                        region={{
                            latitude: specificUnit?.location.coordinates[0],
                            longitude: specificUnit?.location.coordinates[1],
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
                        mapType="standard"
                        loadingEnabled={true}
                    >
                        <Marker coordinate={{
                            latitude: specificUnit?.location.coordinates[0],
                            longitude: specificUnit?.location.coordinates[1]
                        }}
                        />
                    </MapView>
                </>
            }
        </View>
    )
}
export default UnitLocation