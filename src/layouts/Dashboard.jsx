import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";

export default function Dashboard() {
    return (
        <div className="relative min-h-screen md:flex">

            {/* Sidebar */}
            <Sidebar/>



            {/* Outlet */}

            <div className="flex-1 md:ml-64">
                <div className="p-5">
                    <Outlet />
                </div>
            </div>

        </div>
    )
}