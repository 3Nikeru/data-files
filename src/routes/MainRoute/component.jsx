import { Routes, Route } from "react-router-dom";
import FolderOne from "../../components/FolderOne";
import FolderThree from "../../components/FolderThree";
import FolderTwo from "../../components/FolderTwo";
import MainFolder from "../../components/MainFolder/component";

const MainRoute = () =>{
    return (
        <Routes>
           <Route path="/data-files" element={<MainFolder/>}/>
           <Route path="/folder1" element={<FolderOne/>}/>
           <Route path="/folder2" element={<FolderTwo/>}/>
           <Route path="/folder3" element={<FolderThree/>}/>
         </Routes>
      )
 }
 
 export default MainRoute;