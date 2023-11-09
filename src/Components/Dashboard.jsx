import React from "react" ;

 function Dashboard(){

    return(
   <>
        <div class="flex h-screen bg-white">
            <div class="w-1/4 bg-black text-white p-10">
                <h2 class="text-2xl font-bold mb-5 hover:bg-purlple-700">Dashboard</h2>
                <ul>
                    <li>Vehicles</li>
                    <li>Reservations</li>
                </ul>
            </div>
            
            <div class="w-3/4 bg-white  flex justify-between  gap-4 text-gray-700 p-10 text-white">
                <input type="text" class="w-full  h-[40px] border border-gray-300 p-2 rounded-md mb-5" placeholder="Rechercher ici"/>
                <p>gabinmoudziegou@gmail.com</p>
            </div>
        </div>
   </>
    )
}
export default Dashboard;