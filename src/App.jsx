import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Pages/Auth/SignUp'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App