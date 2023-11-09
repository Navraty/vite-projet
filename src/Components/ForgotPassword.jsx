import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

 function ForgotPassword(){
  return (
    <div class="flex h-screen bg-purple-700">
        <div class="w-1/2 bg-white p-10">
            <span className="bg-gray-100 text-sm p-2 text-blue-500 rounded-lg">E241</span>
            <h2 class="text-2xl font-bold mb-5 mt-20">Mot de passe oublié</h2>
            <p className="text-gray-300">Saisissez votre email pour récupérer votre mot de passe, <br />
            vous allez revecevoir une email confirmer la demande de <br /> réinitialisation</p>
            <form action="">
                
                <div class="mb-5">
                    <label for="email" class="block mb-2">Email</label>
                    <input type="email" id="email" class="w-full border border-gray-300 p-2 rounded-md" placeholder="stellatsamezo@gmail.com"/>
                </div>

                <Link to="/ResetPassword"><button type="submit" class="w-full bg-blue-600 text-white p-2 rounded-md">Confirmer</button></Link>
            </form>
            <span className="flex gap-3 mt-8 mx-10">Je me souviens de mon de passe ? <Link to="/" className="text-blue-600">Connexion</Link></span>
        </div>

        <div class="w-1/2  bg-[#38329E]  p-24 text-white flex flex-col justify-end div-img-4">
            <h2 class="text-3xl font-bold mb-5">Ecole241 Business</h2>
            <p> Etudier en ligne devient plus facile <br /> Vous pouvez toujours étudier avec Ecole241 Business</p>
        </div>
    </div>
  )
}
export default ForgotPassword;