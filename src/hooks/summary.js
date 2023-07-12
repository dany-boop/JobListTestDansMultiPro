import { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getJobs, searchJobs } from "../api/summary"
import { getJobList, getPage } from "../store/reducers/job"
import store from '../store/store'

export const useSummary = () => {
    const jobList = useSelector(getJobList)
    const page = useSelector(getPage)

    const [param, setParam] = useState({
        description: '',
        location: '',
        full_time: false,
        page: 1
    })

    const getJobLists = useCallback(() => {
        store.dispatch(getJobs({
            description: '',
            location: '',
            full_time: false,
            // potensi page error lebih dari 2 page
            page
        }))
            .unwrap()
            .then()
            .catch(e => alert(e.message))
    },
        [page])

    const search = useCallback(() => {
        const { description, location, full_time, page } = param
        store.dispatch(searchJobs({
            description,
            location,
            full_time,
            // potensi page error lebih dari 2 page
            page
        }))
            .unwrap()
            .then()
            .catch(e => alert(e.message))
    },
        [param])

    useEffect(() => {
        getJobLists()
    }, [getJobLists])

    const onChange = useCallback((e, name) => {
        const { value } = e.target
        if (name === 'full_time') {
            return setParam(current => ({ ...current, [name]: !param.full_time }))
        }
        else setParam(current => ({ ...current, [name]: value }))
    }, [param.full_time])

    const onClick = () => {
        search()
    }


    return { jobList, getJobLists, onChange, onClick }
}