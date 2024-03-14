import React from 'react'
import { FaChartLine } from "react-icons/fa6";
import Heading from '../../UI/Heading';

const Dashboard = () => {
  return (
    <>
   <Heading icon={<FaChartLine style={{fontSize:"25px"}}/>} title={"Dashboard"}/>
    </>
  )
}

export default Dashboard