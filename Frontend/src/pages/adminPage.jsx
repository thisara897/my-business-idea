import { Link, Route, Routes } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FiInbox } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";



export default function AdminPage(){
    return(
        <div className="w-full h-full flex">
            <div className="w-[300px] h-full bg-white flex flex-col shadow-2xl ">
                <div className="w-full h-[20px] bg-red-50 flex justify-center items-center p-4">
                    <img src="/logo.jpg" alt="logo" className=" border-none rounded-full h-10" />
                </div>
                <Link to = "/admin" className="w-full p-4 text-xl text-secondary flex items-center gap-4">
                    <FiShoppingCart />
                    <span  className="w-full h-full block">Orders</span>
                </Link>
                <Link to = "/admin/products" className="w-full p-4 text-xl text-secondary flex items-center gap-4">
                    <FiInbox />
                    <span  className="w-full h-full block">Products</span>
                </Link>
                <Link to = "/admin/users" className="w-full p-4 text-xl text-secondary flex items-center gap-4">
                    <FaRegUser />
                    <span  className="w-full h-full block">Users</span>
                </Link>
            </div>

            <div className="w-[calc(100%-300px)] h-full p-4 bg-(--color-primary)">
                <Routes>
                    <Route path="/" element={<h1>Orders Page</h1>}/>
                    <Route path="/products" element={<h1>Products Page</h1>}/>
                    <Route path="/users" element={<h1>Users Page</h1>}/>
                </Routes>
            </div>
        </div>
    )
}