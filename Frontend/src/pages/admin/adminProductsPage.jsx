import { FaFolderPlus } from "react-icons/fa6";


export default function AdminProductsPage(){
    return(
        <div className="w-full h-full">
            Admin Product Page
            <button className=" bg-accent w-[100px] h-[100px] rounded-full text-4xl flex justify-center items-center fixed bottom-4 right-4 hover:bg-white hover:text-accent">
                  <FaFolderPlus />
            </button>
        </div>
    )
}