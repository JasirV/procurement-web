
import { Route, Routes } from 'react-router-dom'
import Login from './page/Login'
import Home from './page/Home'
import CreateSupplier from './page/Supplier'
import CreateItem from './page/Item'
import History from './page/History'
import CreatePurchase from './page/CreatePurchase'
import { useState } from 'react'
import { useSelector } from 'react-redux'
function App() {
const{token}=useSelector((data)=>data.auth)
console.log(token)

  return (
    <> 
    {!token?(
      <>
      <Login/>
    </>
    ):(
      <>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/supplier' element={<CreateSupplier/>}/>
      <Route path='/item' element={<CreateItem/>}/> 
      <Route path='/history' element={<History/>}/> 
      <Route path='/createpurchase' element={<CreatePurchase/>}/>
     </Routes>
    </>
    )}
</>
  )
}

export default App
