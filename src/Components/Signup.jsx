import React from "react";
import {Link} from "react-router-dom"
import "../index.css"

function Signup(){
  return (
    <div className="w-full
            lg:flex lg:h-screen lg:bg-[#38329E]">
        <div className="w-full bg-white p-4
                            lg:w-1/2 lg:bg-white lg:p-10">
        <span className="bg-gray-100  text-sm p-2 text-blue-500 rounded-lg">E241</span>
            <h2 className="text-2xl font-bold mb-5 mt-10">Créer un compte</h2>
            <span className="text-gray-400 ">Ce n'est difficile, il suffit de saisir quelques données</span>
            <form action="">

                <div className="gap-2 flex py-2 flex-col">
                    <label for="name" className="block ">Nom complet</label>
                    <div className="flex gap-5">
                        <input type="text" id="name" className="w-1/2 border border-gray-300 p-2 rounded-md" placeholder="Nom"/>
                        <input type="text" id="name" className="w-1/2 border border-gray-300 p-2 rounded-md" placeholder="Prenom"/>
                    </div>
                 
                </div>

                <div className="mb-5">
                    <label for="email" className="block mb-2">Email</label>
                    <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded-md" placeholder="Votre email"/>
                </div>

                <div class="mb-5">
                    <label for="password" className="block mb-2">Mot de passe</label>
                    <input type="password" id="password" className="w-full border border-gray-300 p-2 rounded-md" placeholder="............."/>
                </div>
                <p className="py-2 text-gray-500">En vous inscrivant, vous accepter les conditions d'utilisation et la <br /> politique de confidentialité de </p>

                <Link to="/"><button className="w-full bg-blue-600 text-white p-2 rounded-md">S'inscrire</button></Link>
                <span className="flex gap-3 py-2 mx-10 text-gray-500">Vous avez déjà un compte ? <Link to="/" className="text-blue-600">Connectez-vous</Link></span>
            </form>
        </div>
        <div className=" w-1/2 bg-[#38329E]  p-24 text-white flex flex-col justify-end div-img-2
                        lg:w-1/2  lg:bg-[#38329E] lg:p-24 lg:text-white lg:flex lg:flex-col lg:justify-end lg:div-img-2">
            <h2 className="text-3xl font-bold mb-5">Ecole241 Business</h2>
            <p>Etudier en ligne devient plus facile <br /> Vous pouvez toujours étudier avec École 241 Business</p>
        </div>
    </div>
  )
}
export default Signup;
