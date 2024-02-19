import { AiFillDashboard, AiFillPoundCircle, AiOutlineOrderedList } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

export const AdminNavs = [
    {
        name:"Dashboard",
        icon : <AiFillDashboard/>,
        link : "/admin",
    },
    {
        name:"Create Patient Credentials",
        icon : <AiFillDashboard/>,
        link : "/admin/create-patient-credentials",
    },
    {
        name:"Add Patient Health Data",
        icon : <AiOutlineOrderedList/>,
        link : "/admin/add-patient-h-data",
    },
    {
        name:"Create Doctor Credentials",
        icon : <AiFillPoundCircle/>,
        link : "/admin/create-doctor-credentials",
    }
   
]

export const DoctorNavs = [
    {
        name:"Dashboard",
        icon : <AiFillDashboard/>,
        link : "/doctor",
    },
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
    }
]