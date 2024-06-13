import { useDispatch, useSelector } from "react-redux"
import SingleCard from "./SingleCard"
import { useEffect } from "react"
import { getAllUnits } from "../redux/actions/UnitsActions"
import { ScrollView, Text, View } from "react-native"
import Pagination from "./Pagination"
import LoadingData from "./LoadingData"
// import { ProgressBar } from 'react-native-paper';
// import { appColors } from "../themes/colors"


const ShowUnitsOnPagination =()=>{
    const dispatch = useDispatch()
    const {token} = useSelector((state)=> state.AuthSlice)
    const {activePage} = useSelector((state)=>state.publicVariablesSlice)
    const {allUnits, allUnitsLoading} = useSelector((state)=>state.UnitsSlice)


    useEffect(()=>{
        dispatch(getAllUnits({token: token, page: activePage}))
    },[activePage])
    return(
        <>
        <Pagination />
        {allUnitsLoading ?
        <LoadingData/>
        :
        allUnits.length > 0 ? 
        <ScrollView className={`flex-1 w-full`} showsVerticalScrollIndicator={false}>
        {allUnits.map((item)=>(
            <SingleCard key={item._id} item={item}/>
            ))}
        </ScrollView>
        :
        <View className={`w-full flex-1 items-center justify-center py-10`}>
            <Text className={`font-rubikMedium text-xl`}>لا يوجد مزيد من النتائج ...</Text>
        </View>
            } 
        </>
    )
}

export default ShowUnitsOnPagination