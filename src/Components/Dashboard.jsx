import React from "react" ;
import { Link } from "react-router-dom"
import {BsBoxArrowInRight} from "react-icons/bs"
// import{FaCarRear} from "react-icons/fa"
// import {TbSquareLetterB} from "react-icons/tb"

 function Dashboard(){

    return(
   <>
        <div class="flex h-screen bg-white
                    lg:flex lg:h-screen lg:bg-white">
            <div class="w-1/2 bg-black text-white p-4 
            lg:w-1/4 lg:bg-black lg:text-white lg:p-10">
            
                <h2 class="text-2xl font-bold mb-5">Dashboard</h2>
                <ul className="">
                    {/* <li> <FaCarRear/> Vehicles</li>
                    <li> <TbSquareLetterB/> Reservations</li> */}
                    <li>Vehicules</li>
                    <li>Reservations</li>
                    <li>Restaurations</li>

                </ul>
                <div className="pt-[26em]">
                    <Link to="/"><button className="bg-gray-400 flex items-center gap-6 px-4 rounded-lg p-2"> <BsBoxArrowInRight/>
                        Deconnexion</button></Link>
                </div>
            </div>
            
            <div class="w-3/4 bg-white flex justify-between  gap-4 text-gray-700 p-10 text-white
                        lg:w-3/4 lg:bg-white  lg:flex lg:justify-between  lg:gap-4 lg:text-gray-700 lg:p-10 lg:text-white">
                <input type="text" class=" h-10 lg:w-full  lg:h-[40px] border border-gray-300 p-2 rounded-md mb-5" placeholder="Rechercher ici"/>
                <p>gabinmoudziegou@gmail.com</p>
            </div>
        </div>
   </>
    )
}
export default Dashboard;