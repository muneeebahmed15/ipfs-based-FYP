import axios from "axios";
import { useEffect, useState } from "react"
import { _AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";


export const LoadData = (url)=>{
    const [auth] = _AuthContext();
    const authToken = auth && auth?.token;

   const [loading, setLoading] = useState(false);
   const [list, setList] = useState([]);


   const loadPatients = async ()=>{
    setLoading(true);
   try {
    const res = await axios.get(url);
    // console.log(res);
    setList(res.data);
   } catch (error) {
    console.log(error)
   }finally{
    setLoading(false);
   }
}

useEffect(()=>{
    if(authToken){
        loadPatients();
    }
},[authToken])


   return {loading, list}
}

export const LoadSinglePatient = (id) =>{
    const [auth] = _AuthContext();
    const authToken = auth && auth?.token;

   const [loading, setLoading] = useState(false);
   const [list, setList ] = useState([]);

   const loadPatient = async () =>{
        setLoading(true);
        try {
            const res = await axios.get(`patient/get-single-patient/${id}`)
            setList(res.data);
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false);
        }
   }

   useEffect(()=>{
    if(authToken){
        loadPatient();
    }
   },[authToken])
   
   return{loading, list }
}

export const SearchByCNIC = (cnic) =>{
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState();

    const search = async() =>{
        setLoading(true);
        try {
            const res = await axios.get(`patient/get-patient-by-cnic/${cnic}`);
        //    console.log(res);
            setList(res.data)
        } catch (error) {
            if(error.response.status === 404)

            {toast.error("Patient not found")} 

            else{ toast.error("Server Error")}

        }finally{ setLoading(false); }}

    return {search, list, loading}
}

// export const CurrentUser = () =>{
//     const [data, setData] = useState({});
//     const {auth} = _AuthContext();
//     const authToken = auth && auth?.token;

//     const current = async() =>{

//        try {

//         const res = await axios.get("doctor/current")
//         console.log(res,"api response");
//         setData(res);

//        } catch (error) {

//         console.log(error);

//        }
//     }

//     useEffect(()=>{
//         if(authToken){
//             current();
//         }
//     },[authToken])

//     return {data};
// }

export const MyPatient = () =>{
    const [auth] = _AuthContext();
    const authToken = auth && auth?.token;

    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);

    const Patients = async()=>{
        setLoading(true);
        try {

            const res = await axios.get("patient/get-all-health-record");
            console.log(res);
            setList(res.data);

        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(authToken)
        { Patients();}
    },[authToken])

    return {list, loading}
}