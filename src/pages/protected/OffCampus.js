import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import OffCampus from '../../features/Feedback copy'


function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "OFF Campus" }))
      }, [])


    return(
        <OffCampus/>
    )
}

export default InternalPage