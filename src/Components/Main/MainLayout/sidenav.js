import { AiFillDashboard, AiFillPoundCircle, AiOutlineOrderedList } from "react-icons/ai";


export const AdminNavs = [
    // {
    //     name:"Dashboard",
    //     icon : <AiFillDashboard/>,
    //     link : "/admin/dashboard",
    // },
    {
        name:"Create Patient",
        icon : <AiFillDashboard/>,
        link : "/admin/create-patient",
    },
    {
        name:"Add Patient Health Data",
        icon : <AiOutlineOrderedList/>,
        link : "/admin/add-patient-data",
    },
    {
        name:"Add Doctor",
        icon : <AiFillPoundCircle/>,
        link : "/admin/create-doctor",
    },
    {
        name:"View All Patients",
        icon : <AiFillPoundCircle/>,
        link : "/admin/view-all-patients",
    },
    {
        name:"View All Doctors",
        icon : <AiFillPoundCircle/>,
        link : "/admin/view-all-doctors",
    },
    {
        name:"Search",
        icon : <AiFillDashboard/>,
        link : "/admin/search",
    }
   
]

export const DoctorNavs = [
   
    {
        name:"All Patients",
        icon : <AiFillDashboard/>,
        link : "/doctor/all-patients",
    },
    {
        name:"Search Patient",
        icon : <AiOutlineOrderedList/>,
        link : "/doctor/search-patients",
    },
    {
        name:"My Patients",
        icon : <AiFillPoundCircle/>,
        link : "/doctor/my-patients",
    },
    
]