import {Routes, Route, BrowserRouter} from "react-router-dom"
import Connexion from './Components/Connexion';
import Compte from './Components/Compte';
import Mtp from './Components/Mtp'
import Renitialisation from './Components/Renitialisation'
function App(){
  return(
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Connexion />}/>
          <Route path='/Compte'element={<Compte/>}/>
          <Route path='/Mtp'element={<Mtp/>}/>
          <Route path='/Renitialisation'element={<Renitialisation/>}/>
        </Routes>
      </BrowserRouter>
    </Layout>
   
  )
}

export default App;
