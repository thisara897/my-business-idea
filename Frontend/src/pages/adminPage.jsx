import { Route, Routes } from "react-router-dom";

export default function AdminPage(){
    return(
        <div className="w-full h-full flex">
            <div className="w-[300px] h-full bg-white"></div>

            <div className="w-[calc(100%-300px)] h-full bg-amber-400">
                <Routes>
                    <Route path="/ element"/>
                </Routes>
            </div>
        </div>
    )
}