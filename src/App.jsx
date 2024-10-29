
import { Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import Home from './page/Home'
import CreateSupplier from './page/CreateSupplier'
import CreateItem from './page/CreateItem'

function App() {

  return (
    <>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/createsupplier' element={<CreateSupplier/>}/>
      <Route path='/createitem' element={<CreateItem/>}/>
     </Routes>
    </>
  )
}

export default App
