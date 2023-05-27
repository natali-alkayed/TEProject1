import React from 'react';
import AgeHome from './Components/AgeHome';
import Cardds from './Components/Cardds';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
   <>
   <AgeHome/>
   <Routes>
        <Route path="/allagenttickets" element={<AgeHome />} />
        <Route path="/allcustomerstickets" element={<allCustomersTickets />} />
        <Route path="/sortagticketbystatus" element={<sortByStatus />} />
        <Route path="/sortagticketbydepartment" element={<sortByDepartment />} />
        <Route path="/sortagticketbypriority" element={<sortbyPriority />} />
        <Route path="/searchbyemail" element={<searchByEmail />} />
        
      </Routes>
  {/* <Cardds/> */}
   </>
  )
}