import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

// page disetting 1, tapi waktu fetch bisa lebih dari page 2 yang mengakibatkan network error karena api hanya menyediakan 2 page
const jobs = async ({ description = '', location = '', full_time = false, page = 1 }) => {
    const data = await axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${description}&location=${location}&page=${page}&full_time=${full_time}`)
    return data?.data
    

}



const jobById = async ({ id }) => {
    const data = await axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`)
    return data?.data

}

// export const getDetailData = (id) => {
//     return axios
//       .get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`)
//       .then((response) => response.data)
//       .catch((err) => err)
//   }

export const getJobs = createAsyncThunk('job/getJobs', jobs)
export const searchJobs = createAsyncThunk('job/searchJobs', jobs)
export const getJobById = createAsyncThunk('job/getJobById', jobById)

