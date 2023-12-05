import { AiFillDashboard, AiFillPoundCircle, AiOutlineMenu, AiOutlineOrderedList } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

export const sidenavs = [
    {
        name:"Dashboard",
        icon : <AiFillDashboard/>,
        link : "/dashboard",
    },
    {
        name:"Products",
        icon : <AiOutlineOrderedList/>,
        link : "/admin/products",
    },
    {
        name:"Create Product",
        icon : <AiFillPoundCircle/>,
        link : "/admin/create-product",
    },
    {
        name:"Orders",
        icon : <AiOutlineMenu/>,
        link : "/admin/orders",
    },
    {
        name:"Logout",
        icon : <BiLogOut/>, className:"mt-5"
    },
]