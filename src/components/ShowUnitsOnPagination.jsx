import { useDispatch, useSelector } from "react-redux"
import SingleCard from "./SingleCard"
import { useEffect } from "react"
import { getAllUnits } from "../redux/actions/UnitsActions"
import { ScrollView, Text, View } from "react-native"
import { ProgressBar } from 'react-native-paper';
import { appColors } from "../themes/colors"
import Pagination from "./Pagination"


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
         <ScrollView className={`flex-1 w-full`} showsVerticalScrollIndicator={false}>
        {allUnitsLoading ?
        <View >
        <Text>Loading...</Text>
        <ProgressBar indeterminate color={appColors.mainColor} style={{backgroundColor: appColors.lightColor}}/>
        </View> 
        :
        allUnits.map((item)=>(
            <SingleCard key={item._id} item={item}/>
            ))
            }
        </ScrollView>
        </>
    )
}

export default ShowUnitsOnPagination