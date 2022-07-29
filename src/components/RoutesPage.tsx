import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "./mainContent/home/Home";
import {About} from "./mainContent/about/About";
import {Work} from "./mainContent/work/Work";
import {Contacts} from "./mainContent/contacts/Contacts";
import {ErrorPage} from "./secondary/ErrorPage";

export const RoutesPage:FC =()=> {
  return(
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  )
}