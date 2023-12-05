import { AiFillDashboard, AiFillPoundCircle, AiOutlineMenu, AiOutlineOrderedList } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

export const sidenavs = [
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
        link : "/admin/adding-patient-h-data",
    },
    {
        name:"Create Doctor Credentials",
        icon : <AiFillPoundCircle/>,
        link : "/admin/creating-doctor-credentials",
    },
    {
        name:"Logout",
        icon : <BiLogOut/>, className:"mt-5"
    },
]