import React from "react";
import { Link } from "react-router-dom"
import "../index.css"
// import { useState } from 'react';

 function Login(){

    const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    const email = formData.get("email");

    const password = formData.get("password");
    form.reset();

    alert(`Email: ${email} Password: ${password}`);
    
};

  return (
    <div className="w-full
                lg:flex lg:h-screen lg:bg-purple-700">
        <div className="w-full bg-white p-4 
                    lg:w-1/2 lg:bg-white lg:p-10">

            <span className="bg-gray-100 text-sm p-2 text-blue-500 rounded-lg ">E241</span>
            <h2 className="text-2xl font-bold mb-5 mt-20">Connexion</h2>

            <form onSubmit={handleSubmit}>

                <div className="mb-5">
                    <label className="block mb-2">Email</label>
                    <input name="email" type="email" id="email" className="w-full border border-gray-300 p-2 rounded-md" placeholder="Votre email"/>
                </div>

                <div className="mb-5">
                    <div className="flex justify-between items-center">
                        <span>Mot de passe</span>
                        <span className="text-blue-600"><Link to="/ForgotPassword">Mot de passe oublié ?</Link></span>
                    </div>
                    <input name="password" type="password" id="password" className="w-full border border-gray-300 p-2 rounded-md" placeholder="Votre mot de passe"/>
                </div>

                <div className="mb-5">
                    <input type="checkbox" id="remember"/>
                    <label for="remember" className="ml-2">Se souvenir de moi</label>
                </div>

                <button type="submit" className="w-full bg-blue-600  text-center text-white p-2 rounded-md">Connexion</button>
            </form>

            <span className="flex justify-between mt-8">Vous n'avez pâs un compte ? <Link to="/Signup" className="text-blue-600">Créez un c'est gratuit !</Link></span>
        </div>
        
        <div className="hidden  w-1/2 bg-[#38329E] p-24 text-white flex flex-col justify-end div-img-1
                            lg:w-1/2 lg:bg-[#38329E] lg:p-24 lg:text-white lg:flex lg:flex-col lg:justify-end lg:div-img-1">
            <h2 class="text-gray-400">ECOLE241.BUSINESS</h2>
            <p className="text-2xl font-semibold"> Etudier en ligne devient plus facile - <br/> Vous pouvez toujours étudier avec Ecole <br /> 241 Business</p>
        </div>
    </div>

  )
}

export default Login;


  
