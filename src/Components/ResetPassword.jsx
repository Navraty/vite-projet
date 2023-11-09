import React from "react";
import { Link } from "react-router-dom"
import "../index.css"

function ResetPassword(){
  return (
    <div class="flex h-screen bg-purple-700">
        <div class="w-1/2 bg-white p-10">
        <span className="bg-gray-100 text-sm p-2 text-blue-500 rounded-lg">E241</span>
            <h2 class="text-2xl font-bold mb-5 mt-20">Réinitialisation de mot de passe </h2>
            <p className="text-gray-300 py-4">N'utiliser pas de mot de passe difficile à utiliser, ce serait <br /> un problème pour les gens.
            </p>
            <form action="">
                <div class="mb-5">
                    <label for="password" class="block mb-2"> Nouveau mot de passe</label>
                    <input type="password" id="password" class="w-full border border-gray-300 p-2 rounded-md" placeholder="....................."/>
                </div>

                <div class="mb-5">
                    <label for="password" class="block mb-2">Ressaisissez le nouveau mot de passe</label>
                    <input type="password" id="password" class="w-full border border-gray-300 p-2 rounded-md" placeholder="....................."/>
                </div>
                
                <Link to="/"><button class="w-full bg-blue-600 text-white p-2 rounded-md">Confirmer la renitialisation</button></Link>
            </form>

        </div>

    <div class="w-1/2  bg-[#38329E]  p-24 text-white flex flex-col justify-end div-img-3">
        <h2 class="text-3xl font-bold mb-5">Ecole241 Business</h2>
        <p>Etudier en ligne devient plus facile <br /> Vous pouvez toujours étudier avec Ecole241 Business</p>
    </div>
</div>
  )
}
export default ResetPassword;