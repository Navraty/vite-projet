import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

 function ForgotPassword(){
  return (
    <div class="w-full
                lg:flex lg:h-screen">

        <div class="w-full bg-white p-4
                    lg:w-1/2 lg:bg-white lg:p-10">

            <span className="bg-gray-100 text-sm p-2 text-blue-500 rounded-lg">E241</span>
            <h2 class="text-2xl font-bold mb-5 mt-20">Mot de passe oublié</h2>
            <p className="lg:text-gray-500 lg:py-4
                            text-gray-500 py-2 ">Saisissez votre email pour récupérer votre mot de passe, <br />
            vous allez revecevoir une email confirmer la demande de <br /> réinitialisation</p>
            <form action="">
                
                <div class="mb-5">
                    <label for="email" class="block mb-2 ">Email</label>
                    <input type="email" id="email" class="w-full border border-gray-300 p-3 rounded-md" placeholder="stellatsamezo@gmail.com"/>
                </div>

                <Link to="/ResetPassword"><button className="w-full bg-blue-600 text-white p-3 rounded-md">Confirmer</button></Link>
            </form>
            <span className=" lg:flex lg:gap-3 lg:mt-8 lg:mx-10 ">Je me souviens de mon de passe ? <Link to="/" className="text-blue-600">Connexion</Link></span>
        </div>

        <div class="hidden w-1/2 bg-[#38329E] p-24 text-white flex flex-col justify-end div-img-4
                    lg:w-1/2 lg:bg-[#38329E]  lg:p-24 lg:text-white lg:flex lg:flex-col lg:justify-end lg:div-img-4">
            <h2 class="text-3xl font-bold mb-5">Ecole241 Business</h2>
            <p> Etudier en ligne devient plus facile <br /> Vous pouvez toujours étudier avec Ecole241 Business</p>
        </div>
    </div>
  )
}
export default ForgotPassword;