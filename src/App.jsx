import React from 'react';
import AgeHome from './Components/AllAgentTickets/AgeHome';
import CustomerHome from './Components/ALLCustomersTkt/CustomerHome';
import sortByDepartment from './Components/Sorting/sortByDepartment';
import sortByStatus from './Components/Sorting/sortByStatus';
import sortByPriority from './Components/Sorting/sortByPriority';
import { Route, Routes } from 'react-router-dom';


export default function App() {
  return (
   <>
   <Routes>
        <Route path="/allagenttickets" element={<AgeHome />} />
        <Route path="/allcustomerstickets" element={<CustomerHome />} />
        <Route path="/sortagticketbystatus" element={<sortByStatus />} />
        <Route path="/sortagticketbydepartment" element={<sortByDepartment />} />
        <Route path="/sortagticketbypriority" element={<sortByPriority />} />
        <Route path="/searchbyemail" element={<searchByEmail />} />
        
      </Routes>
  {/* <Cardds/> */}
   </>
  )
}